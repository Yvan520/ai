import { motion } from "framer-motion";

const liveStats = [
  { label: "今日AI新闻", value: "247", unit: "条", icon: "📰", color: "text-violet-400" },
  { label: "GitHub新增Stars", value: "48.2K", unit: "", icon: "⭐", color: "text-yellow-400" },
  { label: "新开源AI项目", value: "1,342", unit: "个", icon: "🚀", color: "text-cyan-400" },
  { label: "AI工具上架", value: "23", unit: "款", icon: "🛠️", color: "text-green-400" },
  { label: "活跃AI社区", value: "4.3M", unit: "开发者", icon: "👥", color: "text-orange-400" },
];

export default function StatsBar() {
  return (
    <div className="bg-slate-900/60 border-b border-white/[0.05] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          {liveStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 flex-shrink-0 group"
            >
              <span className="text-lg">{stat.icon}</span>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-base font-black ${stat.color}`}>{stat.value}</span>
                  {stat.unit && <span className="text-xs text-slate-500">{stat.unit}</span>}
                </div>
                <div className="text-xs text-slate-600 leading-tight">{stat.label}</div>
              </div>
              {i < liveStats.length - 1 && (
                <div className="w-px h-8 bg-white/[0.06] ml-4 flex-shrink-0 hidden sm:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
