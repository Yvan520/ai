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
    title: "OpenAI 发布 GPT-5：多模态能力全面跃升，推理速度提升 3 倍",
    summary: "OpenAI 正式推出新一代大语言模型 GPT-5，在代码生成、数学推理、视觉理解等方面实现重大突破，128K上下文窗口支持更长对话记忆。",
    content: "OpenAI 于近日正式发布了 GPT-5，这是自 GPT-4 以来最重要的模型升级。GPT-5 在多个维度实现了显著的性能提升：\n\n推理能力：GPT-5 在数学、编程和科学推理任务上的准确率比 GPT-4 提升了约 35%。在 GSM-8K 数学测试中准确率达到 96.5%，在 HumanEval 编程测试中解决率达到 92%。\n\n多模态升级：GPT-5 的原生多模态能力得到了全面增强。它可以同时处理文本、图像、音频和视频输入，在视觉理解基准测试中得分比 GPT-4V 高出 22%。\n\n上下文窗口：GPT-5 支持 128K tokens 的上下文窗口，能够一次性处理约 300 页的文本内容。这对于长文档分析和复杂代码库理解场景尤为重要。\n\n速度优化：在保持高质量输出的同时，GPT-5 的推理速度相比 GPT-4 提升了约 3 倍，延迟显著降低，更适合实时对话应用。\n\n定价方面，GPT-5 保持与 GPT-4 相同的 API 定价，现有开发者可以无缝升级。OpenAI 表示 GPT-5 是其迈向 AGI 道路上的重要里程碑。",
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
    content: "Anthropic 发布的 Claude 3.5 Sonnet 在 AI 编程领域树立了新的标杆。在 SWE-bench 软件工程基准测试中，Claude 3.5 Sonnet 以 49% 的解题率大幅领先所有竞争对手。\n\nSWE-bench 是一个评估 AI 在真实软件工程任务上表现的基准测试。测试内容包括理解 GitHub Issue、定位相关代码文件、设计修复方案并提交可合并的 Pull Request。49% 的得分意味着近半数任务 AI 可以完全自主完成，无需人工干预。\n\nClaude 3.5 Sonnet 在代码生成、代码审查和 Bug 修复方面均表现出了卓越能力。此外，它在长文档理解和深度分析上也有独特优势，200K 的上下文窗口让它可以处理大型代码库。\n\nAnthropic 同时推出了 Claude Code 终端编程工具，进一步巩固了其在 AI 编程领域的领先地位。Claude Code 能够理解完整的项目结构，执行跨多文件的复杂修改。",
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
    content: "Google DeepMind 宣布将 AlphaFold 3 完全开源，包括模型权重和推理代码。这一决定被视为 AI 推动科学研究的里程碑事件。\n\nAlphaFold 3 在蛋白质结构预测的基础上，进一步扩展到蛋白质与 DNA、RNA、小分子配体的相互作用预测。这意味着研究人员不仅可以预测蛋白质的三维结构，还能理解它们如何与其他分子相互作用——这对药物发现至关重要。\n\n与 AlphaFold 2 相比，AlphaFold 3 的预测精度提高了约 50%，特别是在预测蛋白质与小分子药物的结合位点方面。这对于加速药物研发流程、降低研发成本具有重大意义。\n\nDeepMind 的开源决定意味着全球任何研究机构都可以自由使用这项技术，不受商业许可限制。学术界普遍认为这将极大加速新药研发和疾病机制研究。",
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
    content: "Meta 正式发布了 Llama 3.1 系列模型，其中 405B 参数版本以惊人的表现彻底改变了开源 AI 的格局。这是迄今为止最强大的开源大语言模型。\n\n性能表现：Llama 3.1 405B 在 MMLU、HumanEval、GSM-8K 等主流基准测试中与 GPT-4 Turbo 得分持平甚至略高。这意味着开源模型首次在性能上真正达到了闭源模型的水平。\n\n模型规格：提供 8B、70B 和 405B 三个参数规模，覆盖从边缘设备到数据中心的不同部署场景。405B 版本使用超过 15 万亿 tokens 进行训练。\n\n开源许可：Llama 3.1 采用 Meta 自定义许可，允许商业使用。这一开放策略对于企业采用开源模型具有重要意义。\n\n生态系统影响：Llama 3.1 的发布推动了整个开源 AI 生态的繁荣。Hugging Face、Ollama、vLLM 等工具均在发布当天提供了支持。AI 社区的创新速度将进一步加快。",
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
    content: "微软正在将 AI Copilot 从独立的侧边栏应用升级为 Windows 11 的系统级原生功能。这意味着 AI 助手将不再是一个附加应用，而是操作系统的一部分。\n\n核心集成点包括：文件资源管理器中的 AI 摘要和文件整理、Windows 搜索的 AI 增强（自然语言查找文件）、系统设置中的 AI 配置推荐、截图工具的 OCR 和文字提取、记事本和画图工具的 AI 辅助。\n\n其中最引人注目的是文件管理的 AI 化。用户可以用自然语言描述来查找文件，例如「找到上周三修改的包含项目计划的 PDF」。Copilot 还能自动整理桌面和下载文件夹。\n\n微软的策略很清晰：将 AI 嵌入用户每一次操作系统交互中。Copilot 按钮将出现在任务栏、右键菜单和应用标题栏等多个位置。\n\n此举标志着 AI 操作系统时代的正式开启，Windows 成为首个将大模型能力作为系统核心功能的桌面操作系统。",
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
    content: "MIT CSAIL 团队开发的 SWE-agent 系统在 AI 工程化方面取得了突破性进展，该论文荣获 NeurIPS 2025 最佳论文奖。\n\nSWE-agent 的工作原理：给定一个 GitHub Issue 描述，系统首先分析 Issue 内容理解问题本质，然后遍历代码库定位相关文件，设计修复方案，最终生成代码修改并提交 Pull Request。整个过程无需人工干预。\n\n在 SWE-bench 测试中，SWE-agent 成功解决了 12.5% 的真实 GitHub Issue，远超此前的最佳方法（约 3% 的成功率）。虽然绝对数值不高，但考虑到任务的复杂性和多样性，这已经是一个重大进步。\n\n论文的关键创新在于 Agent-Computer Interface（ACI）设计——优化了 AI Agent 与代码环境的交互方式，使模型能更有效地利用文件编辑、代码搜索等工具。\n\n这一研究方向对于软件工程的未来影响深远。AI Agent 可能从根本上改变开发者处理 Bug 修复和功能开发的工作方式。",
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
    content: "Stability AI 发布了 Stable Diffusion 4.0，这是 SD 系列迄今为止最大的一次架构升级。从传统的 UNet 架构转向了 Diffusion Transformer (DiT) 架构，实现了图像质量的飞跃。\n\n质量提升：SD 4.0 在真实感图像生成上达到了前所未有的水平，细节丰富度、光照一致性、材质质感均大幅超越 SD 3.5。在盲测中，SD 4.0 生成的图像被评价为「媲美专业摄影作品」。\n\n文字渲染：之前的 SD 版本一直难以生成准确的文字。SD 4.0 通过改进的文本编码器和 DiT 架构，大幅提升了图像中文字的可读性和准确性。\n\n分辨率：原生支持高达 2048x2048 的输出分辨率，无需额外的放大技术。同时支持多种宽高比。\n\n速度优化：在新架构下，生成速度相比 SD 3.5 提升了约 40%。在 RTX 4090 上生成 1024x1024 图像仅需约 2 秒。\n\nSD 4.0 延续了开源传统，模型权重在 Hugging Face 上免费提供，并通过 Stability AI 的 API 提供商业使用。",
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
    content: "欧盟《人工智能法案》（EU AI Act）在经过长时间的立法程序后正式生效，成为全球首部全面规范 AI 的法律框架。\n\n核心分级制度：EU AI Act 根据风险等级将 AI 系统分为四类：不可接受风险（禁止）、高风险（严格合规要求）、有限风险（透明度义务）、最低风险（无额外义务）。\n\n高风险 AI 系统涵盖了关键基础设施、教育、就业、执法、移民管理等场景。这些系统需要进行合规评估、建立风险管理体系、确保人工监督。\n\n禁令包括：社会评分系统、实时远程生物识别（有限执法例外）、操纵人类行为的 AI 系统。\n\n影响范围：任何在欧盟市场投放或使用 AI 系统的企业，无论其总部位于何处，都需要遵守该法案。这意味着全球科技公司都需要为其 AI 产品建立合规体系。\n\n过渡期：大部分规定将在 18-36 个月内分阶段执行。企业需要从现在开始评估和调整其 AI 系统的合规状态。\n\nEU AI Act 可能成为全球 AI 监管的参考蓝本，类似 GDPR 在数据隐私领域的影响。美国、中国、日本等国家也在加速制定各自的 AI 监管框架。",
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
    content: "DeepSeek 再次震撼了全球 AI 社区。其最新的 R2 推理模型以约 600 万美元的超低训练成本，实现了接近 GPT-4o 的性能水平，彻底颠覆了「训练大模型需要数亿美元」的认知。\n\n成本革命：DeepSeek R2 的训练成本仅为 GPT-4o 的 1/30 左右。通过创新的 MoE（混合专家）架构和高效的训练优化，DeepSeek 将大模型训练的成本降低了两个数量级。\n\n性能表现：在数学推理（MATH、GSM-8K）、代码生成（HumanEval）和知识问答（MMLU）等基准测试中，R2 的表现与 GPT-4o 的差距在 5% 以内。\n\n开源影响：DeepSeek R2 在 GitHub 开源后引发了疯狂的关注，单日获星超过 10 万，创下了开源项目的历史记录。开发者们对于这样一个高性能且低成本的开源模型感到兴奋。\n\n行业影响：DeepSeek R2 证明了高效训练方法的可行性，对大模型行业的商业模式产生了深远影响。如果极低成本就能训练出接近顶级的模型，那么闭源 API 的高定价逻辑将受到挑战。",
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
    content: "Google 发布了 Gemini 2.0 Flash 实验版，这是 Gemini 系列中速度最快的模型，并且向所有用户免费开放。\n\n速度优势：Gemini 2.0 Flash 的推理延迟比 Gemini 1.5 Pro 降低了约 60%，在保持可比质量的情况下实现了极速响应。这使得它特别适合实时对话和需要快速迭代的编程辅助场景。\n\n性能表现：在 MMLU、HellaSwag 等标准基准测试中，Gemini 2.0 Flash 的表现接近 Gemini 1.5 Pro。虽然不如 2.0 Ultra 强大，但在日常使用场景中差别不大。\n\n免费策略：与 Google 一贯的免费增值模式一致，Gemini 2.0 Flash 对所有用户免费开放，无明显速率限制（公平使用政策）。这被认为是 Google 与 ChatGPT 争夺用户份额的重要举措。\n\nGoogle 生态集成：Gemini 2.0 Flash 完全集成到 Google 的 AI 生态中，包括 Gemini 聊天界面、Google AI Studio、Vertex AI 等平台。通过 Google AI Studio 可以直接在线体验和测试。\n\nGemini 2.0 Flash 的快速响应和免费策略，使其成为开发者构建 AI 应用的高性价比选择。",
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
    content: "Runway 的 Gen-3 Alpha 模型将 AI 视频生成推向了全新的高度。与前代产品相比，Gen-3 在视频质量、时长和一致性方面都有质的飞跃。\n\n分辨率：Gen-3 支持生成高达 4K 分辨率的视频内容，这是此前 AI 视频生成工具难以企及的。高清输出使其在专业影视制作中有了实际应用价值。\n\n时长：单次生成最长可达 60 秒的连续视频。从前几秒的短视频到现在的长镜头，这一进步标志着 AI 视频生成从概念验证进入了实用阶段。\n\n运动一致性：Gen-3 改进了时序建模，大幅减少了物体闪烁、形变和背景跳动等常见问题。运动物体在帧间的连贯性显著提升。\n\n控制能力：支持文字提示词生成视频、图片转视频、视频风格迁移等多种创作模式。用户还可以通过关键帧控制视频的运动轨迹和构图变化。\n\n应用场景：短片制作、广告创意、社交媒体内容、概念可视化、游戏资产制作等。Runway 提供 API 接口和 Web 界面两种使用方式。",
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
    content: "Elon Musk 旗下的 xAI 公司发布了 Grok 3，这是 Grok 系列的重大升级版本，核心亮点是集成了实时互联网搜索能力和基于 X（Twitter）平台数据的独特训练优势。\n\n实时搜索：Grok 3 能够实时搜索互联网获取最新信息，这在处理新闻事件、实时数据查询等方面具有明显优势。与需要知识截止日期的传统模型不同，Grok 3 可以获取和分析发布后几分钟内的最新信息。\n\nX 平台数据优势：Grok 3 利用 X 平台的海量实时社交数据进行训练，使其在社会话题理解、流行文化把握和趋势预测方面具有独特优势。\n\n幽默风格：Grok 系列标志性的幽默和个性化风格在 Grok 3 中得到了保留和增强。马斯克表示这是最不「政治正确」的 AI 助手。\n\nGrok 3 目前通过 X Premium+ 订阅提供给用户，未来计划提供 API 接口供开发者使用。其独特的实时性定位在竞争激烈的 AI 市场中找到了差异化空间。",
    source: "xAI",
    sourceUrl: "https://x.ai",
    category: "大模型",
    date: "2025-05-18",
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
    content: "Ollama 是本地部署大语言模型的首选工具，被誉为 AI 领域的 Docker。它将复杂的模型部署过程简化为一条命令，让开发者可以在自己的机器上轻松运行 Llama、Mistral、Gemma、Phi 等 100+ 主流开源模型。\n\nOllama 的核心价值在于极简的体验。用户只需 `ollama run llama3` 即可下载并运行一个 8B 参数的模型，无需配置 GPU 驱动、Python 环境或推理框架。底层自动处理模型量化、GPU 加速（如 NVIDIA CUDA、Apple Metal）和内存优化。\n\nOllama 支持模型自定义和 Modelfile 配置，用户可以调整温度、上下文长度等参数，甚至创建自定义模型。其 REST API 与 OpenAI API 兼容，方便集成到现有应用中。\n\n作为 AI 本地部署的基础设施，Ollama 的发展对整个开源 AI 生态具有战略意义。它大幅降低了使用开源模型的技术门槛，让个人开发者和企业都能在本地安全地使用 AI。",
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
    content: "Dify 是一个开源的大语言模型应用开发平台，将 AI 应用开发的门槛降低到了可视化操作层面。通过直观的拖拽界面，用户可以快速构建包含 RAG、Agent、工作流等能力的 AI 应用。\n\n核心功能模块包括：Prompt 编排（可视化设计提示词）、RAG 管道（文档上传、自动切分、向量检索）、Agent 能力（工具调用、多步骤规划）、工作流自动化、模型管理（支持 OpenAI、Claude、Llama 等 10+ 模型提供商）。\n\nDify 已经部署了超过 100K 个 AI 应用，广泛应用于企业内部知识库、智能客服、内容生成等场景。其开源特性让企业可以在自有基础设施上部署，确保数据安全。\n\nDify 的定位是 AI 应用开发的 WordPress——让非技术人员也能创建 AI 应用，同时为开发者提供足够的灵活性和扩展能力。",
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
    content: "Open WebUI 是一个功能全面的自托管 AI 聊天界面平台，兼容 OpenAI API 标准，与 Ollama 深度集成。它提供了媲美 ChatGPT 的用户体验，但所有数据都保存在用户自己的服务器上。\n\n核心功能包括：多模型切换（同时管理 Ollama 和 OpenAI 模型）、对话管理、RAG 知识库（上传文档进行问答）、图像生成集成（DALL-E、Stable Diffusion）、语音输入输出、角色/提示词模板库。\n\nOpen WebUI 的安装也极为简单：通过 Docker 一键部署即可获得完整的 AI 交互平台。支持用户管理、权限控制和多语言界面。\n\n对于重视数据隐私的团队和企业，Open WebUI 是构建内部 AI 助手的理想选择。它将私密性和功能性完美结合，是目前最受欢迎的自托管 AI 界面之一。",
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
    content: "N8n 是一款公平代码（Fair-code）授权的工作流自动化平台，连接超过 400 个服务和 API。与 Zapier 等商业产品不同，N8n 完全自托管，数据不出企业网络。\n\nAI 功能的深度集成是 N8n 区别于传统自动化工具的关键。用户可以在工作流中直接调用 OpenAI、Claude、Hugging Face 等 AI 模型，实现智能文档处理、邮件分类、内容生成、情感分析等 AI 增强的自动化任务。\n\nN8n 的可视化工作流编辑器让复杂逻辑编排变得直观。支持条件分支、循环、错误处理、子工作流等高级功能。社区节点库持续扩充，覆盖了几乎所有主流 SaaS 服务。\n\n适合需要复杂自动化流程的企业 IT 团队、运营人员和开发者。自托管架构确保敏感数据的完全掌控。",
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
    content: "vLLM 是一个高性能的大语言模型推理和服务引擎，采用创新的 PagedAttention 技术解决了注意力机制中的显存管理问题，使推理吞吐量比 HuggingFace Transformers 提升最高 24 倍。\n\n核心优势在于高效的显存管理。PagedAttention 借鉴了操作系统中的虚拟内存分页思想，将 Key-Value Cache 分页管理，消除了显存碎片，从而支持更大的批处理规模和更长的上下文窗口。\n\nvLLM 兼容 HuggingFace 模型格式，支持所有主流开源模型（Llama、Mistral、Gemma、Qwen 等），并提供与 OpenAI API 兼容的服务接口。广泛应用于生产环境的模型推理部署。\n\n对于需要高性能模型推理的团队，vLLM 是首选方案。它支持连续批处理、流式输出、量化推理等功能，是 AI 应用上线的基础设施关键组件。",
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
    content: "RAGFlow 是一个企业级的开源 RAG（检索增强生成）引擎，专注于解决企业文档理解和智能问答的复杂需求。其核心优势在于对文档内容的深度理解能力。\n\n与简单的文档向量化不同，RAGFlow 对 PDF、Word、Excel、PPT 等文档进行深度解析，包括表格识别、版面分析、图表理解。这使得检索结果更加精准，回答更加可靠。\n\nRAGFlow 提供了完整的 RAG 工作流：文档管理（上传、解析、切分）、知识库管理、检索配置、LLM 集成（支持 OpenAI、Ollama 等）、引用溯源。每个答案都附带可回溯的原文引用，确保信息可信。\n\n适合企业构建内部知识库、技术文档问答、法律文书检索、产品手册查询等场景。开源部署保障企业数据安全。",
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
    content: "AutoGPT 是 AI Agent 概念的奠基性开源项目，通过让 GPT-4 自主循环执行思考-行动-观察的过程，实现了无需人类干预完成复杂任务的能力。\n\n核心机制是自主任务分解：给定一个目标后，AutoGPT 自动将其分解为子任务，依次执行并调整策略。它配备了网络搜索、文件读写、代码执行、内存存储等工具，可以在沙箱环境中自主工作。\n\n虽然早期版本在可靠性上存在问题，但 AutoGPT 对 AI Agent 领域的影响是深远的。它证明了将大语言模型与工具调用循环结合可以实现自主任务完成，直接启发了后续的 LangChain Agent、Claude Code 等项目。\n\nAutoGPT 项目的 172K Stars 反映了社区对自主 AI 的强烈期待。它仍然是学习 AI Agent 原理的最佳参考项目之一。",
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
    content: "LangChain 是构建 LLM 应用的主流开发框架，提供了一套完整的抽象层来简化 AI 应用的开发。支持 Python 和 TypeScript 两种语言版本，拥有庞大的社区生态。\n\n核心模块包括：Models（模型封装，支持 100+ 模型提供商）、Prompts（提示词管理和模板）、Chains（链式调用编排）、Memory（对话记忆管理）、Agents（Agent 框架和工具集成）、Callbacks（回调与监控）。\n\nLangChain 的表达式语言（LCEL）让链式调用组合更加声明式。LangSmith 提供了 LLM 应用的调试、测试和监控能力。LangGraph 支持有状态的多参与者图工作流。\n\n虽然 LangChain 的学习曲线相对陡峭，但它已经成为 LLM 应用开发的事实标准。几乎所有需要多步骤 LLM 调用、工具集成或 RAG 的应用都在使用 LangChain。",
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
    content: "Claude Code 是 Anthropic 推出的终端 AI 编程助手，代表了 AI 编程工具的最高水平。它不仅仅是代码补全工具，而是能够理解整个代码库的上下文，自主完成跨多文件的复杂开发任务。\n\n核心能力包括：代码库全局理解（索引整个项目结构）、复杂多文件修改（自动修改相关文件）、Git 操作集成（自动创建分支、提交 PR）、终端命令执行、测试编写和执行、Bug 深度分析与修复。\n\n在 SWE-bench 测试中，Claude 3.5 Sonnet 通过 Claude Code 以 49% 的解题率领先所有同类工具。这意味着近半数的真实世界软件工程问题可以由 AI 自主解决。\n\nClaude Code 的 Agent 模式可以自主规划和执行任务，开发者只需给出目标描述即可。适合需要高效代码维护和开发的专业软件团队。",
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
    content: "Awesome LLM Apps 是一个收集了 100+ 个可以直接运行的 AI 应用的开源合集。每个应用都是一个完整可执行的 Python 项目，涵盖 AI Agent、RAG 系统、聊天机器人、自动化工具等常见 AI 应用模式。\n\n这个项目的价值在于实践性。与理论教程不同，每个应用都附带完整的代码、配置说明和运行指南。用户可以克隆仓库后直接运行体验，然后根据自己的需求修改定制。\n\n覆盖的场景包括：个人 AI 助手、知识库问答系统、自动化报告生成、社交媒体内容创作、数据分析智能体、邮件自动化处理等。\n\n适合想要快速上手 AI 应用开发的初学者，以及需要参考实现方案的开发者。项目的 112K Stars 反映了开发者对实用型 AI 代码示例的强烈需求。",
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
    content: "ComfyUI 是基于节点图（Node Graph）工作流的 Stable Diffusion 图像生成工具，以其强大的模块化设计和灵活性成为 AI 绘图进阶用户的首选。\n\n与简单的在线工具不同，ComfyUI 将图像生成过程拆解为一个个可连接的节点（模型加载、提示词输入、采样器、图像处理等），用户可以自由组合出任意复杂的生成工作流。\n\n支持所有主流 SD 模型系列（SD1.5、SD2.1、SDXL、SD3、FLUX），以及 ControlNet、LoRA、IP-Adapter、T2I-Adapter 等扩展技术。工作流可以保存为 JSON 文件分享，社区中有大量预构建工作流可供参考。\n\nComfyUI 的设置相对复杂，但一旦掌握就提供了前所未有的控制力。适合需要精确控制图像生成过程的设计师和专业 AI 创作者。",
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
    content: "Cursor 是 AI-first 的代码编辑器，基于 VS Code 架构构建，但将 AI 集成到了编辑器体验的每一个层面。它不仅仅是一个加装了 AI 插件的编辑器，而是从根本上重新思考了 AI 时代编程工具应有的形态。\n\n核心功能分为三个层次：智能补全（Tab 补全预测多行编辑）、对话式编程（Cmd+K 用自然语言修改代码区域）、代码库理解（Agent 模式跨文件修改）。与 GitHub Copilot 不同，Cursor 的上下文理解不局限于当前文件，而是考虑整个项目结构。\n\nCursor 深度集成了 Claude 3.5 和 GPT-4，用户可以在对话和编码之间无缝切换。@ 符号引用功能可以精确指定 AI 关注的文件或函数。\n\n适合追求极致开发效率的专业开发者。免费版满足日常使用，Pro 版解锁更强大的 AI 模型和无限补全。\n\n注意：此项目为 Cursor 编辑器的开源组件，核心编辑器需要从 cursor.sh 官网获取。",
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

export const toolCategories = ["全部", "对话AI", "AI编程", "图像生成", "视频生成", "AI搜索", "语音AI", "AI平台", "音乐AI"];
