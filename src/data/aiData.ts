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
    content: "上周 OpenAI 在旧金山的发布会上正式端出了 GPT-5。现场 demo 的时候，模型实时处理了一段 4K 视频里的人物动作识别，旁边还跑着一个代码生成的窗口，基本没什么延迟。当时在场的开发者们反应挺热烈的，毕竟从 GPT-4 到 4o 再到 5，这个节奏比大多数人预期的要快。\n\nGPT-5 最明显的提升是推理速度。我自己用 API 试了几轮，同样的 prompt 下，token 输出的间隔明显比 GPT-4 短了一截。官方给的数据是快了 3 倍，实际体验下来差不多是这个数。多模态方面，现在可以直接扔一段 10 分钟的视频进去让它分析，不光是截图识别，是真的能理解时序逻辑。\n\n价格方面倒是没涨，反而降了一些。GPT-5 的输入价格比 GPT-4 Turbo 便宜了大概一半。看来 OpenAI 在推理优化上确实下了功夫，把成本压下来了。不过发布会上 Altman 花了将近一半的时间讲安全和对齐，不像以前那样一上来就秀能力。可能是最近行业里关于 AI 安全的讨论确实影响了他们的路线。\n\n圈子里讨论最多的反而不是能力本身，而是 OpenAI 这次选择了渐进式发布的策略。不是一次性把所有能力放出来，而是先放基础版，后面的高配版还在内部测试。这种打法跟之前 GPT-4 发布时那种轰一下全端出来的风格完全不一样。有人说是因为监管压力，也有人说是商业策略调整。不管怎么说，GPT-5 这一仗打得还算稳。",
    source: "OpenAI Blog",
    sourceUrl: "https://openai.com",
    category: "大模型",
    date: "2025-05-28",
    readTime: "5 分钟",
    hot: true,
    tags: ["GPT-5", "OpenAI", "LLM", "多模态"],
  },
  {
    id: "2",
    title: "Anthropic Claude 3.5 Sonnet 代码能力超越 GPT-4o，SWE-bench 得分达 49%",
    summary: "Anthropic 最新发布的 Claude 3.5 Sonnet 在软件工程基准测试中以 49% 的解题率领先所有同类模型，展现出卓越的编程能力。",
    content: "Claude 3.5 Sonnet 发布那周，我跟几个朋友在群里跑了一天的 SWE-bench 测试题。结果挺直接的：在真实的 GitHub issue 修复场景里，Claude 3.5 Sonnet 的通过率比 GPT-4o 高了大概十个百分点。不是那种感觉上更强的差距，是真正能修更多 bug 的区别。\n\nAnthropic 这个公司一直给人感觉挺低调的，产品发布节奏也比 OpenAI 慢半拍。但这次 3.5 Sonnet 确实让人有点意外。我用它在实际项目里试了试重构一个 Python 模块，它能理解整个项目的目录结构和依赖关系，不像以前那些模型只能在单个文件范围里打转。代码生成的风格也干净，不太需要人工改。\n\nArtifacts 功能也挺实用。写代码的时候右边直接预览 UI 效果，省掉了来回切换窗口的麻烦。不过说实话，这个功能第一版上线的时候 bug 不少，最近更新了几次才稳定下来。\n\n价格上 Claude 3.5 Sonnet 比同级别的 GPT-4o 便宜不少，输出价格大概只有一半。对于个人开发者和中小团队来说，这个价差还是挺敏感的。Anthropic 明显是想用价格换市场。\n\n比较有意思的是，Anthropic 这次特意强调他们做了更多的安全对齐训练。他们的论文里提到，模型在处理敏感请求时会主动询问上下文，而不是直接拒绝或者直接输出。这种设计思路不是简单地在输入输出端加过滤器，而是把安全规则嵌到模型的推理过程里去了。",
    source: "Anthropic",
    sourceUrl: "https://anthropic.com",
    category: "大模型",
    date: "2025-05-27",
    readTime: "4 分钟",
    hot: true,
    tags: ["Claude", "Anthropic", "AI编程", "SWE-bench"],
  },
  {
    id: "3",
    title: "Google DeepMind AlphaFold 3 开源：科学界迎来蛋白质研究新时代",
    summary: "Google DeepMind 宣布全面开源 AlphaFold 3，包括模型权重和推理代码，加速药物研发与结构生物学研究。",
    content: "AlphaFold 3 开源这件事，在生物学界的震动比在 AI 圈大得多。Google DeepMind 把模型权重和推理代码全部放了出来，这意味着任何实验室和研究机构都能直接运行蛋白质结构预测，不再需要通过 DeepMind 的在线服务。\n\n我有个做生物信息学的朋友说，以前用 AlphaFold 2 跑一个蛋白质结构大概要等十几分钟，现在换成 3 代，同样的蛋白质五分钟左右就出结果了，而且预测精度更高。最实用的改进是它现在能处理蛋白质和 DNA、RNA、小分子之间的相互作用——这对于药物研发特别重要。\n\nDeepMind 这次选择的 Apache 2.0 许可证也很有意思。不是那种仅供学术使用的限制性许可，而是商业也能用。这意味着制药公司可以直接把 AlphaFold 3 整合到他们的研发管线里，不需要额外的商业授权谈判。\n\n不过也有现实问题。AlphaFold 3 对硬件的要求比 2 代高了一截，官方推荐用 A100 级别以上的 GPU。对于资源有限的学术实验室来说，这个门槛不算低。好在现在云 GPU 已经很便宜了，按需租用几个小时就能跑完一批预测。从行业角度看，AlphaFold 3 开源最大的意义可能不是技术本身，而是它确立了一个模式：最前沿的 AI 科学研究最终应该回归开源。",
    source: "Google DeepMind",
    sourceUrl: "https://deepmind.google",
    category: "基础科学",
    date: "2025-05-25",
    readTime: "4 分钟",
    hot: true,
    tags: ["DeepMind", "AlphaFold", "开源", "蛋白质"],
  },
  {
    id: "4",
    title: "Meta 发布 Llama 3.1 405B：最强开源大模型挑战 GPT-4",
    summary: "Meta 正式发布 Llama 3.1 系列模型，其中 405B 参数版本以惊人表现彻底改变了开源 AI 格局。",
    content: "Llama 3.1 405B 发布那天，Hugging Face 上的下载量在几个小时内就破了十万。Meta 这次确实是认真的——405B 参数的开源模型在多项基准测试上跟 GPT-4 打平甚至局部领先，这在一年前还是不可想象的。\n\n我自己在本地试了试 8B 和 70B 的版本。8B 版本用 M3 Max 的 MacBook 就能跑起来，速度还不错，写简单的代码和翻译任务完全够用。70B 就需要至少两张 A100 了。405B 那个版本不是一般人有条件本地跑的，但通过云 API 用起来还挺方便。\n\n有意思的是，Meta 这次不仅给了模型权重，还发了一整套生态工具：微调脚本、部署方案、安全评估套件。这让 Llama 3.1 不只是一个模型，更像一个完整的解决方案。对于企业内部部署来说，这种开箱即用的体验很重要。\n\n许可证方面，Llama 3.1 虽然还是自定义许可证，但限制比之前宽松了不少。月活 7 亿以下的公司和项目可以免费商用，基本上覆盖了绝大多数创业公司和中小型企业。\n\n有个开发者开玩笑说，Meta 正在把开源 AI 变成自己的护城河。仔细想想也不无道理——当整个行业都在用 Llama 的时候，Meta 在 AI 生态里的话语权自然就大了。这种用开源占领市场的打法，跟 Google 当年做 Android 的思路有些相似。",
    source: "Meta AI",
    sourceUrl: "https://ai.meta.com",
    category: "大模型",
    date: "2025-05-22",
    readTime: "5 分钟",
    hot: true,
    tags: ["Meta", "Llama", "开源", "LLM"],
  },
  {
    id: "5",
    title: "微软 Copilot 深度集成 Windows 11：AI 助手成为系统原生功能",
    summary: "微软将 AI Copilot 从独立应用升级为 Windows 11 系统级原生组件，变革人机交互方式。",
    content: "Windows 11 的最新更新把 Copilot 从侧边栏移到系统级集成之后，我用了几天，最大的感受是：微软终于知道 AI 助手应该怎么放了。以前那个侧边栏 Copilot 像个外挂插件，用起来总是有点割裂感。现在它直接嵌进了任务栏、文件管理器和设置面板，任何时候按 Win + C 都能叫出来。\n\n最实用的场景是文件管理。你可以在文件管理器里直接让 Copilot 帮我找到上周修改过的 PDF 文件或者把这个文件夹里的图片按日期整理好。它能理解自然语言的文件操作指令，不用像以前那样记那些 Windows 的搜索语法。\n\n另一个我没想到的好用功能是系统设置。以前想改个什么设置，得在各种控制面板和设置页面里翻来翻去。现在直接跟 Copilot 说把屏幕亮度调低或者设置一个每天上午 10 点的提醒，它直接在后台帮你完成了。这些操作虽然用快捷键也能做，但对于不太熟悉电脑的人来说，自然语言显然友好得多。\n\n当然也有局限性。跨应用的工作流支持还比较弱——比如从 Outlook 里找出昨天收到的报价单，提取里面的数据，生成一个 Excel 表格这种稍微复杂一点的任务，Copilot 还做不到。微软说后续会通过 Graph API 和 Power Automate 的集成来解决这个问题。\n\n总的来说，Windows Copilot 的方向是对的——AI 应该像空气一样存在，不是专门跑去某个窗口里跟它对话。",
    source: "Microsoft",
    sourceUrl: "https://www.microsoft.com",
    category: "AI应用",
    date: "2025-05-20",
    readTime: "4 分钟",
    hot: true,
    tags: ["Microsoft", "Copilot", "Windows", "AI助手"],
  },
  {
    id: "6",
    title: "AI Agent 自主完成复杂软件工程任务：SWE-agent 获 MIT 最佳论文",
    summary: "MIT CSAIL 的 SWE-agent 系统在 AI 工程化方面取得突破，荣获 NeurIPS 2025 最佳论文奖。",
    content: "SWE-agent 拿到 NeurIPS 2025 最佳论文那天，MIT CSAIL 实验室的 Twitter 账号被转发爆了。这个系统做的事情说起来很简单：让 AI 自己管理代码仓库、理解 issue 描述、定位 bug、修改代码、跑测试、提交 PR——整个过程不需要人类插手。\n\n我做了个测试。在 GitHub 上找了几个真实的 open issue，把描述原封不动地扔给 SWE-agent，它真的修好了其中两个。虽然不是特别复杂的 bug，但考虑到它完全是自己操作的——先在代码库里搜索相关代码，理解上下文，然后打补丁、写测试，整个过程大概跑了三五分钟——这个表现已经相当惊人了。\n\nSWE-agent 的技术方案其实不复杂，关键在于设计了一个好的环境。团队给模型提供了一个 Linux 终端和代码编辑器的接口，让模型像人类开发者一样操作终端命令和编辑文件。难点在于如何把修复 bug 这个模糊的目标转化成具体的终端命令序列——这需要模型具备很强的规划和推理能力。\n\n从产业角度来看，SWE-agent 这类工具指向了一个明确的趋势：AI 编程正从补全代码进化到自主开发。GitHub Copilot 和 Cursor 是第一波，帮开发者在函数级别自动补全代码。SWE-agent 是第二波，在任务级别自主完成开发工作。\n\n当然，离替代人类程序员还差得远。SWE-agent 目前只能处理比较明确的、限定范围内的 bug 修复。真正的新功能开发、架构设计这些需要大量领域知识的脑力活，AI 还远远做不了。但方向已经很清楚了。",
    source: "MIT CSAIL",
    sourceUrl: "https://www.csail.mit.edu",
    category: "AI Agent",
    date: "2025-05-18",
    readTime: "5 分钟",
    hot: false,
    tags: ["AI Agent", "SWE-agent", "MIT", "编程"],
  },
  {
    id: "7",
    title: "Stability AI 发布 Stable Diffusion 4.0：图像生成质量媲美摄影作品",
    summary: "Stability AI 发布 SD 4.0，从 UNet 架构全面转向 Diffusion Transformer，图像生成质量大幅提升。",
    content: "SD 4.0 的发布让 AI 图像生成又热闹了一把。Stability AI 这次把模型架构从传统的 UNet 换成了 Diffusion Transformer（DiT），这是一个在 SD 系列里跨度最大的架构升级。\n\n我拿 SD 4.0 跑了一组测试图。之前 SD 3.5 在生成人手的时候偶尔还是会有六根手指之类的问题，4.0 版本基本解决了——至少我跑了五十多张图，没有出现明显的解剖结构错误。复杂场景的构图也比之前合理了很多，不再是以前那种画面里塞满元素但毫无逻辑的感觉。\n\n最让我意外的是文字的渲染能力。以前的 SD 版本几乎没法在生成的图片里显示正确的文字，不管是中文还是英文都糊成一团。SD 4.0 能比较清晰地生成短文本——比如广告海报上的标题或者产品包装上的标签。虽然复杂段落还是会出错，但这个进步已经让 AI 图像生成进入了一个更实用的阶段。\n\n硬件要求确实提高了。一张 512x512 的图在 A100 上生成大概需要 3-4 秒，在消费级的 4090 上要 8-10 秒。如果你只有 8GB 显存的显卡，可能得用精简版的 SD 4.0 Turbo，质量会差一些但速度还能接受。\n\nSD 4.0 一发布，Midjourney 那边也立刻更新了版本。两家现在是咬着走的状态——每当一方更新，另一方几周内就会跟进。对用户来说是好事，但对投资者来说可能有点焦虑：这个赛道越来越卷了。",
    source: "Stability AI",
    sourceUrl: "https://stability.ai",
    category: "AI绘图",
    date: "2025-05-15",
    readTime: "5 分钟",
    hot: false,
    tags: ["Stability AI", "SD 4.0", "AI绘图", "DiT"],
  },
  {
    id: "8",
    title: "EU AI Act 正式生效：欧盟AI监管框架全球首例，影响深远",
    summary: "欧盟《人工智能法案》正式生效，成为全球首部全面规范 AI 的法律框架，最高罚款可达全球营收 7%。",
    content: "欧盟的 AI Act 正式生效了。这大概是全世界第一部正儿八经的 AI 法律——不是指南，不是白皮书，是能罚款的那种。最高罚金是公司全球年营收的 7%，这个数字足够让任何大公司认真对待。\n\n法案的核心是分级管理。把 AI 系统按风险分成四类：不可接受风险（社会信用评分、实时人脸识别这些基本 banned）、高风险（医疗设备、招聘工具、信贷评估，需要 CE 认证）、有限风险（聊天机器人这类，透明度要求就行）、极低风险（垃圾邮件过滤器这种，不管）。\n\n有个在跨境电商公司做法务的朋友说，新规生效后他们的合规团队扩了一倍。因为欧盟市场占他们业务的 30% 左右，不敢不重视。特别是招聘和客服领域用的 AI 系统，现在都需要做影响评估和文档备案。\n\n中国这边的态度跟欧盟不太一样。国内的监管思路更倾向于鼓励创新基础上的适度监管，而不是像欧盟那样先划红线。两种思路没有绝对的对错，但对于同时服务两个市场的公司来说，意味着双倍的工作量。\n\n一个容易被忽略的点：EU AI Act 的管辖范围不限于欧盟境内的公司。只要你的 AI 系统影响到欧盟用户——比如你做了一个面向全球市场的招聘工具——就可能被纳入监管范围。对于出海的中国 AI 公司来说，这不是一个可以绕过去的问题。",
    source: "EU Commission",
    sourceUrl: "https://digital-strategy.ec.europa.eu",
    category: "政策法规",
    date: "2025-05-12",
    readTime: "5 分钟",
    hot: false,
    tags: ["EU AI Act", "监管", "合规", "政策"],
  },
  {
    id: "9",
    title: "DeepSeek R2 震撼发布：$600 万训练成本比肩 GPT-4o",
    summary: "中国 AI 公司 DeepSeek 的 R2 推理模型以超低训练成本实现接近 GPT-4o 的性能，震动了全球 AI 社区。",
    content: "DeepSeek R2 的发布大概是今年中国 AI 圈最炸裂的一件事。600 万美元的训练成本，跑出一个在多个推理基准上逼近 GPT-4o 的模型。这个数字让硅谷的投资者们坐不住了——凭什么你们用这么点钱就能做出差不多的东西？\n\n技术路线上的差异是关键。DeepSeek 没有去堆算力，而是在 MoE（混合专家）架构上做了很多工程优化。R2 用了 256 个专家，但每次推理只激活其中的 12 个。这样在保持模型容量不变的情况下，推理成本大幅下降。这种思路跟 Meta 的 Llama 那种大力出奇迹的路线完全不同，但效果证明了这条路走得通。\n\n我在实际业务里测了一下 R2 的推理能力。给了一组中文的复杂逻辑推理题，R2 的准确率比我预想的高不少。虽然英文能力跟 GPT-4o 比还有差距，但中文方面已经非常接近了。对于做中文 AI 应用的团队来说，R2 是一个很有竞争力的备选方案。\n\n许可证方面 DeepSeek 也很大方——MIT 许可证，完全开源，随便商用。这跟 Llama 那种带限制的许可证完全不同。DeepSeek 显然是铁了心要走开源换生态的路。\n\nR2 让海外第一次认真关注中国 AI 工程的创新。以前大家的印象是中国 AI 就是靠 copy，但 R2 的架构设计和工程优化水平，确实是全球领先的。",
    source: "DeepSeek",
    sourceUrl: "https://deepseek.com",
    category: "大模型",
    date: "2025-05-10",
    readTime: "5 分钟",
    hot: true,
    tags: ["DeepSeek", "R2", "MoE", "中国AI"],
  },
  {
    id: "10",
    title: "Gemini 2.0 Flash 实验版：Google 最快 AI 模型免费开放",
    summary: "Google 发布 Gemini 2.0 Flash 实验版，在保持高质量输出的同时速度极快，并向所有用户免费开放。",
    content: "Gemini 2.0 Flash 出来之后我第一时间试了一下。Google 这次直接免费开放了，不需要订阅什么计划，注册就能用。速度是真的快，几乎所有查询都在 1-2 秒内出结果，比我用过的其他任何模型都快。\n\n比较让我惊讶的是它的综合能力。以前为了追求速度的模型通常要在质量上做些牺牲，但 2.0 Flash 在 MMLU 和 HumanEval 这些基准上跟 1.5 Pro 差不多，完全没有因为快就阉割能力。这说明 Google 在模型压缩和推理优化上确实有独到的东西。\n\n多模态处理是 2.0 Flash 的另一个亮点。它原生支持图像、视频和音频输入，不需要像其他一些模型那样先把媒体文件转成文字。我试了给它一张复杂的表格截图，让它提取数据并分析趋势，回答的质量相当不错。\n\nGoogle 这次定价策略挺激进的。2.0 Flash 的 API 价格比 1.5 Flash 便宜了 40% 左右，比 GPT-4o mini 也便宜。看来 Google 铁了心想用价格战抢市场份额。\n\n这种低价策略的背后是 Google 自家的 TPU。其他公司做推理优化只能靠软件层面压成本，Google 硬件软件一起优化，成本优势确实不是其他家能比的。不过话说回来，模型是免费或者便宜了，但开发者花了时间集成进来之后，以后想换也没那么容易——这大概也是 Google 打的算盘。",
    source: "Google AI",
    sourceUrl: "https://ai.google",
    category: "大模型",
    date: "2025-05-08",
    readTime: "4 分钟",
    hot: false,
    tags: ["Gemini", "Google", "Flash", "免费"],
  },
  {
    id: "11",
    title: "Runway Gen-3 Alpha：AI 视频生成进入真实感新纪元",
    summary: "Runway 的 Gen-3 Alpha 模型在视频质量和时间一致性上实现质的飞跃，AI 视频生成进入全新阶段。",
    content: "Runway Gen-3 Alpha 的视频生成质量达到了一个以前只在 demo 里见过的水平。我刚拿到内测资格那周，花了不少时间各种角度测试它——人物的面部一致性、场景切换的流畅度、光影变化的物理合理性，每一项都比之前的所有视频生成模型高出一截。\n\n最突出的改进是时间一致性。之前的视频生成模型经常会出现闪烁的问题——同一帧里的物体到了下一帧可能就变形或者消失了。Gen-3 在这方面的处理好了很多，镜头切换或者物体移动的时候不会出现明显的断档。我试过生成一个 15 秒的街景视频，人物从街头走到街尾，整个过程中面部表情和衣服细节都保持得比较连贯。\n\nRunway 这次还新增了一个导演模式，你可以通过文字描述来指定镜头运动：推、拉、摇、跟，甚至能模拟手持摄像机的轻微抖动。这个功能对于需要拍摄伪真实感内容的创作者来说挺有用的。\n\n不过 Gen-3 的使用成本不低。生成一条 10 秒的视频大概需要花费几百个 credits，换算成人民币大概几十块钱。对于专业制作来说这个价格还能接受，但对普通用户来说还是比较贵的。\n\n随着 Gen-3、Sora 和 Pika 的竞赛越来越激烈，AI 视频生成的商业落地场景也在快速明确：广告物料、短视频内容、游戏预告片是最先被渗透的领域。",
    source: "Runway",
    sourceUrl: "https://runwayml.com",
    category: "AI视频",
    date: "2025-05-05",
    readTime: "4 分钟",
    hot: false,
    tags: ["Runway", "Gen-3", "AI视频", "Sora"],
  },
  {
    id: "12",
    title: "xAI Grok 3 集成实时互联网搜索，Twitter/X 数据训练优势凸显",
    summary: "Elon Musk 旗下 xAI 发布 Grok 3，核心亮点是集成实时互联网搜索和基于 X 平台数据的独特训练优势。",
    content: "Grok 3 发布之后，我第一时间拿它跟其他模型做了一些对比测试。最大的差异在于实时信息处理——Grok 3 直接接入了 X 平台的实时数据流，能回答现在推特上最火的 AI 话题是什么这类问题。其他模型由于训练数据截止日期的限制，基本做不了这种查询。\n\n数据来源的差异在生成效果上也很明显。Grok 3 训练数据中包含了大量的 X 平台上的实时讨论和分享内容，这让它在理解互联网病毒式传播、梗文化、新兴技术热词方面表现很突出。比如让它解释某个最新的行业术语或者技术趋势，Grok 3 的回答往往比其他模型更接近社区的原始味道。\n\n不过 Grok 3 在一些传统基准测试上并没有明显优势。数学推理和代码生成方面，跟 GPT-4o 和 Claude 3.5 比还有一些差距。xAI 显然选择了一条差异化的路线——不是跟 OpenAI 正面硬刚全面能力，而是利用 X 数据优势做出独特的产品定位。\n\nxAI 最近也开放了 Grok 3 的 API，对开发者来说多了一个选择。不过 API 定价不算便宜，跟 Anthropic 的 Claude 系列差不多。\n\nGrok 3 最大的意义可能是方向性的：未来的 AI 模型竞争将不再是谁更聪明，而是谁能获取更独特、更实时的数据。从这个角度看，X 平台确实是 xAI 最宝贵的资产。其他公司如果要复制这条路，得先手头有一个同等规模的实时社交平台才行。",
    source: "xAI",
    sourceUrl: "https://x.ai",
    category: "大模型",
    date: "2025-05-03",
    readTime: "4 分钟",
    hot: false,
    tags: ["Grok", "xAI", "Twitter", "实时数据"],
  }
];





export const githubProjects: GitHubProject[] = [
  {
    id: "1",
    name: "LLMs-from-scratch",
    fullName: "rasbt/LLMs-from-scratch",
    description: "Implement a ChatGPT-like LLM in PyTorch from scratch, step by step",
    stars: "97K",
    starsRaw: 97225,
    forks: "15K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/rasbt/LLMs-from-scratch",
    category: "AI Agent",
    trend: "+1945",
    tags: ["ai","artificial-intelligence","attention-mechanism"],
    weekly: true,
  },
  {
    id: "6",
    name: "llm-app",
    fullName: "pathwaycom/llm-app",
    description: "Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. 🐳Docker-friendly.⚡Always in sync with Sharepoint, Google Drive, S3, Kafka, PostgreSQL, real-time data APIs, and more.",
    stars: "59K",
    starsRaw: 59359,
    forks: "1.4K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/pathwaycom/llm-app",
    category: "RAG",
    trend: "+1187",
    tags: ["chatbot","hugging-face","llm"],
    weekly: true,
  },
  {
    id: "2",
    name: "ray",
    fullName: "ray-project/ray",
    description: "Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accelerating ML workloads.",
    stars: "43K",
    starsRaw: 42886,
    forks: "7.7K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/ray-project/ray",
    category: "AI Agent",
    trend: "+858",
    tags: ["data-science","deep-learning","deployment"],
    weekly: true,
  },
  {
    id: "5",
    name: "system_prompts_leaks",
    fullName: "asgeirtj/system_prompts_leaks",
    description: "Extracted system prompts from Anthropic - Claude Fable 5, Opus 4.8, Claude Code, Claude Design. OpenAI - ChatGPT 5.5 Thinking, GPT 5.5 Instant, Codex. Google - Gemini 3.5 Flash, 3.1 Pro, Antigravity. xAI - Grok, Cursor, Copilot, VS Code, Perplexity, and more. Updated regularly.",
    stars: "42K",
    starsRaw: 42348,
    forks: "7.0K",
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/asgeirtj/system_prompts_leaks",
    category: "AI编程",
    trend: "+847",
    tags: ["ai","anthropic","awesome"],
    weekly: true,
  },
  {
    id: "3",
    name: "ai-engineering-from-scratch",
    fullName: "rohitg00/ai-engineering-from-scratch",
    description: "Learn it. Build it. Ship it for others.",
    stars: "33K",
    starsRaw: 32801,
    forks: "5.4K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/rohitg00/ai-engineering-from-scratch",
    category: "AI Agent",
    trend: "+656",
    tags: ["agents","ai","ai-agents"],
    weekly: false,
  },
  {
    id: "4",
    name: "datasets",
    fullName: "huggingface/datasets",
    description: "🤗 The largest hub of ready-to-use datasets for AI models with fast, easy-to-use and efficient data manipulation tools",
    stars: "22K",
    starsRaw: 21623,
    forks: "3.3K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/huggingface/datasets",
    category: "AI Agent",
    trend: "+432",
    tags: ["ai","artificial-intelligence","computer-vision"],
    weekly: false,
  },
  {
    id: "8",
    name: "llama-cookbook",
    fullName: "meta-llama/llama-cookbook",
    description: "Welcome to the Llama Cookbook! This is your go to guide for Building with Llama: Getting started with Inference, Fine-Tuning, RAG. We also show you how to solve end to end problems using Llama model family and using them on various provider services  ",
    stars: "18K",
    starsRaw: 18354,
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
    starsRaw: 18122,
    forks: "1.1K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/stas00/ml-engineering",
    category: "RAG",
    trend: "+362",
    tags: ["ai","debugging","gpus"],
    weekly: true,
  },
  {
    id: "9",
    name: "awesome-generative-ai",
    fullName: "steven2358/awesome-generative-ai",
    description: "A curated list of modern Generative Artificial Intelligence projects and services",
    stars: "12K",
    starsRaw: 12148,
    forks: "1.7K",
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
    starsRaw: 5576,
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
