import { useEffect } from "react";
import TrendsSection from "../components/TrendsSection";

export default function TrendsPage() {
  useEffect(() => {
    document.title = "AI 趋势洞察 & 未来展望 · AI Universe";
    document.querySelector("meta[name='description']")?.setAttribute("content",
      "深度解析 AI 行业六大核心趋势，把握技术演进方向，了解 AI 发展时间线与未来关注方向");
  }, []);

  return <TrendsSection />;
}
