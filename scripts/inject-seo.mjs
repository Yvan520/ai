#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.resolve(__dirname, "../src/data/aiData.ts");
const HTML_FILE = path.resolve(__dirname, "../index.html");
const SITE_URL = "https://ai.gamewayz.com";

function extractItems(exportName, fields) {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  const match = raw.match(new RegExp(`export const ${exportName}:.*?\\[([\\s\\S]*?)\\];`));
  if (!match) return [];
  const items = [];
  const blocks = match[1].match(/\{[\s\S]*?\}(?=\s*,\s*\{|\s*\];)/g) || [];
  for (const block of blocks) {
    const obj = {};
    for (const f of fields) {
      const m = block.match(new RegExp(`${f}:\\s*"([^"]*)"`));
      obj[f] = m ? m[1].replace(/\\\\n/g, " ") : "";
    }
    items.push(obj);
  }
  return items;
}

function esc(str) {
  return (str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function main() {
  const news = extractItems("newsData", ["id", "title", "summary", "source", "date"]);
  const tools = extractItems("aiTools", ["id", "name", "description", "category"]);
  const trends = extractItems("aiTrends", ["id", "title", "description", "stats"]);
  const github = extractItems("githubProjects", ["id", "name", "description", "stars", "category"]);

  const articleItems = news.slice(0, 8).map(n => ({
    "@type": "NewsArticle",
    headline: n.title,
    description: n.summary.slice(0, 200),
    datePublished: n.date,
    url: `${SITE_URL}/news/${n.id}`,
  }));

  // --- JSON-LD ---
  const jsonld = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: "AI Universe", url: SITE_URL, description: "聚合全球 AI 新闻资讯，追踪 GitHub 热门项目，探索最新 AI 工具，洞察人工智能未来发展趋势", inLanguage: "zh-CN" },
      { "@type": "Organization", name: "AI Universe", url: SITE_URL },
      ...(articleItems.length > 0 ? [{
        "@type": "ItemList",
        itemListElement: articleItems.map((a, i) => ({ "@type": "ListItem", position: i + 1, item: a })),
      }] : []),
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "首页", item: SITE_URL }] },
    ],
  }, null, 2);

  // --- Static HTML content for crawlers ---
  const newsHtml = news.slice(0, 27).map(n =>
    `<article><h3><a href="${SITE_URL}/news/${n.id}">${esc(n.title)}</a></h3><p><time>${n.date}</time> — ${esc(n.summary.slice(0, 300))}</p></article>`
  ).join("\n      ");

  const githubHtml = github.slice(0, 12).map(g =>
    `<li><a href="${SITE_URL}/github">${esc(g.name)}</a> ⭐ ${esc(g.stars)} — ${esc(g.description.slice(0, 80))}</li>`
  ).join("\n      ");

  const toolsHtml = tools.slice(0, 8).map(t =>
    `<li><strong>${esc(t.name)}</strong> [${esc(t.category)}]: ${esc(t.description.slice(0, 80))}</li>`
  ).join("\n      ");

  const trendsHtml = trends.slice(0, 8).map(t =>
    `<li><strong>${esc(t.title)}</strong> (${esc(t.stats)}): ${esc(t.description.slice(0, 80))}</li>`
  ).join("\n      ");

  const staticContent = `
    <h1>AI Universe · 人工智能情报站</h1>
    <p>聚合全球 AI 新闻资讯，追踪 GitHub 热门项目，探索最新 AI 工具，洞察人工智能未来发展趋势</p>
    <h2>最新 AI 新闻</h2>
    ${newsHtml}
    <h2>热门 GitHub 项目</h2>
    <ul>${githubHtml}</ul>
    <h2>AI 工具推荐</h2>
    <ul>${toolsHtml}</ul>
    <h2>AI 发展趋势</h2>
    <ul>${trendsHtml}</ul>
    <p><a href="${SITE_URL}">查看更多 →</a></p>
  `.replace(/>\s+</g, "><").trim();

  const rootHtml = `<div id="root"><div class="seo-content" style="max-width:960px;margin:0 auto;padding:32px 20px;font-family:-apple-system,sans-serif;line-height:1.6;color:#222">${staticContent}</div></div>`;

  let html = fs.readFileSync(HTML_FILE, "utf-8");

  // Inject JSON-LD
  const jsonldTag = `\n    <script type="application/ld+json">${jsonld}</script>`;
  if (html.includes("application/ld+json")) {
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, jsonldTag);
  } else {
    html = html.replace("</head>", `${jsonldTag}</head>`);
  }

  // Replace <div id="root"> with static content version
  html = html.replace(
    /<div id="root"><\/div>/,
    () => rootHtml
  );

  fs.writeFileSync(HTML_FILE, html);
  console.log(`✅ SEO 增强完成`);
  console.log(`   JSON-LD: ${articleItems.length} 条结构化数据`);
  console.log(`   静态内容: ${news.length} 新闻 + ${github.length} 项目 + ${tools.length} 工具 + ${trends.length} 趋势`);
}

main();
