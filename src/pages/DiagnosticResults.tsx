import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle, Lightbulb, Clock, Target, Phone, LayoutGrid } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Zod schema for validating URL query parameters
const diagnosticParamsSchema = z.object({
  google: z.enum(['invisible', 'noVende', 'dominar']).nullable().optional(),
  size: z.enum(['solo', 'cuadrilla', 'flota']).nullable().optional(),
  expectation: z.enum(['urgente', 'proceso', 'legado']).nullable().optional(),
  management: z.enum(['papel', 'apps', 'crm']).nullable().optional(),
  business: z.string().max(100).nullable().optional(),
});

// Sanitize business name to prevent any potential issues
const sanitizeBusinessName = (name: string | null | undefined): string | null => {
  if (!name) return null;
  // Decode, trim, and limit length
  try {
    const decoded = decodeURIComponent(name);
    return decoded.trim().slice(0, 100);
  } catch {
    // If decoding fails, return null
    return null;
  }
};
interface PlanDetails {
  title: string;
  price: string;
  priceNote?: string;
  description: string;
  helpMessage: string;
  features: string[];
  inheritedFeatures?: string[]; // Features inherited from lower tier plan
  inheritedFrom?: string; // Key of the plan from which features are inherited
  duration: string;
  targetProfile: string;
  tier: number; // 0=audit, 1=presencia, 2=cimientos, 3=expansion, 4=dominio
}

// Core features for each plan (without "Todo lo de X" text)
const cimientosFeatures = [
  'Instalación Pixel, Analytics, Stripe',
  '4 Posts Google Business Profile/mes',
  'Respuesta a Reviews',
  'Gestión de 1 Canal de Ads (Meta O Google)',
  'Reporte mensual de resultados',
  'Migración CRM básica'
];

const expansionFeatures = [
  '4 Posts Estáticos + 4 Videos (Reels/TikTok)',
  '3 Redes Sociales (IG/FB/TikTok)',
  '2 Canales de Ads (Meta + Google)',
  '8 Posts GBP/mes + SEO Local',
  'App C3, CRM Completo, Chatbot Básico',
  '30 min Asesoría/mes'
];

const dominioFeatures = [
  'Campañas Bimensuales (Temporadas)',
  '1 Landing Page por campaña + 1 Funnel',
  'Email Marketing (Secuencias) + SMS',
  'Review System automatizado',
  'Chatbot Avanzado + ChatGPT Team Seat',
  '60 min Asesoría Estratégica/mes'
];

const planData: Record<string, PlanDetails> = {
  auditoria: {
    title: 'Auditoría NAP & Legal',
    price: '$250',
    priceNote: 'Pago único',
    description: 'Antes de invertir en marketing, necesitas resolver tu situación legal y de accesos.',
    helpMessage: 'Detectamos inconsistencias en tu nombre de negocio o accesos perdidos. Esto puede causar suspensión en Google. Resolvámoslo primero.',
    features: [
      'Auditoría cruzada de registros estatales y federales',
      'Gestión de corrección ante Secretaria de Estado o CSLB',
      'Reporte de Riesgo oficial para apelaciones en Google',
      'Tiempo estimado: 35-45 días hábiles'
    ],
    duration: '35-45 días',
    targetProfile: 'Negocios con inconsistencias NAP',
    tier: 0
  },
  presencia: {
    title: 'Presencia Digital',
    price: '$3,300',
    priceNote: 'o $2,970 de contado (ahorra $330)',
    description: 'Construye tu infraestructura digital desde cero. Proyecto finito, sin mensualidades.',
    helpMessage: 'Vas empezando y no tienes presencia web. Este plan te construye todo en 90 días y TÚ te quedas con el 100% de las credenciales.',
    features: [
      'Sitio Web Profesional optimizado para móvil',
      'Google Business Profile verificado',
      'Redes Sociales (FB + IG) configuradas',
      '12 posts de arranque',
      'Email corporativo + Gemini AI',
      '100% de propiedad al finalizar'
    ],
    duration: '3 meses (proyecto finito)',
    targetProfile: 'Contratista Nuevo (0-1 año)',
    tier: 1
  },
  cimientos: {
    title: 'Programa Cimientos',
    price: '$599/mes',
    priceNote: 'Subsidio de entrada: $499 → $299 → $449 → $599',
    description: 'Mantenimiento técnico, reputación y tráfico constante para tu negocio en marcha.',
    helpMessage: 'Ya tienes presencia pero necesitas mantenimiento profesional y campañas activas. Este plan mantiene tu negocio visible sin que tú hagas nada.',
    features: cimientosFeatures,
    duration: '6 meses mínimo',
    targetProfile: 'Solopreneur ($10k-$20k/mes)',
    tier: 2
  },
  expansion: {
    title: 'Plan Expansión Total',
    price: '$1,299/mes',
    priceNote: 'Beca de implementación: $599 x 3 meses, luego $1,299',
    description: 'Omnicanalidad, video y automatización para negocios establecidos.',
    helpMessage: 'Tienes equipo y capacidad de crecer, pero tu marketing no lo refleja. Este plan te da presencia en 3 redes + video + CRM completo.',
    features: expansionFeatures,
    inheritedFeatures: cimientosFeatures,
    inheritedFrom: 'cimientos',
    duration: '6 meses mínimo',
    targetProfile: 'Negocio Establecido ($20k-$50k/mes)',
    tier: 3
  },
  dominio: {
    title: 'Plan Dominio Estratégico',
    price: '$2,599/mes',
    priceNote: 'Inversión escalonada: $600 → $1,299 x 3 → $2,599',
    description: 'Estrategia por temporadas, embudos de venta y marketing masivo para líderes locales.',
    helpMessage: 'Eres un líder en tu zona con capacidad de escalar. Este plan te convierte en la referencia de tu industria con campañas estacionales y funnels avanzados.',
    features: dominioFeatures,
    inheritedFeatures: [...cimientosFeatures, ...expansionFeatures],
    inheritedFrom: 'expansion',
    duration: '12 meses mínimo',
    targetProfile: 'Líder Local ($50k+/mes)',
    tier: 4
  }
};

// Plan keys in order for comparison table
const planOrder = ['presencia', 'cimientos', 'expansion', 'dominio'] as const;

const determineRecommendation = (
  google: string | null,
  size: string | null,
  expectation: string | null,
  management: string | null
): { primary: string; requiresAudit: boolean } => {
  // PASO 1: Detectar si necesita Auditoría NAP
  const requiresAudit = google === 'invisible';
  
  // PASO 2: Determinar plan principal según perfil
  let primary = 'presencia'; // Default
  
  // Nuevo / Solo → Presencia Digital (One-Time)
  if (size === 'solo') {
    primary = 'presencia';
  }
  // Cuadrilla pequeña con papel → Cimientos (Tier 1)
  else if (size === 'cuadrilla' && management === 'papel') {
    primary = 'cimientos';
  }
  // Cuadrilla con apps/crm → Expansión (Tier 2)
  else if (size === 'cuadrilla' && (management === 'apps' || management === 'crm')) {
    primary = 'expansion';
  }
  // Flota / Líder → Dominio (Tier 3)
  else if (size === 'flota') {
    primary = 'dominio';
  }
  
  return { primary, requiresAudit };
};

const CALENDAR_URL = '#cta-final'; // Replace with actual Calendly/GHL URL

// Component for comparing plans in a modal
const PlansComparisonModal = ({ currentPlanKey }: { currentPlanKey: string }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
          <LayoutGrid className="h-4 w-4 mr-2" />
          Comparar Planes
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl">Comparación de Planes</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
            {planOrder.map((planKey) => {
              const plan = planData[planKey];
              const isRecommended = planKey === currentPlanKey;
              
              return (
                <Card 
                  key={planKey} 
                  className={`relative ${isRecommended ? 'border-2 border-primary ring-2 ring-primary/20' : 'border'}`}
                >
                  {isRecommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Recomendado
                    </div>
                  )}
                  <CardHeader className="pb-2 pt-6">
                    <CardTitle className="text-base font-bold text-center">
                      {plan.title}
                    </CardTitle>
                    <p className="text-2xl font-bold text-center text-primary mt-2">
                      {plan.price}
                    </p>
                    {plan.priceNote && (
                      <p className="text-xs text-center text-muted-foreground">
                        {plan.priceNote}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-xs text-muted-foreground text-center mb-4">
                      {plan.targetProfile}
                    </p>
                    
                    {/* Inherited features first (if any) */}
                    {plan.inheritedFeatures && plan.inheritedFrom && (
                      <div className="mb-3 pb-3 border-b border-dashed">
                        <p className="text-xs font-medium text-muted-foreground mb-2">
                          Incluye de {planData[plan.inheritedFrom].title}:
                        </p>
                        <ul className="space-y-1.5">
                          {plan.inheritedFeatures.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <Check className="h-3 w-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {plan.inheritedFeatures.length > 3 && (
                            <li className="text-xs text-muted-foreground italic pl-5">
                              +{plan.inheritedFeatures.length - 3} más...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                    
                    {/* Plan's own features */}
                    <ul className="space-y-1.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <Check className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-3 border-t text-center">
                      <span className="text-xs text-muted-foreground">{plan.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

const DiagnosticResults = () => {
  const [searchParams] = useSearchParams();
  
  // Parse and validate all query parameters with Zod
  const validatedParams = useMemo(() => {
    const rawParams = {
      google: searchParams.get('google'),
      size: searchParams.get('size'),
      expectation: searchParams.get('expectation'),
      management: searchParams.get('management'),
      business: searchParams.get('business'),
    };
    
    const result = diagnosticParamsSchema.safeParse(rawParams);
    
    if (result.success) {
      return {
        google: result.data.google ?? null,
        size: result.data.size ?? null,
        expectation: result.data.expectation ?? null,
        management: result.data.management ?? null,
        businessName: sanitizeBusinessName(result.data.business),
      };
    }
    
    // If validation fails, return safe defaults
    return {
      google: null,
      size: null,
      expectation: null,
      management: null,
      businessName: null,
    };
  }, [searchParams]);

  const { google, size, expectation, management, businessName } = validatedParams;
  const { primary, requiresAudit } = determineRecommendation(google, size, expectation, management);
  const currentPlan = planData[primary];
  const auditPlan = planData.auditoria;

  const openCalendar = () => {
    // TODO: Replace with actual calendar URL
    // window.open('YOUR_CALENDLY_OR_GHL_URL', '_blank');
    const element = document.getElementById('cta-final');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navbar />
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span className="font-semibold text-primary">Análisis Completado</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Tu Plan Recomendado
              </h1>
              {businessName && (
                <p className="text-lg text-muted-foreground mt-2">
                  para <span className="font-semibold text-foreground">{businessName}</span>
                </p>
              )}
            </div>

            {/* Audit Alert - Only if required */}
            {requiresAudit && (
              <Card className="border-2 border-yellow-500 bg-yellow-50 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-yellow-900 text-lg mb-1">
                        ⚠️ Paso Previo Requerido: {auditPlan.title}
                      </h3>
                      <p className="text-yellow-800 mb-3">
                        {auditPlan.helpMessage}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-yellow-900">{auditPlan.price}</span>
                        <span className="text-sm text-yellow-700">{auditPlan.priceNote}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Primary Plan Card */}
            <Card className="border-2 border-primary shadow-soft-lg overflow-hidden">
              <CardHeader className="text-center pb-4 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 mx-auto">
                  <Target className="h-4 w-4 mr-1" />
                  Plan Principal Recomendado
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                  {currentPlan.title}
                </CardTitle>
                <div className="mt-4">
                  <p className="text-3xl sm:text-4xl font-bold text-primary">
                    {currentPlan.price}
                  </p>
                  {currentPlan.priceNote && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {currentPlan.priceNote}
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 p-6">
                <p className="text-center text-muted-foreground text-lg">
                  {currentPlan.description}
                </p>
                
                {/* Inherited Features - Expanded inline */}
                {currentPlan.inheritedFeatures && currentPlan.inheritedFrom && (
                  <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                    <p className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Incluye todo de <span className="font-semibold text-foreground">{planData[currentPlan.inheritedFrom].title}</span>:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentPlan.inheritedFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary/60 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Plan's Own Features List */}
                <div>
                  {currentPlan.inheritedFrom && (
                    <p className="text-sm font-medium text-primary mb-3">
                      + Características exclusivas de {currentPlan.title}:
                    </p>
                  )}
                  <ul className="space-y-3">
                    {currentPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How it helps section */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        ¿Cómo te ayuda este plan?
                      </h4>
                      <p className="text-blue-800">
                        {currentPlan.helpMessage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plan metadata */}
                <div className="flex flex-wrap gap-4 justify-center text-sm">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{currentPlan.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{currentPlan.targetProfile}</span>
                  </div>
                </div>

                {/* Dual CTA */}
                <div className="space-y-3 pt-4">
                  <Button 
                    size="lg" 
                    className="w-full text-lg py-6"
                    onClick={openCalendar}
                  >
                    Quiero mi {currentPlan.title}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    (Agenda tu llamada de estrategia)
                  </p>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full text-base py-5"
                    onClick={openCalendar}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    ¿Tienes dudas? Agenda una llamada gratis
                  </Button>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-sm text-muted-foreground pt-2">
                  🔒 Sin compromiso. Sin presión de venta. Conversación honesta sobre tu situación.
                </p>
              </CardContent>
            </Card>

            {/* Compare Plans Button */}
            <div className="flex justify-center mt-6">
              <PlansComparisonModal currentPlanKey={primary} />
            </div>

            {/* Trust elements */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-primary" />
                100% de propiedad tuya
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-primary" />
                Cancelación gratuita
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-primary" />
                Garantía de satisfacción
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiagnosticResults;