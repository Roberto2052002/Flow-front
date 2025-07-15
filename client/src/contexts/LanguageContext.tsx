import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: "Home",
    benefits: "Benefits",
    howItWorks: "How It Works",
    requirements: "Requirements",
    commissionPlan: "Commission Plan",
    training: "Training & Support",
    testimonials: "Testimonials",
    faq: "FAQ",
    joinUs: "Join Us",
    
    // Hero Section
    heroTitle: "Build Your Career in Life Insurance",
    heroSubtitle: "Join the new generation of financial services professionals. Offer up to $2M in coverage with no medical exam, earn up to 100% commissions, and work with A+ rated carriers.",
    applyNow: "Apply Now",
    learnMore: "Learn More",
    
    // Benefits
    whyChooseFlow: "Why Choose Flow?",
    benefitsSubtitle: "Experience the advantages that set us apart from traditional insurance companies",
    liveLeads: "Live Leads",
    liveLeadsDesc: "Access to high-quality, real-time leads delivered within 24 hours in your preferred language.",
    highCommissions: "High Commissions",
    highCommissionsDesc: "Earn 50%–100% commissions with advanced payouts and no minimum production requirements.",
    noMedicalExam: "No Medical Exam",
    noMedicalExamDesc: "Offer up to $2M coverage without medical exams, with instant approval and 24-hour policy delivery.",
    remoteWork: "Remote Work",
    remoteWorkDesc: "Work from anywhere with full independence and complete control over your business.",
    freeTraining: "Free Training",
    freeTrainingDesc: "Comprehensive training and ongoing support to help you succeed in your insurance career.",
    globalCoverage: "Global Coverage",
    globalCoverageDesc: "Serve U.S. citizens, immigrants, and foreign nationals with specialized coverage options.",
    
    // How It Works
    howItWorksTitle: "How It Works",
    howItWorksSubtitle: "Start your journey with Flow in four simple steps",
    apply: "Apply",
    applyDesc: "Submit your application through our simple online form. Get started in minutes.",
    train: "Train",
    trainDesc: "Complete our comprehensive training program with ongoing support and resources.",
    sell: "Sell",
    sellDesc: "Start selling with our live leads and advanced tools. Work at your own pace.",
    getPaid: "Get Paid",
    getPaidDesc: "Earn advanced commissions up to 100% with fast, reliable payouts.",
    
    // Requirements
    requirementsTitle: "Requirements",
    requirementsSubtitle: "Simple requirements to join our team",
    minimumAge: "Minimum Age",
    minimumAgeDesc: "Must be 18 years or older to apply for insurance licensing.",
    documentation: "Documentation",
    documentationDesc: "Valid ID or passport required for licensing and contracting process.",
    languageSkills: "Language Skills",
    languageSkillsDesc: "Proficiency in English and/or Spanish to serve our diverse client base.",
    internetAccess: "Internet Access",
    internetAccessDesc: "Reliable internet connection for online training and remote work capabilities.",
    
    // Commission Plan
    commissionPlanTitle: "Commission Plan",
    commissionPlanSubtitle: "Competitive commission structure with growth opportunities",
    experienceLevel: "Experience Level",
    commissionRate: "Commission Rate",
    advancedPayout: "Advanced Payout",
    renewals: "Renewals",
    newAgent: "New Agent",
    experiencedAgent: "Experienced Agent",
    seniorAgent: "Senior Agent",
    topProducer: "Top Producer",
    ownership: "100% Ownership",
    yes: "✓ Yes",
    averageMonthly: "Average Monthly Earnings",
    topProducerMonthly: "Top Producer Monthly",
    noLimits: "No Limits",
    earningPotential: "Earning Potential",
    
    // Training
    trainingTitle: "Training & Support",
    trainingSubtitle: "Comprehensive training and ongoing support to ensure your success",
    videoTraining: "Video Training Modules",
    videoTrainingDesc: "Complete training available in English, Spanish, and Chinese with approved client materials.",
    support24: "24/7 Support",
    support24Desc: "Round-the-clock support with average 5-minute response time for all your questions.",
    agentApps: "Agent & Client Apps",
    agentAppsDesc: "Advanced mobile applications for streamlined sales process and client management.",
    mentorship: "Mentorship Program",
    mentorshipDesc: "Paired with experienced agents for guidance and best practices sharing.",
    professionalsTrained: "Professionals Trained",
    
    // Video Section
    videoShowcase: "We speak your client's language",
    videoShowcaseSubtitle: "Multilingual training videos approved for client presentations",
    englishTraining: "English Training",
    spanishTraining: "Spanish Training", 
    chineseTraining: "Chinese Training",
    approvedForClients: "Approved for Clients",
    
    // Social Media
    socialTitle: "We are FLOW Agents",
    socialSubtitle: "Follow us on social media and see how we attract clients through various platforms",
    checkInstagram: "Check us out on Instagram",
    
    // CTA
    readyToStart: "Ready to Start Your Journey?",
    ctaSubtitle: "Join over 1,200 professionals who have transformed their careers with Flow International Group.",
    scheduleCall: "Schedule a Meeting",
    
    // Form
    fullName: "Full Name",
    nativeLanguage: "Native Language",
    email: "Email Address",
    phone: "Phone Number",
    howFound: "How did you find us?",
    selectLanguage: "Select your native language",
    selectOption: "Select an option",
    english: "English",
    spanish: "Spanish",
    chinese: "Chinese",
    other: "Other",
    google: "Google Search",
    social: "Social Media",
    referral: "Referral",
    advertisement: "Advertisement",
    back: "← Back",
    next: "Next →",
    required: "*",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    formAgreement: "By submitting this form, you agree to our",
    and: "and",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Get answers to common questions about working with Flow International Group",
    
    // Testimonials
    testimonialsTitle: "What Our Agents Say",
    testimonialsSubtitle: "Real stories from successful Flow International Group agents",
    
    // AI Chat
    aiAssistant: "AI Assistant",
    aiWelcome: "Hello! I'm here to help answer your questions about Flow International Group. What would you like to know?",
    typeQuestion: "Type your question...",
    send: "Send",
    
    // Common
    backToHome: "← Back to Home",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    close: "Close",
  },
  es: {
    // Navigation
    home: "Inicio",
    benefits: "Beneficios",
    howItWorks: "Cómo Funciona",
    requirements: "Requisitos",
    commissionPlan: "Plan de Comisiones",
    training: "Entrenamiento y Soporte",
    testimonials: "Testimonios",
    faq: "Preguntas Frecuentes",
    joinUs: "Únete a Nosotros",
    
    // Hero Section
    heroTitle: "Construye tu Carrera en Seguros de Vida",
    heroSubtitle: "Únete a la nueva generación de profesionales de servicios financieros. Ofrece hasta $2M en cobertura sin examen médico, gana hasta 100% de comisiones, y trabaja con aseguradoras A+.",
    applyNow: "Aplicar Ahora",
    learnMore: "Aprender Más",
    
    // Benefits
    whyChooseFlow: "¿Por Qué Elegir Flow?",
    benefitsSubtitle: "Experimenta las ventajas que nos distinguen de las compañías de seguros tradicionales",
    liveLeads: "Leads en Vivo",
    liveLeadsDesc: "Acceso a leads de alta calidad, en tiempo real, entregados en 24 horas en tu idioma preferido.",
    highCommissions: "Comisiones Altas",
    highCommissionsDesc: "Gana comisiones del 50%–100% con pagos adelantados y sin requisitos mínimos de producción.",
    noMedicalExam: "Sin Examen Médico",
    noMedicalExamDesc: "Ofrece hasta $2M en cobertura sin exámenes médicos, con aprobación instantánea y entrega de póliza en 24 horas.",
    remoteWork: "Trabajo Remoto",
    remoteWorkDesc: "Trabaja desde cualquier lugar con independencia total y control completo de tu negocio.",
    freeTraining: "Entrenamiento Gratuito",
    freeTrainingDesc: "Entrenamiento integral y soporte continuo para ayudarte a tener éxito en tu carrera de seguros.",
    globalCoverage: "Cobertura Global",
    globalCoverageDesc: "Sirve a ciudadanos estadounidenses, inmigrantes y extranjeros con opciones de cobertura especializada.",
    
    // How It Works
    howItWorksTitle: "Cómo Funciona",
    howItWorksSubtitle: "Comienza tu viaje con Flow en cuatro pasos simples",
    apply: "Aplicar",
    applyDesc: "Envía tu solicitud a través de nuestro formulario en línea simple. Comienza en minutos.",
    train: "Entrenar",
    trainDesc: "Completa nuestro programa de entrenamiento integral con soporte y recursos continuos.",
    sell: "Vender",
    sellDesc: "Comienza a vender con nuestros leads en vivo y herramientas avanzadas. Trabaja a tu propio ritmo.",
    getPaid: "Recibe Pago",
    getPaidDesc: "Gana comisiones adelantadas hasta del 100% con pagos rápidos y confiables.",
    
    // Requirements
    requirementsTitle: "Requisitos",
    requirementsSubtitle: "Requisitos simples para unirte a nuestro equipo",
    minimumAge: "Edad Mínima",
    minimumAgeDesc: "Debe tener 18 años o más para aplicar para la licencia de seguros.",
    documentation: "Documentación",
    documentationDesc: "ID válido o pasaporte requerido para el proceso de licenciamiento y contratación.",
    languageSkills: "Habilidades de Idioma",
    languageSkillsDesc: "Competencia en inglés y/o español para servir a nuestra base de clientes diversa.",
    internetAccess: "Acceso a Internet",
    internetAccessDesc: "Conexión confiable a internet para entrenamiento en línea y capacidades de trabajo remoto.",
    
    // Commission Plan
    commissionPlanTitle: "Plan de Comisiones",
    commissionPlanSubtitle: "Estructura de comisiones competitiva con oportunidades de crecimiento",
    experienceLevel: "Nivel de Experiencia",
    commissionRate: "Tasa de Comisión",
    advancedPayout: "Pago Adelantado",
    renewals: "Renovaciones",
    newAgent: "Agente Nuevo",
    experiencedAgent: "Agente Experimentado",
    seniorAgent: "Agente Senior",
    topProducer: "Productor Principal",
    ownership: "100% Propiedad",
    yes: "✓ Sí",
    averageMonthly: "Ganancias Mensuales Promedio",
    topProducerMonthly: "Productor Principal Mensual",
    noLimits: "Sin Límites",
    earningPotential: "Potencial de Ganancias",
    
    // Training
    trainingTitle: "Entrenamiento y Soporte",
    trainingSubtitle: "Entrenamiento integral y soporte continuo para asegurar tu éxito",
    videoTraining: "Módulos de Video Entrenamiento",
    videoTrainingDesc: "Entrenamiento completo disponible en inglés, español y chino con materiales aprobados para clientes.",
    support24: "Soporte 24/7",
    support24Desc: "Soporte las 24 horas con tiempo de respuesta promedio de 5 minutos para todas tus preguntas.",
    agentApps: "Apps de Agente y Cliente",
    agentAppsDesc: "Aplicaciones móviles avanzadas para proceso de ventas optimizado y gestión de clientes.",
    mentorship: "Programa de Mentoría",
    mentorshipDesc: "Emparejado con agentes experimentados para orientación y compartir mejores prácticas.",
    professionalsTrained: "Profesionales Entrenados",
    
    // Video Section
    videoShowcase: "Hablamos el idioma de tu cliente",
    videoShowcaseSubtitle: "Videos de entrenamiento multilingües aprobados para presentaciones de clientes",
    englishTraining: "Entrenamiento en Inglés",
    spanishTraining: "Entrenamiento en Español", 
    chineseTraining: "Entrenamiento en Chino",
    approvedForClients: "Aprobado para Clientes",
    
    // Social Media
    socialTitle: "Somos Agentes FLOW",
    socialSubtitle: "Síguenos en redes sociales y ve cómo atraemos clientes a través de varias plataformas",
    checkInstagram: "Visítanos en Instagram",
    
    // CTA
    readyToStart: "¿Listo para Comenzar tu Viaje?",
    ctaSubtitle: "Únete a más de 1,200 profesionales que han transformado sus carreras con Flow International Group.",
    scheduleCall: "Programar una Reunión",
    
    // Form
    fullName: "Nombre Completo",
    nativeLanguage: "Idioma Nativo",
    email: "Dirección de Email",
    phone: "Número de Teléfono",
    howFound: "¿Cómo nos encontraste?",
    selectLanguage: "Selecciona tu idioma nativo",
    selectOption: "Selecciona una opción",
    english: "Inglés",
    spanish: "Español",
    chinese: "Chino",
    other: "Otro",
    google: "Búsqueda en Google",
    social: "Redes Sociales",
    referral: "Referencia",
    advertisement: "Publicidad",
    back: "← Atrás",
    next: "Siguiente →",
    required: "*",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    formAgreement: "Al enviar este formulario, aceptas nuestra",
    and: "y",
    
    // FAQ
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Obtén respuestas a preguntas comunes sobre trabajar con Flow International Group",
    
    // Testimonials
    testimonialsTitle: "Lo Que Dicen Nuestros Agentes",
    testimonialsSubtitle: "Historias reales de agentes exitosos de Flow International Group",
    
    // AI Chat
    aiAssistant: "Asistente IA",
    aiWelcome: "¡Hola! Estoy aquí para ayudar a responder tus preguntas sobre Flow International Group. ¿Qué te gustaría saber?",
    typeQuestion: "Escribe tu pregunta...",
    send: "Enviar",
    
    // Common
    backToHome: "← Volver al Inicio",
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    close: "Cerrar",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
