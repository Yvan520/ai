import { useEffect } from "react";
import ToolsSection from "../components/ToolsSection";

export default function ToolsPage() {
  useEffect(() => {
    document.title = "精选 AI 工具导航 · AI Universe";
    document.querySelector("meta[name='description']")?.setAttribute("content",
      "汇聚全球最强 AI 工具，按类别快速找到你需要的 AI 利器，涵盖对话AI、AI编程、图像生成等");
  }, []);

  return <ToolsSection />;
}
