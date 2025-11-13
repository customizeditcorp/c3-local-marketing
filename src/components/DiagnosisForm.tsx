import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Building, MapPin, MessageSquare, X } from "lucide-react";

interface DiagnosisFormProps {
  onClose: () => void;
  ghlWebhookUrl?: string;
}

const DiagnosisForm = ({ onClose, ghlWebhookUrl }: DiagnosisFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tipoNegocio: "",
    ciudad: "",
    situacionActual: "",
    mensaje: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!ghlWebhookUrl) {
      toast({
        title: "Configuración Pendiente",
        description: "El webhook de GoHighLevel no está configurado. Contacta al administrador.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Sistema Imán Local Landing",
          tipo: "Llamada de Diagnóstico"
        }),
      });

      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
          'event_category': 'Lead',
          'event_label': 'Diagnosis Form Submitted'
        });
      }

      toast({
        title: "¡Solicitud Enviada!",
        description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
      });

      // Reset form
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        tipoNegocio: "",
        ciudad: "",
        situacionActual: "",
        mensaje: ""
      });

      // Close modal after success
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error al Enviar",
        description: "Por favor intenta nuevamente o contáctanos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3">
            Llamada de Diagnóstico <span className="text-primary">Gratuita</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Completa el formulario y nos pondremos en contacto contigo en las próximas 24 horas para agendar tu llamada.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Nombre Completo *
              </Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Juan Pérez"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Teléfono *
              </Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="(805) 123-4567"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="juan@ejemplo.com"
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="tipoNegocio">
                Tipo de Negocio *
              </Label>
              <Input
                id="tipoNegocio"
                name="tipoNegocio"
                value={formData.tipoNegocio}
                onChange={handleChange}
                placeholder="Ej: Landscaping, Roofing, Plumbing"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ciudad" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Ciudad *
              </Label>
              <Input
                id="ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                placeholder="Ej: Los Angeles, CA"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="situacionActual">
              ¿Cuál es tu situación actual? *
            </Label>
            <Input
              id="situacionActual"
              name="situacionActual"
              value={formData.situacionActual}
              onChange={handleChange}
              placeholder="Ej: No tengo presencia digital / Tengo website pero no aparezco en Google"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Mensaje Adicional (Opcional)
            </Label>
            <Textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="¿Hay algo específico que quieras que sepamos antes de la llamada?"
              rows={4}
            />
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Al enviar este formulario, aceptas que nos pongamos en contacto contigo para agendar una llamada de diagnóstico de 30 minutos donde analizaremos tu situación específica y determinaremos si el Sistema Imán Local™ es adecuado para tu negocio.
            </p>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full text-lg py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Solicitar Llamada de Diagnóstico"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default DiagnosisForm;
