import { Link } from "react-router-dom";
import { Search, Shield, Globe, ExternalLink, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const VerifyBusinessName = () => {
  const { isEnglish } = useLanguage();

  const faqItems = isEnglish
    ? [
        { question: "Why do I need to check the CSLB and Secretary of State separately?", answer: "The CSLB database only covers licensed contractors. The Secretary of State database covers all registered businesses in California (LLCs, corporations, etc.). A name could be available in one but taken in the other." },
        { question: "How long does business name registration take?", answer: "Filing with the California Secretary of State typically takes 3-5 business days online. CSLB name approval depends on your license application timeline." },
        { question: "Can C3 help me register my business name?", answer: "We don't offer legal registration services, but we can help you secure your domain, build your website, and establish your digital presence once your name is confirmed." },
        { question: "What if the .com domain is taken but the business name is available?", answer: "We can help you find alternative domain options (.net, .org, or creative variations) that still work for SEO and branding. Contact us for a free consultation." },
      ]
    : [
        { question: "¿Por qué debo verificar en el CSLB y el Secretario de Estado por separado?", answer: "La base de datos del CSLB solo cubre contratistas con licencia. La base de datos del Secretario de Estado cubre todos los negocios registrados en California (LLCs, corporaciones, etc.). Un nombre podría estar disponible en uno pero tomado en el otro." },
        { question: "¿Cuánto tarda el registro del nombre comercial?", answer: "Presentar ante el Secretario de Estado de California generalmente toma 3-5 días hábiles en línea. La aprobación del nombre del CSLB depende del proceso de tu licencia." },
        { question: "¿C3 puede ayudarme a registrar mi nombre comercial?", answer: "No ofrecemos servicios de registro legal, pero podemos ayudarte a asegurar tu dominio, construir tu sitio web y establecer tu presencia digital una vez que tu nombre esté confirmado." },
        { question: "¿Qué pasa si el dominio .com está tomado pero el nombre comercial está disponible?", answer: "Podemos ayudarte a encontrar opciones de dominio alternativas (.net, .org, o variaciones creativas) que funcionen para SEO y branding. Contáctanos para una consulta gratuita." },
      ];

  const steps = [
    {
      num: 1,
      icon: Search,
      titleEs: "Búsqueda en el CSLB",
      titleEn: "Search the CSLB",
      descEs: "Verifica que ningún otro contratista activo tenga el nombre exacto que quieres usar.",
      descEn: "Verify that no other active contractor has the exact name you want to use.",
      url: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
      btnEs: "Buscar en CSLB",
      btnEn: "Search CSLB",
    },
    {
      num: 2,
      icon: Shield,
      titleEs: "Secretario de Estado (Bizfile)",
      titleEn: "Secretary of State (Bizfile)",
      descEs: "Revisa la base de datos oficial de corporaciones y LLCs de California.",
      descEn: "Check the official database of California corporations and LLCs.",
      url: "https://bizfileonline.sos.ca.gov/search/business",
      btnEs: "Buscar en Bizfile",
      btnEn: "Search Bizfile",
    },
    {
      num: 3,
      icon: Globe,
      titleEs: "Protege tu Dominio Digital",
      titleEn: "Protect Your Digital Domain",
      descEs: "Antes de registrarlo en el estado, asegúrate de que el .com esté disponible. Nosotros te ayudamos con eso.",
      descEn: "Before registering with the state, make sure the .com is available. We help you with that.",
      url: null,
      btnEs: null,
      btnEn: null,
    },
  ];

  return (
    <PageLayout>
      <SEOHead
        title={isEnglish ? "How to Verify Your Business Name in California | C3 Local Marketing" : "Cómo Verificar el Nombre de tu Constructora en California | C3 Local Marketing"}
        description={isEnglish ? "Step-by-step guide to verify your business name availability in California. Check CSLB, Secretary of State, and domain availability." : "Guía paso a paso para verificar la disponibilidad del nombre de tu constructora en California. Verifica en CSLB, Secretario de Estado y dominio."}
        faqItems={faqItems}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {isEnglish
              ? "Guide: How to Verify if Your Construction Company Name is Available"
              : "Guía: Cómo Verificar si el Nombre de tu Constructora está Disponible"}
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-destructive shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {isEnglish ? "The Problem" : "El Problema"}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {isEnglish
                  ? "Nothing hurts more than paying for truck wraps or web domains only to discover that another contractor already legally registered that name in California."
                  : "Nada duele más que pagar por la rotulación de tus camionetas (Truck Wraps) o dominios web y descubrir que otro contratista ya registró ese nombre legalmente en California."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-12">
            <CheckCircle className="h-8 w-8 text-primary shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-foreground">
              {isEnglish ? "The Solution: Step-by-Step Guide" : "La Solución: Guía Paso a Paso"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.num} className="flex flex-col text-center">
                  <CardHeader>
                    <span className="text-5xl font-bold text-primary mb-2">{step.num}</span>
                    <div className="flex justify-center mb-2">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {isEnglish ? step.titleEn : step.titleEs}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm">
                      {isEnglish ? step.descEn : step.descEs}
                    </p>
                  </CardContent>
                  {step.url && (
                    <CardFooter className="justify-center">
                      <Button variant="outline" asChild>
                        <a href={step.url} target="_blank" rel="noopener noreferrer">
                          {isEnglish ? step.btnEn : step.btnEs}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {isEnglish ? "Name confirmed? Secure your domain and website today." : "¿Nombre confirmado? Asegura tu dominio y web hoy."}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isEnglish
              ? "We build professional websites for licensed contractors. Your domain, your design, 100% yours."
              : "Construimos sitios web profesionales para contratistas con licencia. Tu dominio, tu diseño, 100% tuyo."}
          </p>
          <Button size="lg" asChild>
            <Link to="/servicios/websites-profesionales">
              {isEnglish ? "Secure Your Domain & Website Today" : "Asegura tu Dominio y Web Hoy"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {isEnglish ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="border rounded-lg p-4 group">
                <summary className="font-medium cursor-pointer list-none flex items-center justify-between text-foreground">
                  {item.question}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VerifyBusinessName;
