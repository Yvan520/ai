import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { aiTrends } from "../data/aiData";

const timeline = [
  {
    year: "2022",
    event: "ChatGPT 发布",
    desc: "OpenAI 发布 ChatGPT，引爆全球 AI 浪潮，3天获得100万用户",
    color: "bg-violet-500",
    icon: "🚀",
  },
  {
    year: "2023",
    event: "GPT-4 & 多模态元年",
    desc: "GPT-4、Claude、Gemini 相继登场，大模型多模态能力成标配",
    color: "bg-blue-500",
    icon: "🧠",
  },
  {
    year: "2024",
    event: "AI Agent 崛起",
    desc: "AI Agent 从概念走向实践，开源模型生态蓬勃发展，DeepSeek 震惊业界",
    color: "bg-cyan-500",
    icon: "🤖",
  },
  {
    year: "2025",
    event: "端侧 AI & 自主化时代",
    desc: "本地部署主流化，AI Agent 实现代码级自主任务，多模态全面融合",
    color: "bg-emerald-500",
    icon: "⚡",
  },
  {
    year: "2026+",
    event: "AGI 边界突破？",
    desc: "推理能力持续增强，AI 逐步具备跨领域自主学习，AGI 讨论升温",
    color: "bg-orange-500",
    icon: "🌟",
  },
];

const futureTopics = [
  { icon: "🧬", title: "AI + 生物科学", desc: "AlphaFold 系列推动蛋白质研究、药物发现革命" },
  { icon: "🚗", title: "自动驾驶突破", desc: "端到端AI驾驶模型让L4级自动驾驶加速商用落地" },
  { icon: "⚛️", title: "量子+AI融合", desc: "量子计算与AI结合，指数级提升优化问题求解能力" },
  { icon: "🎭", title: "AI创作产业化", desc: "影视、音乐、游戏内容生产全面AI化，创意门槛消失" },
  { icon: "🔐", title: "AI安全与对齐", desc: "超级对齐研究成热门，AI安全监管框架全球铺开" },
  { icon: "🌍", title: "边缘AI普及", desc: "手机、PC、IoT设备运行本地AI成标配，隐私保护升级" },
];

export default function TrendsSection() {
  const navigate = useNavigate();
  return (
    <section id="trends" className="py-20 bg-slate-950/60 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">AI Insights</span>
            <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            趋势洞察 & 未来展望
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            深度解析 AI 行业六大核心趋势，把握技术演进方向
          </p>
        </motion.div>

        {/* Trend Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {aiTrends.map((trend, i) => (
            <motion.div
              key={trend.id}
              onClick={() => navigate(`/trends/${trend.id}`)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-slate-900/60 border border-white/[0.06] hover:border-orange-500/20 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-900/80 overflow-hidden cursor-pointer"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${trend.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="text-4xl mb-4">{trend.icon}</div>

              {/* Stats */}
              <div className="flex items-end gap-2 mb-3">
                <span className={`text-3xl font-black bg-gradient-to-r ${trend.color} bg-clip-text text-transparent`}>
                  {trend.stats}
                </span>
                <span className="text-slate-500 text-xs mb-1">{trend.growth}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-300 transition-colors">
                {trend.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {trend.description}
              </p>

              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                  className={`h-full bg-gradient-to-r ${trend.color} origin-left`}
                  style={{ width: i === 0 ? "95%" : i === 1 ? "85%" : i === 2 ? "78%" : i === 3 ? "70%" : i === 4 ? "65%" : "60%" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-black text-white text-center mb-10">
            🗺️ AI 发展时间线
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-orange-500 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-slate-900/80 border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.15] transition-all duration-200">
                      <div className="flex items-center gap-2 mb-2 justify-start md:justify-inherit">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-white font-bold">{item.event}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg relative z-10`}>
                    {item.year.slice(2)}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Future Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-black text-white text-center mb-10">
            🔭 AI 未来关注方向
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureTopics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-4 bg-slate-900/40 border border-white/[0.05] hover:border-white/[0.12] rounded-xl p-4 transition-all duration-300"
              >
                <span className="text-3xl flex-shrink-0">{topic.icon}</span>
                <div>
                  <div className="text-white font-semibold mb-1">{topic.title}</div>
                  <div className="text-slate-400 text-sm">{topic.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
