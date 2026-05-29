import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import GitHubPage from "./pages/GitHubPage";
import ToolsPage from "./pages/ToolsPage";
import TrendsPage from "./pages/TrendsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/github" element={<GitHubPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/trends" element={<TrendsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
