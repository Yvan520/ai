import Hero from "../components/Hero";
import NewsTicker from "../components/NewsTicker";
import StatsBar from "../components/StatsBar";
import NewsSection from "../components/NewsSection";
import GitHubSection from "../components/GitHubSection";
import ToolsSection from "../components/ToolsSection";
import TrendsSection from "../components/TrendsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsTicker />
      <StatsBar />
      <NewsSection />
      <GitHubSection />
      <ToolsSection />
      <TrendsSection />
    </>
  );
}
