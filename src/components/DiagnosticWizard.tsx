import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useAnalytics } from "@/hooks/use-analytics";
import { MapPinOff, TrendingUp, Crown, User, Users, Building2, Clock, CalendarClock, Infinity, FileText, Layers, Database, Loader2, Sparkles, HelpCircle } from "lucide-react";

type GoogleStatus = 'invisible' | 'noVende' | 'dominar' | 'nuevo' | null;
type OperationSize = 'solo' | 'cuadrilla' | 'flota' | null;
type Expectation = 'urgente' | 'proceso' | 'legado' | 'noSeguro' | null;
type ClientManagement = 'papel' | 'apps' | 'crm' | null;

interface WizardState {
  googleStatus: GoogleStatus;
  operationSize: OperationSize;
  expectation: Expectation;
  clientManagement: ClientManagement;
  businessName: string;
  name: string;
  phone: string;
  email: string;
}

const loadingMessages = [
  "Analizando tus respuestas...",
  "Revisando factores de riesgo...",
  "Calculando estrategia ideal...",
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
    operationSize: null,
    expectation: null,
    clientManagement: null,
    businessName: '',
    name: '',
    phone: '',
    email: ''
  });

  const totalSteps = 5;
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

  // Step 1: Google Status Options (including new contractor option)
  const googleOptions = [
    { value: 'nuevo' as GoogleStatus, label: 'Recién obtuve mi licencia / Voy empezando', icon: Sparkles },
    { value: 'invisible' as GoogleStatus, label: 'No aparezco / Suspendido', icon: MapPinOff },
    { value: 'noVende' as GoogleStatus, label: 'Aparezco pero no vendo', icon: TrendingUp },
    { value: 'dominar' as GoogleStatus, label: 'Quiero dominar la zona', icon: Crown }
  ];

  // Step 2: Operation Size Options
  const sizeOptions = [
    { value: 'solo' as OperationSize, label: 'Solo yo / Voy empezando', icon: User },
    { value: 'cuadrilla' as OperationSize, label: 'Tengo 1-3 empleados / Cuadrilla', icon: Users },
    { value: 'flota' as OperationSize, label: 'Múltiples cuadrillas / Flota', icon: Building2 }
  ];

  // Step 3: Expectation Options
  const expectationOptions = [
    { value: 'urgente' as Expectation, label: 'Ayer / Urgente', icon: Clock },
    { value: 'proceso' as Expectation, label: '30-90 días (Entiendo el proceso)', icon: CalendarClock },
    { value: 'legado' as Expectation, label: 'Largo plazo (Construir legado)', icon: Infinity },
    { value: 'noSeguro' as Expectation, label: 'No estoy seguro / Necesito orientación', icon: HelpCircle }
  ];

  // Step 4: Client Management Options
  const managementOptions = [
    { value: 'papel' as ClientManagement, label: 'Papel y Lápiz', icon: FileText },
    { value: 'apps' as ClientManagement, label: 'Varias Apps sueltas', icon: Layers },
    { value: 'crm' as ClientManagement, label: 'CRM Profesional', icon: Database }
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
    //   operationSize: state.operationSize,
    //   expectation: state.expectation,
    //   clientManagement: state.clientManagement
    // };
    // await fetch('YOUR_GHL_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(webhookData) });

    // Animation delay (3 seconds)
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Navigate to results with all parameters
    const params = new URLSearchParams({
      google: state.googleStatus || '',
      size: state.operationSize || '',
      expectation: state.expectation || '',
      management: state.clientManagement || '',
      business: state.businessName
    });
    
    navigate(`/resultados?${params.toString()}`);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return state.googleStatus !== null;
      case 2: return state.operationSize !== null;
      case 3: return state.expectation !== null;
      case 4: return state.clientManagement !== null;
      case 5: return state.businessName && state.name && state.phone && state.email;
      default: return false;
    }
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
              {googleOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setState({ ...state, googleStatus: option.value })}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    state.googleStatus === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    state.googleStatus === option.value ? 'bg-primary text-white' : 'bg-muted'
                  }`}>
                    <option.icon className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Operation Size */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿Cuál es el tamaño de tu operación?
            </h3>
            <div className="grid gap-4">
              {sizeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setState({ ...state, operationSize: option.value })}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    state.operationSize === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    state.operationSize === option.value ? 'bg-primary text-white' : 'bg-muted'
                  }`}>
                    <option.icon className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Expectations */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿Qué tan rápido necesitas ver resultados masivos?
            </h3>
            <div className="grid gap-4">
              {expectationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setState({ ...state, expectation: option.value })}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    state.expectation === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    state.expectation === option.value ? 'bg-primary text-white' : 'bg-muted'
                  }`}>
                    <option.icon className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Client Management */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              ¿Cómo gestionas tus clientes?
            </h3>
            <div className="grid gap-4">
              {managementOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setState({ ...state, clientManagement: option.value })}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    state.clientManagement === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    state.clientManagement === option.value ? 'bg-primary text-white' : 'bg-muted'
                  }`}>
                    <option.icon className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Lead Generation */}
        {currentStep === 5 && (
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