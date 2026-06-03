export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  sourceUrl: string;
  category: string;
  date: string;
  readTime: string;
  hot?: boolean;
  tags: string[];
}

export interface GitHubProject {
  id: string;
  name: string;
  fullName: string;
  description: string;
  content?: string;
  stars: string;
  starsRaw: number;
  forks: string;
  language: string;
  languageColor: string;
  url: string;
  category: string;
  trend: string;
  tags: string[];
  weekly?: boolean;
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  content: string;
  category: string;
  url: string;
  logo: string;
  tags: string[];
  isNew?: boolean;
  isFree?: boolean;
}

export interface AITrend {
  id: string;
  title: string;
  description: string;
  content: string;
  icon: string;
  color: string;
  stats: string;
  growth: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1780491718847-0",
    title: "Turkey Hacked the Hair Transplant Industry",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://www.wired.com/story/how-turkey-hacked-the-hair-transplant-industry/",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718847-1",
    title: "MAI-Code-1-Flash",
    summary: "<a href=\"https:&#x2F;&#x2F;microsoft.ai&#x2F;models&#x2F;mai-code-1-flash&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;microsoft.ai&#x2F;models&#x2F;mai-co",
    content: "<a href=\"https:&#x2F;&#x2F;microsoft.ai&#x2F;models&#x2F;mai-code-1-flash&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;microsoft.ai&#x2F;models&#x2F;mai-co",
    source: "Hacker News",
    sourceUrl: "https://microsoft.ai/news/introducingmai-code-1-flash/",
    category: "AI应用",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["编程"],
  },
  {
    id: "1780491718847-2",
    title: "Leiden Declaration on Artificial Intelligence and Mathematics",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://leidendeclaration.ai/",
    category: "AI视频",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718847-3",
    title: "AI outperforms law professors in Stanford Law study",
    summary: "<a href=\"https:&#x2F;&#x2F;law.stanford.edu&#x2F;wp-content&#x2F;uploads&#x2F;2026&#x2F;06&#x2F;salinas_et_al.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;la",
    content: "<a href=\"https:&#x2F;&#x2F;law.stanford.edu&#x2F;wp-content&#x2F;uploads&#x2F;2026&#x2F;06&#x2F;salinas_et_al.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;la",
    source: "Hacker News",
    sourceUrl: "https://law.stanford.edu/press/ai-outperforms-law-professors-in-stanford-law-study/",
    category: "AI政策",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718847-4",
    title: "DIY Bipedal Robot Used Pneumatic \"Air-Muscles\" Instead of Motors",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://spectrum.ieee.org/shadow-walker-biped-humanoid-robot",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718847-5",
    title: "U of T researchers demonstrate AI worm could target any online device",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://www.utoronto.ca/news/u-t-researchers-demonstrate-ai-worm-could-target-any-online-device",
    category: "科研突破",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-6",
    title: "Gmail thinks I'm stupid, so I left",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://moddedbear.com/gmail-thinks-im-stupid-so-i-left",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-7",
    title: "How we index images for RAG",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://www.kapa.ai/blog/how-we-index-images-for-rag",
    category: "AI绘图",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-8",
    title: "Open Repair Data Standard",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://openrepair.org/open-data/open-standard/",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-9",
    title: "Trump signs downsized AI order after weeks of reversals",
    summary: "<a href=\"https:&#x2F;&#x2F;www.whitehouse.gov&#x2F;presidential-actions&#x2F;2026&#x2F;06&#x2F;promoting-advanced-artificial-intelligence-innovation-a",
    content: "<a href=\"https:&#x2F;&#x2F;www.whitehouse.gov&#x2F;presidential-actions&#x2F;2026&#x2F;06&#x2F;promoting-advanced-artificial-intelligence-innovation-a",
    source: "Hacker News",
    sourceUrl: "https://www.politico.com/news/2026/06/02/trump-signs-downsized-ai-order-00946389",
    category: "AI视频",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-10",
    title: "32GB of DDR5 now costs $375 – AI shortage continues to squeeze PC building",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://www.tomshardware.com/pc-components/ddr5/32gb-of-ddr5-now-costs-usd375-minimum-ai-shortage-continues-to-squeeze-pc-building",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-11",
    title: "Show HN: Phive, a Gomoku-like game to play with friends or solo",
    summary: "In 2025, my family and I had a long streak of playing a Gomoku &#x2F; Go Bang &#x2F; five-in-a-row based game called OK Play. I built a web version so",
    content: "In 2025, my family and I had a long streak of playing a Gomoku &#x2F; Go Bang &#x2F; five-in-a-row based game called OK Play. I built a web version so",
    source: "Hacker News",
    sourceUrl: "https://phive.app",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-12",
    title: "The newest Instagram “exploit” is the goofiest I've seen",
    summary: "<a href=\"https:&#x2F;&#x2F;krebsonsecurity.com&#x2F;2026&#x2F;06&#x2F;hackers-used-metas-ai-support-bot-to-seize-instagram-accounts&#x2F;\" rel=\"nofoll",
    content: "<a href=\"https:&#x2F;&#x2F;krebsonsecurity.com&#x2F;2026&#x2F;06&#x2F;hackers-used-metas-ai-support-bot-to-seize-instagram-accounts&#x2F;\" rel=\"nofoll",
    source: "Hacker News",
    sourceUrl: "https://www.0xsid.com/blog/meta-account-takeover-fiasco",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-13",
    title: "Adafruit receives demand letter from Fenwick legal counsel on behalf of Flux.ai",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://blog.adafruit.com/",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-14",
    title: "Bringing Up DeepSeek-V4-Flash on AMD MI300X",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://fergusfinn.com/blog/deepseek-v4-flash-mi300x/",
    category: "开源模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-15",
    title: "GitHub Copilot App",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://github.com/features/preview/github-app",
    category: "AI应用",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-16",
    title: "Show HN: RePlaya – self-hosted browser session replay with live tailing",
    summary: "Hi HN, I&#x27;m one of the founders of s2.dev. RePlaya (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;s2-streamstore&#x2F;replaya\" rel=\"nofollow\">https:&",
    content: "Hi HN, I&#x27;m one of the founders of s2.dev. RePlaya (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;s2-streamstore&#x2F;replaya\" rel=\"nofollow\">https:&",
    source: "Hacker News",
    sourceUrl: "https://github.com/s2-streamstore/replaya",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-17",
    title: "Mathematicians issue warning as AI rapidly gains ground",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://www.science.org/content/article/mathematicians-issue-warning-ai-rapidly-gains-ground",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  },
  {
    id: "1780491718848-18",
    title: "Can the stockmarket swallow Anthropic, SpaceX and OpenAI?",
    summary: "<a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;nKEVw\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;nKEVw</a>",
    content: "<a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;nKEVw\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;nKEVw</a>",
    source: "Hacker News",
    sourceUrl: "https://www.economist.com/finance-and-economics/2026/06/01/can-the-stockmarket-swallow-anthropic-spacex-and-openai",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["OpenAI"],
  },
  {
    id: "1780491718848-19",
    title: "Rsync and outrage",
    summary: "",
    content: "",
    source: "Hacker News",
    sourceUrl: "https://medium.com/@tridge60/rsync-and-outrage-d9849599e5a0",
    category: "大模型",
    date: "2026-06-03",
    readTime: "2 分钟",
    tags: ["AI"],
  }
];


export const githubProjects: GitHubProject[] = [
  {
    id: "1780491673872-0",
    name: "LLMs-from-scratch",
    fullName: "rasbt/LLMs-from-scratch",
    description: "Implement a ChatGPT-like LLM in PyTorch from scratch, step by step",
    stars: "97K",
    starsRaw: 96561,
    forks: "15K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/rasbt/LLMs-from-scratch",
    category: "AI Agent",
    trend: "+1931",
    tags: ["ai","artificial-intelligence","attention-mechanism"],
    weekly: true,
  },
  {
    id: "1780491673872-5",
    name: "llm-app",
    fullName: "pathwaycom/llm-app",
    description: "Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. 🐳Docker-friendly.⚡Always in sync with Sharepoint, Google Drive, S3, Kafka, PostgreSQL, real-time data APIs, and more.",
    stars: "59K",
    starsRaw: 59461,
    forks: "1.4K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/pathwaycom/llm-app",
    category: "RAG",
    trend: "+1189",
    tags: ["chatbot","hugging-face","llm"],
    weekly: true,
  },
  {
    id: "1780491673872-1",
    name: "ray",
    fullName: "ray-project/ray",
    description: "Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accelerating ML workloads.",
    stars: "43K",
    starsRaw: 42759,
    forks: "7.6K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/ray-project/ray",
    category: "AI Agent",
    trend: "+855",
    tags: ["data-science","deep-learning","deployment"],
    weekly: true,
  },
  {
    id: "1780491673872-4",
    name: "system_prompts_leaks",
    fullName: "asgeirtj/system_prompts_leaks",
    description: "Extracted system prompts from Anthropic - Opus 4.7, Opus 4.6, Sonnet 4.6. OpenAI - ChatGPT 5.5 Thinking, GPT 5.5 Instant, Codex. Google Gemini - 3.5 Flash, 3.1 Pro, 3 Flash, Antigravity. xAI - Grok. Github Copilot. Perplexity, and more. Updated regularly.",
    stars: "41K",
    starsRaw: 41191,
    forks: "6.8K",
    language: "Unknown",
    languageColor: "#6e7681",
    url: "https://github.com/asgeirtj/system_prompts_leaks",
    category: "AI编程",
    trend: "+824",
    tags: ["ai","anthropic","awesome"],
    weekly: true,
  },
  {
    id: "1780491673872-2",
    name: "ai-engineering-from-scratch",
    fullName: "rohitg00/ai-engineering-from-scratch",
    description: "Learn it. Build it. Ship it for others.",
    stars: "28K",
    starsRaw: 27699,
    forks: "4.5K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/rohitg00/ai-engineering-from-scratch",
    category: "AI Agent",
    trend: "+554",
    tags: ["agents","ai","ai-agents"],
    weekly: false,
  },
  {
    id: "1780491673872-3",
    name: "datasets",
    fullName: "huggingface/datasets",
    description: "🤗 The largest hub of ready-to-use datasets for AI models with fast, easy-to-use and efficient data manipulation tools",
    stars: "22K",
    starsRaw: 21574,
    forks: "3.2K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/huggingface/datasets",
    category: "AI Agent",
    trend: "+431",
    tags: ["ai","artificial-intelligence","computer-vision"],
    weekly: false,
  },
  {
    id: "1780491673872-7",
    name: "llama-cookbook",
    fullName: "meta-llama/llama-cookbook",
    description: "Welcome to the Llama Cookbook! This is your go to guide for Building with Llama: Getting started with Inference, Fine-Tuning, RAG. We also show you how to solve end to end problems using Llama model family and using them on various provider services  ",
    stars: "18K",
    starsRaw: 18340,
    forks: "2.7K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/meta-llama/llama-cookbook",
    category: "开发框架",
    trend: "+367",
    tags: ["ai","finetuning","langchain"],
    weekly: true,
  },
  {
    id: "1780491673872-6",
    name: "ml-engineering",
    fullName: "stas00/ml-engineering",
    description: "Machine Learning Engineering Open Book",
    stars: "18K",
    starsRaw: 18042,
    forks: "1.1K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/stas00/ml-engineering",
    category: "RAG",
    trend: "+361",
    tags: ["ai","debugging","gpus"],
    weekly: true,
  },
  {
    id: "1780491673872-8",
    name: "awesome-generative-ai",
    fullName: "steven2358/awesome-generative-ai",
    description: "A curated list of modern Generative Artificial Intelligence projects and services",
    stars: "12K",
    starsRaw: 12105,
    forks: "1.7K",
    language: "Unknown",
    languageColor: "#6e7681",
    url: "https://github.com/steven2358/awesome-generative-ai",
    category: "资源合集",
    trend: "+242",
    tags: ["ai","artificial-intelligence","awesome"],
    weekly: true,
  },
  {
    id: "1780491673872-9",
    name: "kserve",
    fullName: "kserve/kserve",
    description: "Standardized Distributed Generative and Predictive AI Inference Platform for Scalable, Multi-Framework Deployment on Kubernetes",
    stars: "5.5K",
    starsRaw: 5537,
    forks: "1.5K",
    language: "Go",
    languageColor: "#00ADD8",
    url: "https://github.com/kserve/kserve",
    category: "推理引擎",
    trend: "+111",
    tags: ["artificial-intelligence","cncf","genai"],
    weekly: true,
  }
];



export const aiTools: AITool[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: "OpenAI 旗舰对话 AI，GPT-4o 支持多模态输入输出",
    content: "ChatGPT 是 OpenAI 开发的旗舰对话式 AI 产品，自2022年底发布以来已成为全球用户量最大的 AI 应用。最新版本基于 GPT-4o 模型，支持文本、图像、音频的混合输入和输出。\n\n核心功能包括：多模态对话（上传图片进行分析）、代码生成与调试、文章写作与润色、数据分析、文件处理（PDF/Word/Excel）。付费版本 ChatGPT Plus 提供更快的响应速度和优先访问新功能的权限。\n\nChatGPT 的优势在于生态系统成熟，拥有大量第三方插件和 GPTs 自定义应用。适合需要通用 AI 助手的个人用户和团队。",
    category: "对话AI",
    url: "https://chat.openai.com",
    logo: "🤖",
    tags: ["对话", "写作", "代码"],
    isFree: true
  },
  {
    id: "2",
    name: "Claude",
    description: "Anthropic 出品，长上下文处理能力最强的 AI 助手",
    content: "Claude 是 Anthropic 开发的 AI 助手系列，以其超长上下文窗口（Claude 3.5 支持 200K tokens）和出色的安全对齐技术著称。Claude 在深度分析、长文档处理、代码理解等场景表现尤为突出。\n\nClaude 3.5 Sonnet 在 SWE-bench 软件工程基准测试中以 49% 的成绩领先所有同类模型。Claude Code 是 Anthropic 推出的终端 AI 编程工具，可以理解完整代码库并执行复杂多文件修改。\n\nArtifacts 功能允许 Claude 实时生成和预览代码、文档、图表等内容，极大提升了交互效率。适合需要深度分析能力、注重 AI 安全的专业用户。",
    category: "对话AI",
    url: "https://claude.ai",
    logo: "🎭",
    tags: ["对话", "分析", "写作"],
    isFree: true
  },
  {
    id: "3",
    name: "Midjourney",
    description: "顶级 AI 图像生成工具，艺术风格独特，质量业界领先",
    content: "Midjourney 是目前公认的 AI 图像生成质量最高的工具之一，以其独特的艺术风格和对细节的精准控制而闻名。通过 Discord 平台提供服务，用户通过文本描述即可生成高分辨率图像。\n\n核心特色包括：风格一致性极强、色彩运用出色、构图合理、支持垫图（Image Prompt）和参数精细调节。最新版本支持角色一致性、风格参考和局部重绘功能。\n\n适合需要高质量视觉创作的设计师、艺术家和创意团队。付费订阅制，按生成量计费。",
    category: "图像生成",
    url: "https://midjourney.com",
    logo: "🎨",
    tags: ["图像", "艺术", "创作"]
  },
  {
    id: "4",
    name: "Perplexity AI",
    description: "AI 驱动的搜索引擎，实时联网搜索并提供带来源的答案",
    content: "Perplexity AI 重新定义了搜索引擎的体验。与传统搜索引擎返回链接列表不同，Perplexity 直接给出带有详细引用来源的综合答案，极大提高了信息获取效率。\n\n核心功能包括：实时联网搜索、多模态搜索（图文结合）、专业版支持更深度的推理模型（如 GPT-4、Claude 3.5）、Collection 功能支持专题知识库管理。\n\n免费版即可满足日常搜索需求，Pro 版本解锁更强大的模型和更高的搜索频率上限。适合需要高效获取可靠信息的研究人员、学生和知识工作者。",
    category: "AI搜索",
    url: "https://perplexity.ai",
    logo: "🔍",
    tags: ["搜索", "实时", "引用"],
    isFree: true
  },
  {
    id: "5",
    name: "Cursor",
    description: "AI 原生代码编辑器，整合 Claude 实现智能编程体验",
    content: "Cursor 是 AI-first 的代码编辑器，基于 VS Code 架构构建，深度集成了 Claude 3.5 和 GPT-4 等顶尖 AI 模型。它不仅仅提供代码补全，更能理解整个代码库的结构和逻辑。\n\n核心功能包括：对话式编程（用自然语言描述需求生成代码）、代码库级别理解（AI 知道所有文件的关联）、一键代码重构和优化、Bug 自动检测和修复。Tab 补全功能比传统 IDE 的自动补全更加智能，能够预测多行代码的编辑意图。\n\n支持所有主流编程语言，与 Git 深度集成。适合追求极致编码效率的专业开发者。",
    category: "AI编程",
    url: "https://cursor.sh",
    logo: "💻",
    tags: ["编程", "代码", "IDE"],
    isFree: true
  },
  {
    id: "6",
    name: "Runway",
    description: "专业 AI 视频生成和编辑平台，Gen-3 Alpha 引领行业",
    content: "Runway 是专业级的 AI 视频生成和编辑平台，其 Gen-3 Alpha 模型将 AI 视频生成的质量提升到了新的高度。支持文字生成视频、图片转视频、视频风格迁移等多种创作模式。\n\n核心功能包括：文字到视频生成、图生视频、视频修复和增强、绿幕自动抠像、运动追踪。Gen-3 模型在视频一致性和运动流畅度上显著优于前代产品。\n\n适合视频创作者、广告制作人和影视行业从业者。提供免费试用额度，付费版按生成时长计费。",
    category: "视频生成",
    url: "https://runwayml.com",
    logo: "🎬",
    tags: ["视频", "创作", "编辑"]
  },
  {
    id: "7",
    name: "ElevenLabs",
    description: "最逼真的 AI 语音合成，支持 29 种语言和声音克隆",
    content: "ElevenLabs 是目前公认的 AI 语音合成质量最高的平台，生成的语音几乎无法与真人区分。支持 29 种语言，提供丰富的语音风格和情感调节选项。\n\n核心功能包括：文本转语音（TTS）、语音克隆（Voice Cloning）、语音转语音（改变语音风格的实时转换）、AI 配音（为视频内容自动生成多语言配音）。最新版本支持声音设计的精细调节，包括情感强度、语速和停顿等参数。\n\n适合播客制作人、有声书创作者、视频配音师和需要语音交互的应用开发者。免费版提供每日生成额度。",
    category: "语音AI",
    url: "https://elevenlabs.io",
    logo: "🎙️",
    tags: ["语音", "TTS", "克隆"],
    isFree: true
  },
  {
    id: "8",
    name: "Hugging Face",
    description: "AI 模型社区中心，数十万开源模型、数据集和演示",
    content: "Hugging Face 是全球最大的 AI 模型社区和协作平台，托管了超过 70 万个开源模型、20 万个数据集和 30 万个 AI 应用演示（Spaces）。是 AI 开发者和研究人员最重要的工作平台之一。\n\n核心功能包括：模型库（Model Hub）一键下载和部署、数据集（Datasets）浏览和使用、Spaces 在线演示和部署、Transformers 库等核心开源工具。企业版提供私有部署和安全合规功能。\n\nHugging Face 已经形成了 AI 开源的生态系统标准，几乎所有主流开源模型都会在 HF 上发布。适合 AI 研究人员、机器学习工程师和数据科学家。",
    category: "AI平台",
    url: "https://huggingface.co",
    logo: "🤗",
    tags: ["模型", "开源", "社区"],
    isFree: true
  },
  {
    id: "9",
    name: "Suno AI",
    description: "AI 音乐生成工具，输入文字即可创作完整歌曲",
    content: "Suno AI 是 AI 音乐生成领域的领军产品，用户只需输入歌词描述或主题，即可生成带有完整旋律、和声和编曲的歌曲。支持多种音乐风格，从流行到古典、从摇滚到电子。\n\n核心功能包括：文字到完整歌曲生成、歌词自动生成、风格定制、多语言支持（包括中文歌曲生成）。V4 版本在音质和结构完整性上达到了可用水平，生成的歌曲已具备发布级质量。\n\n适合音乐创作者、内容制作者和任何需要背景音乐的创作者。提供免费每日生成额度。",
    category: "音乐AI",
    url: "https://suno.ai",
    logo: "🎵",
    tags: ["音乐", "创作", "生成"],
    isNew: true,
    isFree: true
  },
  {
    id: "10",
    name: "Gemini",
    description: "Google 多模态 AI，深度整合 Google 生态系统",
    content: "Gemini 是 Google 开发的下一代 AI 模型系列，深度整合了 Google 搜索、Gmail、Google Docs、YouTube 等全套 Google 生态。Gemini 2.0 Flash 实验版是目前速度最快的 AI 模型之一。\n\n核心功能包括：多模态对话（处理文本、图像、音频、视频）、Google 生态深度集成（在 Gmail 中总结邮件、在 Docs 中辅助写作）、实时联网获取最新信息、Gemini Live 语音对话模式。\n\nGemini 的最大优势在于与 Google 全家桶的无缝集成，适合深度使用 Google 服务的用户。高级版 Gemini Advanced 提供更强大的模型和更大的上下文窗口。",
    category: "对话AI",
    url: "https://gemini.google.com",
    logo: "💫",
    tags: ["对话", "多模态", "搜索"],
    isFree: true
  },
  {
    id: "11",
    name: "Pika Labs",
    description: "AI 视频生成新星，支持图片转视频和文字生成视频",
    content: "Pika Labs 是 AI 视频生成领域快速崛起的新秀，以其易用性和创意风格受到广泛欢迎。用户可以通过文字描述或上传图片，快速生成动态视频内容。\n\n核心功能包括：文字生成视频、图片转视频（让静态图动起来）、视频风格迁移、视频时长延伸。Pika 的特色在于其独特的艺术风格和对于创意表达的灵活性。\n\n生成的视频更适合社交媒体内容和创意项目，而非严格的影视制作。提供免费试用额度，适合内容创作者、社交媒体运营和创意设计师。",
    category: "视频生成",
    url: "https://pika.art",
    logo: "⚡",
    tags: ["视频", "动画", "生成"],
    isNew: true,
    isFree: true
  },
  {
    id: "12",
    name: "Bolt.new",
    description: "浏览器内 AI 全栈开发，一句话构建完整 Web 应用",
    content: "Bolt.new 是一款革命性的浏览器内 AI 全栈开发工具，用户只需用自然语言描述想要的 Web 应用，即可在浏览器中直接生成并预览完整应用。集成了代码编辑、运行环境和实时预览。\n\n核心功能包括：自然语言描述生成完整应用、实时预览和调试、一键部署到生产环境、支持 React/Next.js/Vue 等主流框架、内置 AI 对话助手持续优化代码。\n\nBolt.new 将全栈开发的入门门槛降到了极低，即使没有编程经验的人也能快速构建功能完整的 Web 应用。适合创业者快速验证想法、设计师制作交互原型、以及开发者快速搭建项目骨架。",
    category: "AI编程",
    url: "https://bolt.new",
    logo: "⚡",
    tags: ["全栈", "快速开发", "无代码"],
    isNew: true,
    isFree: true
  },
  {
    id: "13",
    name: "Ollama",
    description: "Mac/Linux 上一条命令本地运行大模型，15 万 GitHub Stars",
    content: "Ollama 是本地运行大语言模型最简单的方式，一条命令 `ollama run llama3` 即可在个人电脑上部署和运行各种开源模型。支持 Llama、Mistral、Gemma、DeepSeek 等主流开源模型，自动处理模型下载和资源配置。\n\n核心特性包括：一键运行任何开源 LLM、OpenAI 兼容 API、模型自定义和导入（如 GGUF）、同时加载多个模型。Ollama 降低了大模型的部署门槛，让个人开发者可以零成本实验和测试各种模型。\n\n适合需要本地运行 AI 模型的开发者、数据隐私敏感的用户和 AI 学习者。完全免费开源。",
    category: "本地部署",
    url: "https://ollama.ai",
    logo: "🦙",
    tags: ["开源", "本地", "LLM"],
    isFree: true
  },
  {
    id: "14",
    name: "Dify",
    description: "开源 LLM 应用开发平台，可视化编排 AI 工作流",
    content: "Dify 是一款开源的 LLM 应用开发平台，提供可视化的 AI 应用编排工具，让开发者可以快速构建基于大语言模型的 AI 应用。支持多种模型接入、Prompt 管理、RAG 知识库、Agent 工作流等功能。\n\n核心功能包括：可视化 Workflow 编排、RAG 知识库搭建、模型统一管理（一次接入多个 LLM）、API 发布和监控。Dify 的云版本还提供团队协作功能。\n\n适合需要构建企业级 AI 应用的团队，以及希望快速验证 AI 产品原型的创业者。开源社区版免费使用。",
    category: "开发平台",
    url: "https://dify.ai",
    logo: "🔧",
    tags: ["开源", "工作流", "RAG"],
    isFree: true
  },
  {
    id: "15",
    name: "Windsurf",
    description: "AI-first 代码编辑器，Codeium 出品，流畅的智能编程体验",
    content: "Windsurf 是 Codeium 推出的 AI-first 代码编辑器，对标 Cursor。基于 VS Code 架构，深度集成了 Codeium 的 AI 模型，提供代码补全、对话式编程、代码库理解等能力。\n\n核心功能包括：自动代码补全（Tab 补全）、自然语言对话编程、代码理解和重构、多文件编辑。Windsurf 的特色在于其极快的响应速度和流畅的交互体验，免费版功能强大。\n\n适合寻找 Cursor 替代方案的开发者，尤其是预算有限但需要高质量 AI 编程助手的个人开发者。提供慷慨的免费额度。",
    category: "AI编程",
    url: "https://windsurf.com",
    logo: "🌊",
    tags: ["编程", "IDE", "免费"],
    isFree: true
  },
  {
    id: "16",
    name: "ComfyUI",
    description: "节点式 AI 图像工作流工具，Stable Diffusion 高级玩法",
    content: "ComfyUI 是一个基于节点的 AI 图像生成工作流工具，通过可视化节点拖拽搭建复杂的 AI 图像生成管线。它是 Stable Diffusion 社区最流行的前端工具，支持 ControlNet、LoRA、IP-Adapter 等几乎所有插件。\n\n核心功能包括：可视化节点编辑器（像 UE Blueprint 一样连接节点）、任意复杂的图像生成管线、精确控制每一步的参数、支持批量处理和视频帧处理。ComfyUI 的工作流可以保存和共享，社区积累了海量高质量工作流模板。\n\n适合对 AI 图像生成有深度控制需求的创作者，以及需要集成多个模型的输出管线。完全免费开源。",
    category: "AI绘图",
    url: "https://comfyui.org",
    logo: "🕸️",
    tags: ["图像", "节点", "开源"],
    isFree: true
  },
  {
    id: "17",
    name: "Continue",
    description: "开源的 AI 代码助手，自由接入任何 LLM 和代码库",
    content: "Continue 是开源的 AI 编程助手 VS Code/JetBrains 插件，让你可以自由选择底层模型。可以接入 OpenAI、Anthropic、本地 Ollama、Azure OpenAI 等多种模型来源，数据完全掌控。\n\n核心功能包括：代码库级别对话（问关于整个项目的问题）、内联代码编辑（选中代码直接修改）、自定义 Slash 命令、自定义规则和上下文提供器。对于使用本地模型的用户，Continue 配合 Ollama 可以实现完全离线的 AI 编程体验。\n\n适合注重数据隐私的开发者、希望自定义 AI 编程体验的高级用户，以及想要接入自有模型的企业团队。完全免费开源。",
    category: "AI编程",
    url: "https://continue.dev",
    logo: "▶️",
    tags: ["编程", "开源", "插件"],
    isFree: true
  },
  {
    id: "18",
    name: "Tabby",
    description: "自托管的 AI 代码补全服务器，企业级隐私友好方案",
    content: "Tabby 是一款自托管的 AI 代码补全服务，可部署在自己的服务器上，为团队提供无隐私泄露风险的 AI 编程辅助。与 GitHub Copilot 不同，所有代码数据不出公司网络。\n\n核心功能包括：自托管部署（Docker 一条命令启动）、代码补全和 Chat 功能、支持消费级 GPU（甚至 CPU-only 模式）、团队管理和审计日志。Tabby 模型针对代码补全场景进行了专门优化，响应速度快。\n\n适合对代码安全有严格要求的企业的团队，以及无法使用 Copilot（如金融、医疗行业）的开发者。完全开源，支持自托管。",
    category: "AI编程",
    url: "https://tabby.tabbyml.com",
    logo: "🐱",
    tags: ["编程", "自托管", "隐私"],
    isFree: true
  },
  {
    id: "19",
    name: "Replit AI",
    description: "浏览器内 AI 编程 + 部署一体化平台，Agent 模式自动编程",
    content: "Replit 的 AI 编程功能将在线 IDE 与 AI Agent 深度整合。用户只需描述想要的功能，Replit Agent 就能自动编写代码、安装依赖、配置环境并部署上线。\n\n核心功能包括：AI Agent 自动编程（描述需求即可）、在线代码编辑和环境运行、一键部署到 Replit 托管、实时协作编程。Replit 的 Ghostwriter 功能提供智能代码补全和对话辅助。\n\n适合快速验证想法、学习编程的新手、以及需要快速搭建 MVP 的创业者。免费版即可使用 AI 功能，付费版解锁更多额度。",
    category: "AI编程",
    url: "https://replit.com",
    logo: "🔄",
    tags: ["编程", "在线", "Agent"],
    isFree: true
  }
];

export const aiTrends: AITrend[] = [
  {
    id: "1",
    title: "AI Agent 自主化浪潮",
    description: "AI Agent 从实验走向生产，自主完成复杂多步骤任务，改变软件开发和业务流程",
    content: "AI Agent（人工智能代理）正在从实验室概念快速走向生产环境，成为2025年最受关注的 AI 趋势。不同于传统的对话式 AI，AI Agent 能够自主理解目标、分解任务、调用工具、执行操作，并在过程中自主纠偏。\n\n在软件开发领域，SWE-agent、Claude Code、Devin 等产品已经证明 AI Agent 可以自主修复 Bug、提交 PR、甚至完成完整功能开发。企业级场景中，Agent 被用于自动化客服、数据处理、报告生成等重复性工作流程。\n\n当前 AI Agent 面临的主要挑战包括：任务规划可靠性不足、长期记忆能力有限、跨系统工具调用的复杂度。但随着推理模型的进步和工具生态的完善，这些问题正在逐步解决。据业内预测，到2026年超过 40% 的软件工程任务将由 AI Agent 辅助或自主完成。",
    icon: "🤖",
    color: "from-blue-500 to-cyan-500",
    stats: "240%",
    growth: "相关项目年增长"
  },
  {
    id: "2",
    title: "开源模型持续追赶",
    description: "DeepSeek、Llama、Mistral 等开源模型不断缩小与闭源模型的差距，推动 AI 民主化",
    content: "开源大语言模型在过去一年中取得了惊人的进展，正在快速缩小与 GPT-4、Claude 等闭源模型的差距。DeepSeek R2 以极低的训练成本实现了接近 GPT-4o 的性能，Llama 3.1 405B 在多项基准测试中与 GPT-4 Turbo 持平，Mistral Large 2 则在多语言能力上表现突出。\n\n开源模型的优势在于：不受 API 调用限制、可本地部署保障数据隐私、可针对特定场景进行微调。这使得企业可以基于开源模型构建定制化的 AI 应用，而不必依赖第三方 API。\n\n开源社区生态也在快速成熟。Hugging Face 平台托管了超过 70 万个开源模型，Ollama 让本地运行大模型变得像使用 Docker 一样简单。量化技术（如 GGUF、GPTQ）的进步让大模型可以在消费级 GPU 甚至 CPU 上运行。\n\n未来趋势是开源模型与闭源模型的差距将进一步缩小，开源模型的 Token 消耗量预计将在2026年超过闭源 API。",
    icon: "🌐",
    color: "from-purple-500 to-pink-500",
    stats: "178%",
    growth: "开源LLM项目增长"
  },
  {
    id: "3",
    title: "多模态融合加速",
    description: "文字、图像、语音、视频的边界正在消融，统一的多模态 AI 系统成为新标准",
    content: "多模态能力正在从加分项变为 AI 系统的标配。GPT-4o、Gemini 2.0、Claude 3.5 等旗舰模型均已支持文本、图像、音频的混合输入和输出，用户可以直接上传截图、PDF、语音进行交互。\n\n多模态融合的核心价值在于更丰富的理解能力。一个能够同时处理文本和图像的系统，可以分析图表、识别物体、理解表情，甚至解读手写笔记。在医疗影像分析、工业质检、教育培训等场景，多模态 AI 展现出了巨大的应用价值。\n\n视频理解是多模态的下一个前沿。随着 Runway Gen-3、Sora 等视频生成模型的成熟，AI 正在从理解静态图像拓展到理解动态视频内容。这不仅推动了内容创作领域的变革，也为安防监控、自动驾驶、体育分析等专业领域带来了新的可能性。",
    icon: "🔮",
    color: "from-orange-500 to-red-500",
    stats: "4.3M+",
    growth: "GitHub AI 仓库数量"
  },
  {
    id: "4",
    title: "端侧AI快速崛起",
    description: "量化压缩技术让大模型运行在手机、PC 等边缘设备上，隐私与低延迟兼顾",
    content: "端侧 AI（On-device AI）正在改变 AI 的部署范式。通过量化、剪枝、蒸馏等模型压缩技术，原本需要数据中心 GPU 才能运行的大模型，现在可以在手机、PC、IoT 设备上流畅运行。\n\nOllama 项目的爆火（GitHub 150K+ Stars）印证了开发者对本地部署 AI 的强烈需求。用户可以在自己的笔记本电脑上运行 Llama、Mistral、Gemma 等模型，无需联网、不产生 API 费用、数据完全本地化。\n\n芯片厂商也在积极布局。Apple 的 Neural Engine、高通 AI Engine、Intel NPU 等专用 AI 芯片正在成为新设备的标配。配合系统级优化，端侧 AI 的推理速度正在接近云端体验。\n\n端侧 AI 的核心优势在于隐私保护（数据不出设备）、低延迟（无需网络传输）、离线可用（无需网络连接）、低成本（无需支付 API 费用）。这对于医疗数据、金融信息、企业文档等敏感场景尤其重要。",
    icon: "📱",
    color: "from-green-500 to-teal-500",
    stats: "150K+",
    growth: "Ollama GitHub Stars"
  },
  {
    id: "5",
    title: "RAG 技术企业落地",
    description: "检索增强生成技术成为企业 AI 落地首选方案，知识库问答、文档分析需求爆发式增长",
    content: "检索增强生成（Retrieval-Augmented Generation, RAG）已成为企业部署 AI 应用的首选架构。RAG 通过将外部知识库与 LLM 结合，让 AI 系统能够基于企业自有数据回答问题，有效解决了大模型知识截止、幻觉等问题。\n\nRAG 的核心流程包括：文档切分、向量化存储、语义检索、上下文组装、LLM 生成。企业在实施 RAG 时通常使用 LangChain、LlamaIndex 等框架，配合向量数据库（如 Pinecone、Weaviate、Qdrant）实现高效的内容检索。\n\nRAGFlow、Dify 等项目让 RAG 系统的搭建更加简单，即使非技术人员也可以通过可视化界面配置知识库问答系统。企业知识管理、客户服务、合规审查、技术文档问答是 RAG 最热门的应用场景。\n\nRAG 技术本身也在快速演进。Graph RAG 引入了知识图谱增强检索精度，Agentic RAG 让检索过程更加智能化，Multi-modal RAG 支持图片和表格内容的理解。预计 RAG 将在企业级 AI 应用中继续保持主导地位。",
    icon: "📚",
    color: "from-indigo-500 to-blue-500",
    stats: "70K+",
    growth: "RAGFlow GitHub Stars"
  },
  {
    id: "6",
    title: "AI 编程工具革命",
    description: "Cursor、GitHub Copilot、Claude Code 重塑软件开发范式，开发者效率提升 55%+",
    content: "AI 编程工具正在从根本上改变软件开发的方式。从最初的代码补全，到现在的自主编码 Agent，AI 编程助手的能力在过去两年中经历了飞跃式发展。\n\nCursor 作为 AI-first 代码编辑器，深度集成了 Claude 和 GPT-4，支持对话式编程、代码库级别理解、一键重构等功能。GitHub Copilot 则凭借微软生态优势，在 Visual Studio、VS Code、JetBrains 等主流 IDE 中提供了无缝的 AI 辅助编程体验。\n\nClaude Code 代表了 AI 编程工具的更高阶段——它不仅仅是补全代码，而是能够理解整个代码库的结构和逻辑，自主完成跨多文件的复杂修改。在 SWE-bench 测试中，Claude 3.5 Sonnet 的解题率达到 49%，意味着近半数的软件工程任务可以由 AI 自主完成。\n\nAI 编程带来的效率提升是显著的。开发者普遍报告编码速度提升 2-3 倍，Bug 率下降 30-50%。但这并不意味着程序员会失业——相反，AI 正在将开发者从重复性的编码工作中解放出来，让他们更专注于架构设计、用户体验和业务创新。",
    icon: "💻",
    color: "from-yellow-500 to-orange-500",
    stats: "55%+",
    growth: "开发效率提升"
  }
];

export const categories = ["全部", "大模型", "AI Agent", "开源模型", "AI应用", "科研突破", "AI政策", "AI绘图", "AI视频"];

export const githubCategories = ["全部", "本地部署", "开发平台", "AI Agent", "开发框架", "RAG", "AI编程", "推理引擎", "AI绘图", "资源合集", "AI自动化", "AI界面"];

export const toolCategories = ["全部", "对话AI", "AI编程", "本地部署", "开发平台", "图像生成", "视频生成", "AI搜索", "语音AI", "AI平台", "音乐AI"];
