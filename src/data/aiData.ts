export interface NewsItem {
  id: string;
  title: string;
  summary: string;
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
  icon: string;
  color: string;
  stats: string;
  growth: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "OpenAI 发布 GPT-5：多模态能力全面跃升，推理速度提升 3 倍",
    summary: "OpenAI 正式推出新一代大语言模型 GPT-5，在代码生成、数学推理、视觉理解等方面实现重大突破，128K上下文窗口支持更长对话记忆。",
    source: "OpenAI Blog",
    sourceUrl: "https://openai.com",
    category: "大模型",
    date: "2025-05-28",
    readTime: "5 分钟",
    hot: true,
    tags: ["GPT-5", "OpenAI", "LLM", "多模态"]
  },
  {
    id: "2",
    title: "Anthropic Claude 3.5 Sonnet 代码能力超越 GPT-4o，SWE-bench 得分达 49%",
    summary: "Anthropic 最新发布的 Claude 3.5 Sonnet 在软件工程基准测试中以 49% 的解题率领先所有同类模型，展现出卓越的编程能力。",
    source: "Anthropic",
    sourceUrl: "https://anthropic.com",
    category: "大模型",
    date: "2025-05-27",
    readTime: "4 分钟",
    hot: true,
    tags: ["Claude", "Anthropic", "代码生成", "AI编程"]
  },
  {
    id: "3",
    title: "Google DeepMind AlphaFold 3 开源：科学界迎来蛋白质研究新时代",
    summary: "Google DeepMind 宣布将 AlphaFold 3 模型权重和代码开源，这一决定将极大加速药物发现和生物医学研究进程。",
    source: "DeepMind",
    sourceUrl: "https://deepmind.google",
    category: "科研突破",
    date: "2025-05-26",
    readTime: "6 分钟",
    tags: ["AlphaFold", "DeepMind", "生物AI", "开源"]
  },
  {
    id: "4",
    title: "Meta 发布 Llama 3.1 405B：最强开源大模型挑战 GPT-4",
    summary: "Meta 开源的 Llama 3.1 405B 参数模型在多项基准测试中与 GPT-4 Turbo 持平，成为目前性能最强的开源大语言模型。",
    source: "Meta AI",
    sourceUrl: "https://ai.meta.com",
    category: "开源模型",
    date: "2025-05-25",
    readTime: "5 分钟",
    hot: true,
    tags: ["Llama", "Meta", "开源", "LLM"]
  },
  {
    id: "5",
    title: "微软 Copilot 深度集成 Windows 11：AI 助手成为系统原生功能",
    summary: "微软宣布 AI Copilot 将深度融入 Windows 11 系统层面，包括文件管理、搜索、设置等核心功能都将获得 AI 加持。",
    source: "Microsoft",
    sourceUrl: "https://microsoft.com",
    category: "AI应用",
    date: "2025-05-24",
    readTime: "3 分钟",
    tags: ["Microsoft", "Copilot", "Windows", "AI助手"]
  },
  {
    id: "6",
    title: "AI Agent 自主完成复杂软件工程任务：SWE-agent 获 MIT 最佳论文",
    summary: "MIT 研究团队开发的 SWE-agent 系统能够自主理解 GitHub Issue 并提交 PR 解决问题，论文荣获 NeurIPS 2025 最佳论文奖。",
    source: "MIT CSAIL",
    sourceUrl: "https://csail.mit.edu",
    category: "AI Agent",
    date: "2025-05-23",
    readTime: "8 分钟",
    tags: ["SWE-agent", "AI Agent", "代码修复", "自动化"]
  },
  {
    id: "7",
    title: "Stability AI 发布 Stable Diffusion 4.0：图像生成质量媲美摄影作品",
    summary: "新版 Stable Diffusion 4.0 引入全新 DiT 架构，在真实感、文字渲染和细节表现上大幅提升，支持更高分辨率输出。",
    source: "Stability AI",
    sourceUrl: "https://stability.ai",
    category: "AI绘图",
    date: "2025-05-22",
    readTime: "4 分钟",
    tags: ["Stable Diffusion", "图像生成", "AI绘图"]
  },
  {
    id: "8",
    title: "EU AI Act 正式生效：欧盟AI监管框架全球首例，影响深远",
    summary: "欧盟《人工智能法案》正式落地实施，为全球AI监管立下先例，涉及高风险AI系统的合规要求将在18个月内全面执行。",
    source: "European Commission",
    sourceUrl: "https://ec.europa.eu",
    category: "AI政策",
    date: "2025-05-21",
    readTime: "7 分钟",
    tags: ["EU AI Act", "AI监管", "政策法规"]
  },
  {
    id: "9",
    title: "DeepSeek R2 震撼发布：$6 训练出比肩 GPT-4o 的开源推理模型",
    summary: "中国AI公司 DeepSeek 再度引发轰动，以极低成本训练出性能接近 GPT-4o 的推理模型，开源后 GitHub 单日获星超10万。",
    source: "DeepSeek",
    sourceUrl: "https://deepseek.com",
    category: "开源模型",
    date: "2025-05-20",
    readTime: "6 分钟",
    hot: true,
    tags: ["DeepSeek", "推理模型", "开源", "中国AI"]
  },
  {
    id: "10",
    title: "Gemini 2.0 Flash 实验版：Google 最快 AI 模型免费开放",
    summary: "Google 发布 Gemini 2.0 Flash 实验版，该模型在保持高质量输出的同时速度极快，并向所有用户免费开放访问权限。",
    source: "Google AI",
    sourceUrl: "https://ai.google",
    category: "大模型",
    date: "2025-05-19",
    readTime: "3 分钟",
    tags: ["Gemini", "Google", "免费模型"]
  },
  {
    id: "11",
    title: "Runway Gen-3 Alpha：AI 视频生成进入真实感新纪元",
    summary: "Runway 发布第三代视频生成模型，支持高达 4K 分辨率的 AI 视频生成，时长可达 60 秒，运动一致性显著提升。",
    source: "Runway",
    sourceUrl: "https://runwayml.com",
    category: "AI视频",
    date: "2025-05-18",
    readTime: "4 分钟",
    tags: ["Runway", "视频生成", "AI创作"]
  },
  {
    id: "12",
    title: "xAI Grok 3 集成实时互联网搜索，Twitter/X 数据训练优势凸显",
    summary: "马斯克旗下 xAI 发布 Grok 3，具备实时网络搜索能力，利用 X 平台海量数据训练，在实时性和社会话题理解上领先竞品。",
    source: "xAI",
    sourceUrl: "https://x.ai",
    category: "大模型",
    date: "2025-05-17",
    readTime: "4 分钟",
    tags: ["Grok", "xAI", "马斯克", "实时搜索"]
  }
];

export const githubProjects: GitHubProject[] = [
  {
    id: "1",
    name: "ollama",
    fullName: "ollama/ollama",
    description: "本地运行大型语言模型的最简工具，支持 Llama、Mistral、Gemma 等 100+ 模型，一行命令即可运行",
    stars: "108K",
    starsRaw: 108000,
    forks: "8.7K",
    language: "Go",
    languageColor: "#00ADD8",
    url: "https://github.com/ollama/ollama",
    category: "本地部署",
    trend: "+2.3K",
    tags: ["LLM", "本地部署", "多模型"],
    weekly: true
  },
  {
    id: "2",
    name: "dify",
    fullName: "langgenius/dify",
    description: "开源 LLM 应用开发平台，提供直观的 Prompt 编排、RAG 管道、Agent 能力，已部署超过 100K 应用",
    stars: "95K",
    starsRaw: 95000,
    forks: "14.2K",
    language: "TypeScript",
    languageColor: "#3178C6",
    url: "https://github.com/langgenius/dify",
    category: "开发平台",
    trend: "+1.8K",
    tags: ["RAG", "Agent", "低代码"],
    weekly: true
  },
  {
    id: "3",
    name: "open-webui",
    fullName: "open-webui/open-webui",
    description: "强大的自托管 AI 平台，兼容 OpenAI API，支持 Ollama，内置 RAG、图像生成、语音输入等功能",
    stars: "88K",
    starsRaw: 88000,
    forks: "10.1K",
    language: "Svelte",
    languageColor: "#FF3E00",
    url: "https://github.com/open-webui/open-webui",
    category: "AI界面",
    trend: "+1.5K",
    tags: ["ChatUI", "Ollama", "自托管"]
  },
  {
    id: "4",
    name: "n8n",
    fullName: "n8n-io/n8n",
    description: "公平代码授权的工作流自动化工具，深度集成 AI 能力，连接400+服务，打造智能自动化流水线",
    stars: "152K",
    starsRaw: 152000,
    forks: "21.8K",
    language: "TypeScript",
    languageColor: "#3178C6",
    url: "https://github.com/n8n-io/n8n",
    category: "AI自动化",
    trend: "+3.1K",
    tags: ["自动化", "工作流", "AI集成"],
    weekly: true
  },
  {
    id: "5",
    name: "vllm",
    fullName: "vllm-project/vllm",
    description: "高吞吐量、内存高效的 LLM 推理和服务引擎，使用 PagedAttention 技术，性能比 HuggingFace 快 24倍",
    stars: "72K",
    starsRaw: 72000,
    forks: "10.5K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/vllm-project/vllm",
    category: "推理引擎",
    trend: "+1.2K",
    tags: ["推理", "高性能", "生产部署"]
  },
  {
    id: "6",
    name: "RAGFlow",
    fullName: "infiniflow/ragflow",
    description: "基于深度文档理解的企业级 RAG 引擎，支持多种文档格式，提供可追溯的引用来源，企业知识库首选",
    stars: "70K",
    starsRaw: 70000,
    forks: "7.4K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/infiniflow/ragflow",
    category: "RAG",
    trend: "+1.9K",
    tags: ["RAG", "知识库", "企业级"],
    weekly: true
  },
  {
    id: "7",
    name: "AutoGPT",
    fullName: "Significant-Gravitas/AutoGPT",
    description: "首个实验性 AI Agent 项目，让 GPT-4 自主完成任务。支持网络搜索、文件操作、代码执行等工具调用",
    stars: "172K",
    starsRaw: 172000,
    forks: "44.8K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/Significant-Gravitas/AutoGPT",
    category: "AI Agent",
    trend: "+800",
    tags: ["AutoGPT", "Agent", "自主任务"]
  },
  {
    id: "8",
    name: "langchain",
    fullName: "langchain-ai/langchain",
    description: "构建 LLM 应用的主流框架，提供链式调用、记忆管理、工具集成等核心能力，拥有庞大生态系统",
    stars: "98K",
    starsRaw: 98000,
    forks: "15.9K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/langchain-ai/langchain",
    category: "开发框架",
    trend: "+950",
    tags: ["LangChain", "框架", "LLM应用"]
  },
  {
    id: "9",
    name: "claude-code",
    fullName: "anthropics/claude-code",
    description: "Anthropic 推出的终端 AI 编程助手，理解完整代码库上下文，执行复杂多文件修改，自主完成开发任务",
    stars: "58K",
    starsRaw: 58000,
    forks: "3.2K",
    language: "TypeScript",
    languageColor: "#3178C6",
    url: "https://github.com/anthropics/claude-code",
    category: "AI编程",
    trend: "+4.2K",
    tags: ["Claude", "AI编程", "Agent"],
    weekly: true
  },
  {
    id: "10",
    name: "awesome-llm-apps",
    fullName: "Shubhamsaboo/awesome-llm-apps",
    description: "100+ 个可实际运行的 AI Agent 和 RAG 应用集合，克隆即用，涵盖各种行业场景和应用模式",
    stars: "112K",
    starsRaw: 112000,
    forks: "16.6K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/Shubhamsaboo/awesome-llm-apps",
    category: "资源合集",
    trend: "+2.1K",
    tags: ["LLM", "应用示例", "RAG"]
  },
  {
    id: "11",
    name: "ComfyUI",
    fullName: "comfyanonymous/ComfyUI",
    description: "强大且模块化的 Stable Diffusion GUI，基于节点图的工作流设计，支持 SD1.x、SD2.x、SDXL、SD3 等所有主流模型",
    stars: "76K",
    starsRaw: 76000,
    forks: "8.2K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/comfyanonymous/ComfyUI",
    category: "AI绘图",
    trend: "+1.1K",
    tags: ["ComfyUI", "SD", "图像生成"]
  },
  {
    id: "12",
    name: "Cursor",
    fullName: "getcursor/cursor",
    description: "AI 优先的代码编辑器，深度集成 Claude 和 GPT-4，支持代码补全、对话式编程、代码库级别理解",
    stars: "47K",
    starsRaw: 47000,
    forks: "2.8K",
    language: "TypeScript",
    languageColor: "#3178C6",
    url: "https://github.com/getcursor/cursor",
    category: "AI编程",
    trend: "+1.7K",
    tags: ["IDE", "AI编程", "代码补全"],
    weekly: true
  }
];

export const aiTools: AITool[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: "OpenAI 旗舰对话 AI，GPT-4o 支持多模态输入输出",
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
    category: "图像生成",
    url: "https://midjourney.com",
    logo: "🎨",
    tags: ["图像", "艺术", "创作"]
  },
  {
    id: "4",
    name: "Perplexity AI",
    description: "AI 驱动的搜索引擎，实时联网搜索并提供带来源的答案",
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
    category: "视频生成",
    url: "https://runwayml.com",
    logo: "🎬",
    tags: ["视频", "创作", "编辑"]
  },
  {
    id: "7",
    name: "ElevenLabs",
    description: "最逼真的 AI 语音合成，支持 29 种语言和声音克隆",
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
    category: "AI编程",
    url: "https://bolt.new",
    logo: "⚡",
    tags: ["全栈", "快速开发", "无代码"],
    isNew: true,
    isFree: true
  }
];

export const aiTrends: AITrend[] = [
  {
    id: "1",
    title: "AI Agent 自主化浪潮",
    description: "AI Agent 从实验走向生产，自主完成复杂多步骤任务，改变软件开发和业务流程",
    icon: "🤖",
    color: "from-blue-500 to-cyan-500",
    stats: "240%",
    growth: "相关项目年增长"
  },
  {
    id: "2",
    title: "开源模型持续追赶",
    description: "DeepSeek、Llama、Mistral 等开源模型不断缩小与闭源模型的差距，推动 AI 民主化",
    icon: "🌐",
    color: "from-purple-500 to-pink-500",
    stats: "178%",
    growth: "开源LLM项目增长"
  },
  {
    id: "3",
    title: "多模态融合加速",
    description: "文字、图像、语音、视频的边界正在消融，统一的多模态 AI 系统成为新标准",
    icon: "🔮",
    color: "from-orange-500 to-red-500",
    stats: "4.3M+",
    growth: "GitHub AI 仓库数量"
  },
  {
    id: "4",
    title: "端侧AI快速崛起",
    description: "量化压缩技术让大模型运行在手机、PC 等边缘设备上，隐私与低延迟兼顾",
    icon: "📱",
    color: "from-green-500 to-teal-500",
    stats: "150K+",
    growth: "Ollama GitHub Stars"
  },
  {
    id: "5",
    title: "RAG 技术企业落地",
    description: "检索增强生成技术成为企业 AI 落地首选方案，知识库问答、文档分析需求爆发式增长",
    icon: "📚",
    color: "from-indigo-500 to-blue-500",
    stats: "70K+",
    growth: "RAGFlow GitHub Stars"
  },
  {
    id: "6",
    title: "AI 编程工具革命",
    description: "Cursor、GitHub Copilot、Claude Code 重塑软件开发范式，开发者效率提升 55%+",
    icon: "💻",
    color: "from-yellow-500 to-orange-500",
    stats: "55%+",
    growth: "开发效率提升"
  }
];

export const categories = ["全部", "大模型", "AI Agent", "开源模型", "AI应用", "科研突破", "AI政策", "AI绘图", "AI视频"];

export const githubCategories = ["全部", "本地部署", "开发平台", "AI Agent", "开发框架", "RAG", "AI编程", "推理引擎", "AI绘图", "资源合集", "AI自动化", "AI界面"];

export const toolCategories = ["全部", "对话AI", "AI编程", "图像生成", "视频生成", "AI搜索", "语音AI", "AI平台", "音乐AI"];
