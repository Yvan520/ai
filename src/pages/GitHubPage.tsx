import { useEffect } from "react";
import GitHubSection from "../components/GitHubSection";

export default function GitHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GitHub AI 开源项目热榜 · AI Universe";
    document.querySelector("meta[name='description']")?.setAttribute("content",
      "追踪 GitHub 上最受开发者关注的 AI 开源项目，涵盖本地部署、AI Agent、RAG、AI编程等分类");
  }, []);

  return <GitHubSection />;
}
