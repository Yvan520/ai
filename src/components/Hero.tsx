import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const floatingItems = [
  { text: "GPT-5", x: "10%", y: "20%", delay: 0 },
  { text: "Claude 3.5", x: "80%", y: "15%", delay: 0.5 },
  { text: "Llama 3.1", x: "15%", y: "70%", delay: 1 },
  { text: "DeepSeek", x: "75%", y: "65%", delay: 1.5 },
  { text: "Gemini 2.0", x: "50%", y: "10%", delay: 0.3 },
  { text: "Stable Diffusion", x: "85%", y: "45%", delay: 0.8 },
];

const stats = [
  { value: "4.3M+", label: "GitHub AI 项目" },
  { value: "178%", label: "LLM 项目年增" },
  { value: "100+", label: "主流 AI 工具" },
  { value: "实时", label: "资讯更新" },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url(/images/ai-hero-bg.jpg)" }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/40 via-transparent to-cyan-950/40" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Tags */}
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-slate-300 whitespace-nowrap">
            ✦ {item.text}
          </div>
        </motion.div>
      ))}

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-violet-300 text-sm font-medium">
            AI Universe · 你的人工智能情报站
          </span>
          <span className="text-violet-400 text-xs bg-violet-500/20 px-2 py-0.5 rounded-full">LIVE</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight tracking-tight"
        >
          掌握
          <span className="relative mx-3">
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
          前沿动态
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          聚合全球 AI 新闻资讯，追踪 GitHub 热门项目，探索最新 AI 工具，
          <br className="hidden sm:block" />
          洞察人工智能未来发展趋势。一站式 AI 情报中心。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => navigate("/news")}
            className="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50 hover:-translate-y-0.5"
          >
            <span>浏览最新资讯</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button
            onClick={() => navigate("/github")}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub 热榜</span>
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-4 text-center hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs">向下滚动</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
