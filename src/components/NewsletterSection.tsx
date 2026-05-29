import { useState } from "react";
import { motion } from "framer-motion";

const sustainableFeatures = [
  {
    icon: "📰",
    title: "每日AI简报",
    desc: "每天精选5-10条最重要的AI资讯，5分钟了解行业动态"
  },
  {
    icon: "⭐",
    title: "GitHub周报",
    desc: "每周汇总最热AI开源项目，同步stars增长趋势"
  },
  {
    icon: "🔍",
    title: "深度分析",
    desc: "重要AI产品/论文的深度解读，不只是新闻转述"
  },
  {
    icon: "🤝",
    title: "社区讨论",
    desc: "AI从业者交流社区，分享经验、答疑解惑"
  }
];

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How to Build Sustainably Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full" />
              <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">Sustainable Growth</span>
              <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-violet-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              如何做成可持续发展的AI资讯网站？
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              好的内容平台需要持续的价值输出、稳定的用户群体和清晰的商业闭环
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {sustainableFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-slate-900/60 border border-white/[0.06] hover:border-violet-500/20 rounded-2xl p-5 text-center transition-all duration-300"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="text-white font-bold mb-2">{f.title}</div>
                <div className="text-slate-400 text-sm">{f.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="bg-gradient-to-r from-violet-950/50 to-slate-900/50 border border-violet-500/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-black text-xl mb-6 flex items-center gap-2">
              <span>🗺️</span> 网站可持续发展路线图
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  phase: "Phase 1",
                  label: "内容积累",
                  color: "text-cyan-400",
                  border: "border-cyan-500/30",
                  items: [
                    "✅ 聚合主流AI资讯源",
                    "✅ GitHub热榜追踪",
                    "✅ AI工具精选导航",
                    "🔄 每日自动更新",
                  ],
                },
                {
                  phase: "Phase 2",
                  label: "社区建设",
                  color: "text-violet-400",
                  border: "border-violet-500/30",
                  items: [
                    "⏳ 用户账号系统",
                    "⏳ 文章收藏与标注",
                    "⏳ 评论讨论区",
                    "⏳ 订阅专属简报",
                  ],
                },
                {
                  phase: "Phase 3",
                  label: "商业化",
                  color: "text-orange-400",
                  border: "border-orange-500/30",
                  items: [
                    "📋 AI工具付费推广",
                    "📋 企业AI报告订阅",
                    "📋 线上活动/课程",
                    "📋 API数据服务",
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className={`border ${phase.border} rounded-xl p-4 bg-white/[0.02]`}>
                  <div className={`${phase.color} font-mono text-xs font-bold mb-1`}>{phase.phase}</div>
                  <div className="text-white font-bold mb-3">{phase.label}</div>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="flex-shrink-0">{item.split(' ')[0]}</span>
                        <span>{item.split(' ').slice(1).join(' ')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Newsletter Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-violet-900/40 to-slate-900/60 border border-violet-500/20 rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
            <div className="text-4xl mb-4">📬</div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              订阅 AI 每日简报
            </h3>
            <p className="text-slate-400 mb-8">
              每天一封邮件，精选最重要的AI动态，不错过任何关键进展
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="输入你的邮箱地址..."
                  className="flex-1 bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-violet-600/30 whitespace-nowrap"
                >
                  立即订阅
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-500/10 border border-green-500/30 rounded-xl p-4"
              >
                <div className="text-2xl mb-2">🎉</div>
                <div className="text-green-300 font-semibold">订阅成功！</div>
                <div className="text-slate-400 text-sm mt-1">AI 每日简报将发送至您的邮箱</div>
              </motion.div>
            )}

            <p className="text-slate-600 text-xs mt-4">
              已有 <span className="text-slate-400 font-medium">12,847</span> 名 AI 爱好者订阅 · 随时退订 · 绝不骚扰
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
