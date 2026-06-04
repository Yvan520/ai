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
      obj[f] = m ? m[1] : "";
    }
    items.push(obj);
  }
  return items;
}

function escapeJson(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function main() {
  const news = extractItems("newsData", ["id", "title", "summary", "date"]);
  const tools = extractItems("aiTools", ["id", "name", "description"]);
  const trends = extractItems("aiTrends", ["id", "title", "description"]);
  const github = extractItems("githubProjects", ["id", "name", "description"]);

  const articleList = news.slice(0, 8).map(n => ({
    "@type": "NewsArticle",
    headline: n.title,
    description: n.summary,
    datePublished: n.date,
    url: `${SITE_URL}/news/${n.id}`,
  }));

  const itemList = [...news.slice(0, 5), ...tools.slice(0, 5)].map(item => {
    const name = item.title || item.name;
    const desc = item.summary || item.description || "";
    return `<li><a href="${SITE_URL}">${escapeJson(name)}</a> — ${escapeJson(desc.slice(0, 100))}</li>`;
  }).join("\n    ");

  const jsonld = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "AI Universe",
        url: SITE_URL,
        description: "聚合全球 AI 新闻资讯，追踪 GitHub 热门项目，探索最新 AI 工具，洞察人工智能未来发展趋势",
        inLanguage: "zh-CN",
      },
      {
        "@type": "Organization",
        name: "AI Universe",
        url: SITE_URL,
      },
      ...(articleList.length > 0 ? [{
        "@type": "ItemList",
        itemListElement: articleList.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: a,
        })),
      }] : []),
    ],
  }, null, 2);

  const noscriptHtml = `<noscript>
  <div style="padding:40px;max-width:800px;margin:0 auto;font-family:sans-serif;color:#333">
    <h1>AI Universe · 人工智能情报站</h1>
    <p>聚合全球 AI 新闻资讯，追踪 GitHub 热门项目，探索最新 AI 工具</p>
    <h2>最新 AI 新闻</h2>
    <ul>
    ${itemList}
    </ul>
    <p><a href="${SITE_URL}">访问 AI Universe</a></p>
  </div>
</noscript>`;

  let html = fs.readFileSync(HTML_FILE, "utf-8");

  const jsonldTag = `\n    <script type="application/ld+json">${jsonld}</script>`;

  if (html.includes("application/ld+json")) {
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, jsonldTag);
  } else {
    html = html.replace("</head>", `${jsonldTag}</head>`);
  }

  if (html.includes("<noscript>")) {
    html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptHtml);
  } else {
    html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscriptHtml}`);
  }

  fs.writeFileSync(HTML_FILE, html);
  console.log(`✅ index.html 已注入 SEO 增强内容`);
  console.log(`   JSON-LD: ${articleList.length} 条文章`);
  console.log(`   <noscript>: 爬虫可见内容已添加`);
}

main();
