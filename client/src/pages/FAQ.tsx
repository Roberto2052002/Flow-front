import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  onBackClick: () => void;
}

export default function FAQ({ onBackClick }: FAQProps) {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "Do I need experience to join Flow?",
      answer: "No prior experience is required! We provide comprehensive training for all new agents, including complete onboarding, product knowledge, and sales techniques. Our training is available in multiple languages.",
    },
    {
      question: "How fast do I get paid?",
      answer: "We offer advanced commission payouts, meaning you get paid when the policy is issued, not when the client makes their first payment. Commissions are typically processed within 2-3 business days.",
    },
    {
      question: "Is this work completely remote?",
      answer: "Yes! This is 100% remote work. All you need is a reliable internet connection and a phone. Our mobile apps and online tools allow you to work from anywhere in the United States.",
    },
    {
      question: "Do I keep my clients if I leave?",
      answer: "Absolutely! You retain 100% ownership of your book of business and all renewal commissions. You're contracted directly with the carriers, not just with Flow, ensuring your independence.",
    },
    {
      question: "What products can I sell?",
      answer: "We offer IUL (Indexed Universal Life), Whole Life, and Term Life insurance products with coverage up to $2 million without medical exams. All products include living benefits at no additional cost.",
    },
    {
      question: "Can I work with other companies?",
      answer: "Yes! We welcome partnerships with agents who are affiliated with other companies. You can try our products and services to see if we're a good fit for your business.",
    },
    {
      question: "What support do you provide?",
      answer: "We provide 24/7 support with an average 5-minute response time, comprehensive training materials, mobile apps, mentorship programs, and ongoing coaching to ensure your success.",
    },
    {
      question: "How much can I earn?",
      answer: "Earnings vary based on your experience and sales volume. New agents start at 50% commission and can earn up to 100%. Average monthly earnings range from $5,000 to $15,000+ for top producers.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("faqTitle")}
          </h1>
          <p className="text-xl text-slate-600">
            {t("faqSubtitle")}
          </p>
        </div>
        
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex justify-between items-center font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transform transition-transform ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItems.includes(index) && (
                  <div className="mt-4 text-slate-600">
                    <p>{item.answer}</p>
                  </div>
                )}
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
