import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const WhatsAppButton = () => {
  const { toast } = useToast();
  
  const handleWhatsAppClick = () => {
    // Track Facebook Pixel Contact event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', {
        content_name: 'WhatsApp Click',
        content_category: 'Sistema Imán Local'
      });
    }
    
    // Track Google conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'event_category': 'Contact',
        'event_label': 'WhatsApp Click'
      });
    }
    
    // Show toast confirmation
    toast({
      title: "Abriendo WhatsApp",
      description: "Te conectaremos en un momento...",
    });
    
    // WhatsApp number (replace with actual number)
    const phoneNumber = "18056084843";
    const message = encodeURIComponent("Hola! Me interesa el Sistema Imán Local™. ¿Podemos agendar una llamada?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-fade-in bg-[#25D366] hover:bg-[#128C7E] text-white border-4 border-white"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default WhatsAppButton;
