import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import GitHubPage from "./pages/GitHubPage";
import ToolsPage from "./pages/ToolsPage";
import TrendsPage from "./pages/TrendsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import GitHubDetailPage from "./pages/GitHubDetailPage";
import ToolDetailPage from "./pages/ToolDetailPage";
import TrendDetailPage from "./pages/TrendDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/github" element={<GitHubPage />} />
          <Route path="/github/:id" element={<GitHubDetailPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/:id" element={<ToolDetailPage />} />
          <Route path="/trends" element={<TrendsPage />} />
          <Route path="/trends/:id" element={<TrendDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
