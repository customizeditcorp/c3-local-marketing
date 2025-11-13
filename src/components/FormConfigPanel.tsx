import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Settings, Save, Link as LinkIcon, Phone } from "lucide-react";

const FormConfigPanel = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState({
    ghlWebhookUrl: "",
    whatsappApiKey: "",
    whatsappPhoneId: "",
    whatsappNumber: ""
  });

  // Load config from localStorage
  useEffect(() => {
    const savedConfig = localStorage.getItem("sistemaimanlocal_config");
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem("sistemaimanlocal_config", JSON.stringify(config));
    
    toast({
      title: "Configuración Guardada",
      description: "Los ajustes han sido guardados correctamente.",
    });
    
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-24 right-6 z-40 h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
        title="Configuración"
      >
        <Settings className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Settings className="h-6 w-6" />
            Configuración de Integraciones
          </h2>
          <p className="text-muted-foreground">
            Configura tus webhooks y APIs para conectar con GoHighLevel y WhatsApp
          </p>
        </div>

        <div className="space-y-6">
          {/* GoHighLevel Webhook */}
          <div className="space-y-2">
            <Label htmlFor="ghlWebhookUrl" className="flex items-center gap-2 text-base">
              <LinkIcon className="h-4 w-4" />
              Webhook URL de GoHighLevel
            </Label>
            <Input
              id="ghlWebhookUrl"
              name="ghlWebhookUrl"
              value={config.ghlWebhookUrl}
              onChange={handleChange}
              placeholder="https://services.leadconnectorhq.com/hooks/..."
              className="font-mono text-sm"
            />
            <p className="text-sm text-muted-foreground">
              Esta URL se usará para enviar los leads del formulario de diagnóstico a tu cuenta de GoHighLevel.
            </p>
          </div>

          {/* WhatsApp API Configuration */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Configuración de WhatsApp API (GoHighLevel)
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="whatsappApiKey">
                  API Key de GoHighLevel
                </Label>
                <Input
                  id="whatsappApiKey"
                  name="whatsappApiKey"
                  type="password"
                  value={config.whatsappApiKey}
                  onChange={handleChange}
                  placeholder="tu-api-key-de-ghl"
                  className="font-mono text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsappPhoneId">
                  WhatsApp Phone ID
                </Label>
                <Input
                  id="whatsappPhoneId"
                  name="whatsappPhoneId"
                  value={config.whatsappPhoneId}
                  onChange={handleChange}
                  placeholder="ID del teléfono en GHL"
                  className="font-mono text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsappNumber">
                  Número de WhatsApp
                </Label>
                <Input
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={config.whatsappNumber}
                  onChange={handleChange}
                  placeholder="18056878786"
                  className="font-mono text-sm"
                />
                <p className="text-sm text-muted-foreground">
                  Formato: código de país + número (sin espacios ni guiones)
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <p className="font-semibold text-sm">📋 Cómo obtener estos datos:</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• <strong>Webhook GHL:</strong> Settings → Integrations → Webhooks → Create Webhook</li>
              <li>• <strong>API Key:</strong> Settings → API → Create API Key</li>
              <li>• <strong>WhatsApp Phone ID:</strong> Settings → Phone Numbers → WhatsApp → Details</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="flex-1"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1"
          >
            <Save className="mr-2 h-4 w-4" />
            Guardar Configuración
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FormConfigPanel;
