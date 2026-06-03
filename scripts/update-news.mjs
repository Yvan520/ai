#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.resolve(__dirname, "../src/data/aiData.ts");

const AI_KEYWORDS = [
  "ai", "artificial intelligence", "machine learning", "deep learning",
  "llm", "gpt", "claude", "gemini", "openai", "anthropic", "copilot",
  "neural", "transformer", "diffusion", "rag", "agent", "chatgpt",
  "llama", "mistral", "deepseek", "stable diffusion", "midjourney",
  "pytorch", "tensorflow", "hugging face", "langchain",
];

function isAIRelated(title, text) {
  const t = `${title} ${text || ""}`.toLowerCase();
  return AI_KEYWORDS.some(k => t.includes(k));
}

function classifyNews(title, text) {
  const t = `${title} ${text || ""}`.toLowerCase();
  if (t.includes("gpt") || t.includes("openai") || t.includes("llm") || t.includes("language model")) return "大模型";
  if (t.includes("agent") || t.includes("autonomous") || t.includes("tool use")) return "AI Agent";
  if (t.includes("open source") || t.includes("llama") || t.includes("mistral") || t.includes("deepseek")) return "开源模型";
  if (t.includes("image") || t.includes("diffusion") || t.includes("midjourney") || t.includes("stable")) return "AI绘图";
  if (t.includes("video") || t.includes("runway") || t.includes("sora") || t.includes("gen")) return "AI视频";
  if (t.includes("code") || t.includes("programming") || t.includes("cursor") || t.includes("copilot")) return "AI应用";
  if (t.includes("research") || t.includes("paper") || t.includes("science") || t.includes("discovery")) return "科研突破";
  if (t.includes("regulation") || t.includes("policy") || t.includes("act") || t.includes("law")) return "AI政策";
  return "大模型";
}

function fmtDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function todayDate() {
  return fmtDate(new Date());
}

async function fetchHNStories() {
  const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
  if (!res.ok) throw new Error(`HN API error: ${res.status}`);
  const ids = await res.json();
  const batch = ids.slice(0, 80);

  const stories = [];
  for (const id of batch) {
    try {
      const sr = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      if (!sr.ok) continue;
      const item = await sr.json();
      if (item && item.title && item.url && isAIRelated(item.title, item.text || "")) {
        stories.push(item);
      }
    } catch {}
  }
  return stories;
}

async function fetchTechCrunchAI() {
  const res = await fetch("https://techcrunch.com/category/artificial-intelligence/feed/");
  if (!res.ok) return [];
  const xml = await res.text();

  const items = [];
  const titleRegex = /<title[^>]*>([^<]+)<\/title>/gi;
  const linkRegex = /<link[^>]*>([^<]+)<\/link>/gi;
  const descRegex = /<description[^>]*>([^<]*)<\/description>/gi;

  const titles = [...xml.matchAll(titleRegex)].slice(1, 16).map(m => m[1]);
  const links = [...xml.matchAll(linkRegex)].slice(1, 16).map(m => m[1]);
  const descs = [...xml.matchAll(descRegex)].slice(1, 16).map(m => m[1].replace(/<[^>]+>/g, "").slice(0, 200));

  for (let i = 0; i < titles.length; i++) {
    if (isAIRelated(titles[i], descs[i] || "")) {
      items.push({
        title: titles[i].replace(/<!\[CDATA\[|\]\]>/g, "").trim(),
        url: links[i] || "",
        summary: (descs[i] || "").replace(/<!\[CDATA\[|\]\]>/g, "").trim(),
      });
    }
  }
  return items;
}

async function fetchArxivPapers() {
  const cat = "cat:cs.AI+OR+cat:cs.CL+OR+cat:cs.LG";
  const url = `https://export.arxiv.org/api/query?search_query=${cat}&sortBy=submittedDate&sortOrder=descending&max_results=20`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const xml = await res.text();

  const entries = xml.split("<entry>").slice(1);
  const results = [];

  for (const entry of entries) {
    const title = (entry.match(/<title[^>]*>([^<]+)<\/title>/) || [])[1]?.trim() || "";
    const summary = (entry.match(/<summary[^>]*>([^<]+)<\/summary>/) || [])[1]?.trim() || "";
    const link = (entry.match(/<id[^>]*>([^<]+)<\/id>/) || [])[1]?.trim() || "";
    const published = (entry.match(/<published[^>]*>([^<]+)<\/published>/) || [])[1]?.trim() || "";

    if (title && isAIRelated(title, summary)) {
      results.push({
        title: title.replace(/\s+/g, " "),
        url: link,
        summary: summary.replace(/\s+/g, " ").slice(0, 300),
        date: published.slice(0, 10),
      });
    }
  }
  return results;
}

function deduplicate(items) {
  const seen = new Set();
  return items.filter(item => {
    const key = item.title.toLowerCase().slice(0, 40);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function generateNewsCode(news) {
  const t = todayDate();
  const entries = news.map((item, i) => {
    const title = item.title.replace(/"/g, '\\"');
    const summary = (item.summary || "").slice(0, 150).replace(/"/g, '\\"');
    const cat = classifyNews(title, summary);
    const source = item.url?.includes("techcrunch") ? "TechCrunch" : item.url?.includes("arxiv") ? "Arxiv" : "Hacker News";
    const tags = [];
    if (title.toLowerCase().includes("gpt")) tags.push("GPT");
    if (title.toLowerCase().includes("openai")) tags.push("OpenAI");
    if (title.toLowerCase().includes("llm") || title.toLowerCase().includes("language")) tags.push("LLM");
    if (title.toLowerCase().includes("agent")) tags.push("Agent");
    if (title.toLowerCase().includes("open source") || title.toLowerCase().includes("llama")) tags.push("开源");
    if (title.toLowerCase().includes("code") || title.toLowerCase().includes("program")) tags.push("编程");
    if (tags.length === 0) tags.push("AI");
    return `  {
    id: "${String(Date.now())}-${i}",
    title: "${title}",
    summary: "${summary}",
    content: "${summary}",
    source: "${source}",
    sourceUrl: "${item.url || "https://news.ycombinator.com"}",
    category: "${cat}",
    date: "${t}",
    readTime: "${Math.max(2, Math.ceil((summary.length || 80) / 80))} 分钟",
    tags: ${JSON.stringify(tags)},
  }`;
  });
  return entries.join(",\n");
}

async function main() {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  AI Universe 新闻更新脚本");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  const allNews = [];

  console.log("📡 抓取 Hacker News...");
  const hnStories = await fetchHNStories();
  for (const s of hnStories) {
    allNews.push({ title: s.title, url: s.url || "", summary: s.text || "" });
  }
  console.log(`  → ${hnStories.length} 条 AI 相关`);

  console.log("📡 抓取 TechCrunch AI 频道...");
  const tcItems = await fetchTechCrunchAI();
  for (const item of tcItems) {
    allNews.push(item);
  }
  console.log(`  → ${tcItems.length} 条 AI 相关`);

  console.log("📡 抓取 Arxiv 最新 AI 论文...");
  const arxivPapers = await fetchArxivPapers();
  for (const p of arxivPapers) {
    allNews.push(p);
  }
  console.log(`  → ${arxivPapers.length} 篇论文`);

  const news = deduplicate(allNews).slice(0, 20);
  console.log(`\n📰 去重后: ${news.length} 条\n`);

  if (news.length === 0) {
    console.log("⚠️ 未获取到新闻，保留现有数据");
    return;
  }

  const code = generateNewsCode(news);
  const replacement = `export const newsData: NewsItem[] = [\n${code}\n];\n`;

  const content = fs.readFileSync(DATA_FILE, "utf-8");
  const updated = content.replace(
    /export const newsData: NewsItem\[\] = \[[\s\S]*?\];/,
    replacement
  );
  fs.writeFileSync(DATA_FILE, updated);

  console.log("✅ src/data/aiData.ts 已更新\n");
  console.log("📰 TOP 5:");
  news.slice(0, 5).forEach(n => console.log(`  • ${n.title.slice(0, 60)}`));
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

main().catch(err => {
  console.error("\n❌ 脚本失败:", err.message);
  process.exit(1);
});
