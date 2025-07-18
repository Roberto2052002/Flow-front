import { useLanguage } from "../contexts/LanguageContext";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface TopbarProps {
  onSidebarToggle: () => void;
  onJoinUsClick: () => void;
}

export default function Topbar({ onSidebarToggle, onJoinUsClick }: TopbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 via-blue-900 to-blue-800 shadow-lg z-50">
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-24"> {/* Increased height */}
          {/* Logo and Hamburger */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="lg"
              onClick={onSidebarToggle}
              className="mr-8 p-4 text-white hover:text-blue-200 hover:bg-white/10"
            >
              <Menu style={{ width: "32px", height: "32px" }} /> {/* Slightly smaller icon */}
            </Button>
            <button
              onClick={() => {
                navigate("/", { replace: true });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-white font-bold text-4xl focus:outline-none cursor-pointer"
              style={{ background: "none", border: "none" }}
            >
              FLOW
            </button>
          </div>

          {/* Language Switcher and Join Us Button */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center bg-white/10 rounded-full p-2">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setLanguage("es")}
                className={`px-5 py-2 text-lg font-medium text-white rounded-full transition-all duration-300 hover:bg-white/20 ${
                  language === "es" ? "bg-white/20" : ""
                }`}
              >
                Español
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setLanguage("en")}
                className={`px-5 py-2 text-lg font-medium text-white rounded-full transition-all duration-300 hover:bg-white/20 ${
                  language === "en" ? "bg-white/20" : ""
                }`}
              >
                English
              </Button>
            </div>
            <Button
              onClick={onJoinUsClick}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t("joinUs")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
