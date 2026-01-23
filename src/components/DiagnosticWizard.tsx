import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useAnalytics } from "@/hooks/use-analytics";
import { useLanguage } from "@/hooks/use-language";
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

const DiagnosticWizard = () => {
  const navigate = useNavigate();
  const { trackLead } = useAnalytics();
  const { t } = useLanguage();
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

  const loadingMessages = [
    t('wizard.loading.analyzing'),
    t('wizard.loading.reviewing'),
    t('wizard.loading.calculating'),
    t('wizard.loading.preparing')
  ];

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
  }, [isCalculating, loadingMessages.length]);

  // Step 1: Google Status Options (FIXED - 100% GBP focused)
  const googleOptions = [
    { value: 'nuevo' as GoogleStatus, label: t('wizard.step1Options.nuevo'), icon: MapPinOff },
    { value: 'invisible' as GoogleStatus, label: t('wizard.step1Options.invisible'), icon: AlertTriangle },
    { value: 'noVende' as GoogleStatus, label: t('wizard.step1Options.noVende'), icon: TrendingUp },
    { value: 'dominar' as GoogleStatus, label: t('wizard.step1Options.dominar'), icon: Crown }
  ];

  // Step 2: License Stage Options
  const licenseOptions = [
    { value: 'nuevo' as LicenseStage, label: t('wizard.step2Options.nuevo'), icon: FileCheck },
    { value: 'estable' as LicenseStage, label: t('wizard.step2Options.estable'), icon: Building },
    { value: 'cambios' as LicenseStage, label: t('wizard.step2Options.cambios'), icon: RefreshCw }
  ];

  // Step 3: Team Size Options
  const teamOptions = [
    { value: 'solo' as TeamSize, label: t('wizard.step3Options.solo'), icon: User },
    { value: 'pequeno' as TeamSize, label: t('wizard.step3Options.pequeno'), icon: Users },
    { value: 'grande' as TeamSize, label: t('wizard.step3Options.grande'), icon: Building2 }
  ];

  // Step 4: Monthly Revenue Options (CRITICAL)
  const revenueOptions = [
    { value: 'menos10k' as MonthlyRevenue, label: t('wizard.step4Options.menos10k'), icon: DollarSign },
    { value: '10k-25k' as MonthlyRevenue, label: t('wizard.step4Options.10k-25k'), icon: TrendingUp },
    { value: '25k-60k' as MonthlyRevenue, label: t('wizard.step4Options.25k-60k'), icon: Rocket },
    { value: 'mas60k' as MonthlyRevenue, label: t('wizard.step4Options.mas60k'), icon: Crown }
  ];

  // Step 5: Expectation Options
  const expectationOptions = [
    { value: 'urgente' as Expectation, label: t('wizard.step5Options.urgente'), icon: Clock },
    { value: 'proceso' as Expectation, label: t('wizard.step5Options.proceso'), icon: CalendarClock },
    { value: 'legado' as Expectation, label: t('wizard.step5Options.legado'), icon: Infinity },
    { value: 'noSeguro' as Expectation, label: t('wizard.step5Options.noSeguro'), icon: HelpCircle }
  ];

  // Step 6: Client Management Options
  const managementOptions = [
    { value: 'papel' as ClientManagement, label: t('wizard.step6Options.papel'), icon: FileText },
    { value: 'apps' as ClientManagement, label: t('wizard.step6Options.apps'), icon: Layers },
    { value: 'crm' as ClientManagement, label: t('wizard.step6Options.crm'), icon: Database }
  ];

  // Step 7: Digital Health Options
  const digitalOptions = [
    { value: 'nada' as DigitalHealth, label: t('wizard.step7Options.nada'), icon: Globe },
    { value: 'acceso' as DigitalHealth, label: t('wizard.step7Options.acceso'), icon: Key },
    { value: 'perdido' as DigitalHealth, label: t('wizard.step7Options.perdido'), icon: AlertTriangle },
    { value: 'malNAP' as DigitalHealth, label: t('wizard.step7Options.malNAP'), icon: Edit3 }
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
                {t('wizard.loading.wait')}
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
            <span>{t('wizard.step')} {currentStep} {t('wizard.of')} {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-muted [&>div]:bg-primary" />
        </div>

        {/* Step 1: Google Status */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              {t('wizard.step1Title')}
            </h3>
            <div className="grid gap-4">
              {googleOptions.map((option) => 
                renderOptionButton(option, state.googleStatus, (v) => setState({ ...state, googleStatus: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 2: License Stage */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              {t('wizard.step2Title')}
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
              {t('wizard.step3Title')}
            </h3>
            <div className="grid gap-4">
              {teamOptions.map((option) => 
                renderOptionButton(option, state.teamSize, (v) => setState({ ...state, teamSize: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 4: Monthly Revenue (CRITICAL) */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              {t('wizard.step4Title')}
            </h3>
            <p className="text-center text-muted-foreground text-sm">
              {t('wizard.step4Subtitle')}
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
              {t('wizard.step5Title')}
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
              {t('wizard.step6Title')}
            </h3>
            <div className="grid gap-4">
              {managementOptions.map((option) => 
                renderOptionButton(option, state.clientManagement, (v) => setState({ ...state, clientManagement: v }))
              )}
            </div>
          </div>
        )}

        {/* Step 7: Digital Health */}
        {currentStep === 7 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
              {t('wizard.step7Title')}
            </h3>
            <p className="text-center text-muted-foreground text-sm">
              {t('wizard.step7Subtitle')}
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
                {t('wizard.step8Title')}
              </h3>
              <p className="text-muted-foreground mt-2">
                {t('wizard.step8Subtitle')}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName">{t('wizard.businessNameLabel')}</Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder={t('wizard.businessNamePlaceholder')}
                  value={state.businessName}
                  onChange={(e) => setState({ ...state, businessName: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="name">{t('wizard.nameLabel')}</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('wizard.namePlaceholder')}
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">{t('wizard.phoneLabel')}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t('wizard.phonePlaceholder')}
                  value={state.phone}
                  onChange={(e) => setState({ ...state, phone: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">{t('wizard.emailLabel')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('wizard.emailPlaceholder')}
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
              {t('wizard.back')}
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
              {t('wizard.next')}
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              disabled={!canProceed()}
              className="ml-auto"
            >
              {t('wizard.viewPlan')}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DiagnosticWizard;
