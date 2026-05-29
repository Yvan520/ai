import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { githubProjects, githubCategories, type GitHubProject } from "../data/aiData";

function ProjectCard({ project, index }: { project: GitHubProject; index: number }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group block relative bg-slate-900/60 backdrop-blur-sm border border-white/[0.06] hover:border-emerald-500/30 rounded-2xl p-5 transition-all duration-300 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-emerald-500/5 cursor-pointer"
    >
      {/* Weekly Badge */}
      {project.weekly && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-lg">
          🔥 本周热门
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center flex-shrink-0 group-hover:from-emerald-700 group-hover:to-teal-700 transition-all duration-300">
            <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-xs text-slate-500 truncate">{project.fullName.split('/')[0]}/</div>
            <div className="text-white font-bold group-hover:text-emerald-300 transition-colors truncate">{project.name}</div>
          </div>
        </div>

        {/* Stars */}
        <div className="flex-shrink-0 flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-2.5 py-1">
          <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="text-yellow-300 text-xs font-bold">{project.stars}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-slate-500 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.06]">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
        <div className="flex items-center gap-3">
          {/* Language */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.languageColor }} />
            <span className="text-xs text-slate-400">{project.language}</span>
          </div>
          {/* Forks */}
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            {project.forks}
          </div>
        </div>
        {/* Trend */}
        <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-2 py-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          {project.trend} /周
        </div>
      </div>
    </motion.a>
  );
}

export default function GitHubSection() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered = activeCategory === "全部"
    ? githubProjects
    : githubProjects.filter((p) => p.category === activeCategory);

  // Sort by stars
  const sorted = [...filtered].sort((a, b) => b.starsRaw - a.starsRaw);

  return (
    <section id="github" className="py-20 bg-slate-950/50">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">GitHub Trending</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              AI 开源项目热榜
            </h2>
            <p className="text-slate-400 mt-2">追踪 GitHub 上最受开发者关注的 AI 项目</p>
          </div>
          <a
            href="https://github.com/trending"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            查看 GitHub Trending
          </a>
        </motion.div>

        {/* Top 3 Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {[
            { rank: "1", color: "from-yellow-500/20 to-orange-500/10", border: "border-yellow-500/20", icon: "🥇", label: "最受欢迎" },
            { rank: "2", color: "from-slate-400/10 to-slate-500/5", border: "border-slate-400/20", icon: "🥈", label: "热度亚军" },
            { rank: "3", color: "from-amber-700/20 to-amber-800/10", border: "border-amber-700/20", icon: "🥉", label: "季军项目" },
          ].map((item, i) => {
            const proj = [...githubProjects].sort((a, b) => b.starsRaw - a.starsRaw)[i];
            return (
              <motion.a
                key={i}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className={`relative bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-4 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs text-slate-400">{item.label}</span>
                </div>
                <div className="text-white font-bold text-lg mb-1">{proj.name}</div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-300 font-bold text-sm">{proj.stars}</span>
                  </div>
                  <div className="text-xs text-slate-400">{proj.language}</div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2"
        >
          {githubCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {sorted.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          数据每日自动同步 · 星数来源于 GitHub 官方API · 点击项目卡片直接跳转 GitHub
        </motion.p>
      </div>
    </section>
  );
}
