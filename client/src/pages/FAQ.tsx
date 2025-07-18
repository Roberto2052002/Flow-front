import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import ReactStringReplace from "react-string-replace";

interface FAQProps {
  onBackClick: () => void;
}
type CategoryName =
  | "Coverage & Product Details"
  | "Commission & Financial Details"
  | "Contracting & Partnerships"
  | "Company Information & History";

export default function FAQ({ onBackClick }: FAQProps) {
  const { t } = useLanguage();

  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categoryNames = [
    t("faq_cat_coverage"),
    t("faq_cat_commission"),
    t("faq_cat_contracting"),
    t("faq_cat_company"),
  ];

  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);
  const [openItems, setOpenItems] = useState<Record<string, number[]>>({
    [categoryNames[0]]: [],
    [categoryNames[1]]: [],
    [categoryNames[2]]: [],
    [categoryNames[3]]: [],
  });

  // Reset selectedCategory and openItems when language changes
  useEffect(() => {
    setSelectedCategory(categoryNames[0]);
    setOpenItems({
      [categoryNames[0]]: [],
      [categoryNames[1]]: [],
      [categoryNames[2]]: [],
      [categoryNames[3]]: [],
    });
  }, [categoryNames.join("")]);

  const faqCategories: Record<string, { question: string; answer: string }[]> = {
    [categoryNames[0]]: [
      { question: t("faq_q1"), answer: t("faq_a1") },
      { question: t("faq_q2"), answer: t("faq_a2") },
      { question: t("faq_q3"), answer: t("faq_a3") },
      { question: t("faq_q4"), answer: t("faq_a4") },
      { question: t("faq_q5"), answer: t("faq_a5") },
    ],
    [categoryNames[1]]: [
      { question: t("faq_q6"), answer: t("faq_a6") },
      { question: t("faq_q7"), answer: t("faq_a7") },
      { question: t("faq_q8"), answer: t("faq_a8") },
      { question: t("faq_q9"), answer: t("faq_a9") },
    ],
    [categoryNames[2]]: [
      { question: t("faq_q10"), answer: t("faq_a10") },
      { question: t("faq_q11"), answer: t("faq_a11") },
      { question: t("faq_q12"), answer: t("faq_a12") },
    ],
    [categoryNames[3]]: [
      { question: t("faq_q13"), answer: t("faq_a13") },
      { question: t("faq_q14"), answer: t("faq_a14") },
      { question: t("faq_q15"), answer: t("faq_a15") },
      { question: t("faq_q16"), answer: t("faq_a16") },
    ],
  };

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const current = prev[selectedCategory] || [];
      const isOpen = current.includes(index);
      return {
        ...prev,
        [selectedCategory]: isOpen
          ? current.filter((i) => i !== index) // close the question
          : [...current, index], // open the question
      };
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("faqTitle")}
          </h1>
          <p className="text-xl text-slate-600">{t("faqSubtitle")}</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-nowrap justify-center mb-8 gap-4">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setOpenItems((prev) => ({ ...prev, [cat]: [] })); // close any open items when switching
                setSelectedCategory(cat);
              }}
              className={`text-sm font-medium px-4 py-2 border-b-2 transition-all ${
                selectedCategory === cat
                  ? "text-blue-700 border-blue-700"
                  : "text-slate-600 border-transparent hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {(faqCategories[selectedCategory] ?? []).map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex justify-between items-center font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      (openItems[selectedCategory] || []).includes(index)
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
                {(openItems[selectedCategory] || []).includes(index) && (
                  <div className="mt-4 text-slate-600">
                    <p>
                      {item.answer.includes("<link>")
                        ? (() => {
                            let replaced = false;
                            const parts = ReactStringReplace(
                              item.answer,
                              /<link>(.*?)<\/link>/g,
                              (match, i) => {
                                if (!replaced) {
                                  replaced = true;
                                  // Choose PDF based on link text
                                  let href = "/GLOBAL LIFE INSURANCE FIG.pdf (1).pdf";
                                  if (
                                    match === "Commission Guidelines" ||
                                    match === "Pautas de Comisión"
                                  ) {
                                    href = "/FLOW PROMOTIONAL GUIDELINES (ENGLISH).pdf. (1).pdf";
                                  }
                                  return (
                                    <a
                                      key={i}
                                      href={href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 underline hover:text-blue-800"
                                    >
                                      {match}
                                    </a>
                                  );
                                }
                                return match;
                              }
                            );
                            // Flatten and insert <br /> for every \n
                            const withLineBreaks: React.ReactNode[] = [];
                            parts.forEach((part, i) => {
                              if (typeof part === "string") {
                                const lines = part.split("\n");
                                lines.forEach((line, j) => {
                                  withLineBreaks.push(line);
                                  if (j < lines.length - 1) {
                                    withLineBreaks.push(<br key={`${i}-${j}`} />);
                                  }
                                });
                              } else if (part !== undefined && part !== null) {
                                withLineBreaks.push(part);
                              }
                            });
                            return withLineBreaks;
                          })()
                        : item.answer.split("\n").map((str, i, arr) =>
                            i < arr.length - 1 ? [str, <br key={i} />] : str
                          )}
                    </p>
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
