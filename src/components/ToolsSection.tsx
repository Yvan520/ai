import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aiTools, toolCategories, type AITool } from "../data/aiData";

const categoryGradients: Record<string, string> = {
  "对话AI": "from-violet-500/20 to-purple-500/10 border-violet-500/20 hover:border-violet-400/40",
  "AI编程": "from-blue-500/20 to-cyan-500/10 border-blue-500/20 hover:border-blue-400/40",
  "图像生成": "from-pink-500/20 to-rose-500/10 border-pink-500/20 hover:border-pink-400/40",
  "视频生成": "from-red-500/20 to-orange-500/10 border-red-500/20 hover:border-red-400/40",
  "AI搜索": "from-amber-500/20 to-yellow-500/10 border-amber-500/20 hover:border-amber-400/40",
  "语音AI": "from-green-500/20 to-teal-500/10 border-green-500/20 hover:border-green-400/40",
  "AI平台": "from-indigo-500/20 to-blue-500/10 border-indigo-500/20 hover:border-indigo-400/40",
  "音乐AI": "from-cyan-500/20 to-sky-500/10 border-cyan-500/20 hover:border-cyan-400/40",
};

const categoryIcons: Record<string, string> = {
  "对话AI": "💬",
  "AI编程": "💻",
  "图像生成": "🎨",
  "视频生成": "🎬",
  "AI搜索": "🔍",
  "语音AI": "🎙️",
  "AI平台": "🤗",
  "音乐AI": "🎵",
};

function ToolCard({ tool, index }: { tool: AITool; index: number }) {
  const gradientClass = categoryGradients[tool.category] || "from-slate-700/20 to-slate-800/10 border-slate-600/20";

  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`group relative block bg-gradient-to-br ${gradientClass} border rounded-2xl p-5 transition-all duration-300 hover:shadow-xl backdrop-blur-sm cursor-pointer`}
    >
      {/* Badges */}
      <div className="absolute top-3 right-3 flex gap-1.5">
        {tool.isNew && (
          <span className="text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-0.5 rounded-full">
            NEW
          </span>
        )}
        {tool.isFree && (
          <span className="text-xs font-bold bg-green-500/20 border border-green-500/30 text-green-300 px-2 py-0.5 rounded-full">
            免费
          </span>
        )}
      </div>

      {/* Logo & Category */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
          {tool.logo}
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs">{categoryIcons[tool.category]}</span>
            <span className="text-xs text-slate-500">{tool.category}</span>
          </div>
          <div className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">
            {tool.name}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {tool.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tool.tags.map((tag) => (
          <span key={tag} className="text-xs text-slate-500 bg-white/[0.04] px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </motion.a>
  );
}

export default function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered = activeCategory === "全部"
    ? aiTools
    : aiTools.filter((t) => t.category === activeCategory);

  return (
    <section id="tools" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">AI Toolbox</span>
            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            精选 AI 工具导航
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            汇聚全球最强 AI 工具，按类别快速找到你需要的 AI 利器
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {toolCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-600/30"
                  : "bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat === "全部" ? "全部" : `${categoryIcons[cat]} ${cat}`}
            </button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Submit Tool CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-dashed border-white/[0.12] rounded-2xl px-8 py-5">
            <span className="text-2xl">➕</span>
            <div className="text-left">
              <div className="text-white font-semibold">发现好工具？</div>
              <div className="text-slate-400 text-sm">点击提交，与社区分享你发现的 AI 利器</div>
            </div>
            <button className="ml-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-medium px-5 py-2 rounded-lg transition-all duration-200 whitespace-nowrap">
              提交工具
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
