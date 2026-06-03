#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://ai.gamewayz.com";
const DATA_FILE = path.resolve(__dirname, "../src/data/aiData.ts");

function extractIds(exportName) {
  const content = fs.readFileSync(DATA_FILE, "utf-8");
  const match = content.match(new RegExp(`export const ${exportName}:.*?\\[([\\s\\S]*?)\\];`));
  if (!match) return [];
  const entries = match[1].match(/\{\s*id:\s*"([^"]+)"/g);
  if (!entries) return [];
  return entries.map(e => e.match(/id:\s*"([^"]+)"/)[1]);
}

const ids = {
  news: extractIds("newsData"),
  github: extractIds("githubProjects"),
  tools: extractIds("aiTools"),
  trends: extractIds("aiTrends"),
};

console.log(`  新闻: ${ids.news.length} 篇`);
console.log(`  GitHub: ${ids.github.length} 个项目`);
console.log(`  工具: ${ids.tools.length} 个`);
console.log(`  趋势: ${ids.trends.length} 条\n`);

const urls = [
  { loc: "/", priority: "1.0" },
  { loc: "/news", priority: "0.9" },
  ...ids.news.map((id) => ({ loc: `/news/${id}`, priority: "0.7" })),
  { loc: "/github", priority: "0.9" },
  ...ids.github.map((id) => ({ loc: `/github/${id}`, priority: "0.7" })),
  { loc: "/tools", priority: "0.9" },
  ...ids.tools.map((id) => ({ loc: `/tools/${id}`, priority: "0.7" })),
  { loc: "/trends", priority: "0.9" },
  ...ids.trends.map((id) => ({ loc: `/trends/${id}`, priority: "0.7" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <changefreq>daily</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

const outDir = path.resolve(__dirname, "../dist");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml, "utf-8");
console.log(`sitemap.xml generated with ${urls.length} URLs`);
