import { useState } from "react";
import { Switch, Route, useLocation } from "wouter";
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
  const [, navigate] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
 

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    navigate("/"); // Navigate to home
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handlePageClick = (page: string) => {
    navigate(`/${page}`);
  };

  const handleJoinUsClick = () => {
    navigate("/join");
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
        <Switch>
          <Route path="/">
            <Home onJoinUsClick={() => navigate("/join")} />
          </Route>
          <Route path="/testimonials">
            <Testimonials onBackClick={() => navigate("/")} />
          </Route>
          <Route path="/faq">
            <FAQ onBackClick={() => navigate("/")} />
          </Route>
          <Route path="/join">
            <JoinUs onBackClick={() => navigate("/")} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
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
