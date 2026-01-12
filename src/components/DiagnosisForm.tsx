import { useEffect } from "react";
import { X } from "lucide-react";

interface DiagnosisFormProps {
  onClose: () => void;
}

const DiagnosisForm = ({ onClose }: DiagnosisFormProps) => {
  useEffect(() => {
    // Track Facebook Pixel Lead event when form opens
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Diagnóstico Gratuito',
        content_category: 'Sistema Imán Local'
      });
    }

    // Load GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://lnk.c3localmarketing.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-card border-2 border-primary/20 rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 bg-background/80 hover:bg-background transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Agendar Llamada de <span className="text-primary">Diagnóstico Gratuita</span>
            </h2>
            <p className="text-base text-muted-foreground">
              Completa el formulario y te contactaremos para agendar tu llamada
            </p>
          </div>

          <div className="w-full h-[500px] sm:h-[600px]">
            <iframe
              src="https://lnk.c3localmarketing.com/widget/form/kFXLYuTPXspb08DkEmbj"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px'
              }}
              id="inline-kFXLYuTPXspb08DkEmbj" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="PRESENCIA DIGITAL"
              data-height="662"
              data-layout-iframe-id="inline-kFXLYuTPXspb08DkEmbj"
              data-form-id="kFXLYuTPXspb08DkEmbj"
              title="PRESENCIA DIGITAL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisForm;
