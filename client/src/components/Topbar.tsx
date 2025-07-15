import { useLanguage } from "../contexts/LanguageContext";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import flowLogoPath from "@assets/image_1752443892367.png";

interface TopbarProps {
  onSidebarToggle: () => void;
  onJoinUsClick: () => void;
}

export default function Topbar({ onSidebarToggle, onJoinUsClick }: TopbarProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 via-blue-900 to-blue-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Hamburger */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={onSidebarToggle}
              className="mr-4 text-white hover:text-blue-200 hover:bg-white/10 lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </Button>
            <img 
              src={flowLogoPath} 
              alt="Flow Logo" 
              className="h-8 w-8 rounded-full mr-3"
            />
            <span className="text-white font-bold text-xl">FLOW</span>
          </div>

          {/* Language Switcher and Join Us Button */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white/10 rounded-full p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 text-sm font-medium text-white rounded-full transition-all duration-300 hover:bg-white/20 ${
                  language === "es" ? "bg-white/20" : ""
                }`}
              >
                <Globe className="w-4 h-4 mr-1" />
                Español
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-sm font-medium text-white rounded-full transition-all duration-300 hover:bg-white/20 ${
                  language === "en" ? "bg-white/20" : ""
                }`}
              >
                English
              </Button>
            </div>
            <Button
              onClick={onJoinUsClick}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t("joinUs")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
