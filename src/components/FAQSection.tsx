import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/use-language";

const FAQSection = () => {
  const { t, language } = useLanguage();
  
  // Aligned with current plans (Cimientos $149, Presencia Digital $399, Imán Local $498, Acelerador $199, Plan Lanzamiento $1,799)
  const faqs = language === 'es'
    ? [
        { question: "¿Para qué tipo de negocios funciona esto?", answer: "Está diseñado específicamente para Home Service Contractors en California (CSLB):\n\n• Landscaping, plomería, HVAC, electricidad\n• Construcción, pintura, remodelación\n• Roofing y otros servicios del hogar\n\nSi quieres dejar de depender solo de referencias y construir presencia digital sólida, esto es para ti." },
        { question: "¿Cuáles son los compromisos mínimos?", answer: "Cimientos ($149/mes) es suscripción base sin compromiso forzoso, cancelas cuando quieras. Presencia Digital ($399/mes) e Imán Local ($498/mes) requieren compromiso mínimo de 6 meses. Plan Lanzamiento ($1,799 pago único) no tiene contratos mensuales." },
        { question: "¿Qué pasa si quiero cancelar antes de los 6 meses?", answer: "Si cancelas Presencia Digital o Imán Local antes del sexto mes, no adquieres licencia de uso ni propiedad sobre el diseño web, textos o videos creados por C3 Marketing. Al liquidar la sexta mensualidad obtienes una licencia perpetua sobre los entregables finales y eres libre de transferirlos a otro proveedor." },
        { question: "¿Quién paga el presupuesto publicitario (Ad Spend)?", answer: "El Acelerador de Campañas ($199/mes por canal) cubre la gestión profesional de Google Ads o Meta Ads. El presupuesto publicitario (Ad Spend) es adicional y se paga directamente por ti a la plataforma. Presupuesto sugerido: $500-$1,000/mes." },
        { question: "¿Quién es dueño de los activos digitales?", answer: "Con Plan Lanzamiento eres dueño 100% desde el día 1 (transferencia llave en mano). En planes mensuales, al cumplir los 6 meses obtienes una licencia perpetua y libre de regalías sobre los entregables finales (textos, videos, diseño web frontal). El código fuente del CRM C3 Studio, bases de datos y metodologías permanecen como propiedad de la agencia." },
        { question: "¿Cómo funcionan los pagos?", answer: "Los precios publicados incluyen un descuento pre-aplicado por pago en Efectivo, ACH o Zelle. Pagos con Tarjeta de Crédito tienen un recargo estándar del 3% por procesamiento. Tras los 6 meses, los planes mensuales se renuevan automáticamente mes a mes." },
        { question: "¿Hay garantía de resultados?", answer: "Garantizamos la entrega de todos los activos digitales prometidos. Para SEO y posicionamiento ofrecemos un enfoque de mejora continua pero no garantizamos rankings específicos, ya que dependen de algoritmos de terceros (Google, Meta). Usamos KPIs medibles para demostrar progreso mensual." }
      ]
    : [
        { question: "What type of businesses is this for?", answer: "Specifically designed for Home Service Contractors in California (CSLB):\n\n• Landscaping, plumbing, HVAC, electrical\n• Construction, painting, remodeling\n• Roofing and other home services\n\nIf you want to stop depending only on referrals and build solid digital presence, this is for you." },
        { question: "What are the minimum commitments?", answer: "Foundations ($149/month) is a base subscription with no forced commitment — cancel anytime. Digital Presence ($399/month) and Local Magnet ($498/month) require a 6-month minimum commitment. Launch Plan ($1,799 one-time) has no monthly contracts." },
        { question: "What happens if I cancel before 6 months?", answer: "If you cancel Digital Presence or Local Magnet before the sixth month, you acquire no use license or ownership over the web design, copy or videos created by C3 Marketing. Upon paying the sixth month, you obtain a perpetual license over the final deliverables and are free to transfer them to another provider." },
        { question: "Who pays the advertising budget (Ad Spend)?", answer: "The Campaign Accelerator ($199/month per channel) covers professional management of Google Ads or Meta Ads. The advertising budget (Ad Spend) is additional and paid directly by you to the platform. Suggested budget: $500-$1,000/month." },
        { question: "Who owns the digital assets?", answer: "With Launch Plan you own 100% from day 1 (turn-key transfer). On monthly plans, upon completing 6 months you obtain a perpetual royalty-free license over the final deliverables (copy, videos, front-end web design). The C3 Studio CRM source code, databases and methodologies remain agency property." },
        { question: "How do payments work?", answer: "Published prices include a pre-applied discount for Cash, ACH or Zelle payments. Credit Card payments have a standard 3% processing surcharge. After 6 months, monthly plans automatically renew month-to-month." },
        { question: "Is there a results guarantee?", answer: "We guarantee delivery of all promised digital assets. For SEO and ranking we offer a continuous improvement approach but we don't guarantee specific rankings, as they depend on third-party algorithms (Google, Meta). We use measurable KPIs to demonstrate monthly progress." }
      ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-muted/50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('faq.title')} <span className="text-primary">{t('faq.titleHighlight')}</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl px-6 border hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-5 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
