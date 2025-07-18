import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialsProps {
  onBackClick: () => void;
}

export default function Testimonials({ onBackClick }: TestimonialsProps) {
  const { t } = useLanguage();

  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      role: "Senior Agent, Miami",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "Flow has transformed my career. The training is excellent, and the commission structure is the best I've seen in 10 years in this industry.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Top Producer, Dallas",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b98c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "The support team is incredible. I can focus on selling while they handle the technical aspects. My income has doubled since joining.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Regional Manager, LA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "Flow's multicultural approach and support for non-U.S. citizens has opened up markets I never thought possible. Amazing opportunity.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Insurance Agent, Houston",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "Working with Flow has been a game-changer. The multilingual support and no medical exam products make it so much easier to serve my community.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Senior Agent, Atlanta",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "The commission structure is transparent and fair. I love that I own my book of business completely. True independence!",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Insurance Professional, Phoenix",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      text: "Flow's training program is comprehensive and practical. I felt prepared to start selling from day one. The ongoing support is excellent.",
      rating: 5,
    },
  ];

  return (
    <div
      id="testimonials"
      className="min-h-screen bg-slate-50 py-32 pt-32 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("testimonialsTitle")}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">{testimonial.text}</p>
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={onBackClick}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            {t("backToHome")}
          </Button>
        </div>
      </div>
    </div>
  );
}
