import { useLanguage } from "../contexts/LanguageContext";
import { Home, TrendingUp, CheckCircle, FileText, DollarSign, BookOpen, MessageCircle, HelpCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSectionClick: (sectionId: string) => void;
  onPageClick: (page: string) => void;
}

export default function Sidebar({ isOpen, onClose, onSectionClick, onPageClick }: SidebarProps) {
  const { t } = useLanguage();

  const menuItems = [
    { id: "hero", label: t("home"), icon: Home, type: "section" },
    { id: "benefits", label: t("benefits"), icon: TrendingUp, type: "section" },
    { id: "how-it-works", label: t("howItWorks"), icon: CheckCircle, type: "section" },
    { id: "requirements", label: t("requirements"), icon: FileText, type: "section" },
    { id: "commission", label: t("commissionPlan"), icon: DollarSign, type: "section" },
    { id: "training", label: t("product"), icon: PlayCircle, type: "section" },
    { id: "testimonials", label: t("testimonials"), icon: MessageCircle, type: "page" },
    { id: "faq", label: t("faq"), icon: HelpCircle, type: "page" },
  ];

  const handleClick = (item: typeof menuItems[0]) => {
    if (item.type === "section") {
      onSectionClick(item.id);
    } else {
      onPageClick(item.id);
    }
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-24 h-full w-64 bg-slate-900 transform transition-transform duration-300 z-50 overflow-y-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="p-6">
          <nav className="space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleClick(item)}
                  className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200"
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>
      </div>
      <section id="video-showcase">...</section>
    </>
  );
}
