import { useEffect } from "react";
import Hero from "../components/Hero";
import NewsTicker from "../components/NewsTicker";
import StatsBar from "../components/StatsBar";

export default function HomePage() {
  useEffect(() => {
    document.title = "AI Universe · AI资讯导航 · 最新动态 · GitHub热门";
    document.querySelector("meta[name='description']")?.setAttribute("content",
      "AI Universe - 聚焦人工智能最新动态，追踪GitHub热门AI项目，汇聚AI新闻资讯，探索AI未来发展趋势");
  }, []);

  return (
    <>
      <Hero />
      <NewsTicker />
      <StatsBar />
    </>
  );
}
