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
    id: "1",
    title: "OpenAI 启动 ChatGPT 超级应用改造，整合代码编辑器与 AI Agent",
    summary: "OpenAI 正在对 ChatGPT 进行史上最大规模改造，计划将其转型为集成编程工具、AI Agent 和第三方服务的超级应用，为潜在上市做准备。",
    content: "据 Financial Times 六月报道，OpenAI 正在推进其史上规模最大的 ChatGPT 产品重组。内部知情人士透露，这次改造的核心是将 ChatGPT 与 Codex 编程工具和 Atlas 浏览器深度整合，打造一个超级应用——用户可以在同一个界面里写代码、浏览网页、调用 AI Agent 执行复杂任务。这个战略由 Greg Brockman 主导，目标是让 ChatGPT 从对话工具进化为完整的工作平台。重组计划还包括引入第三方应用生态，类似微信的小程序模式。消息传出后，行业分析师普遍认为这是 OpenAI 为其潜在 IPO 铺路。竞争对手 Anthropic 和 Google 也在加速各自的平台化布局，超级应用竞赛已全面打响。",
    source: "Financial Times",
    sourceUrl: "https://www.ft.com",
    category: "大模型",
    date: "2025-06-07",
    readTime: "4 分钟",
    hot: true,
    tags: ["OpenAI", "ChatGPT", "超级应用", "Codex", "IPO"]
  },
  {
    id: "2",
    title: "Anthropic 发布 Claude Fable 5：首个公开可用的 Mythos 级模型",
    summary: "Anthropic 推出 Claude Fable 5，这是首个面向公众的 Mythos 级模型，在编程、科研和知识工作领域刷新了多项基准测试记录。",
    content: "6 月 9 日，Anthropic 正式发布了 Claude Fable 5，这是该公司迄今为止能力最强的公开可用模型。Fable 5 属于全新的 Mythos 层级，性能远超 Opus 系列。在 SWE-Bench Pro 编程基准上，Fable 5 得分 80.3%，比第二名 Claude Opus 4.8 高出约 11 个百分点，GPT-5.5 仅 58.6%。更令人印象深刻的是它的长上下文能力——默认支持 100 万 token 上下文窗口，在长时间复杂任务上的表现尤为突出。Stripe 使用 Fable 5 完成了一个 5000 万行 Ruby 代码库的迁移，耗时仅一天，而之前人工团队需要两个多月。不过 Anthropic 也承认，如此强大的模型存在被滥用于网络攻击的风险，因此加入了安全分类器，高风险查询会自动降级到 Opus 4.8 处理。",
    source: "Anthropic",
    sourceUrl: "https://anthropic.com",
    category: "大模型",
    date: "2025-06-09",
    readTime: "5 分钟",
    hot: true,
    tags: ["Claude", "Fable 5", "Mythos", "Anthropic", "编程"]
  },
  {
    id: "3",
    title: "苹果 WWDC 2026 全面重构 Siri 搭载 Google Gemini，库克时代的最后亮相",
    summary: "苹果在 WWDC 2026 上发布了全新 Siri AI，底层采用定制版 Google Gemini 模型，标志着苹果在 AI 战略上的重大转折，也是 Tim Cook 的告别演出。",
    content: "6 月 8 日的 WWDC 2026 上，苹果终于交出了迟到两年的 AI 答卷。全新 Siri AI 不再是一个简单的语音助手，而是一个完整的对话式 AI 伴侣。最引人注目的是它的技术架构：苹果选择与 Google 合作，以每年约 10 亿美元的授权费使用定制版 Gemini 模型。简单请求由苹果自研端侧模型处理，复杂推理则上云到 Google 的 Blackwell B200 GPU 集群。新 Siri 拥有独立应用，支持多轮对话、屏幕内容理解、跨设备历史同步，还能处理图片和文件。iOS 27 将同步推送，但 Siri AI 需要 iPhone 15 Pro 及以上机型才能完整运行。欧盟和中国市场首发不支持云端 AI 功能。这是 Tim Cook 作为 CEO 的最后一届 WWDC，他将在 9 月交棒给硬件主管 John Ternus。",
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    category: "AI应用",
    date: "2025-06-08",
    readTime: "6 分钟",
    hot: true,
    tags: ["Apple", "Siri", "WWDC", "Gemini", "iOS 27"]
  },
  {
    id: "4",
    title: "Google I/O 2026：Gemini Omni 与 3.5 Flash 齐发，AI 进入操作系统时代",
    summary: "Google 在 I/O 大会发布 Gemini Omni 视频生成模型和 Gemini 3.5 Flash，宣告 AI 已从对话工具进化为自主行动的平台级能力。",
    content: "Google I/O 2026 可能是 Sundar Pichai 就任 CEO 以来产品密度最高的一次 keynote。Gemini Omni 是本次的主角——它不仅是文生图或视频工具，而是一个能够理解世界物理规律并基于视频进行创作和编辑的统一模型。与此同时，Gemini 3.5 Flash 作为新一代主力模型全面上线，定价仅为每百万 token 输入 1.5 美元、输出 9 美元，速度比竞品快 4 倍。Google 同时发布了 Antigravity 2.0 智能体开发平台，允许开发者用自然语言描述需求后自动生成多 Agent 协作应用。数据方面，Google 透露其 AI 系统每月处理超过 3.2 万亿 token，同比翻了七倍。Pichai 在演讲中反复强调：AI 不再是一个功能层，而是 Google 所有产品的操作系统级基础设施。",
    source: "Google",
    sourceUrl: "https://deepmind.google",
    category: "大模型",
    date: "2025-05-20",
    readTime: "5 分钟",
    hot: true,
    tags: ["Google", "I/O", "Gemini", "Omni", "Agent"]
  },
  {
    id: "5",
    title: "NVIDIA Computex 2026：黄仁勋发布 Nemotron 3 Ultra，5500 亿参数开源模型登顶美国第一",
    summary: "黄仁勋在台北 Computex 发布 5500 亿参数开源模型 Nemotron 3 Ultra，同时推出 Cosmos 3 全模态模型和 Vera CPU，宣告 NVIDIA 的平台化转型。",
    content: "6 月 1 日，黄仁勋身着标志性皮夹克走上 Computex 2026 的舞台，但这次他讲的不是显卡而是模型。Nemotron 3 Ultra 拥有约 5500 亿总参数（每次激活仅 55 亿），支持 100 万 token 上下文，在 Artificial Analysis Intelligence Index 上以 48 分位列美国开源模型第一。推理速度超过每秒 300 token，比同尺寸竞品快 3 到 5 倍。但黄仁勋坦承这个成绩仍然落后于中国的 Kimi K2.6，开源模型的全球竞赛远未结束。NVIDIA 还发布了 Cosmos 3——业界首个全模态开源模型，统一处理语言、图像、视频、音频和动作生成，专为机器人领域设计。全新 Vera CPU 针对 AI Agent 推理负载进行了专门优化，效率是传统 x86 的两倍。黄仁勋表示 NVIDIA 已经不再是芯片公司，而是一家全栈 AI 平台企业。",
    source: "NVIDIA",
    sourceUrl: "https://nvidia.com",
    category: "大模型",
    date: "2025-06-01",
    readTime: "5 分钟",
    hot: true,
    tags: ["NVIDIA", "Nemotron", "Computex", "开源", "黄仁勋"]
  },
  {
    id: "6",
    title: "中国 Neuracle NEO 脑机接口获批商用，全球首款侵入式 BCI 走进临床",
    summary: "中国药监局批准 Neuracle NEO 脑机接口芯片上市，这是全球首个获批商用的侵入式脑机接口，已纳入医保加速推广。",
    content: "今年 3 月，中国国家药监局批准了 Neuracle 科技与清华大学联合开发的 NEO 脑机接口系统用于临床商用，6 月该消息在全球科技媒体中引发广泛关注。NEO 是一枚硬币大小的植入式芯片，通过微创手术放置在硬脑膜表面，将脑电信号无线传输到外部的智能手套，帮助脊髓损伤患者恢复手部抓握能力。39 岁的临床试验参与者董辉因车祸导致颈部以下瘫痪六年，植入 NEO 11 个月后成功用手写下了自己的名字。MIT Technology Review 报道指出，与马斯克的 Neuralink 相比，NEO 选择了创伤更小的硬脑膜外路径，审批速度也更快。该芯片已被纳入中国医保编码体系。中国的十四五规划将脑机接口列为六大重点未来产业之一，这种国家层面的战略投入在全球没有对标。",
    source: "MIT Technology Review",
    sourceUrl: "https://technologyreview.com",
    category: "基础科学",
    date: "2025-06-01",
    readTime: "6 分钟",
    hot: true,
    tags: ["脑机接口", "BCI", "中国", "NEO", "医疗AI"]
  },
  {
    id: "7",
    title: "Google DeepMind 斥资 1000 万美元研究多 Agent 系统安全风险",
    summary: "随着 AI Agent 大规模部署上线，DeepMind 联合多家机构设立 1000 万美元研究基金，防范数百万自主 Agent 交互可能引发的系统性风险。",
    content: "Google DeepMind 在 6 月宣布了一个引人注目的研究计划：联合 Schmidt Sciences、英国 ARIA、Cooperative AI 基金会和 Google.org，共同出资 1000 万美元，资助学术界研究多 AI Agent 系统的安全问题。DeepMind 的 AGI 安全与对齐研究负责人 Rohin Shah 在接受 MIT Technology Review 采访时说得很直白——目前还没有成体系的多 Agent 安全研究领域。他担心的是，当数百万个 AI Agent 开始在互联网上自主交互——互相下达指令、共享信息、协调行动——可能会出现谁也无法预料的系统性风险。在近期 Google I/O 上，智能体工具已经成为公司核心战略方向。Shah 强调学术界的优势是可以看得更远，做工业实验室不会优先考虑的基础性研究。这笔资金将专门用于支持大学和研究机构的独立研究。",
    source: "MIT Technology Review",
    sourceUrl: "https://technologyreview.com",
    category: "政策法规",
    date: "2025-06-11",
    readTime: "4 分钟",
    hot: false,
    tags: ["DeepMind", "AI安全", "多Agent", "对齐"]
  },
  {
    id: "8",
    title: "Anthropic 秘密提交 9650 亿 IPO 申请，同步敲定 360 亿美元芯片融资",
    summary: "Anthropic 在 Claude Fable 5 发布前夕向 SEC 秘密提交 IPO 文件，估值近万亿，同时 Apollo 和 Blackstone 正在完成史上最大 AI 芯片融资交易。",
    content: "这是 AI 行业六月最重磅的资本新闻。消息人士透露，Anthropic 已向美国 SEC 秘密提交了 S-1 上市文件，估值高达 9650 亿美元，计划于 10 月正式上市。如果成功，这将是 2026 年规模最大的科技 IPO。几乎同时，Apollo 和 Blackstone 等华尔街巨头正在敲定一笔 360 亿美元的私人信贷交易，用于向 Google 购买 TPU 芯片并租赁给 Anthropic——这是历史上规模最大的芯片融资交易。这些动作反映出 AI 军备竞赛已经进入了资本层面的全面对抗。不过 Claude Fable 5 在 6 月 12 日因安全争议被短暂暂停访问，给 Anthropic 的上市计划增添了一丝不确定性。Anthropic 表示正在尽快恢复服务但拒绝透露具体原因。分析人士认为这可能是监管机构在为 IPO 做最后的压力测试。",
    source: "Bloomberg",
    sourceUrl: "https://bloomberg.com",
    category: "大模型",
    date: "2025-06-03",
    readTime: "5 分钟",
    hot: true,
    tags: ["Anthropic", "IPO", "融资", "TPU", "估值"]
  },
  {
    id: "9",
    title: "Gemini 3.5 Live Translate 上线：AI 实时语音翻译保留语气和情感",
    summary: "Google DeepMind 发布 Gemini 3.5 Live Translate，直接对语音信号进行端到端翻译，保留说话者语气情感，让跨语言交流真正自然。",
    content: "Google DeepMind 在 6 月推出了 Gemini 3.5 Live Translate，这是一项让实时语音翻译变得真正可用的技术突破。不同于传统翻译工具逐句转换的生硬感，Gemini 3.5 Live Translate 能够理解上下文、保留说话者的语气和情感色彩，翻译结果听起来像是一个自然人在说话而不是机器在念稿。技术核心在于 Gemini 3.5 系列原生的音频理解能力：模型直接对语音信号进行端到端处理，而不是先转文字再翻译最后合成语音的传统流水线。这种架构大幅降低了延迟，同时保留了语调和情感细节。该功能首先在 Google Pixel 设备和 Gemini App 上线，支持中、英、日、韩、法、德等主要语言。这对于跨国会议、旅行和外语学习场景意义重大。很多在海外工作的华人第一时间测试了这个功能，反馈是终于可以和本地同事进行有温度的对话了。",
    source: "Google DeepMind",
    sourceUrl: "https://deepmind.google",
    category: "AI应用",
    date: "2025-06-09",
    readTime: "4 分钟",
    hot: false,
    tags: ["Gemini", "翻译", "语音", "DeepMind", "多模态"]
  },
  {
    id: "10",
    title: "欧盟 AI 法案 6 月正式生效，全球首个全面 AI 监管框架落地",
    summary: "欧盟 AI 法案进入执行阶段，按风险等级分类监管 AI 系统，高风险应用必须满足透明度、人工监督和文档记录等合规要求。",
    content: "经过两年多的立法和过渡期，欧盟 AI 法案于 2026 年 6 月正式进入执行阶段。这是全球第一个全面的 AI 监管法律框架，将所有 AI 系统按风险等级分为四类：不可接受风险、高风险、有限风险和极低风险。高风险系统——涉及就业、信贷、教育、关键基础设施等领域的 AI——必须满足严格的透明度、文档记录、人工监督和准确性要求。法案还要求通用 AI 模型的提供者公开训练数据摘要并遵守版权法。欧洲之外的企业只要服务欧盟用户也必须遵守。许多科技公司从去年开始就在做准备，但中小企业的合规负担依然不小。欧盟委员会表示首批执法检查将从 9 月开始。行业普遍认为欧盟 AI 法案将为全球 AI 监管树立标杆，美国、日本和中国都在密切关注其执行效果。不过也有批评者认为过早过严的监管可能削弱欧洲 AI 产业的竞争力。",
    source: "欧盟委员会",
    sourceUrl: "https://digital-strategy.ec.europa.eu",
    category: "政策法规",
    date: "2025-06-01",
    readTime: "5 分钟",
    hot: false,
    tags: ["欧盟", "AI监管", "合规", "法律"]
  },
  {
    id: "11",
    title: "Moonshot AI 开源编程模型 Kimi K2.7，推理 token 减少 30% 成本大降",
    summary: "月之暗面发布开源编程模型 Kimi-K2.7-Code，通过减少过度推理降低 token 消耗，在多项基准上超越 Claude Opus 4.8。",
    content: "6 月 12 日，中国 AI 初创公司 Moonshot AI 发布了 Kimi-K2.7-Code，一个专门针对编程任务优化的开源模型。它最大的亮点是可以停止过度思考——当 AI 推理一个问题时，会消耗大量 token 来生成中间推理步骤，K2.7 通过专门的训练将推理 token 用量减少了 30%，意味着更快的响应速度和更低的成本。在编程任务上表现提升 21.8%，多语言能力提升 31.5%。在工具使用基准测试中得分 81.1%，超过 Claude Opus 4.8 的 76.4%。API 输入仅每百万 token 0.95 美元，远低于竞品。模型权重完全开源，可在 Hugging Face 下载自托管。API 兼容 OpenAI 和 Anthropic 协议，开发者只需改一行代码即可切换。K2.7 在中国开发者社区迅速走红，被戏称为穷人的 Claude Fable。",
    source: "Moonshot AI",
    sourceUrl: "https://kimi.com",
    category: "大模型",
    date: "2025-06-12",
    readTime: "3 分钟",
    hot: false,
    tags: ["Moonshot", "Kimi", "编程", "开源", "推理"]
  },
  {
    id: "12",
    title: "DeepMind 发布 Gemini for Science，AI 科学家助手正式上岗",
    summary: "Google DeepMind 整合 AlphaFold、Co-Scientist 等工具推出 Gemini for Science，让 AI 从实验室玩具变为真正的科研生产力工具。",
    content: "在 5 月 Google I/O 上发布后，Gemini for Science 在 6 月全面开放。这是一个将 DeepMind 多年积累的科学 AI 能力整合在一起的统一平台，涵盖 AlphaFold 蛋白质预测、AlphaProteo 蛋白质设计、AlphaQubit 量子计算纠错、GenCast 天气预报以及新加入的 Co-Scientist 协作研究助手。Co-Scientist 是其中最亮眼的新工具——它不是一个简单的问答 AI，而是可以自主提出研究假设、设计实验方案、分析结果并迭代优化的 AI 研究伙伴。早期用户包括剑桥大学的结构生物学团队和牛津的气候建模小组。DeepMind CEO Demis Hassabis 在采访中表示 Gemini for Science 的核心理念是让 AI 成为科学家的无限博士后——不知疲倦地阅读文献、设计实验、验证假设。他认为 2026 年将是 AI 从展示能力转向实际产出科学成果的关键转折年。这个工具对经费紧张的课题组尤其有用。",
    source: "Google DeepMind",
    sourceUrl: "https://deepmind.google",
    category: "基础科学",
    date: "2025-06-05",
    readTime: "5 分钟",
    hot: false,
    tags: ["DeepMind", "科学研究", "AlphaFold", "Co-Scientist", "Hassabis"]
  }
];





export const githubProjects: GitHubProject[] = [
  {
    id: "1",
    name: "LLMs-from-scratch",
    fullName: "rasbt/LLMs-from-scratch",
    description: "Implement a ChatGPT-like LLM in PyTorch from scratch, step by step",
    stars: "97K",
    starsRaw: 97384,
    forks: "15K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/rasbt/LLMs-from-scratch",
    category: "AI Agent",
    trend: "+1948",
    tags: ["ai","artificial-intelligence","attention-mechanism"],
    weekly: true,
  },
  {
    id: "6",
    name: "llm-app",
    fullName: "pathwaycom/llm-app",
    description: "Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. 🐳Docker-friendly.⚡Always in sync with Sharepoint, Google Drive, S3, Kafka, PostgreSQL, real-time data APIs, and more.",
    stars: "59K",
    starsRaw: 59308,
    forks: "1.4K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/pathwaycom/llm-app",
    category: "RAG",
    trend: "+1186",
    tags: ["chatbot","hugging-face","llm"],
    weekly: true,
  },
  {
    id: "5",
    name: "system_prompts_leaks",
    fullName: "asgeirtj/system_prompts_leaks",
    description: "Extracted system prompts from Anthropic - Claude Fable 5, Opus 4.8, Claude Code, Claude Design. OpenAI - ChatGPT 5.5 Thinking, GPT 5.5 Instant, Codex. Google - Gemini 3.5 Flash, 3.1 Pro, Antigravity. xAI - Grok, Cursor, Copilot, VS Code, Perplexity, and more. Updated regularly.",
    stars: "43K",
    starsRaw: 43416,
    forks: "7.2K",
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/asgeirtj/system_prompts_leaks",
    category: "AI编程",
    trend: "+868",
    tags: ["ai","anthropic","awesome"],
    weekly: true,
  },
  {
    id: "2",
    name: "ray",
    fullName: "ray-project/ray",
    description: "Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accelerating ML workloads.",
    stars: "43K",
    starsRaw: 42932,
    forks: "7.7K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/ray-project/ray",
    category: "AI Agent",
    trend: "+859",
    tags: ["data-science","deep-learning","deployment"],
    weekly: true,
  },
  {
    id: "3",
    name: "ai-engineering-from-scratch",
    fullName: "rohitg00/ai-engineering-from-scratch",
    description: "Learn it. Build it. Ship it for others.",
    stars: "35K",
    starsRaw: 34566,
    forks: "5.6K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/rohitg00/ai-engineering-from-scratch",
    category: "AI Agent",
    trend: "+691",
    tags: ["agents","ai","ai-agents"],
    weekly: false,
  },
  {
    id: "4",
    name: "datasets",
    fullName: "huggingface/datasets",
    description: "🤗 The largest hub of ready-to-use datasets for AI models with fast, easy-to-use and efficient data manipulation tools",
    stars: "22K",
    starsRaw: 21636,
    forks: "3.3K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/huggingface/datasets",
    category: "AI Agent",
    trend: "+433",
    tags: ["ai","artificial-intelligence","computer-vision"],
    weekly: false,
  },
  {
    id: "8",
    name: "llama-cookbook",
    fullName: "meta-llama/llama-cookbook",
    description: "Welcome to the Llama Cookbook! This is your go to guide for Building with Llama: Getting started with Inference, Fine-Tuning, RAG. We also show you how to solve end to end problems using Llama model family and using them on various provider services  ",
    stars: "18K",
    starsRaw: 18368,
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
    id: "7",
    name: "ml-engineering",
    fullName: "stas00/ml-engineering",
    description: "Machine Learning Engineering Open Book",
    stars: "18K",
    starsRaw: 18145,
    forks: "1.2K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/stas00/ml-engineering",
    category: "RAG",
    trend: "+363",
    tags: ["ai","debugging","gpus"],
    weekly: true,
  },
  {
    id: "9",
    name: "awesome-generative-ai",
    fullName: "steven2358/awesome-generative-ai",
    description: "A curated list of modern Generative Artificial Intelligence projects and services",
    stars: "12K",
    starsRaw: 12159,
    forks: "1.8K",
    language: "Unknown",
    languageColor: "#6e7681",
    url: "https://github.com/steven2358/awesome-generative-ai",
    category: "资源合集",
    trend: "+243",
    tags: ["ai","artificial-intelligence","awesome"],
    weekly: true,
  },
  {
    id: "10",
    name: "kserve",
    fullName: "kserve/kserve",
    description: "Standardized Distributed Generative and Predictive AI Inference Platform for Scalable, Multi-Framework Deployment on Kubernetes",
    stars: "5.6K",
    starsRaw: 5591,
    forks: "1.5K",
    language: "Go",
    languageColor: "#00ADD8",
    url: "https://github.com/kserve/kserve",
    category: "推理引擎",
    trend: "+112",
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
