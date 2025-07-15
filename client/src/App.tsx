import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./contexts/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import JoinUs from "./pages/JoinUs";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import AIChat from "./components/AIChat";

function Router() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    setCurrentPage("home");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handlePageClick = (page: string) => {
    setCurrentPage(page);
  };

  const handleJoinUsClick = () => {
    setCurrentPage("joinUs");
  };

  const handleBackClick = () => {
    setCurrentPage("home");
  };

  return (
    <div className="min-h-screen bg-white">
      <Topbar 
        onSidebarToggle={handleSidebarToggle}
        onJoinUsClick={handleJoinUsClick}
      />
      
      <Sidebar
        isOpen={sidebarOpen}
        onClose={handleSidebarClose}
        onSectionClick={handleSectionClick}
        onPageClick={handlePageClick}
      />

      <main className="pt-16">
        {currentPage === "home" && <Home onJoinUsClick={handleJoinUsClick} />}
        {currentPage === "testimonials" && <Testimonials onBackClick={handleBackClick} />}
        {currentPage === "faq" && <FAQ onBackClick={handleBackClick} />}
        {currentPage === "joinUs" && <JoinUs onBackClick={handleBackClick} />}
      </main>

      <AIChat />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
