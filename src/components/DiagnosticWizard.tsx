import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useAnalytics } from "@/hooks/use-analytics";
import { 
  MapPinOff, 
  TrendingUp, 
  Crown, 
  User, 
  Users, 
  Building2, 
  Clock, 
  CalendarClock, 
  Infinity, 
  FileText, 
  Layers, 
  Database, 
  Loader2, 
  Sparkles, 
  HelpCircle,
  FileCheck,
  Building,
  RefreshCw,
  DollarSign,
  Rocket,
  Globe,
  Key,
  AlertTriangle,
  Edit3
} from "lucide-react";

// Types for all wizard steps
type GoogleStatus = 'invisible' | 'noVende' | 'dominar' | 'nuevo' | null;
type LicenseStage = 'nuevo' | 'estable' | 'cambios' | null;
type TeamSize = 'solo' | 'pequeno' | 'grande' | null;
type MonthlyRevenue = 'menos10k' | '10k-25k' | '25k-60k' | 'mas60k' | null;
type Expectation = 'urgente' | 'proceso' | 'legado' | 'noSeguro' | null;
type ClientManagement = 'papel' | 'apps' | 'crm' | null;
type DigitalHealth = 'nada' | 'acceso' | 'perdido' | 'malNAP' | null;

interface WizardState {
  googleStatus: GoogleStatus;
  licenseStage: LicenseStage;
  teamSize: TeamSize;
  monthlyRevenue: MonthlyRevenue;
  expectation: Expectation;
  clientManagement: ClientManagement;
  digitalHealth: DigitalHealth;
  businessName: string;
  name: string;
  phone: string;
  email: string;
}

const loadingMessages = [
  "Analizando tus respuestas...",
  "Revisando tu capacidad financiera...",
  "Calculando inversión óptima (5-10%)...",
  "Preparando tu plan personalizado..."
];

const DiagnosticWizard = () => {
  const navigate = useNavigate();
  const { trackLead } = useAnalytics();
  const [currentStep, setCurrentStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [state, setState] = useState<WizardState>({
    googleStatus: null,
    licenseStage: null,
    teamSize: null,
    monthlyRevenue: null,
    expectation: null,
    clientManagement: null,
    digitalHealth: null,
    businessName: '',
    name: '',
    phone: '',
    email: ''
  });

  const totalSteps = 8;
  const progress = (currentStep / totalSteps) * 100;

  // Rotate loading messages
  useEffect(() => {
    if (isCalculating) {
      const interval = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCalculating]);

  // Step 1: Google Status Options
  const googleOptions = [
    { value: 'nuevo' as GoogleStatus, label: 'Recién obtuve mi licencia / Voy empezando', icon: Sparkles },
    { value: 'invisible' as GoogleStatus, label: 'No aparezco / Suspendido', icon: MapPinOff },
    { value: 'noVende' as GoogleStatus, label: 'Aparezco pero no vendo', icon: TrendingUp },
    { value: 'dominar' as GoogleStatus, label: 'Quiero dominar la zona', icon: Crown }
  ];

  // Step 2: License Stage Options (NEW)
  const licenseOptions = [
    { value: 'nuevo' as LicenseStage, label: 'Soy Nuevo (Menos de 1 año / En trámite)', icon: FileCheck },
    { value: 'estable' as LicenseStage, label: 'Estable (Años operando igual)', icon: Building },
    { value: 'cambios' as LicenseStage, label: 'Cambios Recientes (Nombre/Entidad)', icon: RefreshCw }
  ];

  // Step 3: Team Size Options (renamed from operationSize)
  const teamOptions = [
    { value: 'solo' as TeamSize, label: 'Solo yo (y un ayudante)', icon: User },
    { value: 'pequeno' as TeamSize, label: 'Equipo Pequeño (2-6 empleados)', icon: Users },
    { value: 'grande' as TeamSize, label: 'Empresa Grande (10+ empleados)', icon: Building2 }
  ];

  // Step 4: Monthly Revenue Options (NEW - CRITICAL)
  const revenueOptions = [
    { value: 'menos10k' as MonthlyRevenue, label: 'Menos de $10,000 / mes', icon: DollarSign },
    { value: '10k-25k' as MonthlyRevenue, label: 'Entre $10,000 y $25,000 / mes', icon: TrendingUp },
    { value: '25k-60k' as MonthlyRevenue, label: 'Entre $25,000 y $60,000 / mes', icon: Rocket },
    { value: 'mas60k' as MonthlyRevenue, label: 'Más de $60,000 / mes', icon: Crown }
  ];

  // Step 5: Expectation Options
  const expectationOptions = [
    { value: 'urgente' as Expectation, label: 'Ayer / Urgente', icon: Clock },
    { value: 'proceso' as Expectation, label: '30-90 días (Entiendo el proceso)', icon: CalendarClock },
    { value: 'legado' as Expectation, label: 'Largo plazo (Construir legado)', icon: Infinity },
    { value: 'noSeguro' as Expectation, label: 'No estoy seguro / Necesito orientación', icon: HelpCircle }
  ];

  // Step 6: Client Management Options
  const managementOptions = [
    { value: 'papel' as ClientManagement, label: 'Papel y Lápiz', icon: FileText },
    { value: 'apps' as ClientManagement, label: 'Varias Apps sueltas', icon: Layers },
    { value: 'crm' as ClientManagement, label: 'CRM Profesional', icon: Database }
  ];

  // Step 7: Digital Health Options (NEW)
  const digitalOptions = [
    { value: 'nada' as DigitalHealth, label: 'No tengo nada aún', icon: Globe },
    { value: 'acceso' as DigitalHealth, label: 'Sí, tengo mis claves y acceso total', icon: Key },
    { value: 'perdido' as DigitalHealth, label: 'No tengo acceso / Las perdí', icon: AlertTriangle },
    { value: 'malNAP' as DigitalHealth, label: 'Tengo acceso pero la info está mal (NAP)', icon: Edit3 }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsCalculating(true);
    trackLead('Diagnostic Wizard');

    // TODO: Send to GoHighLevel Webhook
    // const webhookData = {
    //   businessName: state.businessName,
    //   name: state.name,
    //   email: state.email,
    //   phone: state.phone,
    //   googleStatus: state.googleStatus,
    //   licenseStage: state.licenseStage,
    //   teamSize: state.teamSize,
    //   monthlyRevenue: state.monthlyRevenue,
    //   expectation: state.expectation,
    //   clientManagement: state.clientManagement,
    //   digitalHealth: state.digitalHealth
    // };
    // await fetch('YOUR_GHL_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(webhookData) });

    // Animation delay (3 seconds)
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Navigate to results with all parameters
    const params = new URLSearchParams({
      google: state.googleStatus || '',
      license: state.licenseStage || '',
      team: state.teamSize || '',
      revenue: state.monthlyRevenue || '',
      expectation: state.expectation || '',
      management: state.clientManagement || '',
      digital: state.digitalHealth || '',
      business: state.businessName,
      name: state.name
    });
    
    navigate(`/resultados?${params.toString()}`);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return state.googleStatus !== null;
      case 2: return state.licenseStage !== null;
      case 3: return state.teamSize !== null;
      case 4: return state.monthlyRevenue !== null;
      case 5: return state.expectation !== null;
      case 6: return state.clientManagement !== null;
      case 7: return state.digitalHealth !== null;
      case 8: return state.businessName && state.name && state.phone && state.email;
      default: return false;
    }
  };

  // Render option button
  const renderOptionButton = <T extends string>(
    option: { value: T; label: string; icon: React.ComponentType<{ className?: string }> },
    currentValue: T | null,
    onChange: (value: T) => void
  ) => {
    const Icon = option.icon;
    const isSelected = currentValue === option.value;
    
    return (
      <button
        key={option.value}
        onClick={() => onChange(option.value)}
        className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
          isSelected
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
      >
        <div className={`p-3 rounded-lg ${
          isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
        }`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className="font-semibold">{option.label}</span>
      </button>
    );
  };

  // Calculating Animation Screen
  if (isCalculating) {
    return (
      <Card className="max-w-2xl mx-auto border-0 shadow-soft-lg">
        <CardContent className="p-8 sm:p-12">
          <div className="text-center space-y-6">
            <div className="relative mx-auto w-20 h-20">
              <Loader2 className="w-20 h-20 text-primary animate-spin" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                {loadingMessages[loadingMessageIndex]}
              </h3>
              <p className="text-muted-foreground">
                Esto tomará solo un momento...
              </p>
            </div>
            <Progress value={((loadingMessageIndex + 1) / loadingMessages.length) * 100} className="h-2 bg-muted [&>div]:bg-primary" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto border-0 shadow-soft-lg">
      <CardContent className="p-6 sm:p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Paso {currentStep} de {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-muted [&>div]:bg-primary" />
        </div>

        {/* Step 1: Google Status */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿Cuál es tu situación en Google?
            </h3>
            <div className="grid gap-4">
              {googleOptions.map((option) => 
                renderOptionButton(option, state.googleStatus, (v) => setState({ ...state, googleStatus: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 2: License Stage (NEW) */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿En qué etapa está tu licencia de contratista (CSLB)?
            </h3>
            <div className="grid gap-4">
              {licenseOptions.map((option) => 
                renderOptionButton(option, state.licenseStage, (v) => setState({ ...state, licenseStage: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 3: Team Size */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿Cuál es el tamaño de tu equipo?
            </h3>
            <div className="grid gap-4">
              {teamOptions.map((option) => 
                renderOptionButton(option, state.teamSize, (v) => setState({ ...state, teamSize: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 4: Monthly Revenue (NEW - CRITICAL) */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿Cuál es tu facturación mensual promedio?
            </h3>
            <p className="text-center text-muted-foreground text-sm">
              Esta información nos ayuda a recomendarte un plan acorde a tu capacidad
            </p>
            <div className="grid gap-4">
              {revenueOptions.map((option) => 
                renderOptionButton(option, state.monthlyRevenue, (v) => setState({ ...state, monthlyRevenue: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 5: Expectations */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿Qué tan rápido necesitas ver resultados?
            </h3>
            <div className="grid gap-4">
              {expectationOptions.map((option) => 
                renderOptionButton(option, state.expectation, (v) => setState({ ...state, expectation: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 6: Client Management */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿Cómo gestionas tus clientes actualmente?
            </h3>
            <div className="grid gap-4">
              {managementOptions.map((option) => 
                renderOptionButton(option, state.clientManagement, (v) => setState({ ...state, clientManagement: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 7: Digital Health (NEW) */}
        {currentStep === 7 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿Tienes acceso a tus cuentas digitales?
            </h3>
            <p className="text-center text-muted-foreground text-sm">
              Google Business Profile, redes sociales, dominio web, etc.
            </p>
            <div className="grid gap-4">
              {digitalOptions.map((option) => 
                renderOptionButton(option, state.digitalHealth, (v) => setState({ ...state, digitalHealth: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 8: Lead Generation */}
        {currentStep === 8 && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                ¡Último paso!
              </h3>
              <p className="text-muted-foreground mt-2">
                Ingresa tus datos para ver tu plan personalizado
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName">Nombre de tu Negocio</Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Ej: JV Roofing, Cali Painting..."
                  value={state.businessName}
                  onChange={(e) => setState({ ...state, businessName: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="name">Tu Nombre</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={state.phone}
                  onChange={(e) => setState({ ...state, phone: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 ? (
            <Button variant="outline" onClick={handleBack}>
              Atrás
            </Button>
          ) : (
            <div />
          )}
          
          {currentStep < totalSteps ? (
            <Button 
              onClick={handleNext} 
              disabled={!canProceed()}
              className="ml-auto"
            >
              Siguiente
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              disabled={!canProceed()}
              className="ml-auto"
            >
              Ver mi Plan
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DiagnosticWizard;
