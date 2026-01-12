import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/hooks/use-analytics";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Track page view
    trackEvent('page_view', { content_name: 'Contact Page' });

    // Load GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://lnk.c3localmarketing.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Listo para dominar tu mercado local? Completa el formulario y te contactaremos para agendar tu llamada de diagnóstico gratuita.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">
                Solicita tu <span className="text-primary">Diagnóstico Gratuito</span>
              </h2>

              <div className="w-full h-[500px] mb-6">
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

              {/* SMS Consent Checkbox - Required by GHL/A2P Compliance */}
              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="sms-consent"
                    checked={hasConsented}
                    onCheckedChange={(checked) => setHasConsented(checked === true)}
                    className="mt-1"
                  />
                  <label 
                    htmlFor="sms-consent" 
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    I agree to receive SMS text messages from C3 Marketing Hub (Carlos Cordero & Team) 
                    regarding my account updates, marketing reports, and strategy calls. Message and data 
                    rates may apply. Reply STOP to opt out. I have read and agree to the{" "}
                    <Link 
                      to="/privacy-policy" 
                      className="text-primary hover:underline font-medium"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link 
                      to="/terms-of-service" 
                      className="text-primary hover:underline font-medium"
                    >
                      Terms of Service
                    </Link>.
                  </label>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <a 
                        href="tel:+18056084843" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (805) 608-4843
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:info@c3marketinghub.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@c3marketinghub.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">
                        Santa Maria Valley, California
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMS Terms Summary */}
              <div className="bg-muted/30 border border-border rounded-2xl p-6 sm:p-8">
                <h3 className="font-bold mb-4">Términos de SMS</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Los mensajes son para gestión de cuenta, reportes de rendimiento y confirmaciones de citas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Pueden aplicar tarifas de mensajes y datos según tu plan móvil.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Responde STOP para cancelar en cualquier momento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Responde HELP para soporte o escríbenos a info@c3marketinghub.com</span>
                  </li>
                </ul>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52099.69066440147!2d-120.48234!3d34.953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ec453a0475aecb%3A0x69dbc1d9f61a5ff4!2sSanta%20Maria%2C%20CA!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de C3 Marketing Hub - Santa Maria, CA"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
