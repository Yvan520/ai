#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.resolve(__dirname, "../src/data/aiData.ts");

const TOKEN = process.env.GH_TOKEN || "";
const HEADERS = TOKEN
  ? { Authorization: `token ${TOKEN}`, Accept: "application/vnd.github.v3+json" }
  : { Accept: "application/vnd.github.v3+json" };

const LANG_COLORS = {
  Python: "#3572A5", TypeScript: "#3178C6", Go: "#00ADD8",
  Rust: "#dea584", Svelte: "#FF3E00", JavaScript: "#f1e05a",
  "C++": "#f34b7d", Java: "#b07219", Shell: "#89e051",
  Jupyter: "#DA5B0B", "C#": "#178600", Kotlin: "#A97BFF",
  Swift: "#FFAC45", Ruby: "#701516",
};

const KEYWORD_MAP = [
  { cat: "本地部署", keywords: ["ollama", "local-llm", "llama.cpp", "whisper.cpp", "localai"] },
  { cat: "开发平台", keywords: ["dify", "langflow", "flowise", "bisheng"] },
  { cat: "AI Agent", keywords: ["autogpt", "agent", "crewai", "pocketflow", "superagent"] },
  { cat: "开发框架", keywords: ["langchain", "llamaindex", "semantic-kernel", "haystack"] },
  { cat: "RAG", keywords: ["ragflow", "rag", "qdrant", "milvus", "weaviate"] },
  { cat: "AI编程", keywords: ["claude-code", "continue", "tabby", "aider"] },
  { cat: "推理引擎", keywords: ["vllm", "triton", "tgi", "ollama"] },
  { cat: "AI绘图", keywords: ["comfyui", "stable-diffusion", "invokeai", "fooocus"] },
  { cat: "资源合集", keywords: ["awesome-llm", "awesome-ai", "awesome-generative"] },
  { cat: "AI自动化", keywords: ["n8n", "temporal", "airflow"] },
  { cat: "AI界面", keywords: ["open-webui", "lobe-chat", "nextchat", "chatgpt-next-web"] },
];

function fmtStars(n) {
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "K";
  return String(n);
}

function matchCategory(name, desc, topics) {
  const text = `${name} ${desc} ${(topics || []).join(" ")}`.toLowerCase();
  for (const entry of KEYWORD_MAP) {
    if (entry.keywords.some(k => text.includes(k.toLowerCase()))) return entry.cat;
  }
  for (const entry of KEYWORD_MAP) {
    if (entry.keywords.some(k => name.toLowerCase().includes(k.toLowerCase()))) return entry.cat;
  }
  return "AI Agent";
}

async function fetchTrending() {
  const all = [];
  const seen = new Set();
  const queries = [
    "ai llm deep-learning stars:>8000 pushed:>2025-01-01",
    "machine-learning llm stars:>15000 pushed:>2025-01-01",
    "artificial-intelligence generative stars:>5000 pushed:>2025-01-01",
  ];

  for (const q of queries) {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=25`;
    const res = await fetch(url, { headers: HEADERS });
    if (!res.ok) {
      console.warn(`  ⚠ ${res.status}: ${q.slice(0, 40)}`);
      continue;
    }
    const data = await res.json();
    for (const r of data.items || []) {
      if (seen.has(r.full_name)) continue;
      seen.add(r.full_name);
      all.push(r);
    }
  }
  return all;
}

function categorizeAndBuild(repos) {
  const grouped = {};

  for (const r of repos) {
    const cat = matchCategory(r.name, r.description || "", r.topics);
    if (!grouped[cat]) grouped[cat] = [];
    if (grouped[cat].length >= 4) continue;
    grouped[cat].push(r);
  }

  const projects = [];
  for (const [cat, items] of Object.entries(grouped)) {
    items.sort((a, b) => b.stargazers_count - a.stargazers_count);
    items.forEach((r, i) => {
      projects.push({
        id: `${Date.now()}-${projects.length}`,
        name: r.name,
        fullName: r.full_name,
        description: (r.description || "").replace(/"/g, '\\"'),
        stars: fmtStars(r.stargazers_count),
        starsRaw: r.stargazers_count,
        forks: fmtStars(r.forks_count),
        language: r.language || "Unknown",
        languageColor: LANG_COLORS[r.language] || "#6e7681",
        url: r.html_url,
        category: cat,
        trend: `+${Math.max(100, (r.stargazers_count / 50).toFixed(0))}`,
        tags: (r.topics || []).slice(0, 3),
        weekly: i < 2,
      });
    });
  }

  return projects.sort((a, b) => b.starsRaw - a.starsRaw);
}

function generateProjectCode(projects) {
  const entries = projects.map(p => {
    const tags = JSON.stringify(p.tags);
    return `  {
    id: "${p.id}",
    name: "${p.name}",
    fullName: "${p.fullName}",
    description: "${p.description}",
    stars: "${p.stars}",
    starsRaw: ${p.starsRaw},
    forks: "${p.forks}",
    language: "${p.language}",
    languageColor: "${p.languageColor}",
    url: "${p.url}",
    category: "${p.category}",
    trend: "${p.trend}",
    tags: ${tags},
    weekly: ${p.weekly},
  }`;
  });
  return `export const githubProjects: GitHubProject[] = [\n${entries.join(",\n")}\n];\n`;
}

async function main() {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  AI Universe 内容更新脚本");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`  Token: ${TOKEN ? "✅ 已配置" : "❌ 未配置（速率低）"}`);
  console.log(`\n📡 抓取 GitHub 热门 AI 项目...`);

  const repos = await fetchTrending();
  if (repos.length === 0) {
    console.log("\n❌ 未获取到数据，保留现有数据");
    return;
  }
  console.log(`  原始抓取: ${repos.length} 个仓库`);

  const projects = categorizeAndBuild(repos);
  console.log(`  分类整理: ${projects.length} 个项目（${new Set(projects.map(p => p.category)).size} 类）\n`);

  const content = fs.readFileSync(DATA_FILE, "utf-8");
  const updated = content.replace(
    /export const githubProjects: GitHubProject\[\] = \[[\s\S]*?\];/,
    generateProjectCode(projects)
  );
  fs.writeFileSync(DATA_FILE, updated);

  console.log("✅ src/data/aiData.ts 已更新\n");

  const top3 = projects.sort((a, b) => b.starsRaw - a.starsRaw).slice(0, 3);
  console.log("🏆 TOP 3:");
  top3.forEach((p, i) => console.log(`  ${i + 1}. ${p.fullName} ⭐ ${p.stars} [${p.category}]`));
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

main().catch(err => {
  console.error("\n❌ 脚本失败:", err.message);
  process.exit(1);
});
