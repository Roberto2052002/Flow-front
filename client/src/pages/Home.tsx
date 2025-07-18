import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Hero from "../components/sections/Hero";
import Benefits from "../components/sections/Benefits";
import HowItWorks from "../components/sections/HowItWorks";
import Requirements from "../components/sections/Requirements";
import CommissionPlan from "../components/sections/CommissionPlan";
import VideoShowcase from "../components/sections/VideoShowcase";
import Training from "../components/sections/Thisishow";
import AboutUs from "../components/sections/AboutUs";

interface HomeProps {
  onJoinUsClick: () => void;
}

export default function Home({ onJoinUsClick }: HomeProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Hero onJoinUsClick={onJoinUsClick} />
      <Benefits />
      <HowItWorks />
      <Requirements />
      <CommissionPlan />
      <Training />
      {/* <VideoShowcase /> */}

      {/* About Us Section */}
      <AboutUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("readyToStart")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onJoinUsClick}
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ring-2 ring-white/20"
            >
              {t("applyNow")}
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t("scheduleCall")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
