import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsTicker from "./components/NewsTicker";
import StatsBar from "./components/StatsBar";
import NewsSection from "./components/NewsSection";
import GitHubSection from "./components/GitHubSection";
import ToolsSection from "./components/ToolsSection";
import TrendsSection from "./components/TrendsSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Inter',sans-serif]">
      <Navbar />
      <Hero />
      <NewsTicker />
      <StatsBar />
      <NewsSection />
      <GitHubSection />
      <ToolsSection />
      <TrendsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
