import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { newsData, categories, type NewsItem } from "../data/aiData";
import DetailLayout from "../components/DetailLayout";

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

function formatContent(text: string) {
  return text.split('\n\n').map((paragraph, i) => (
    <p key={i} className="text-slate-300 leading-relaxed mb-4 text-[15px]">
      {paragraph.split('\n').map((line, j) => (
        <span key={j}>
          {line.startsWith('- ') ? <span className="block ml-4 text-slate-400">• {line.slice(2)}</span> : line}
          {j < paragraph.split('\n').length - 1 && <br />}
        </span>
      ))}
    </p>
  ));
}

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = newsData.find((n) => n.id === id);

  if (!item) return <Navigate to="/news" replace />;

  return (
    <DetailLayout
      title={item.title}
      backTo="/news"
      backLabel="← 返回 AI 新闻"
      externalUrl={item.sourceUrl}
      externalLabel={`在 ${item.source} 阅读原文`}
    >
      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-white/[0.06]">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[item.category] || "bg-slate-700 text-slate-300 border-slate-600"}`}>
          {item.category}
        </span>
        <span className="text-sm text-slate-500">{item.date}</span>
        <span className="text-sm text-slate-500">📖 {item.readTime}</span>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">{item.source[0]}</span>
          </div>
          <span className="text-sm text-slate-400">{item.source}</span>
        </div>
      </div>

      {/* Summary highlight */}
      <div className="bg-violet-500/5 border-l-4 border-violet-500/40 rounded-r-xl px-5 py-4 mb-8">
        <p className="text-violet-200 text-base leading-relaxed italic">
          {item.summary}
        </p>
      </div>

      {/* Full content */}
      <div className="text-slate-300 leading-relaxed">
        {formatContent(item.content)}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.06]">
        {item.tags.map((tag) => (
          <span key={tag} className="text-xs text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
            #{tag}
          </span>
        ))}
      </div>
    </DetailLayout>
  );
}
