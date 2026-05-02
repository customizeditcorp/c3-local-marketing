import { useEffect } from "react";
import { trackEvent } from "@/hooks/use-analytics";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    trackEvent("page_view", { content_name: "Contact Page" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Listo para dominar tu mercado local? Elige el canal que prefieras y hablamos hoy mismo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Direct CTAs */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">
                Habla con nosotros <span className="text-primary">ahora</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Para iniciar una conversación al instante, usa el chat en la esquina inferior derecha
                de esta página, o contáctanos directamente:
              </p>

              <div className="space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-start gap-3 h-14 text-base"
                >
                  <a href="tel:+18056084843" onClick={() => trackEvent("contact", { method: "phone" })}>
                    <Phone className="w-5 h-5" />
                    Llamar (805) 608-4843
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full justify-start gap-3 h-14 text-base"
                >
                  <a
                    href="https://wa.me/18056084843"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("contact", { method: "whatsapp" })}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp (805) 608-4843
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full justify-start gap-3 h-14 text-base"
                >
                  <a
                    href="mailto:info@c3marketinghub.com"
                    onClick={() => trackEvent("contact", { method: "email" })}
                  >
                    <Mail className="w-5 h-5" />
                    info@c3marketinghub.com
                  </a>
                </Button>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  💬 <strong className="text-foreground">¿Prefieres chat?</strong> Toca el ícono de
                  mensaje en la esquina inferior derecha y un miembro del equipo te responderá lo
                  antes posible.
                </p>
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
                      <p className="text-muted-foreground">Santa Maria Valley, California</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMS Terms Summary (informational only) */}
              <div className="bg-muted/30 border border-border rounded-2xl p-6 sm:p-8">
                <h3 className="font-bold mb-4">Términos de SMS</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Los mensajes son para gestión de cuenta, reportes de rendimiento y
                      confirmaciones de citas.
                    </span>
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
                    <span>
                      Responde HELP para soporte o escríbenos a info@c3marketinghub.com
                    </span>
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
