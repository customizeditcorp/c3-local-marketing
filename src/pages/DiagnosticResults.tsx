import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle, Lightbulb, Clock, Target, Phone, LayoutGrid, Calendar, ChevronDown, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";
import { useMemo, useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/use-language";

// Result components
import ProfileHeader from "@/components/results/ProfileHeader";
import DiagnosticSummaryCards from "@/components/results/DiagnosticSummaryCards";
import EducationalInsight from "@/components/results/EducationalInsight";
import ProgressStepper from "@/components/results/ProgressStepper";

// Logos
import certificadoGBP from "@/assets/logos/certificado-gbp.png";
import sello20Anios from "@/assets/logos/sello-20-anios-experiencia.webp";
import jvRoofingLogo from "@/assets/logos/jv-roofing-logo.png";
import smvcLogo from "@/assets/logos/smvc.png";

// Zod schema for validating URL query parameters (updated with new params)
const diagnosticParamsSchema = z.object({
  google: z.enum(['invisible', 'noVende', 'dominar', 'nuevo']).nullable().optional(),
  license: z.enum(['nuevo', 'estable', 'cambios']).nullable().optional(),
  team: z.enum(['solo', 'pequeno', 'grande']).nullable().optional(),
  revenue: z.enum(['menos10k', '10k-25k', '25k-60k', 'mas60k']).nullable().optional(),
  expectation: z.enum(['urgente', 'proceso', 'legado', 'noSeguro']).nullable().optional(),
  management: z.enum(['papel', 'apps', 'crm']).nullable().optional(),
  digital: z.enum(['nada', 'acceso', 'perdido', 'malNAP']).nullable().optional(),
  business: z.string().max(100).nullable().optional(),
  name: z.string().max(100).nullable().optional(),
});

// Sanitize business name to prevent any potential issues
const sanitizeBusinessName = (name: string | null | undefined): string | null => {
  if (!name) return null;
  try {
    const decoded = decodeURIComponent(name);
    return decoded.trim().slice(0, 100);
  } catch {
    return null;
  }
};

// Profile types
type ProfileType = 'INICIAL' | 'ESTABILIDAD' | 'CRECIMIENTO' | 'LIDER';
type PriceType = 'ONE_TIME' | 'STANDARD_T1' | 'STARTER_TIER2' | 'STARTER_TIER3';

interface PlanDetails {
  title: string;
  price: string;
  priceNote?: string;
  description: string;
  helpMessage: string;
  features: string[];
  inheritedFeatures?: string[];
  inheritedFrom?: string;
  duration: string;
  targetProfile: string;
  tier: number;
}

// Core features for each plan
const cimientosFeatures = [
  'Licencia CRM C3 Studio',
  'Embudos de Venta y Gestión de Contactos',
  'Chat Automatizado para Atención al Cliente',
  'Automatización de Solicitud de Reseñas (Google Reviews)',
];

const presenciaFeatures = [
  'Creación de Sitio Web Premium y Optimizado',
  'Configuración y Setup de Google Business Profile',
  'Textos y Oferta de Valor impulsados por nuestra IA',
  'Dominio registrado a tu nombre desde el día 1',
  'Mantenimiento y Soporte Activo',
];

const imanLocalFeatures = [
  'Trabajo activo de SEO Local',
  'Publicaciones semanales en Google Business Profile',
  'Monitoreo de posicionamiento en el mapa (BrightLocal Rank)',
  'Rastreo de Palabras Clave Locales',
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
    title: 'Plan Lanzamiento',
    price: '$1,799',
    priceNote: 'Pago único — Llave en mano',
    description: 'Propiedad absoluta sin contratos mensuales. Website + Google Business Profile, transferencia total el día 1.',
    helpMessage: 'Vas empezando y quieres ser dueño 100% sin contratos mensuales. Este plan te entrega el website y GBP llave en mano.',
    features: [
      'Desarrollo de Website Premium',
      'Setup de Google Business Profile',
      'Entrega "Llave en Mano"',
      'Transferencia total de activos el Día 1',
      'No incluye CRM ni mantenimiento mensual',
    ],
    duration: 'Pago único',
    targetProfile: 'Contratista Nuevo (sin compromiso mensual)',
    tier: 1
  },
  cimientos: {
    title: 'Cimientos',
    price: '$149/mes',
    priceNote: 'Suscripción base — sin compromiso forzoso',
    description: 'La base operativa para organizar tu negocio y no perder clientes.',
    helpMessage: 'Necesitas organizar tus contactos y dejar de perder leads. Cimientos te da el CRM y las automatizaciones esenciales.',
    features: cimientosFeatures,
    duration: 'Suscripción mensual',
    targetProfile: 'Solopreneur que pierde leads',
    tier: 2
  },
  expansion: {
    title: 'Presencia Digital',
    price: '$399/mes',
    priceNote: 'Compromiso mínimo de 6 meses',
    description: 'Tu ecosistema digital completo. Eres dueño de tu marca en internet.',
    helpMessage: 'Tienes operación pero te falta presencia profesional online. Presencia Digital te construye website + GBP + CRM en marcha.',
    features: presenciaFeatures,
    inheritedFeatures: cimientosFeatures,
    inheritedFrom: 'cimientos',
    duration: '6 meses mínimo',
    targetProfile: 'Negocio Establecido ($10k-$60k/mes)',
    tier: 3
  },
  dominio: {
    title: 'Imán Local',
    price: '$498/mes',
    priceNote: 'Compromiso mínimo de 6 meses',
    description: 'Tracción orgánica y posicionamiento constante frente a tu competencia.',
    helpMessage: 'Eres un líder en tu zona y quieres dominar el mapa. Imán Local te da SEO activo + posteos semanales + tracking de keywords.',
    features: imanLocalFeatures,
    inheritedFeatures: [...cimientosFeatures, ...presenciaFeatures],
    inheritedFrom: 'expansion',
    duration: '6 meses mínimo',
    targetProfile: 'Líder Local ($60k+/mes)',
    tier: 4
  }
};

// Plan keys in order for comparison table
const planOrder = ['presencia', 'cimientos', 'expansion', 'dominio'] as const;

// Revenue labels for display
const revenueLabels: Record<string, string> = {
  'menos10k': 'menos de $10,000/mes',
  '10k-25k': '$10,000 - $25,000/mes',
  '25k-60k': '$25,000 - $60,000/mes',
  'mas60k': 'más de $60,000/mes'
};

// NEW: Determine recommendation based on financial capacity (5-10% rule)
const determineRecommendation = (
  google: string | null,
  license: string | null,
  team: string | null,
  revenue: string | null,
  expectation: string | null,
  management: string | null,
  digital: string | null
): { 
  primary: string; 
  profile: ProfileType;
  priceType: PriceType;
  requiresAudit: boolean; 
  napRisk: boolean;
  needsGuidance: boolean;
} => {
  // STEP 1: Detect NAP Risk (digital health issues)
  const napRisk = digital === 'perdido' || digital === 'malNAP';
  const requiresAudit = google === 'invisible' || napRisk;
  
  // STEP 2: Detect if user needs guidance
  const needsGuidance = expectation === 'noSeguro';
  
  // STEP 3: Determine profile and plan based on REVENUE (CRITICAL VARIABLE)
  let primary = 'presencia';
  let profile: ProfileType = 'INICIAL';
  let priceType: PriceType = 'ONE_TIME';
  
  // CASE Z: Pre-Revenue (< $10k/month) → One-Time Project
  if (revenue === 'menos10k') {
    primary = 'presencia';
    profile = 'INICIAL';
    priceType = 'ONE_TIME';
  }
  // CASE A: Solopreneur ($10k-$25k) → Tier 1 Cimientos (Standard)
  else if (revenue === '10k-25k') {
    primary = 'cimientos';
    profile = 'ESTABILIDAD';
    priceType = 'STANDARD_T1';
  }
  // CASE B: Growth ($25k-$60k) OR Small Team → Tier 2 with Starter
  else if (revenue === '25k-60k' || team === 'pequeno') {
    primary = 'expansion';
    profile = 'CRECIMIENTO';
    priceType = 'STARTER_TIER2';
  }
  // CASE C: Leader (> $60k) OR Large Team → Tier 3 with Ramp
  else if (revenue === 'mas60k' || team === 'grande') {
    primary = 'dominio';
    profile = 'LIDER';
    priceType = 'STARTER_TIER3';
  }
  // FALLBACK: New contractor or solo → Presencia
  else if (google === 'nuevo' || team === 'solo') {
    primary = 'presencia';
    profile = 'INICIAL';
    priceType = 'ONE_TIME';
  }
  
  return { primary, profile, priceType, requiresAudit, napRisk, needsGuidance };
};

const CALENDAR_URL = '#cta-final';

// Pricing FAQs for objections - Aligned with legal contracts
const pricingFAQs = [
  {
    question: "¿Qué es la Auditoría NAP?",
    answer: "La Auditoría NAP ($250) es un análisis profundo de tu presencia digital actual. Revisamos tu Nombre, Dirección y Teléfono (NAP) en 50+ directorios para detectar inconsistencias que afectan tu ranking en Google. Ideal si perdiste acceso a tu perfil de Google o tienes información desactualizada. Nota: No garantizamos decisiones de entidades externas como Google."
  },
  {
    question: "¿Cuáles son los compromisos mínimos?",
    answer: "Los compromisos varían por tier:\n\n• Presencia Digital: Proyecto finito de 90 días, sin mensualidades\n• Tier 1 (Cimientos) y Tier 2 (Expansión): 6 meses mínimo para acceder a la tarifa Starter subsidiada\n• Tier 3 (Dominio Estratégico): 12 meses mínimo debido a la inversión significativa de C3\n\nEstos compromisos nos permiten ofrecerte precios de arranque reducidos."
  },
  {
    question: "¿Qué pasa si quiero cancelar antes del compromiso?",
    answer: "Entendemos que las circunstancias cambian. Si cancelas antes del período mínimo acordado, aplica una liquidación proporcional del subsidio que C3 absorbió en tu arranque. Esto cubre la diferencia entre el precio Starter que pagaste y la tarifa estándar del servicio recibido. Sin sorpresas, todo está documentado en tu contrato."
  },
  {
    question: "¿Quién paga el Ad Spend (presupuesto publicitario)?",
    answer: "La gestión de campañas está incluida en los tiers que ofrecen Ads. Sin embargo, el presupuesto publicitario (Ad Spend) es adicional y se paga directamente por ti a las plataformas (Meta, Google, TikTok). Nosotros optimizamos cada dólar, especialmente en etapa de aprendizaje. Presupuesto sugerido: $500-$1,000/mes."
  },
  {
    question: "¿Quién es dueño de los activos digitales?",
    answer: "Tú eres dueño del contenido personalizado (logos, copy, fotos editadas) una vez pagado en su totalidad. Recibes credenciales de dominio, hosting, Google Business y redes sociales. Nota: La tecnología de fondo, metodologías y sistemas propietarios de C3 permanecen como propiedad de la agencia, según términos de servicio."
  },
  {
    question: "¿Hay garantía de resultados?",
    answer: "Garantizamos la entrega de todos los activos digitales prometidos. Para SEO y posicionamiento, ofrecemos un enfoque de mejora continua pero no garantizamos rankings específicos, ya que dependen de factores externos (algoritmos de Google, competencia local). Usamos KPIs medibles para demostrar progreso mensual."
  },
  {
    question: "¿Por qué el precio Starter (Riesgo Compartido)?",
    answer: "C3 subsidia hasta $1,400 de tu costo inicial porque creemos en tu negocio. El precio Starter reduce tu inversión de entrada mientras construimos tu infraestructura digital. Solo pasas a la tarifa estándar cuando tu sistema ya está funcionando y generando resultados. Nosotros ponemos la inversión, tú pones la confianza."
  }
];

// Component for comparing plans in a modal
const PlansComparisonModal = ({ currentPlanKey }: { currentPlanKey: string }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-3 gap-2"
        >
          <LayoutGrid className="h-5 w-5" />
          Comparar Todos los Planes
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[85vh] overflow-hidden">
        <DialogHeader className="pb-4 border-b">
          <DialogTitle className="text-xl sm:text-2xl font-bold">Comparación de Planes</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(85vh-120px)] pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 pt-4">
            {planOrder.map((planKey) => {
              const plan = planData[planKey];
              const isRecommended = planKey === currentPlanKey;
              
              return (
                <Card 
                  key={planKey} 
                  className={`relative ${isRecommended ? 'border-2 border-primary ring-2 ring-primary/20 shadow-lg' : 'border'}`}
                >
                  {isRecommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
                      ✓ Recomendado
                    </div>
                  )}
                  <CardHeader className="bg-card pb-3 pt-6 border-b">
                    <CardTitle className="text-base sm:text-lg font-bold text-center">
                      {plan.title}
                    </CardTitle>
                    <p className="text-2xl sm:text-3xl font-bold text-center text-primary mt-2">
                      {plan.price}
                    </p>
                    {plan.priceNote && (
                      <p className="text-xs text-center text-muted-foreground mt-1">
                        {plan.priceNote}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="pt-3">
                    <p className="text-xs text-muted-foreground text-center mb-4 font-medium">
                      {plan.targetProfile}
                    </p>
                    
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
  const { language } = useLanguage();
  
  // Parse and validate all query parameters with Zod
  const validatedParams = useMemo(() => {
    const rawParams = {
      google: searchParams.get('google'),
      license: searchParams.get('license'),
      team: searchParams.get('team'),
      revenue: searchParams.get('revenue'),
      expectation: searchParams.get('expectation'),
      management: searchParams.get('management'),
      digital: searchParams.get('digital'),
      business: searchParams.get('business'),
      name: searchParams.get('name'),
    };
    
    const result = diagnosticParamsSchema.safeParse(rawParams);
    
    if (result.success) {
      return {
        google: result.data.google ?? null,
        license: result.data.license ?? null,
        team: result.data.team ?? null,
        revenue: result.data.revenue ?? null,
        expectation: result.data.expectation ?? null,
        management: result.data.management ?? null,
        digital: result.data.digital ?? null,
        businessName: sanitizeBusinessName(result.data.business),
        ownerName: sanitizeBusinessName(result.data.name),
      };
    }
    
    return {
      google: null,
      license: null,
      team: null,
      revenue: null,
      expectation: null,
      management: null,
      digital: null,
      businessName: null,
      ownerName: null,
    };
  }, [searchParams]);

  const { google, license, team, revenue, expectation, management, digital, businessName, ownerName } = validatedParams;
  const { primary, profile, priceType, requiresAudit, napRisk, needsGuidance } = determineRecommendation(
    google, license, team, revenue, expectation, management, digital
  );
  const currentPlan = planData[primary];
  const auditPlan = planData.auditoria;

  // Scroll to top on page load
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load GHL form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://lnk.c3localmarketing.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const openCalendar = () => {
    const element = document.getElementById('calendar-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get revenue label for display
  const revenueLabel = revenue ? revenueLabels[revenue] : 'No especificado';

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navbar />
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* ========== Progress Stepper ========== */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProgressStepper currentStep="results" />
            </motion.div>

            {/* ========== SECTION 1: Profile Header ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ProfileHeader 
                profile={profile}
                businessName={businessName}
                ownerName={ownerName}
                revenueLabel={revenueLabel}
              />
            </motion.div>

            {/* ========== SECTION 2: Diagnostic Summary Cards ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DiagnosticSummaryCards 
                googleStatus={google}
                monthlyRevenue={revenue}
                teamSize={team}
                digitalHealth={digital}
              />
            </motion.div>

            {/* ========== SECTION 3: Educational Insight (5-10% Rule) ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <EducationalInsight 
                revenueRange={revenue}
                recommendedPlanPrice={currentPlan.price}
                profile={profile}
              />
            </motion.div>

            {/* ========== SECTION 4: NAP Risk Alert ========== */}
            {napRisk && (
              <Card className="border-2 border-yellow-500 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-yellow-900 text-lg mb-1">
                        ⚠️ Alerta: Riesgo de NAP Detectado
                      </h3>
                      <p className="text-yellow-800 mb-3">
                        Detectamos problemas con tus accesos o información de negocio (NAP). 
                        Esto puede causar suspensión en Google. Recomendamos una auditoría antes de invertir en marketing.
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

            {/* ========== SECTION 5: Guidance Alert ========== */}
            {needsGuidance && (
              <Card className="border-2 border-blue-500 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                      <Lightbulb className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 text-lg mb-2">
                        💡 ¿No estás seguro por dónde empezar?
                      </h3>
                      <p className="text-blue-800 mb-4">
                        Entendemos que el marketing digital puede ser confuso. Agenda una llamada de 15 minutos <strong>sin costo</strong> con nuestro equipo para analizar tu situación específica.
                      </p>
                      <Button 
                        onClick={openCalendar}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Agendar Llamada de Orientación
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ========== SECTION 6: Plan Recommendation with Starter Pricing ========== */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-foreground">
                Tu Plan Recomendado
              </h2>

              {/* Single Price Card — fixed pricing model */}
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-6 text-center space-y-2">
                  <p className="text-sm text-muted-foreground">{currentPlan.targetProfile}</p>
                  <p className="text-5xl font-bold text-primary">{currentPlan.price}</p>
                  {currentPlan.priceNote && (
                    <p className="text-sm text-muted-foreground">{currentPlan.priceNote}</p>
                  )}
                </CardContent>
              </Card>

              {/* Ad Spend Disclaimer */}
              {(primary === 'expansion' || primary === 'dominio') && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-900 text-sm leading-relaxed">
                    <strong className="text-amber-800">📢 Add-on Acelerador de Campañas:</strong>{' '}
                    {language === 'es'
                      ? '$199/mes por canal (Google Ads o Meta Ads). El presupuesto publicitario (Ad Spend) se paga directo a la plataforma elegida.'
                      : '$199/month per channel (Google Ads or Meta Ads). Ad budget (Ad Spend) is paid directly to the chosen platform.'}
                  </p>
                </div>
              )}


              {/* Primary Plan Card */}
              <Card className="border-2 border-primary shadow-soft-lg overflow-hidden">
                <CardHeader className="text-center pb-4 bg-gradient-to-b from-primary/5 to-transparent">
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 mx-auto">
                    <Target className="h-4 w-4 mr-1" />
                    {currentPlan.title}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                    {currentPlan.description}
                  </CardTitle>
                  
                  {/* Authority Badges */}
                  <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border/30">
                    <img 
                      src={sello20Anios} 
                      alt="20+ Años de Experiencia" 
                      className="h-14 sm:h-16 w-auto max-w-[100px] sm:max-w-[120px] object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="h-12 w-px bg-border" />
                    <img 
                      src={certificadoGBP} 
                      alt="Google Business Profile Certificado" 
                      className="h-16 sm:h-20 w-auto max-w-[100px] sm:max-w-[120px] object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 p-6">
                  {/* Inherited Features */}
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

                  {/* Plan Conditions */}
                  {(primary === 'expansion' || primary === 'dominio') && (
                    <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground mb-1">Condiciones del Plan:</p>
                      <ul className="space-y-1">
                        <li>• Compromiso mínimo de 6 meses</li>
                        <li>• Precios con descuento por pago en Efectivo, ACH o Zelle (Tarjeta de crédito +3%)</li>
                        <li>• Cancelación anticipada anula la licencia sobre los entregables</li>
                        <li>• Renovación automática mes a mes tras los 6 meses</li>
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    onClick={openCalendar}
                    size="lg"
                    className="w-full text-lg py-6 gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Agendar Llamada de Estrategia
                  </Button>


                  {/* Disclaimer */}
                  <p className="text-center text-sm text-muted-foreground">
                    🔒 Sin compromiso. Sin presión de venta. Conversación honesta.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Compare Plans Button */}
            <div className="flex justify-center">
              <PlansComparisonModal currentPlanKey={primary} />
            </div>

            {/* ========== CALENDAR SECTION ========== */}
            <div id="calendar-section" className="scroll-mt-24">
              <Card className="border-2 border-primary/20 shadow-soft-lg overflow-hidden">
                <CardHeader className="text-center pb-4 bg-gradient-to-b from-primary/5 to-transparent">
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 mx-auto">
                    <Calendar className="h-4 w-4 mr-1" />
                    Siguiente Paso
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                    Agenda Tu Llamada de Estrategia
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    30 minutos para definir tu plan de acción personalizado
                  </p>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  {/* Social Proof - Logos */}
                  <div className="flex items-center justify-center gap-6 py-4 border-b border-border/50">
                    <img 
                      src={jvRoofingLogo} 
                      alt="JV Roofing" 
                      className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src={smvcLogo} 
                      alt="SMVC" 
                      className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm text-muted-foreground font-medium">
                      +15 negocios locales
                    </span>
                  </div>
                  
                  {/* Testimonial */}
                  <blockquote className="text-center py-4">
                    <p className="text-lg italic text-muted-foreground">
                      "De invisible a referente local en tiempo récord. Ahora mis clientes me encuentran en Google antes que a la competencia."
                    </p>
                    <cite className="block mt-3 text-sm font-semibold text-foreground not-italic">
                      — Juan V., JV Roofing Services
                    </cite>
                  </blockquote>
                  
                  {/* GHL Calendar Embed */}
                  <div className="rounded-xl overflow-hidden border border-border bg-background">
                    <iframe
                      src="https://lnk.c3localmarketing.com/widget/booking/niXmOF5syJl2P16WGpex"
                      className="w-full border-none h-[500px] sm:h-[600px] lg:h-[700px]"
                      scrolling="no"
                      id="niXmOF5syJl2P16WGpex_1768623651908"
                      title="Agenda tu llamada de estrategia"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Trust badge */}
                  <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Sin compromiso. Sin presión de venta. 100% confidencial.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* ========== PRICING FAQ SECTION ========== */}
            <div>
              <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                <ChevronDown className="h-5 w-5 text-primary" />
                Preguntas Frecuentes Sobre Precio
              </h3>
              
              <Accordion type="single" collapsible className="w-full">
                {pricingFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg mb-2 px-4">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Trust elements */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
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
