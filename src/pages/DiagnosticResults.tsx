import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Play, ArrowRight, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PlanDetails {
  title: string;
  description: string;
  price?: string;
  features: string[];
}

const planData: Record<string, PlanDetails> = {
  control: {
    title: "Plan Recomendado: C3 Control",
    description: "Tu negocio necesita organización antes de gastar en publicidad. Centraliza tus clientes y cobros hoy.",
    price: "$149/mo",
    features: [
      "CRM Todo en Uno",
      "Invoices Ilimitados",
      "App Móvil Android/iOS",
      "Base de Datos Propia",
      "Gestión de Reseñas",
      "Calendario Integrado"
    ]
  },
  verificacion: {
    title: "Plan Recomendado: Despegue/Verificación",
    description: "Primero existes, luego vendes. Vamos a recuperar tu perfil y blindarlo legalmente.",
    price: "$497",
    features: [
      "Verificación Google Business Profile",
      "NAP Legal Blindado",
      "Optimización Completa",
      "Website Profesional",
      "100% Tuyo al Finalizar",
      "Sin Rentas Mensuales"
    ]
  },
  growth: {
    title: "Plan Recomendado: Growth",
    description: "Tu perfil existe pero no convierte. Vamos a optimizarlo para que el teléfono suene.",
    price: "$997",
    features: [
      "Auditoría Completa GBP",
      "Optimización Avanzada",
      "Estrategia de Reseñas",
      "Contenido Mensual",
      "Reportes de Rendimiento",
      "Soporte Prioritario"
    ]
  },
  ads: {
    title: "Plan Recomendado: Ads & Scale",
    description: "Estás listo para escalar. Vamos a multiplicar tu alcance con publicidad estratégica.",
    price: "Personalizado",
    features: [
      "Google Ads Local",
      "Facebook/Instagram Ads",
      "Landing Pages Optimizadas",
      "Tracking Avanzado",
      "Reportes Semanales",
      "Account Manager Dedicado"
    ]
  }
};

const DiagnosticResults = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "verificacion";
  const needsSoftware = searchParams.get("software") === "true";

  // Determine which plan to show
  const recommendedPlan = needsSoftware ? "control" : plan;
  const currentPlan = planData[recommendedPlan] || planData.verificacion;

  const scrollToContact = () => {
    // Navigate to contact or open form
    window.location.href = "/#cta-final";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header with Animated Check */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Análisis Completado
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Hemos detectado lo que frena tu crecimiento.
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-12">
            <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="relative text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                  <Play className="h-10 w-10 text-primary ml-1" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Video Explicativo - Carlos Cordero
                </p>
                <p className="text-sm text-muted-foreground">
                  IMPORTANTE: Mira este video de 2 minutos antes de agendar.
                </p>
              </div>
            </div>
          </div>

          {/* Recommendation Card */}
          <div className="bg-card border-2 border-primary rounded-2xl p-8 sm:p-10 shadow-soft-lg mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {currentPlan.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {currentPlan.description}
                </p>
              </div>
            </div>

            {currentPlan.price && (
              <div className="mb-8 text-center">
                <span className="text-4xl sm:text-5xl font-bold text-primary">
                  {currentPlan.price}
                </span>
                {currentPlan.price.includes("/mo") && (
                  <span className="text-muted-foreground ml-1">mensual</span>
                )}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {currentPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={scrollToContact}
              size="lg"
              className="w-full py-7 text-lg"
            >
              Activar mi Plan Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Guarantee */}
          <div className="text-center">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Sin contratos forzosos.</span>
              {" "}Garantía de Satisfacción 100%.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiagnosticResults;
