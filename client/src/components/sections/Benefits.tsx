import { useLanguage } from "../../contexts/LanguageContext";
import { TrendingUp, DollarSign, CheckCircle, MapPin, BookOpen, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: t("liveLeads"),
      description: t("liveLeadsDesc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: DollarSign,
      title: t("highCommissions"),
      description: t("highCommissionsDesc"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: CheckCircle,
      title: t("noMedicalExam"),
      description: t("noMedicalExamDesc"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      title: t("remoteWork"),
      description: t("remoteWorkDesc"),
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: BookOpen,
      title: t("freeTraining"),
      description: t("freeTrainingDesc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Globe,
      title: t("globalCoverage"),
      description: t("globalCoverageDesc"),
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section id="benefits" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("whyChooseFlow")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("benefitsSubtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
