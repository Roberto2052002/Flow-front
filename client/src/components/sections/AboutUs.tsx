import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section className="px-12 py-24 max-w-screen-xl mx-auto text-center bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl">
      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-12 text-white drop-shadow-lg">
        {t("socialTitle")}
      </h2>

      {/* Description */}
      <p className="text-2xl text-white max-w-4xl mx-auto mb-16 font-medium">
        At Flow, we believe in empowering individuals to build a future with
        confidence. Our mission is to provide reliable life insurance solutions
        and career opportunities that make a lasting impact.
      </p>

      {/* 3 Columns: Mission, Team, Vision */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left mb-24">
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
          <p className="text-lg text-white">
            To make life insurance accessible to everyone while offering agents
            the tools and training to thrive remotely.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Team</h3>
          <p className="text-lg text-white">
            A passionate, multilingual team that supports agents 24/7 and guides
            them from onboarding to success.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Vision</h3>
          <p className="text-lg text-white">
            A future where insurance is simple, remote work is the norm, and
            agents keep full ownership of their business.
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="border-t border-white/20 pt-12 mb-24">
        <h4 className="text-xl font-bold text-white mb-8">
          Connect With Us
        </h4>
        <div className="flex justify-center gap-16 items-center">
          <a
            href="https://www.instagram.com/flowinternationalgroup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 hover:border-white/40 flex items-center justify-center p-0 w-16 h-16 rounded-xl overflow-hidden"
            >
              <img
                src="/Screenshot%202025-07-17%20070806.png"
                alt="Instagram"
                className="w-full h-full object-cover"
              />
            </Button>
          </a>
          <a
            href="https://www.youtube.com/@flowinternationalgroup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 hover:border-white/40 flex items-center justify-center p-0 w-16 h-16 rounded-xl overflow-hidden"
            >
              <img
                src="/youtube%20button.png"
                alt="YouTube"
                className="w-full h-full object-cover"
              />
            </Button>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100086927703366&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 hover:border-white/40 flex items-center justify-center p-0 w-16 h-16 rounded-xl overflow-hidden"
            >
              <img
                src="/Screenshot%202025-07-17%20070508.png"
                alt="Facebook"
                className="w-full h-full object-cover"
              />
            </Button>
          </a>
        </div>
      </div>

      {/* Carrier Logos */}
      <div className="border-t border-white/20 pt-12">
        <h4 className="text-xl font-bold text-white mb-8">
          Our Trusted Carriers
        </h4>
        <div className="flex justify-center flex-wrap gap-16 items-center">
          <img
            src="/national life group.png"
            alt="National Life Group"
            className="h-30 object-contain bg-white rounded"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/MetLife_logo.png"
            alt="MetLife"
            className="h-10 object-contain bg-white rounded"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/AIG_wordmark.svg"
            alt="AIG"
            className="h-10 object-contain bg-white rounded"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Mutual_of_Omaha_logo.svg"
            alt="Mutual of Omaha"
            className="h-10 object-contain bg-white rounded"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Transamerica_logo.svg"
            alt="Transamerica"
            className="h-10 object-contain bg-white rounded"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Foresters_Financial_logo.svg"
            alt="Foresters"
            className="h-10 object-contain bg-white rounded"
          />
        </div>
      </div>
    </section>
  );
}