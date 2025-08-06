import { useLanguage } from "../../contexts/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      title: t("apply"),
      description: t("applyDesc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "2",
      title: t("train"),
      description: t("trainDesc"),
      color: "from-green-500 to-green-600",
    },
    {
      number: "3",
      title: t("sell"),
      description: t("sellDesc"),
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "4",
      title: t("getPaid"),
      description: t("getPaidDesc"),
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("howItWorksTitle")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("howItWorksSubtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
