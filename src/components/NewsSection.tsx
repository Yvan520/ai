import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { newsData, categories, type NewsItem } from "../data/aiData";

const categoryColors: Record<string, string> = {
  "大模型": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "AI Agent": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "开源模型": "bg-green-500/20 text-green-300 border-green-500/30",
  "AI应用": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "科研突破": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "AI政策": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "AI绘图": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "AI视频": "bg-red-500/20 text-red-300 border-red-500/30",
};

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/news/${item.id}`)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative block bg-slate-900/60 backdrop-blur-sm border border-white/[0.06] hover:border-violet-500/30 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-violet-500/5"
    >
      {/* Hot Badge */}
      {item.hot && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
          🔥 HOT
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[item.category] || "bg-slate-700 text-slate-300 border-slate-600"}`}>
          {item.category}
        </span>
        <span className="text-xs text-slate-500 whitespace-nowrap">{item.date}</span>
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
        {item.title}
      </h3>

      {/* Summary */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {item.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {item.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-slate-500 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.06]">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">{item.source[0]}</span>
          </div>
          <span className="text-xs text-slate-400">{item.source}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">📖 {item.readTime}</span>
          <span className="text-xs text-violet-400 flex items-center gap-1">
            查看详情
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === "全部"
    ? newsData
    : newsData.filter((n) => n.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="news" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
              <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">Latest News</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              AI 最新动态
            </h2>
            <p className="text-slate-400 mt-2">持续追踪全球AI行业最重要进展</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>今日已更新 {newsData.length} 条</span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/30"
                  : "bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {displayed.map((item, i) => (
              <NewsCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-violet-500/30 text-slate-300 hover:text-white px-8 py-3 rounded-xl transition-all duration-300 font-medium"
            >
              {showAll ? (
                <>收起<svg className="w-4 h-4 rotate-180 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
              ) : (
                <>查看更多 ({filtered.length - 6} 条)
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
