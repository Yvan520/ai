import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { aiTrends } from "../data/aiData";
import DetailLayout from "../components/DetailLayout";

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

export default function TrendDetailPage() {
  const { id } = useParams<{ id: string }>();
  const trend = aiTrends.find((t) => t.id === id);

  if (!trend) return <Navigate to="/trends" replace />;

  return (
    <DetailLayout
      title={`${trend.icon} ${trend.title}`}
      backTo="/trends"
      backLabel="← 返回趋势洞察"
    >
      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-white/[0.06]">
        <div className="flex items-end gap-2">
          <span className={`text-3xl font-black bg-gradient-to-r ${trend.color} bg-clip-text text-transparent`}>
            {trend.stats}
          </span>
          <span className="text-slate-500 text-sm mb-1">{trend.growth}</span>
        </div>
      </div>

      {/* Description */}
      <div className="bg-orange-500/5 border-l-4 border-orange-500/40 rounded-r-xl px-5 py-4 mb-8">
        <p className="text-orange-200 text-base leading-relaxed italic">
          {trend.description}
        </p>
      </div>

      {/* Full content */}
      <div className="text-slate-300 leading-relaxed">
        {formatContent(trend.content)}
      </div>

      {/* Progress bar */}
      <div className="mt-8 pt-6 border-t border-white/[0.06]">
        <div className="text-slate-500 text-sm mb-3">趋势热度</div>
        <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${trend.color} origin-left rounded-full`}
            style={{ width: trend.id === "1" ? "95%" : trend.id === "2" ? "85%" : trend.id === "3" ? "78%" : trend.id === "4" ? "70%" : trend.id === "5" ? "65%" : "60%" }}
          />
        </div>
      </div>
    </DetailLayout>
  );
}
