import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/use-language";

const FAQSection = () => {
  const { t, language } = useLanguage();
  
  // Get FAQs from translations
  const faqs = language === 'es' 
    ? [
        { question: "¿Para qué tipo de negocios funciona esto?", answer: "El Sistema Imán Local™ está diseñado específicamente para negocios de servicios locales (home services):\n\n• Landscaping, plomería, HVAC, electricidad\n• Construcción, pintura, remodelación\n• Roofing y otros servicios del hogar\n\nSi tienes 4+ empleados y quieres dejar de depender solo de referencias, esto es para ti." },
        { question: "¿Realmente seré dueño de todo?", answer: "Sí, 100%. Al final de los 90 días recibes todas las credenciales:\n\n• Gmail corporativo\n• Squarespace (website)\n• Google Business Profile\n\nTodo está a tu nombre desde el principio. Si dejas de trabajar con nosotros, te quedas con todo funcionando." },
        { question: "¿Por qué 90 días y no más rápido?", answer: "Porque hacemos las cosas bien:\n\n• Verificación de Google Business Profile: 3-5 semanas (especialmente sin sede física)\n• Optimización SEO correcta: necesita tiempo de implementación\n• Diseño y contenido de calidad: no se puede apurar\n\n90 días es el tiempo real para resultados sólidos, no para cobrar mensualidades eternas." },
        { question: "¿Qué pasa después de los 90 días?", answer: "Tu sistema sigue trabajando 100% solo:\n\n• No hay mensualidades obligatorias\n• Solo pagas hosting de Squarespace (~$16-23/mes directo al proveedor)\n• Mantenimiento opcional disponible desde $300/mes (actualizar contenido, gestionar reseñas, etc.)\n\n¡Pero NO es obligatorio! Tu sistema funciona solo." },
        { question: "¿Necesito saber de tecnología?", answer: "No. Todo el proceso técnico lo manejamos nosotros.\n\nTú solo necesitas:\n• Aprobar diseños\n• Proveer fotos de tus servicios\n\nAl final te capacitamos para tareas básicas (responder reseñas, actualizar horarios), pero son cosas simples." },
        { question: "¿Funciona si no tengo oficina física?", answer: "Sí. Tenemos experiencia específica verificando negocios de área de servicio (sin dirección física visible). El proceso toma ~5 semanas vs ~3 semanas con oficina, pero funciona perfecto." },
        { question: "¿Incluye publicidad en Google?", answer: "El sistema te deja ads-ready desde día 1, pero la inversión en publicidad es adicional y opcional. Puedes empezar orgánico (gratis) o acelerar con ads cuando quieras (presupuesto sugerido: $500-1,000/mes)." },
        { question: "¿Qué pasa si no estoy satisfecho?", answer: "Durante los 90 días hacemos revisiones ilimitadas hasta tu aprobación. Al final, si no tienes acceso a todos tus activos digitales como prometimos, te reembolsamos la parte proporcional." },
        { question: "¿Por qué solo 10 espacios al mes?", answer: "Cada implementación requiere atención personalizada:\n\n• Brief detallado de tu negocio\n• Diseño custom (no plantillas)\n• Verificación manual de Google\n• Capacitación 1-on-1 al final\n\nPara mantener calidad, limitamos a 10 implementaciones simultáneas." }
      ]
    : [
        { question: "What type of businesses does this work for?", answer: "The Local Magnet System™ is specifically designed for local service businesses (home services):\n\n• Landscaping, plumbing, HVAC, electrical\n• Construction, painting, remodeling\n• Roofing and other home services\n\nIf you have 4+ employees and want to stop depending only on referrals, this is for you." },
        { question: "Will I really own everything?", answer: "Yes, 100%. At the end of the 90 days you receive all credentials:\n\n• Corporate Gmail\n• Squarespace (website)\n• Google Business Profile\n\nEverything is in your name from the beginning. If you stop working with us, you keep everything working." },
        { question: "Why 90 days and not faster?", answer: "Because we do things right:\n\n• Google Business Profile verification: 3-5 weeks (especially without physical location)\n• Proper SEO optimization: needs implementation time\n• Quality design and content: cannot be rushed\n\n90 days is the real time for solid results, not for charging eternal monthly fees." },
        { question: "What happens after the 90 days?", answer: "Your system keeps working 100% on its own:\n\n• No mandatory monthly fees\n• You only pay Squarespace hosting (~$16-23/month direct to provider)\n• Optional maintenance available from $300/month (update content, manage reviews, etc.)\n\nBut it's NOT mandatory! Your system works on its own." },
        { question: "Do I need to know about technology?", answer: "No. We handle all the technical process.\n\nYou only need to:\n• Approve designs\n• Provide photos of your services\n\nAt the end we train you for basic tasks (respond to reviews, update hours), but they're simple things." },
        { question: "Does it work if I don't have a physical office?", answer: "Yes. We have specific experience verifying service area businesses (without visible physical address). The process takes ~5 weeks vs ~3 weeks with an office, but it works perfectly." },
        { question: "Does it include Google advertising?", answer: "The system leaves you ads-ready from day 1, but the advertising investment is additional and optional. You can start organic (free) or accelerate with ads when you want (suggested budget: $500-1,000/month)." },
        { question: "What if I'm not satisfied?", answer: "During the 90 days we do unlimited revisions until your approval. At the end, if you don't have access to all your digital assets as promised, we refund the proportional part." },
        { question: "Why only 10 spots per month?", answer: "Each implementation requires personalized attention:\n\n• Detailed brief of your business\n• Custom design (no templates)\n• Manual Google verification\n• 1-on-1 training at the end\n\nTo maintain quality, we limit to 10 simultaneous implementations." }
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
