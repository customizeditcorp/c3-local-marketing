import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/use-analytics";

const CallNowButton = () => {
  const { trackContact } = useAnalytics();

  const handleCall = () => {
    trackContact('Call Now Click');
    window.location.href = 'tel:+18053634044';
  };

  return (
    <Button
      onClick={handleCall}
      size="lg"
      className="fixed bottom-6 left-6 z-50 h-16 w-16 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-fade-in bg-emerald-700 hover:bg-emerald-800 text-white border-4 border-white md:hidden"
      aria-label="Llamar Ahora"
    >
      <Phone className="h-8 w-8" />
    </Button>
  );
};

export default CallNowButton;
