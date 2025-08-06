import { useLanguage } from "../../contexts/LanguageContext";
import { DollarSign, TrendingUp, Award } from "lucide-react";

export default function CommissionPlan() {
  const { t } = useLanguage();

  const commissionData = [
    {
      level: t("newAgent"),
      rate: "40%",
      payout: t("yes"),
      renewals: t("ownership"),
    },
    {
      level: t("experiencedAgent"),
      rate: "60%",
      payout: t("yes"),
      renewals: t("ownership"),
    },
    {
      level: t("seniorAgent"),
      rate: "80%",
      payout: t("yes"),
      renewals: t("ownership"),
    },
    {
      level: t("topProducer"),
      rate: "100%",
      payout: t("yes"),
      renewals: t("ownership"),
    },
  ];

  const earnings = [
    {
      icon: DollarSign,
      amount: "$5,000",
      description: t("averageMonthly"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      amount: "$15,000",
      description: t("topProducerMonthly"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      amount: t("noLimits"),
      description: t("earningPotential"),
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="commission" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("commissionPlanTitle")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("commissionPlanSubtitle")}
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-4 px-6 text-slate-300">{t("experienceLevel")}</th>
                  <th className="text-left py-4 px-6 text-slate-300">{t("commissionRate")}</th>
                  <th className="text-left py-4 px-6 text-slate-300">{t("advancedPayout")}</th>
                  <th className="text-left py-4 px-6 text-slate-300">{t("renewals")}</th>
                </tr>
              </thead>
              <tbody>
                {commissionData.map((row, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="py-4 px-6 font-medium">{row.level}</td>
                    <td className="py-4 px-6">{row.rate}</td>
                    <td className="py-4 px-6">{row.payout}</td>
                    <td className="py-4 px-6">{row.renewals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {earnings.map((earning, index) => {
            const Icon = earning.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${earning.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {earning.amount}
                </h3>
                <p className="text-slate-600">
                  {earning.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
