import { useNavigate } from "react-router-dom";

const links = {
  "资讯": [
    { label: "AI新闻", path: "/news" },
    { label: "模型动态", path: "/news" },
    { label: "AI政策", path: "/news" },
    { label: "科研突破", path: "/news" },
  ],
  "项目": [
    { label: "GitHub热榜", path: "/github" },
    { label: "本周新星", path: "/github" },
    { label: "开源模型", path: "/github" },
    { label: "AI框架", path: "/github" },
  ],
  "工具": [
    { label: "对话AI", path: "/tools" },
    { label: "AI编程", path: "/tools" },
    { label: "图像生成", path: "/tools" },
    { label: "视频生成", path: "/tools" },
  ],
  "关于": [
    { label: "网站介绍", path: "/" },
    { label: "趋势洞察", path: "/trends" },
    { label: "订阅简报", path: "/" },
    { label: "提交工具", path: "/tools" },
  ],
};

const socialLinks = [
  { icon: "𝕏", label: "Twitter/X", href: "https://x.com" },
  { icon: "G", label: "GitHub", href: "https://github.com" },
  { icon: "✉", label: "Email", href: "mailto:hello@aiuniverse.com" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-black text-base">AI</span>
              </div>
              <span className="text-white font-bold text-xl">Universe</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              你的 AI 情报站。每日追踪全球最前沿的人工智能动态、开源项目和行业趋势。
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] hover:border-violet-500/30 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 font-medium text-sm"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => { navigate(item.path); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className="text-slate-400 hover:text-violet-300 text-sm transition-colors duration-200 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 AI Universe · 专注 AI 前沿动态
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              实时更新
            </span>
            <span>·</span>
            <span>数据来源：GitHub API & 公开信息</span>
            <span>·</span>
            <span>Built with ❤️ & AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
