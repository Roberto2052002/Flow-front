import { useLanguage } from "../../contexts/LanguageContext";
import { User, FileText, Languages, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Requirements() {
  const { t } = useLanguage();

  const requirements = [
    {
      icon: User,
      title: t("minimumAge"),
      description: t("minimumAgeDesc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: t("documentation"),
      description: t("documentationDesc"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: Languages,
      title: t("languageSkills"),
      description: t("languageSkillsDesc"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Wifi,
      title: t("internetAccess"),
      description: t("internetAccessDesc"),
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="requirements" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("requirementsTitle")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("requirementsSubtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {requirements.map((requirement, index) => {
            const Icon = requirement.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${requirement.color} rounded-xl flex items-center justify-center mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {requirement.title}
                    </h3>
                  </div>
                  <p className="text-slate-600">
                    {requirement.description}
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
