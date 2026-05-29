import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Inter',sans-serif]">
      <Navbar />
      <Outlet />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
