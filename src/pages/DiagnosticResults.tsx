import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PlanDetails {
  title: string;
  price: string;
  description: string;
  features: string[];
  showCalendar: boolean;
  isToxic?: boolean;
}

const planData: Record<string, PlanDetails> = {
  audit: {
    title: 'Auditoría de Riesgo',
    price: '$97',
    description: 'Tu situación requiere un análisis de viabilidad urgente antes de empezar.',
    features: [
      'Análisis completo de viabilidad',
      'Diagnóstico personalizado',
      'Recomendaciones específicas',
      'Llamada de 30 minutos'
    ],
    showCalendar: false,
    isToxic: true
  },
  despegue: {
    title: 'Plan Despegue',
    price: '$497',
    description: 'No te cargues con mensualidades. Construyamos tu base primero.',
    features: [
      'Verificación de Google Business Profile',
      'Optimización SEO local básica',
      'Configuración de perfil profesional',
      'Entrenamiento 1-a-1',
      'Soporte por 30 días'
    ],
    showCalendar: true
  },
  control: {
    title: 'C3 Control Software',
    price: '$149/mo',
    description: 'Organiza tu negocio antes de gastar en marketing.',
    features: [
      'CRM completo',
      'Automatización de seguimientos',
      'Facturación integrada',
      'App móvil incluida',
      'Reportes en tiempo real',
      'Soporte prioritario'
    ],
    showCalendar: true
  },
  dominio: {
    title: 'Plan Dominio (Ads)',
    price: 'Personalizado',
    description: 'Tienes capacidad para recibir más trabajo. Activemos Google Ads.',
    features: [
      'Gestión completa de Google Ads',
      'Verificación y optimización GBP',
      'Landing pages optimizadas',
      'Seguimiento de conversiones',
      'Reportes semanales',
      'Account Manager dedicado'
    ],
    showCalendar: true
  }
};

const determineRecommendation = (
  size: string | null,
  expectation: string | null,
  management: string | null
): string => {
  // CASO 1: Cliente Tóxico - Urgente + Solo
  if (expectation === 'urgente' && size === 'solo') {
    return 'audit';
  }

  // CASO 2: Principiante - Solo yo
  if (size === 'solo') {
    return 'despegue';
  }

  // CASO 3: Desordenado - Cuadrilla + Papel
  if (size === 'cuadrilla' && management === 'papel') {
    return 'control';
  }

  // CASO 4: Líder - Flota
  if (size === 'flota') {
    return 'dominio';
  }

  // Default: Control para cuadrillas con apps/crm
  if (size === 'cuadrilla') {
    return 'control';
  }

  return 'despegue';
};

const DiagnosticResults = () => {
  const [searchParams] = useSearchParams();
  
  const size = searchParams.get('size');
  const expectation = searchParams.get('expectation');
  const management = searchParams.get('management');

  const recommendedPlan = determineRecommendation(size, expectation, management);
  const currentPlan = planData[recommendedPlan];

  const scrollToContact = () => {
    const element = document.getElementById('cta-final');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span className="font-semibold text-primary">Análisis Completado</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Tu Plan Recomendado
              </h1>
            </div>

            {/* Plan Card */}
            <Card className={`border-2 shadow-soft-lg ${currentPlan.isToxic ? 'border-yellow-500' : 'border-primary'}`}>
              {currentPlan.isToxic && (
                <div className="bg-yellow-50 border-b border-yellow-200 p-4 flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-800">
                    Detectamos que necesitas un análisis previo antes de invertir
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                  {currentPlan.title}
                </CardTitle>
                <p className="text-3xl sm:text-4xl font-bold text-primary mt-2">
                  {currentPlan.price}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground text-lg">
                  {currentPlan.description}
                </p>
                
                <ul className="space-y-3">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {currentPlan.showCalendar ? (
                  <Button 
                    size="lg" 
                    className="w-full text-lg py-6"
                    onClick={scrollToContact}
                  >
                    Activar mi Plan Ahora
                  </Button>
                ) : (
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full text-lg py-6 border-yellow-500 text-yellow-700 hover:bg-yellow-50"
                    onClick={scrollToContact}
                  >
                    Solicitar Auditoría
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Guarantee */}
            <p className="text-center text-muted-foreground mt-8">
              ✓ Sin compromisos • ✓ Cancelación gratuita • ✓ Garantía de satisfacción
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiagnosticResults;
