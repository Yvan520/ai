#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://ai.gamewayz.com";

const newsIds = Array.from({ length: 12 }, (_, i) => String(i + 1));
const githubIds = Array.from({ length: 12 }, (_, i) => String(i + 1));
const toolIds = Array.from({ length: 12 }, (_, i) => String(i + 1));
const trendIds = Array.from({ length: 6 }, (_, i) => String(i + 1));

const urls = [
  { loc: "/", priority: "1.0" },
  { loc: "/news", priority: "0.9" },
  ...newsIds.map((id) => ({ loc: `/news/${id}`, priority: "0.7" })),
  { loc: "/github", priority: "0.9" },
  ...githubIds.map((id) => ({ loc: `/github/${id}`, priority: "0.7" })),
  { loc: "/tools", priority: "0.9" },
  ...toolIds.map((id) => ({ loc: `/tools/${id}`, priority: "0.7" })),
  { loc: "/trends", priority: "0.9" },
  ...trendIds.map((id) => ({ loc: `/trends/${id}`, priority: "0.7" })),
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
