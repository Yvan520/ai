import { motion } from "framer-motion";

const tickerItems = [
  "🔥 OpenAI GPT-5 正式发布，推理速度提升3倍",
  "⭐ claude-code 本周 GitHub 新增 4.2K Stars",
  "🚀 DeepSeek R2 开源，性能媲美 GPT-4o",
  "📊 GitHub AI 仓库突破 430万，同比增178%",
  "🤖 Meta Llama 3.1 405B 开源，挑战 GPT-4",
  "💡 EU AI Act 正式生效，全球AI监管新里程碑",
  "🎨 Stable Diffusion 4.0 发布，图像质量媲美摄影",
  "📱 Ollama 本地部署突破 10M 次下载",
  "🧬 AlphaFold 3 完全开源，生物AI研究加速",
  "⚡ n8n AI自动化平台 GitHub Stars 突破 150K",
];

export default function NewsTicker() {
  const doubledItems = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-slate-900/80 border-y border-white/[0.05] py-3 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900/80 to-transparent z-10" />

      {/* Left badge */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        LIVE
      </div>

      <motion.div
        className="flex gap-8 pl-32"
        animate={{ x: [0, -50 + "%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {doubledItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 text-sm text-slate-300 whitespace-nowrap">
            <span>{item}</span>
            <span className="text-slate-700">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
