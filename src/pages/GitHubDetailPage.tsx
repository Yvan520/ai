import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { githubProjects, type GitHubProject } from "../data/aiData";
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

export default function GitHubDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = githubProjects.find((p) => p.id === id);

  if (!project) return <Navigate to="/github" replace />;

  return (
    <DetailLayout
      title={project.name}
      backTo="/github"
      backLabel="← 返回 GitHub 热榜"
      externalUrl={project.url}
      externalLabel="在 GitHub 查看项目"
    >
      {/* Meta header */}
      <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-white/[0.06]">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-slate-700/30 text-slate-300 border-slate-600">
          {project.fullName}
        </span>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-2 py-0.5">
            <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-yellow-300 font-bold text-xs">{project.stars}</span>
          </div>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400">{project.language}</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400">{project.forks} forks</span>
          <span className="text-slate-500">·</span>
          <span className="text-emerald-400 text-xs font-medium">{project.trend} /周</span>
        </div>
      </div>

      {/* Description */}
      <div className="bg-emerald-500/5 border-l-4 border-emerald-500/40 rounded-r-xl px-5 py-4 mb-8">
        <p className="text-emerald-200 text-base leading-relaxed italic">
          {project.description}
        </p>
      </div>

      {/* Full content */}
      <div className="text-slate-300 leading-relaxed">
        {project.content ? formatContent(project.content) : (
          <p className="text-slate-400 text-sm">暂无详细内容，点击下方按钮在 GitHub 查看项目详情。</p>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.06]">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
            #{tag}
          </span>
        ))}
      </div>
    </DetailLayout>
  );
}
