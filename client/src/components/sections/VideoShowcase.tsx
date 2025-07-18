import { useLanguage } from "../../contexts/LanguageContext";
import { Play, Languages, Globe, Youtube } from "lucide-react"; // <-- add Youtube here
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VideoShowcase() {
  const { t } = useLanguage();

  const videos = [
    {
      title: t("englishTraining"),
      subtitle: t("approvedForClients"),
      embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
      language: "English",
      color: "from-blue-500 to-blue-600",
      description: "Comprehensive training materials for English-speaking clients and agents",
    },
    {
      title: t("spanishTraining"),
      subtitle: t("approvedForClients"),
      embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
      language: "Español",
      color: "from-green-500 to-green-600",
      description: "Materiales de entrenamiento completos para clientes y agentes de habla hispana",
    },
    {
      title: t("chineseTraining"),
      subtitle: t("approvedForClients"),
      embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
      language: "中文",
      color: "from-purple-500 to-purple-600",
      description: "为中文客户和代理商提供的全面培训材料",
    },
  ];

  return (
    <section id="video-showcase" className="scroll-mt-24 py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Languages className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("videoShowcase")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("videoShowcaseSubtitle")}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${video.color}`} />
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-video bg-slate-900 relative overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}?rel=0&showinfo=0&modestbranding=1`}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${video.color} text-white text-sm font-medium rounded-full`}>
                      {video.language}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {video.title}
                    </h3>
                    <Globe className="w-5 h-5 text-slate-400" />
                  </div>
                  <p className="text-sm text-green-600 font-medium mb-3">
                    ✓ {video.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm mb-4">
                    {video.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-slate-50 transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Training
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">
              {t("socialTitle")}
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              {t("socialSubtitle")}
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.instagram.com/flowinternationalgroup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold border-white/20 hover:border-white/40 flex items-center"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {t("checkInstagram")}
                </Button>
              </a>
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold border-white/20 hover:border-white/40 flex items-center"
              >
                {/* Place your image or icon here */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}