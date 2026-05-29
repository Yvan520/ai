import { useEffect } from "react";
import NewsSection from "../components/NewsSection";

export default function NewsPage() {
  useEffect(() => {
    document.title = "AI 最新动态 - AI新闻资讯 · AI Universe";
    document.querySelector("meta[name='description']")?.setAttribute("content",
      "持续追踪全球AI行业最重要进展，涵盖大模型、AI Agent、开源模型、AI应用、科研突破等分类");
  }, []);

  return <NewsSection />;
}
