import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, CheckCircle, Check, Phone, Users, MessageSquare, Mail, BarChart3, Clock } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "¿Qué es un CRM y por qué lo necesito?",
    answer: "Un CRM (Customer Relationship Management) es un sistema que organiza todos tus prospectos y clientes en un solo lugar. Te avisa cuándo hacer seguimiento, envía mensajes automáticos y evita que pierdas contratos por olvido.",
  },
  {
    question: "¿Es difícil de usar?",
    answer: "No. Lo configuramos todo por ti y te damos entrenamiento personalizado. Si sabes usar WhatsApp, puedes usar nuestro CRM. Además, tienes soporte ilimitado incluido.",
  },
  {
    question: "¿Puedo ver los mensajes que se envían automáticamente?",
    answer: "Sí. Tú apruebas cada mensaje y secuencia antes de activarla. Nada se envía sin tu autorización. Puedes modificar los textos cuando quieras.",
  },
  {
    question: "¿Funciona con mi número de teléfono actual?",
    answer: "Sí. Integramos el sistema con tu número actual para que los mensajes SMS salgan desde tu línea de negocio. Tus clientes nunca sabrán que es automático.",
  },
  {
    question: "¿Cuánto cuesta la plataforma mensual?",
    answer: "La licencia de la plataforma tiene un costo mensual que incluye SMS, correos y todas las automatizaciones. Te damos el precio exacto en tu diagnóstico gratuito según las necesidades de tu negocio.",
  },
];

const pipelineStages = [
  { name: "Nuevo Lead", count: 5, variant: "default" as const, color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  { name: "Contactado", count: 3, variant: "secondary" as const, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
  { name: "Propuesta", count: 2, variant: "outline" as const, color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  { name: "Cerrado ✓", count: 1, variant: "default" as const, color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
];

const featuresIncluidas = [
  { icon: Users, label: "Pipeline de ventas visual" },
  { icon: MessageSquare, label: "SMS automáticos" },
  { icon: Mail, label: "Email automático" },
  { icon: Phone, label: "Integración web + click-to-call" },
  { icon: BarChart3, label: "Reportes de rendimiento" },
  { icon: Clock, label: "Tu negocio trabaja 24/7" },
];

const CRMAutomation = () => (
  <PageLayout>
    <SEOHead
      title="CRM y Automatización para Contratistas | C3 Local Marketing"
      description="Sistema CRM con seguimiento automático por SMS y correo para contratistas. Deja de perder prospectos. Tu negocio trabaja 24/7."
      faqItems={faqItems}
    />

    {/* Hero */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
          Automatiza tu seguimiento y deja de perder dinero sobre la mesa.
        </h1>
        <div className="flex justify-center mt-6 gap-1">
          <div className="h-1.5 w-20 rounded-full bg-accent" />
          <div className="h-1.5 w-20 rounded-full bg-green-500" />
        </div>
      </div>
    </section>

    {/* El Problema */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-8 w-8 text-destructive shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">El Problema</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              ¿Cuántos presupuestos se quedan en el aire porque tú o tu equipo no tuvieron tiempo de darles seguimiento a los 3 o 5 días? Cada prospecto que se enfría es <strong className="text-foreground">dinero que dejas sobre la mesa</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* La Solución */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-start gap-4 mb-8">
          <CheckCircle className="h-8 w-8 text-green-600 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">La Solución</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Un sistema (CRM) que envía mensajes de texto (SMS) y correos en automático a tus prospectos para que nunca se enfríen. <strong className="text-foreground">Tu negocio trabaja las 24 horas</strong>.
            </p>
          </div>
        </div>

        {/* Kanban Pipeline Mockup */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {pipelineStages.map((stage, i) => (
            <Card key={i} className="text-center">
              <CardHeader className="pb-2 px-3 pt-4">
                <CardTitle className="text-sm font-semibold">{stage.name}</CardTitle>
              </CardHeader>
              <CardContent className="px-3 pb-4">
                <Badge className={stage.color}>{stage.count} {stage.count === 1 ? "lead" : "leads"}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
          {featuresIncluidas.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <Icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{f.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <Button size="lg" asChild>
          <Link to="/#diagnostico">
            <Phone className="mr-2 h-5 w-5" />
            Diagnostica tu Negocio Gratis
          </Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default CRMAutomation;
