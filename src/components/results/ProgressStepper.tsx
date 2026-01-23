import { Check, CircleDot, Circle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface ProgressStepperProps {
  currentStep: 'diagnosis' | 'results' | 'call';
}

const ProgressStepper = ({ currentStep }: ProgressStepperProps) => {
  const { t } = useLanguage();

  const steps = [
    { id: 'diagnosis', label: t('results.stepper.diagnosis') },
    { id: 'results', label: t('results.stepper.results') },
    { id: 'call', label: t('results.stepper.call') },
  ];

  const getStepIndex = (stepId: string) => steps.findIndex(s => s.id === stepId);
  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 py-4">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isPending = index > currentIndex;

        return (
          <div key={step.id} className="flex items-center gap-2 sm:gap-4">
            {/* Step */}
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                  isCompleted
                    ? 'bg-primary text-primary-foreground'
                    : isCurrent
                    ? 'bg-primary/20 text-primary ring-2 ring-primary ring-offset-2'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : isCurrent ? (
                  <CircleDot className="w-4 h-4" />
                ) : (
                  <Circle className="w-4 h-4" />
                )}
              </div>
              <span
                className={`text-xs sm:text-sm font-medium transition-colors ${
                  isCompleted
                    ? 'text-primary'
                    : isCurrent
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`w-6 sm:w-12 h-0.5 transition-colors ${
                  index < currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressStepper;
