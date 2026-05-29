import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface DetailLayoutProps {
  children: React.ReactNode;
  title: string;
  backTo: string;
  backLabel: string;
  externalUrl?: string;
  externalLabel?: string;
}

export default function DetailLayout({ children, title, backTo, backLabel, externalUrl, externalLabel }: DetailLayoutProps) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => navigate(backTo)}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            <span className="text-sm">{backLabel}</span>
          </button>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            {title}
          </h1>

          <div className="prose prose-invert max-w-none">
            {children}
          </div>

          {externalUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-6 border-t border-white/[0.06]"
            >
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-violet-600/30"
              >
                <span>{externalLabel || "查看原文"}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          )}
        </motion.article>
      </div>
    </div>
  );
}
