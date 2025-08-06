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
    product: "Product",
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
    highCommissionsDesc: "Earn 40%–100% commissions with advanced payouts and no minimum production requirements.",
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
    trainingTitle: "This Is How Our Product Works",
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
    videoShowcase: "This Is How Our Product Works",
    videoShowcaseSubtitle: "Multilingual training videos approved for client presentations",
    englishTraining: "English Training",
    spanishTraining: "Spanish Training", 
    chineseTraining: "Chinese Training",
    approvedForClients: "Approved for Clients",
    
    // Social Media
    socialTitle: "About us",
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
    faq_q1: "What products do you offer?",
    faq_a1: "We provide non-medical products up to $2,000,000 death benefit on IUL, Term, and Whole Life policies, with instant approval and five living benefits (Chronic, Critical and Terminal included for no additional cost to your clients. We also offer fully underwritten cases, foreign coverage, advanced market sales, and premium financing with no coverage limit. Learn more about our Products.",
faq_q2: "What are the coverage options available for non-U.S. citizens and Immigrants living in the U.S?",
faq_a2: "We provide coverage to both documented and undocumented immigrants. If your client have a valid passport, a U.S. bank account, and have resided in the U.S. for more than four months, they are eligible for up to $2 million in coverage for products including Whole Life, Term and IUL.",
faq_q3: "Do you provide living benefits in your products?",
faq_a3: "Yes, all of our products including IUL, TERM and WHOLE LIFE include Living Benefits for Chronic, Terminal and Critical at no additional cost to your clients. Living benefits may be provided by riders, which are supplemental benefits that can be added to a life insurance policy and are not suitable unless you also have a need for life insurance. Riders are optional, may require additional premium and may not be available in all states or on all products. This is not a solicitation of any specific insurance policy.",
faq_q4: "Could you provide more information about non-medical underwriting?",
faq_a4: "Sure! Non-medical underwriting allows clients to obtain policies with a death benefit amount up to $2,000,000 simply by answering a few medical questions, without the requirement for a medical examination across our product line. This method is not just streamlined but also exceptionally fast, with the majority of approvals being issued on the same day. Clients typically receive their policies in just 48 hours. It's available to both U.S. Citizens and Foreign Nationals.",
faq_q5: "Do you offer life insurance to Foreign Nationals living outside of the U.S.?",
faq_a5: "Yes. Our life insurance agency is one of the first agencies that has the ability to provide life insurance coverage starting January of 2024. If you have clients residing in any of our <link>pre-approved countries</link>, you have the opportunity to offer them life insurance, regardless of their connection to the United States. In other words, if you have a client who lives in Latin America, Asia, Australia or any other <link>pre-approved countries</link>, you may be able to get them covered. For those interested in expanding their portfolio with Life Insurance products, please schedule a meeting with us to begin the contracting process.",
faq_q6: "What is the starting commission level?",
faq_a6: "Newly licensed agents start at a 40% commission rate, which can rise up to 100%. For full transparency, refer to our <link>Commission Guidelines</link>.",
faq_q7: "Who can I contact if I have more questions?",
faq_a7: "Every relationship is valuable to us, and we believe in fostering these connections personally. Please schedule a meeting to learn more.",
faq_q8: "Am I issued a 1099 or a W2 for my commissions?",
faq_a8: "Your commissions are issued as a 1099, reflecting that you operate your own business.",
faq_q9: "Do you provide advanced commission payout?",
faq_a9: "Yes, we pay advanced commissions to our agents and partners.",
faq_q10: "Can I partner while affiliated with another company?",
faq_a10: "Absolutely! We welcome partnerships with financial professionals who are currently affiliated with another company. We understand that you may have existing relationships and commitments. Try out our carriers and see if we are a good fit. Schedule a meeting for more information.",
faq_q11: "Am I contracted with Flow International Group or Specific Carriers?",
faq_a11: "You are directly contracted with the specific carriers. Our agency has chosen this approach to ensure your independence. You retain ownership of your book of business and all renewal commissions. This means that even if you decide to leave the industry, you will continue to receive the overrides. Additionally, your commissions are paid by the carriers.",
faq_q12: "Do you offer leads?",
faq_a12: "Yes, we provide high-quality, real-time leads to our agents! You’ll receive leads in your preferred language, and they are delivered within 24 hours. Agents can pause or stop lead purchases anytime. For more details, please refer to our Lead Fulfillment and Cancellation Policy below.",
faq_q13: "Who is Flow International?",
faq_a13: "FLOW International Group (“FLOW”) is a trusted partner of Financial Representatives, Financial Advisors, Life Insurance Agents, and Agencies, specializing in connecting them with real‑time, high‑quality leads and advanced growth strategies. As an exclusive partner of National Life Insurance Company and Fidelity & Guaranty Life Insurance Company, we streamline the onboarding and contracting process—offering customizable, compliant leads tailored by language, territory, and business needs. Committed to transparency, data privacy, and seamless CRM integration, FLOW empowers our partners to expand their client base and scale effectively.",
faq_q14: "Who is the A+ rated carriers/life insurance companies that underwrites the policies?",
faq_a14: "The A+ rated carrier that underwrites our policies is National Life Insurance Company and Fidelity and Guaranty. National Life Group is known for its 176 year old history, financial strength, stability, and commitment to policyholders.",
faq_q15: "Who is the Founder of Flow International?",
faq_a15: "Our Founder is Istvan G. Kovalkovits. From Hungary to the U.S., Istvan's journey has seen him work alongside big names like Allianz, Northwestern Mutual and 16 other premier life insurance companies for over a decade. Searching for the best of both worlds - the trusted ways of the past and the fresh ideas of the present - he founded Flow International. As the Founder at FLOW, he's all about mixing the best training with offering top-notch NON-MEDICAL IUL, WL and TERM products, and making sure agents get the freedom they need. Under his watch, FLOW isn't just a National Life Group Partner. With an International Team spanning numerous nationalities among both agents and clients in the U.S., FLOW truly reflects its global spirit. Outside the boardroom, Istvan has a heart for philanthropy, frequently donating to support children in Central and South America.",
faq_q16: "Financial strength ratings for National Life Insurance Company and Life Insurance Company of the Southwest as of July 9, 2024 are:",
faq_a16: "A.M. Best A+ (Superior) 2nd out of 16 ratings.\n\nStandard & Poors A+ (Strong) 5th out of 21 ratings.\n\nMoody's A1 (Good) 5th out of 21 ratings.\n\nRatings are subject to change.",

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

    // FAQ Categories
    faq_cat_coverage: "Coverage & Product Details",
    faq_cat_commission: "Commission & Financial Details",
    faq_cat_contracting: "Contracting & Partnerships",
    faq_cat_company: "Company Information & History",
  },
  es: {
    // Navigation
    home: "Inicio",
    benefits: "Beneficios",
    howItWorks: "Cómo Funciona",
    requirements: "Requisitos",
    commissionPlan: "Plan de Comisiones",
    product: "Producto",
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
    highCommissionsDesc: "Gana comisiones del 40%–100% con pagos adelantados y sin requisitos mínimos de producción.",
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
    trainingTitle: "Así Funciona Nuestro Producto",
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
    videoShowcase: "Así Funciona Nuestro Producto",
    videoShowcaseSubtitle: "Videos de entrenamiento multilingües aprobados para presentaciones de clientes",
    englishTraining: "Entrenamiento en Inglés",
    spanishTraining: "Entrenamiento en Español", 
    chineseTraining: "Entrenamiento en Chino",
    approvedForClients: "Aprobado para Clientes",
    
    // Social Media
    socialTitle: "Sobre nosotros",
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
    faq_q1: "¿Qué productos ofrecen?",
faq_a1: "Ofrecemos productos sin examen médico con hasta $2,000,000 de beneficio por fallecimiento en pólizas IUL, Term y Whole Life, con aprobación instantánea y cinco beneficios en vida (Crónico, Crítico y Terminal incluidos sin costo adicional para sus clientes). También ofrecemos casos totalmente suscritos, cobertura extranjera, ventas de mercado avanzado y financiamiento de primas sin límite de cobertura. Más información sobre nuestros productos.",
faq_q2: "¿Cuáles son las opciones de cobertura disponibles para inmigrantes y no ciudadanos viviendo en EE.UU.?",
faq_a2: "Ofrecemos cobertura tanto a inmigrantes documentados como indocumentados. Si su cliente tiene pasaporte válido, cuenta bancaria en EE.UU. y ha residido en EE.UU. por más de cuatro meses, es elegible para hasta $2 millones en cobertura para productos como Whole Life, Term y IUL.",
faq_q3: "¿Ofrecen beneficios en vida en sus productos?",
faq_a3: "Sí, todos nuestros productos, incluyendo IUL, TERM y WHOLE LIFE, incluyen beneficios en vida para condiciones crónicas, terminales y críticas sin costo adicional para sus clientes. Los beneficios en vida pueden ser provistos por riders, que son beneficios suplementarios que pueden añadirse a una póliza de seguro de vida y no son adecuados a menos que también tenga necesidad de seguro de vida. Los riders son opcionales, pueden requerir prima adicional y no están disponibles en todos los estados o productos. Esto no es una solicitud de ninguna póliza específica.",
faq_q4: "¿Puede proporcionar más información sobre la suscripción sin examen médico?",
faq_a4: "¡Por supuesto! La suscripción sin examen médico permite a los clientes obtener pólidas con hasta $2,000,000 de beneficio por fallecimiento simplemente respondiendo algunas preguntas médicas, sin necesidad de examen médico en toda nuestra línea de productos. Este método no solo es ágil sino también excepcionalmente rápido, con la mayoría de aprobaciones emitidas el mismo día. Los clientes suelen recibir sus pólizas en solo 48 horas. Está disponible para ciudadanos estadounidenses y extranjeros.",
faq_q5: "¿Ofrecen seguro de vida a extranjeros que viven fuera de EE.UU.?",
faq_a5: "Sí. Nuestra agencia de seguros de vida es una de las primeras que tiene la capacidad de ofrecer cobertura de seguro de vida desde enero de 2024. Si tiene clientes que residen en cualquiera de nuestros <link>países preaprobados</link>, tiene la oportunidad de ofrecerles seguro de vida, independientemente de su conexión con Estados Unidos. Es decir, si tiene un cliente que vive en Latinoamérica, Asia, Australia u otros <link>países preaprobados</link>, puede obtener cobertura. Para quienes deseen ampliar su portafolio con productos de seguro de vida, programe una reunión con nosotros para iniciar el proceso de contratación.",
faq_q6: "¿Cuál es el nivel de comisión inicial?",
faq_a6: "Los agentes recién licenciados comienzan con una comisión del 40%, que puede aumentar hasta el 100%. Para total transparencia, consulte nuestras <link>Pautas de Comisión</link>.",
faq_q7: "¿A quién puedo contactar si tengo más preguntas?",
faq_a7: "Cada relación es valiosa para nosotros y creemos en fomentar estas conexiones personalmente. Programe una reunión para obtener más información.",
faq_q8: "¿Me emiten un 1099 o un W2 por mis comisiones?",
faq_a8: "Sus comisiones se emiten como 1099, lo que refleja que opera su propio negocio.",
faq_q9: "¿Ofrecen pago adelantado de comisiones?",
faq_a9: "Sí, pagamos comisiones adelantadas a nuestros agentes y socios.",
faq_q10: "¿Puedo asociarme mientras estoy afiliado a otra compañía?",
faq_a10: "¡Por supuesto! Damos la bienvenida a asociaciones con profesionales financieros que actualmente están afiliados a otra compañía. Entendemos que puede tener relaciones y compromisos existentes. Pruebe nuestros carriers y vea si somos una buena opción. Programe una reunión para más información.",
faq_q11: "¿Estoy contratado con Flow International Group o con carriers específicos?",
faq_a11: "Está contratado directamente con los carriers específicos. Nuestra agencia ha elegido este enfoque para asegurar su independencia. Usted mantiene la propiedad de su cartera de negocios y todas las comisiones de renovación. Esto significa que incluso si decide dejar la industria, continuará recibiendo los overrides. Además, sus comisiones son pagadas por los carriers.",
faq_q12: "¿Ofrecen leads?",
faq_a12: "Sí, proporcionamos leads de alta calidad y en tiempo real a nuestros agentes. Recibirá leads en su idioma preferido y se entregan en 24 horas. Los agentes pueden pausar o detener la compra de leads en cualquier momento. Para más detalles, consulte nuestra política de cumplimiento y cancelación de leads.",
faq_q13: "¿Quién es Flow International?",
faq_a13: "FLOW International Group (“FLOW”) es un socio confiable de representantes financieros, asesores financieros, agentes de seguros de vida y agencias, especializado en conectarlos con leads de alta calidad en tiempo real y estrategias avanzadas de crecimiento. Como socio exclusivo de National Life Insurance Company y Fidelity & Guaranty Life Insurance Company, facilitamos el proceso de incorporación y contratación, ofreciendo leads personalizables y conformes por idioma, territorio y necesidades comerciales. Comprometidos con la transparencia, privacidad de datos e integración CRM sin problemas, FLOW empodera a nuestros socios para expandir su base de clientes y escalar eficazmente.",
faq_q14: "¿Quiénes son las aseguradoras calificadas A+ que suscriben las pólizas?",
faq_a14: "La aseguradora calificada A+ que suscribe nuestras pólizas es National Life Insurance Company y Fidelity and Guaranty. National Life Group es conocida por sus 176 años de historia, solidez financiera, estabilidad y compromiso con los asegurados.",
faq_q15: "¿Quién es el fundador de Flow International?",
faq_a15: "Nuestro fundador es Istvan G. Kovalkovits. De Hungría a EE.UU., el recorrido de Istvan lo ha llevado a trabajar junto a grandes nombres como Allianz, Northwestern Mutual y otras 16 compañías líderes de seguros de vida durante más de una década. Buscando lo mejor de ambos mundos —las formas confiables del pasado y las ideas frescas del presente— fundó Flow International. Como fundador de FLOW, se enfoca en combinar la mejor capacitación con productos NON-MEDICAL IUL, WL y TERM de primer nivel, y en asegurar que los agentes tengan la libertad que necesitan. Bajo su liderazgo, FLOW no es solo un socio de National Life Group. Con un equipo internacional que abarca numerosas nacionalidades entre agentes y clientes en EE.UU., FLOW realmente refleja su espíritu global. Fuera de la sala de juntas, Istvan tiene un corazón filantrópico, donando frecuentemente para apoyar a niños en Centro y Sudamérica.",
faq_q16: "Las calificaciones de solidez financiera para National Life Insurance Company y Life Insurance Company of the Southwest al 9 de julio de 2024 son:",
faq_a16: "A.M. Best A+ (Superior) 2º de 16 calificaciones.\n\nStandard & Poors A+ (Fuerte) 5º de 21 calificaciones.\n\nMoody's A1 (Bueno) 5º de 21 calificaciones.\n\nLas calificaciones están sujetas a cambio.",
    
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

    // FAQ Categories
    faq_cat_coverage: "Cobertura y Detalles del Producto",
    faq_cat_commission: "Comisiones y Detalles Financieros",
    faq_cat_contracting: "Contratación y Alianzas",
    faq_cat_company: "Información y Historia de la Compañía",
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

