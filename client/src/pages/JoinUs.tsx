import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

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
    
    if (!formData.fullName || !formData.nativeLanguage || !formData.email || !formData.phone) {
      toast({
        title: t("error"),
        description: "Please fill in all required fields.",
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

              <div>
                <Label htmlFor="nativeLanguage" className="text-sm font-medium text-slate-700">
                  {t("nativeLanguage")} {t("required")}
                </Label>
                <Select onValueChange={(value) => handleInputChange("nativeLanguage", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder={t("selectLanguage")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">{t("english")}</SelectItem>
                    <SelectItem value="spanish">{t("spanish")}</SelectItem>
                    <SelectItem value="chinese">{t("chinese")}</SelectItem>
                    <SelectItem value="other">{t("other")}</SelectItem>
                  </SelectContent>
                </Select>
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
