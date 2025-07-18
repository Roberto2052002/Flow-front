import { useLanguage } from "../../contexts/LanguageContext";

export default function Training() {
  const { t, language } = useLanguage();

  const videoUrls: Record<string, string> = {
    en: "https://www.youtube.com/embed/eswwYPgLLQY", // English video starts from the beginning
    es: "https://www.youtube.com/embed/57goPq_nryg", // Spanish video
  };
  const videoUrl = videoUrls[language] || videoUrls.en;

  return (
    <section id="training" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("trainingTitle")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("trainingSubtitle")}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl">
            <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800">
              <h3 className="text-xl font-semibold text-white mb-2">{t("videoShowcase")}</h3>
              <p className="text-slate-300 text-sm">{t("videoShowcaseSubtitle")}</p>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                <iframe
                  src={videoUrl}
                  title={`Flow International Group - ${language === "es" ? "Spanish" : "English"} Training`}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
