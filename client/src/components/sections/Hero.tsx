import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onJoinUsClick: () => void;
}

export default function Hero({ onJoinUsClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-blue-800 text-white py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onJoinUsClick}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {t("applyNow")}
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 border-white/20 hover:border-white/40"
              >
                {t("learnMore")}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl shadow-2xl w-full overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/MR67lZd4Kek"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">$2M</div>
              <div className="text-sm text-slate-600">No Medical Exam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
