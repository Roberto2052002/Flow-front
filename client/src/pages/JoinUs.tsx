import { useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { X } from "lucide-react"; // For the X icon

const LANGUAGES = [
  "Spanish", "Albanian", "Arabic", "Chinese", "French", "German", "Gujarati", "Haitian Creole",
  "Hindi", "Italian", "Japanese", "Korean", "Persian (including Farsi, Dari, Tajik)", "Polish",
  "Portuguese", "Russian", "Tagalog (including Filipino)", "Telugu", "Thai", "Urdu", "Vietnamese",
  "Ukrainian", "English", "Other"
];

interface JoinUsProps {
  onBackClick: () => void;
}

export default function JoinUs({ onBackClick }: JoinUsProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    nativeLanguage: "",
    email: "",
    phone: "",
    howFound: "",
  });
  const [languageQuery, setLanguageQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredLanguages = LANGUAGES.filter(lang =>
    lang.toLowerCase().includes(languageQuery.toLowerCase())
  );

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/join-request", data);
    },
    onSuccess: () => {
      toast({
        title: t("success"),
        description: "Thank you for your interest! We will contact you soon.",
      });
      setFormData({
        fullName: "",
        nativeLanguage: "",
        email: "",
        phone: "",
        howFound: "",
      });
    },
    onError: (error) => {
      toast({
        title: t("error"),
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.fullName || !formData.nativeLanguage || !formData.email || !formData.phone) {
      toast({
        title: t("error"),
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate native language
    if (!LANGUAGES.includes(formData.nativeLanguage)) {
      toast({
        title: t("error"),
        description: "Please select a valid native language from the list.",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number (at least 10 digits, allows +, -, (), spaces)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      toast({
        title: t("error"),
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("joinUs")}
          </h1>
          <p className="text-xl text-slate-600">
            Start your journey with Flow International Group today
          </p>
        </div>
        
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                  {t("fullName")} {t("required")}
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <div className="relative">
                <Label htmlFor="nativeLanguage" className="text-sm font-medium text-slate-700">
                  {t("nativeLanguage")} {t("required")}
                </Label>
                <div className="flex flex-wrap items-center gap-2 mt-2 border rounded px-2 py-1 bg-white focus-within:ring-2 ring-blue-400">
                  {/* Show chip if a valid language is selected */}
                  {LANGUAGES.includes(formData.nativeLanguage) && formData.nativeLanguage && (
                    <span className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm mr-2">
                      {formData.nativeLanguage}
                      <button
                        type="button"
                        className="ml-2 focus:outline-none"
                        onClick={() => {
                          setLanguageQuery("");
                          handleInputChange("nativeLanguage", "");
                          setShowDropdown(true);
                          inputRef.current?.focus();
                        }}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  )}
                  {/* Show input only if no language is selected */}
                  {!LANGUAGES.includes(formData.nativeLanguage) && (
                    <input
                      id="nativeLanguage"
                      type="text"
                      ref={inputRef}
                      value={languageQuery}
                      onChange={e => {
                        setLanguageQuery(e.target.value);
                        setShowDropdown(true);
                        handleInputChange("nativeLanguage", e.target.value);
                      }}
                      onFocus={() => setShowDropdown(true)}
                      onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                      className="flex-1 outline-none border-none bg-transparent"
                      autoComplete="off"
                      required
                      placeholder={t("selectLanguage")}
                    />
                  )}
                </div>
                {showDropdown && filteredLanguages.length > 0 && !LANGUAGES.includes(formData.nativeLanguage) && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
                    {filteredLanguages.map(lang => (
                      <div
                        key={lang}
                        className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                        onMouseDown={() => {
                          setLanguageQuery(lang);
                          handleInputChange("nativeLanguage", lang);
                          setShowDropdown(false);
                          inputRef.current?.blur();
                        }}
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                  {t("email")} {t("required")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                  {t("phone")} {t("required")}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="howFound" className="text-sm font-medium text-slate-700">
                  {t("howFound")}
                </Label>
                <Select onValueChange={(value) => handleInputChange("howFound", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder={t("selectOption")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">{t("google")}</SelectItem>
                    <SelectItem value="social">{t("social")}</SelectItem>
                    <SelectItem value="referral">{t("referral")}</SelectItem>
                    <SelectItem value="advertisement">{t("advertisement")}</SelectItem>
                    <SelectItem value="other">{t("other")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="button"
                  onClick={onBackClick}
                  variant="outline"
                  className="flex-1"
                >
                  {t("back")}
                </Button>
                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                >
                  {submitMutation.isPending ? t("loading") : t("next")}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            {t("formAgreement")} <a href="#" className="text-blue-600 hover:text-blue-700">{t("privacyPolicy")}</a> {t("and")} <a href="#" className="text-blue-600 hover:text-blue-700">{t("termsOfService")}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
