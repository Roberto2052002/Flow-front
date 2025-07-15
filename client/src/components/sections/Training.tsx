import { useLanguage } from "../../contexts/LanguageContext";
import { PlayCircle, Clock, Smartphone, Users } from "lucide-react";

export default function Training() {
  const { t } = useLanguage();

  const features = [
    {
      icon: PlayCircle,
      title: t("videoTraining"),
      description: t("videoTrainingDesc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: t("support24"),
      description: t("support24Desc"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: Smartphone,
      title: t("agentApps"),
      description: t("agentAppsDesc"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: t("mentorship"),
      description: t("mentorshipDesc"),
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="training" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("trainingTitle")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("trainingSubtitle")}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-8">
            {/* Video Section */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800">
                <h3 className="text-xl font-semibold text-white mb-2">Training Videos</h3>
                <p className="text-slate-300 text-sm">Complete training available in multiple languages</p>
              </div>
              
              <div className="p-6 space-y-6">
                {/* English Video */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">English Training (Approved for Clients)</h4>
                  <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Flow International Group - English Training"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                {/* Spanish Video */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Spanish Training (Approved for Clients)</h4>
                  <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Flow International Group - Spanish Training"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                {/* Chinese Video */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Chinese Training (Approved for Clients)</h4>
                  <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Flow International Group - Chinese Training"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl text-center">
              <div className="text-2xl font-bold">1,200+</div>
              <div className="text-sm text-blue-100">{t("professionalsTrained")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
