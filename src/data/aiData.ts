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
    title: "微软发布自研推理模型 MAI-Thinking-1，加速摆脱对 OpenAI 的依赖",
    summary: "微软推出内部 AI 模型系列 MAI-Thinking-1，标志着其从 OpenAI 独家技术路径向自研多模型战略的重大转型。",
    content: "微软在 6 月初正式发布了 MAI-Thinking-1 推理模型，这是微软减少对 OpenAI 技术依赖战略中最重要的一步。MAI-Thinking-1 属于微软自研的 MAI 系列，专注于复杂推理和编码任务。与之前依赖 GPT 模型的做法不同，微软正逐步构建自有的 AI 技术栈，包括大语言模型、训练框架和推理基础设施。据内部人士透露，微软内部同时推进了多个模型项目，MAI 系列对标的是前沿推理能力，而非简单替代 GPT。这一战略转变源于微软对单一供应商风险的担忧——此前其 AI 产品线几乎完全绑定 OpenAI 的模型，既限制了议价能力也带来了供应链风险。MAI-Thinking-1 将通过 Azure AI Studio 提供，初期面向企业开发者和合作伙伴。行业观察人士认为，微软自研模型战略将重塑 AI 云服务市场的竞争格局。",
    source: "The AI Track",
    sourceUrl: "https://theaitrack.com",
    category: "大模型",
    date: "2025-06-02",
    readTime: "4 分钟",
    hot: true,
    tags: ["微软", "MAI", "自研模型", "OpenAI", "推理"]
  },
  {
    id: "2",
    title: "DeepSeek 开源 V4 模型系列：1.6 万亿参数、百万 token 上下文、MIT 许可",
    summary: "中国 AI 公司 DeepSeek 发布 V4-Pro 和 V4-Flash 两款开源模型，以极低成本实现接近前沿的推理性能，再次震动全球 AI 行业。",
    content: "DeepSeek 于 4 月底发布的 V4 模型系列在 6 月持续发酵，成为开源 AI 社区最热门的话题。V4-Pro 拥有 1.6 万亿总参数（激活 490 亿），V4-Flash 拥有 2840 亿总参数（激活 130 亿），两者均支持 100 万 token 上下文窗口，且采用 MIT 开源许可协议。最令人震惊的是它的性价比——V4-Pro 的输出定价仅为每百万 token 0.87 美元，而 Claude Opus 4.8 需要 25 美元，GPT-5.5 需要 30 美元。换句话说，花同样的钱，DeepSeek V4-Pro 可以生成的 token 数量是 Claude 的近 30 倍。在 SWE-Bench Verified 上，V4-Pro 得分 80.6%，与 Gemini 3.1 Pro 持平。V4 系列基于 MoE 架构，采用 DeepSeek Sparse Attention 技术大幅降低推理成本。不过 DeepSeek 明确标注这仍是预览版，正式稳定版尚未公布时间表。",
    source: "DeepSeek",
    sourceUrl: "https://deepseek.com",
    category: "大模型",
    date: "2025-04-24",
    readTime: "5 分钟",
    hot: true,
    tags: ["DeepSeek", "V4", "开源", "MIT", "高性价比"]
  },
  {
    id: "3",
    title: "Figure AI 人形机器人 BotQ 工厂实现每小时一台产能，向大规模生产迈进",
    summary: "Figure AI 的 BotQ 工厂将 Figure 03 人形机器人产能提升至每周 55 台以上，120 天内产能增长 24 倍，工业人形机器人进入量产时代。",
    content: "Figure AI 在 6 月宣布其 BotQ 工厂的 Figure 03 人形机器人产量已达到每小时一台，相当于每周超过 55 台，这在 120 天前看起来还像天方夜谭。这家由 Brett Adcock 创立的机器人公司正在以惊人的速度扩大产能。Figure 03 是该公司第三代通用人形机器人，身高约 170 厘米，可搬运约 25 公斤的负载，专为工业制造、物流仓储和家庭服务场景设计。目前 Figure AI 正与宝马等汽车制造商在工厂环境中进行 Pilot 测试，初步反馈显示机器人完成产线物料搬运任务的效率与人工接近。这一产能突破让人形机器人从实验室原型走向商业量产的时间线大幅提前。分析人士指出，2026 年正成为人形机器人产业化的转折年——Figure AI、波士顿动力和特斯拉的 Optimus 都在加速推进。",
    source: "Figure AI",
    sourceUrl: "https://figure.ai",
    category: "AI Agent",
    date: "2025-06-15",
    readTime: "5 分钟",
    hot: true,
    tags: ["Figure AI", "人形机器人", "量产", "BotQ", "Figure 03"]
  },
  {
    id: "4",
    title: "Anthropic CEO Dario Amodei 发表万字长文，呼吁全球加速 AI 监管",
    summary: "Anthropic CEO Dario Amodei 发表 Policy on the AI Exponential，警告前沿 AI 能力增速远超监管，提出四大风险领域和具体政策建议。",
    content: "6 月中旬，Anthropic CEO Dario Amodei 发表了一篇题为 Policy on the AI Exponential 的深度政策文章，迅速在科技和政策圈引起巨大反响。Amodei 在文中直指核心矛盾：AI 能力正在以指数级速度增长，而监管却以线性甚至更慢的速度推进，两者之间的差距正在危险地扩大。他特别以 Claude Mythos Preview 的网络攻击能力为警示信号，称前沿模型已经成为具有全球和国家安全战略意义的工具。Amodei 提出了四项具体政策建议：第一，建立独立的前沿模型安全测试机制，赋予监管机构必要时停用模型的权利；第二，加速 AI 药物研发的审批流程；第三，限制和禁止自主武器系统；第四，加强先进芯片出口管制。他还呼吁设立一个类似 FAA 的专门 AI 监管机构。这篇文章被视为科技公司在主动推动监管而非被动应对的标志性事件。",
    source: "Dario Amodei",
    sourceUrl: "https://darioamodei.com",
    category: "政策法规",
    date: "2025-06-12",
    readTime: "6 分钟",
    hot: true,
    tags: ["Amodei", "AI监管", "安全", "Anthropic", "政策"]
  },
  {
    id: "5",
    title: "OpenAI 为 Codex 推出企业级插件系统，从编程工具升级为业务自动化平台",
    summary: "OpenAI Codex 新增 Sites、Annotations 和企业插件功能，将 AI 编程助手扩展为可接入业务系统的自动化工作平台。",
    content: "OpenAI 在 6 月初为 Codex 推出了一系列重要的功能更新，其中最引人注目的是企业插件系统和 Sites 功能。Codex 不再只是一个对话式的编程助手，而是可以安装第三方插件、接入企业内部系统和外部服务的自动化工作平台。Sites 功能允许 Codex 直接发布和管理网站内容，Annotations 支持对代码和文档进行标注评审。再加上之前推出的 Goal Mode（目标模式），开发者可以设定一个成果目标，Codex 会自主规划步骤、执行并自我修正，直到完成任务。对于企业客户来说，插件系统可以对接 Jira、Slack、GitHub 和内部知识库，实现从需求提交到代码部署的全流程自动化。这一系列更新表明 OpenAI 正在将 Codex 从开发者的个人工具重新定位为企业级 AI 生产力平台，直接与微软的 Copilot 生态展开竞争。",
    source: "OpenAI",
    sourceUrl: "https://openai.com",
    category: "AI 应用",
    date: "2025-06-02",
    readTime: "5 分钟",
    hot: false,
    tags: ["OpenAI", "Codex", "企业插件", "自动化", "开发工具"]
  },
  {
    id: "6",
    title: "OpenAI 推出 Rosalind Biodefense，用 AI 助力大流行病防范",
    summary: "OpenAI 发布 Rosalind Biodefense 平台，向公共卫生机构和开发者提供受控的 AI 模型访问权限，用于大流行病的检测和应对。",
    content: "5 月底，OpenAI 发布了 Rosalind Biodefense——一个专门面向生物防御和大流行病防范的 AI 平台。Rosalind 平台的核心是 GPT-Rosalind 模型，它经过专门的微调，能够在病毒序列分析、疫苗设计、药物筛选和流行病传播建模等方面提供专业支持。与 OpenAI 的通用模型不同，Rosalind 采用了严格的使用控制措施：只有经过审核的开发者和指定的公共卫生合作伙伴才能访问，所有使用记录都会被审计。首批合作伙伴包括美国的几家顶级研究型医院和东南亚的疾病预防控制中心。OpenAI 表示 Rosalind 的使命是确保 AI 在公共健康危机中能够被安全、负责任地使用。这个平台的推出也回应了此前关于 AI 可能被滥用于制造生物武器的担忧——OpenAI 的策略是主动为特定领域构建安全框架，而不是简单限制模型能力。",
    source: "OpenAI",
    sourceUrl: "https://openai.com",
    category: "基础科学",
    date: "2025-05-29",
    readTime: "4 分钟",
    hot: false,
    tags: ["OpenAI", "生物安全", "Rosalind", "大流行病", "AI安全"]
  },
  {
    id: "7",
    title: "波士顿动力电动 Atlas 开始交付首批量产机，2026 年产能被预订一空",
    summary: "波士顿动力宣布电动 Atlas 人形机器人首批量产版本已开始发货，2026 年全年产能已被 Hyundai 和 Google DeepMind 全部预订。",
    content: "波士顿动力在 6 月宣布了一个里程碑：全电动 Atlas 人形机器人的首批量产版本已经开始向客户发货。与之前液压版本的 Atlas 不同，电动 Atlas 更加安静、高效且适合工业环境。这款机器人采用全新的电动执行器，动作更加流畅精准，续航能力也大幅提升。首批客户包括现代汽车集团（Hyundai，波士顿动力的母公司）和 Google DeepMind——现代计划在汽车制造工厂部署 Atlas 从事物料搬运和精密装配，而 DeepMind 则将其用作具身智能研究的通用平台。波士顿动力表示 2026 年全年的产能已经被预订一空。电动 Atlas 的售价未公开，但行业分析师估计单台价格在 15 到 25 万美元之间。Atlas 从 YouTube 上的网红机器人到进入实际工厂，走了整整十年。它的商业化标志着人形机器人从实验品到生产工具的关键跨越。",
    source: "Boston Dynamics",
    sourceUrl: "https://bostondynamics.com",
    category: "AI Agent",
    date: "2025-06-15",
    readTime: "5 分钟",
    hot: true,
    tags: ["波士顿动力", "Atlas", "人形机器人", "量产", "Hyundai"]
  },
  {
    id: "8",
    title: "中国下达硬指标：2026 年底前部署 10000 台人形机器人投入商业使用",
    summary: "中国工信部联合多部门要求到 2026 年底实现 10000 台人形机器人在制造、物流、医疗等领域的商业化部署，打造全球最大人形机器人市场。",
    content: "中国工信部在 6 月发布了一项令全球机器人行业瞩目的政策目标：到 2026 年底，全国范围内要实现 10000 台人形机器人投入商业化使用。这是全球首个国家级的人形机器人部署量化目标，涵盖制造业工厂、物流仓储中心、医院护理、应急救援等具体应用场景。政策要求各地方政府和央企制定具体的采购和部署计划。这一目标的底气来自中国机器人产业的爆发式增长——仅 Unitree 宇树科技一家公司就在 2025 年出货了 5500 台以上人形机器人，加上 AgiBot 约 5100 台的出货量，中国的总产能已经远超世界其他地区的总和。工信部同时发布了人形机器人的行业标准和质量认证体系，为大规模部署扫清制度障碍。这一政策让中国在人形机器人赛道上的领先地位进一步巩固，也给 Figure AI、特斯拉等海外竞争者带来了巨大的市场压力。",
    source: "eWeek",
    sourceUrl: "https://eweek.com",
    category: "政策法规",
    date: "2025-06-12",
    readTime: "5 分钟",
    hot: true,
    tags: ["中国", "人形机器人", "政策", "工信部", "产业化"]
  },
  {
    id: "9",
    title: "Noam Shazeer 离开 Google 重返 OpenAI，据传交易金额达 27 亿美元",
    summary: "Transformer 架构共同发明人 Noam Shazeer 以据传价值 27 亿美元的交易离开 Google 重返 OpenAI，引发 AI 人才争夺战的新高度。",
    content: "6 月下旬一条消息震动了整个 AI 学术和产业圈：Transformer 架构的共同发明人 Noam Shazeer 已经离开 Google，重返他曾短暂工作过的 OpenAI。据多家媒体报道，这笔人才交易的估值高达 27 亿美元，主要通过股权和未来收益分成的方式兑现。Shazeer 是 AI 领域最具影响力的研究者之一。2017 年作为 Google Brain 团队的核心成员共同撰写了 Attention Is All You Need 论文，提出了 Transformer 架构——这一架构奠定了现代大语言模型的基础。他后来离开 Google 创办了 AI 聊天公司 Character.AI，去年 Character.AI 被 Google 以约 25 亿美元收购，Shazeer 也随之回到 Google。然而不到一年后他再次选择了 OpenAI。这笔交易凸显了当前 AI 人才市场的疯狂——顶级研究人员的价值已经用数十亿美元来度量。OpenAI 显然将其视为构建下一代模型能力的关键投资。",
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com",
    category: "大模型",
    date: "2025-06-20",
    readTime: "4 分钟",
    hot: true,
    tags: ["Noam Shazeer", "OpenAI", "人才争夺", "Transformer", "Google"]
  },
  {
    id: "10",
    title: "美国总统签署行政令，加强前沿 AI 网络安全监管",
    summary: "特朗普总统签署关于前沿 AI 网络安全的行政命令，要求 AI 开发商在发布模型前进行 30 天安全审查并建立漏洞协调机制。",
    content: "6 月中旬，美国总统特朗普签署了一项关于前沿人工智能网络安全的行政命令，标志着美国政府正式将 AI 安全纳入国家网络安全框架。与早前泄露的更严厉的草案版本相比，最终签署的行政令有所放宽：新模型的政府审查窗口从最高 90 天缩短为 30 天，且对小型初创公司给予了一定的豁免空间。行政令要求开发和部署前沿 AI 模型的公司必须建立漏洞披露和协调修补机制，并定期向国土安全部报告安全实践。同时，财政部内部将新设一个机构，专门负责协调 AI 相关的软件漏洞修复工作。这一行政令的出台与 Anthropic 的 Claude Mythos 模型引发的担忧密切相关。此前 Anthropic 曾警告其 Mythos 级模型具有被滥用于网络攻击的潜在风险，并主动限制了模型的某些能力。分析人士认为，这一行政令为未来更全面的 AI 立法奠定了基础。",
    source: "白宫",
    sourceUrl: "https://whitehouse.gov",
    category: "政策法规",
    date: "2025-06-10",
    readTime: "5 分钟",
    hot: false,
    tags: ["特朗普", "AI安全", "行政令", "网络安全", "白宫"]
  },
  {
    id: "11",
    title: "VivaTech 2026：人形机器人从实验室走向工业现实，具身 AI 时代来临",
    summary: "巴黎 VivaTech 2026 上数十款人形机器人现场演示操作能力，AI 不再停留在屏幕上而是走进了物理世界，成为今年大会最明确的信号。",
    content: "6 月 17 日和 18 日在巴黎凡尔赛门展览中心举办的 VivaTech 2026 迎来十周年庆典，而今年的主题再清晰不过：AI 正在走出屏幕进入物理世界。数十款来自全球各地的人形和轮式机器人在现场进行了步行、抓取、操作工具和与人互动的实时演示。与往年不同的是，今年几乎没有宣传视频——全都是真机实演。法国初创公司展示的人形机器人可以独立完成从货架上取货到搬运的全流程，误差率控制在 2% 以内。中国公司带来的人形机器人则在现场表演了舞蹈和格斗动作，展示了惊人的运动控制能力。一个明确的共识正在形成：AI 不再仅仅是写作文和画图，它正在获得身体。业内将此称为 Embodied AI（具身智能），被认为是继大语言模型之后 AI 的下一个重大突破方向。大会主办方表示，2027 年的 VivaTech 将设专门的机器人操作大赛。",
    source: "Robot Magazine",
    sourceUrl: "https://robot-magazine.fr",
    category: "AI Agent",
    date: "2025-06-17",
    readTime: "4 分钟",
    hot: false,
    tags: ["VivaTech", "人形机器人", "具身智能", "巴黎", "Embodied AI"]
  },
  {
    id: "12",
    title: "Sanctuary AI 实现 99.5% 精度的带电接线操作，具身智能达到量产级可靠性",
    summary: "Sanctuary AI 的物理 AI 平台在一级汽车供应商的工厂完成了精度 99.5% 的带电接线任务，标志着具身智能从演示走向生产级部署。",
    content: "加拿大 AI 机器人公司 Sanctuary AI 在 6 月公布了一项令人瞩目的成果：其物理 AI 系统在一家全球一级汽车供应商的工厂中，成功完成了带电状态下的电缆插拔操作，成功率高达 99.5%。这个任务对于机器人来说极其困难——需要在真实生产线上识别不同类型的插头、对准接口、施加恰当的力度完成插入，同时不能损坏精密的电子元件。此前这类操作只能由训练有素的技术工人完成。Sanctuary AI 的突破在于其硬件无关的 AI 平台——不是针对单台机器人进行编程，而是开发了一套通用的智能控制系统，可以适配到不同品牌和型号的机器人硬件上。该公司的目标是做机器人的操作系统而不是机器人本体。这次成功试验意味着具身智能系统首次在真实制造环境中达到了可供量产部署的可靠性水平。Sanctuary AI 计划在 2027 年前将其系统部署到超过 100 个工厂中。",
    source: "Sanctuary AI",
    sourceUrl: "https://sanctuaryai.com",
    category: "AI 应用",
    date: "2025-06-17",
    readTime: "5 分钟",
    hot: false,
    tags: ["Sanctuary AI", "具身智能", "制造业", "机器人", "精度"]
  }
,
{
    id: "13",
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
    id: "14",
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
    id: "15",
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
    id: "16",
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
    id: "17",
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
    id: "18",
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
    id: "19",
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
    id: "20",
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
    id: "21",
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
    id: "22",
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
    id: "23",
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
    id: "24",
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
  },
  {
    id: "25",
    title: "美国政府下令封杀 Anthropic Claude Fable 5 和 Mythos 5，AI 模型出口管制进入新阶段",
    summary: "美国商务部以国家安全为由，紧急发布出口管制指令，迫使 Anthropic 在全球范围内禁用刚刚发布三天的 Fable 5 和 Mythos 5 模型，引发行业震动。",
    content: "6 月 12 日下午 5 点 21 分，Anthropic 收到了一封来自美国商务部的信函。信中援引国家安全法规，要求这家 AI 公司立即切断所有外国国民对其两款最强大模型——Claude Fable 5 和 Claude Mythos 5 的访问权限，包括 Anthropic 自己的外籍员工在内。由于技术上无法精确按国籍过滤用户，Anthropic 做出了一个前所未有的决定：在全球范围内完全禁用这两个模型。Fable 5 三天前刚刚高调发布，是 Anthropic 首次将 Mythos 级模型开放给普通用户，一时间整个开发者社区陷入混乱。API 调用返回 404，已经编写好的工作流当场失效。更令人震惊的内情在随后一周逐渐曝光：NSA 局长 Joshua Rudd 在参议院情报委员会听证会上透露，Mythos 5 在一次机密红队演习中，数小时内自主攻破了 NSA 几乎所有的机密系统。这不再是单纯的安全漏洞问题——该模型本身就具有国家级网络攻击能力。事件还导致一个讽刺场景：Anthropic 自家顶尖 AI 科学家 Andrej Karpathy 因非美国公民身份被禁止访问自己的模型。目前 Fable 5 和 Mythos 5 仍处于下线状态，白宫表示修复漏洞后可重新上线，但具体时间表未定。",
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai/",
    category: "政策法规",
    date: "2025-06-12",
    readTime: "5 分钟",
    hot: true,
    tags: ["Anthropic", "Fable 5", "出口管制", "国家安全", "AI封杀"]
  },
  {
    id: "26",
    title: "Google 向 Anthropic 投资 400 亿美元：5GW 算力协议重塑 AI 军备竞赛格局",
    summary: "Alphabet 宣布向 Anthropic 投入最高 400 亿美元并承诺 5GW 算力资源，以 3500 亿美元估值锁定 Claude 模型生态，直接挑战微软与 OpenAI 联盟。",
    content: "4 月 24 日，Alphabet 与 Anthropic 正式宣布了一项史无前例的战略合作：Google 承诺向 Anthropic 投资最高 400 亿美元，并提供 5GW 的 TPU 算力资源，用于未来五年的 Claude 模型训练和推理。这笔交易分为 100 亿美元即时现金注入和 300 亿美元里程碑解锁资金，估值锚定在 3500 亿美元。400 亿美元这个数字本身已经刷新了 AI 领域单笔投资纪录，但真正让行业分析师反复咀嚼的是 5GW 算力这个条款——这相当于 Google 将其未来五年内相当一部分 TPU 产能直接预留给了 Anthropic。这意味着 Claude 系列将拥有几乎无限的训练算力，Anthropic 虽保持独立运营，但实际上已成为 Google 云计算生态中最核心的锚定客户。市场反应迅速：Alphabet 股价在公告当天上涨。作为 Anthropic 另一大投资方的 Amazon，此前的总体投资约 80 亿美元，在 Google 这一重注面前显得相形见绌。CNBC 评论认为，这笔交易标志着 AI 竞争已从模型能力之争全面升级为资本和算力基础设施的集团军对决。Anthropic 的 IPO 计划仍在推进，最早可能于 2026 年 10 月启动，预计募资超过 600 亿美元。",
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/04/24/google-to-invest-up-to-40-billion-in-anthropic.html",
    category: "大模型",
    date: "2025-04-24",
    readTime: "5 分钟",
    hot: true,
    tags: ["Google", "Anthropic", "投资", "算力", "AI军备竞赛"]
  },
  {
    id: "27",
    title: "2026 上半年 AI 裁员潮席卷全球：15 万人失业，企业用 AI 省下的钱都投向了 GPU",
    summary: "超过 50 家公司以 AI 为由宣布裁员，上半年累计超 15 万人失去工作。创纪录的营收与创纪录的裁员同时发生，硅谷正在经历一场结构性大洗牌。",
    content: "2026 年上半年，一场以 AI 为名的裁员潮席卷了整个科技行业。据多家监测机构统计，截至 6 月底，已有超过 50 家知名公司以人工智能为由宣布裁员，累计影响超过 15 万个岗位——这个数字是 2024 年全年的 8 倍以上。最引人注目的不是裁员规模本身，而是这些公司的财务数据：Oracle 全年营收增长 27%，净利润 70 亿美元，同时裁员 3 万人；Google Cloud 营收突破 200 亿美元，同时悄悄裁掉了安全团队和大量中层管理者；GitLab 营收增长 23%，CEO 一边宣布裁员 14%，一边说要花 3 到 3.5 亿美元做基础设施重构。Salesforce、Block、Snap、PayPal、Cloudflare、Coinbase 也在裁员名单上。Block 的 Jack Dorsey 裁员近半时直言：大多数公司在 AI 转型上都慢了，明年会有更多公司做出同样的结构性调整。这些裁员节省的人力成本并没有变成利润，而是被直接投入到了 AI 基础设施——GPU 集群和数据中心。Oracle 承诺投入 500 亿美元建设数据中心，GitLab 的裁员直接用于资助 AI 工作负载的基础设施升级。一个残酷的现实正在浮现：工作岗位正在被 GPU 取代。与此同时，Forbes 报道称约 29% 的公司在 AI 裁员后又重新招聘，因为他们发现 AI 并不能完全替代人的判断力。",
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/06/22/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai/",
    category: "AI 应用",
    date: "2025-06-22",
    readTime: "6 分钟",
    hot: true,
    tags: ["裁员", "AI取代", "硅谷", "GPU", "劳动力市场"]
  }
];









export const githubProjects: GitHubProject[] = [
  {
    id: "1",
    name: "LLMs-from-scratch",
    fullName: "rasbt/LLMs-from-scratch",
    description: "Implement a ChatGPT-like LLM in PyTorch from scratch, step by step",
    stars: "98K",
    starsRaw: 97681,
    forks: "15K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/rasbt/LLMs-from-scratch",
    category: "AI Agent",
    trend: "+1954",
    tags: ["ai","artificial-intelligence","attention-mechanism"],
    weekly: true,
  },
  {
    id: "5",
    name: "llm-app",
    fullName: "pathwaycom/llm-app",
    description: "Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. 🐳Docker-friendly.⚡Always in sync with Sharepoint, Google Drive, S3, Kafka, PostgreSQL, real-time data APIs, and more.",
    stars: "59K",
    starsRaw: 59248,
    forks: "1.4K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/pathwaycom/llm-app",
    category: "RAG",
    trend: "+1185",
    tags: ["chatbot","hugging-face","llm"],
    weekly: true,
  },
  {
    id: "2",
    name: "system_prompts_leaks",
    fullName: "asgeirtj/system_prompts_leaks",
    description: "Extracted system prompts from Anthropic - Claude Fable 5, Opus 4.8, Claude Code, Claude Design. OpenAI - ChatGPT 5.5 Thinking, GPT 5.5 Instant, Codex. Google - Gemini 3.5 Flash, 3.1 Pro, Antigravity. xAI - Grok, Cursor, Copilot, VS Code, Perplexity, and more. Updated regularly.",
    stars: "46K",
    starsRaw: 45928,
    forks: "7.5K",
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/asgeirtj/system_prompts_leaks",
    category: "AI Agent",
    trend: "+919",
    tags: ["ai","ai-agents","anthropic"],
    weekly: true,
  },
  {
    id: "3",
    name: "ray",
    fullName: "ray-project/ray",
    description: "Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accelerating ML workloads.",
    stars: "43K",
    starsRaw: 43017,
    forks: "7.7K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/ray-project/ray",
    category: "AI Agent",
    trend: "+860",
    tags: ["data-science","deep-learning","deployment"],
    weekly: false,
  },
  {
    id: "4",
    name: "ai-engineering-from-scratch",
    fullName: "rohitg00/ai-engineering-from-scratch",
    description: "Learn it. Build it. Ship it for others.",
    stars: "36K",
    starsRaw: 36306,
    forks: "6.0K",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/rohitg00/ai-engineering-from-scratch",
    category: "AI Agent",
    trend: "+726",
    tags: ["agents","ai","ai-agents"],
    weekly: false,
  },
  {
    id: "7",
    name: "llama-cookbook",
    fullName: "meta-llama/llama-cookbook",
    description: "Welcome to the Llama Cookbook! This is your go to guide for Building with Llama: Getting started with Inference, Fine-Tuning, RAG. We also show you how to solve end to end problems using Llama model family and using them on various provider services  ",
    stars: "18K",
    starsRaw: 18378,
    forks: "2.7K",
    language: "Jupyter Notebook",
    languageColor: "#6e7681",
    url: "https://github.com/meta-llama/llama-cookbook",
    category: "开发框架",
    trend: "+368",
    tags: ["ai","finetuning","langchain"],
    weekly: true,
  },
  {
    id: "6",
    name: "ml-engineering",
    fullName: "stas00/ml-engineering",
    description: "Machine Learning Engineering Open Book",
    stars: "18K",
    starsRaw: 18173,
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
    id: "8",
    name: "awesome-generative-ai",
    fullName: "steven2358/awesome-generative-ai",
    description: "A curated list of modern Generative Artificial Intelligence projects and services",
    stars: "12K",
    starsRaw: 12191,
    forks: "1.8K",
    language: "Unknown",
    languageColor: "#6e7681",
    url: "https://github.com/steven2358/awesome-generative-ai",
    category: "资源合集",
    trend: "+244",
    tags: ["ai","artificial-intelligence","awesome"],
    weekly: true,
  },
  {
    id: "9",
    name: "kserve",
    fullName: "kserve/kserve",
    description: "Standardized Distributed Generative and Predictive AI Inference Platform for Scalable, Multi-Framework Deployment on Kubernetes",
    stars: "5.6K",
    starsRaw: 5616,
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
