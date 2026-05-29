import { useParams, Navigate } from "react-router-dom";
import { aiTools, type AITool } from "../data/aiData";
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

const categoryGradients: Record<string, string> = {
  "对话AI": "from-violet-500/20",
  "AI编程": "from-blue-500/20",
  "图像生成": "from-pink-500/20",
  "视频生成": "from-red-500/20",
  "AI搜索": "from-amber-500/20",
  "语音AI": "from-green-500/20",
  "AI平台": "from-indigo-500/20",
  "音乐AI": "from-cyan-500/20",
};

export default function ToolDetailPage() {
  const { id } = useParams<{ id: string }>();
  const tool = aiTools.find((t) => t.id === id);

  if (!tool) return <Navigate to="/tools" replace />;

  return (
    <DetailLayout
      title={`${tool.logo} ${tool.name}`}
      backTo="/tools"
      backLabel="← 返回 AI 工具"
      externalUrl={tool.url}
      externalLabel={`访问 ${tool.name} 官网`}
    >
      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-white/[0.06]">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border bg-white/[0.06] text-slate-300 border-white/[0.12]`}>
          {tool.category}
        </span>
        {tool.isNew && (
          <span className="text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-0.5 rounded-full">NEW</span>
        )}
        {tool.isFree && (
          <span className="text-xs font-bold bg-green-500/20 border border-green-500/30 text-green-300 px-2 py-0.5 rounded-full">免费</span>
        )}
      </div>

      {/* Description */}
      <div className="bg-cyan-500/5 border-l-4 border-cyan-500/40 rounded-r-xl px-5 py-4 mb-8">
        <p className="text-cyan-200 text-base leading-relaxed italic">
          {tool.description}
        </p>
      </div>

      {/* Full content */}
      <div className="text-slate-300 leading-relaxed">
        {formatContent(tool.content)}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.06]">
        {tool.tags.map((tag) => (
          <span key={tag} className="text-xs text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
            #{tag}
          </span>
        ))}
      </div>
    </DetailLayout>
  );
}
