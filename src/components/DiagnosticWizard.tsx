import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "@/hooks/use-analytics";

type GoogleStatus = "verificacion" | "growth" | "ads" | null;
type ClientManagement = "needsSoftware" | "multipleApps" | "hasCRM" | null;

interface WizardState {
  googleStatus: GoogleStatus;
  clientManagement: ClientManagement;
  name: string;
  phone: string;
  email: string;
}

const DiagnosticWizard = () => {
  const navigate = useNavigate();
  const { trackCTAClick } = useAnalytics();
  const [currentStep, setCurrentStep] = useState(1);
  const [state, setState] = useState<WizardState>({
    googleStatus: null,
    clientManagement: null,
    name: "",
    phone: "",
    email: ""
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const googleOptions = [
    { value: "verificacion" as const, label: "No aparezco o estoy suspendido" },
    { value: "growth" as const, label: "Aparezco pero el teléfono no suena" },
    { value: "ads" as const, label: "Tengo equipos y quiero escalar" }
  ];

  const clientOptions = [
    { value: "needsSoftware" as const, label: "Cuaderno, papel y memoria" },
    { value: "multipleApps" as const, label: "Varias apps sueltas (Excel, Zelle, Notas)" },
    { value: "hasCRM" as const, label: "Tengo un CRM profesional" }
  ];

  const handleGoogleSelect = (value: GoogleStatus) => {
    setState(prev => ({ ...prev, googleStatus: value }));
  };

  const handleClientSelect = (value: ClientManagement) => {
    setState(prev => ({ ...prev, clientManagement: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackCTAClick('Ver mi Reporte', 'Diagnostic Wizard');

    // Determine recommendation
    const needsSoftware = state.clientManagement === "needsSoftware" || state.clientManagement === "multipleApps";
    const plan = needsSoftware ? "control" : state.googleStatus;

    // TODO: Send to GoHighLevel Webhook
    // const webhookUrl = "YOUR_GHL_WEBHOOK_URL";
    // fetch(webhookUrl, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: state.name,
    //     phone: state.phone,
    //     email: state.email,
    //     googleStatus: state.googleStatus,
    //     clientManagement: state.clientManagement,
    //     recommendedPlan: plan
    //   })
    // });

    // Navigate to results
    navigate(`/resultados?plan=${plan}&google=${state.googleStatus}&software=${needsSoftware}`);
  };

  const canProceedStep1 = state.googleStatus !== null;
  const canProceedStep2 = state.clientManagement !== null;
  const canSubmit = state.name.trim() !== "" && state.phone.trim() !== "" && state.email.trim() !== "";

  return (
    <div className="bg-card rounded-2xl shadow-soft-lg p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Paso {currentStep} de {totalSteps}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step 1: Google Status */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center">
            ¿Cuál es tu situación actual en Google?
          </h3>
          <div className="space-y-3">
            {googleOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleGoogleSelect(option.value)}
                className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
                  state.googleStatus === option.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{option.label}</span>
                  {state.googleStatus === option.value && (
                    <Check className="h-5 w-5 text-primary" />
                  )}
                </div>
              </button>
            ))}
          </div>
          <div className="flex justify-end pt-4">
            <Button 
              onClick={handleNext} 
              disabled={!canProceedStep1}
              className="px-8"
            >
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Client Management */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center">
            ¿Cómo gestionas tus clientes hoy?
          </h3>
          <div className="space-y-3">
            {clientOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleClientSelect(option.value)}
                className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
                  state.clientManagement === option.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{option.label}</span>
                  {state.clientManagement === option.value && (
                    <Check className="h-5 w-5 text-primary" />
                  )}
                </div>
              </button>
            ))}
          </div>
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Atrás
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={!canProceedStep2}
              className="px-8"
            >
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Lead Capture */}
      {currentStep === 3 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center">
            ¿A dónde enviamos tu reporte?
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground">Nombre</Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre completo"
                value={state.name}
                onChange={(e) => setState(prev => ({ ...prev, name: e.target.value }))}
                className="mt-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={state.phone}
                onChange={(e) => setState(prev => ({ ...prev, phone: e.target.value }))}
                className="mt-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={state.email}
                onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
                className="mt-2"
                required
              />
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <Button variant="outline" type="button" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Atrás
            </Button>
            <Button 
              type="submit"
              disabled={!canSubmit}
              className="px-8 bg-primary hover:bg-primary/90"
            >
              Ver mi Reporte
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DiagnosticWizard;
