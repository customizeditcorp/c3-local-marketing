import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Para qué tipo de negocios funciona esto?",
      answer: "El Sistema Imán Local™ está diseñado específicamente para negocios de servicios locales (home services):\n\n• Landscaping, plomería, HVAC, electricidad\n• Construcción, pintura, remodelación\n• Roofing y otros servicios del hogar\n\nSi tienes 4+ empleados y quieres dejar de depender solo de referencias, esto es para ti."
    },
    {
      question: "¿Realmente seré dueño de todo?",
      answer: "Sí, 100%. Al final de los 90 días recibes todas las credenciales:\n\n• Gmail corporativo\n• Squarespace (website)\n• Google Business Profile\n\nTodo está a tu nombre desde el principio. Si dejas de trabajar con nosotros, te quedas con todo funcionando."
    },
    {
      question: "¿Por qué 90 días y no más rápido?",
      answer: "Porque hacemos las cosas bien:\n\n• Verificación de Google Business Profile: 3-5 semanas (especialmente sin sede física)\n• Optimización SEO correcta: necesita tiempo de implementación\n• Diseño y contenido de calidad: no se puede apurar\n\n90 días es el tiempo real para resultados sólidos, no para cobrar mensualidades eternas."
    },
    {
      question: "¿Qué pasa después de los 90 días?",
      answer: "Tu sistema sigue trabajando 100% solo:\n\n• No hay mensualidades obligatorias\n• Solo pagas hosting de Squarespace (~$16-23/mes directo al proveedor)\n• Mantenimiento opcional disponible desde $300/mes (actualizar contenido, gestionar reseñas, etc.)\n\n¡Pero NO es obligatorio! Tu sistema funciona solo."
    },
    {
      question: "¿Necesito saber de tecnología?",
      answer: "No. Todo el proceso técnico lo manejamos nosotros.\n\nTú solo necesitas:\n• Aprobar diseños\n• Proveer fotos de tus servicios\n\nAl final te capacitamos para tareas básicas (responder reseñas, actualizar horarios), pero son cosas simples."
    },
    {
      question: "¿Funciona si no tengo oficina física?",
      answer: "Sí. Tenemos experiencia específica verificando negocios de área de servicio (sin dirección física visible). El proceso toma ~5 semanas vs ~3 semanas con oficina, pero funciona perfecto."
    },
    {
      question: "¿Incluye publicidad en Google?",
      answer: "El sistema te deja ads-ready desde día 1, pero la inversión en publicidad es adicional y opcional. Puedes empezar orgánico (gratis) o acelerar con ads cuando quieras (presupuesto sugerido: $500-1,000/mes)."
    },
    {
      question: "¿Qué pasa si no estoy satisfecho?",
      answer: "Durante los 90 días hacemos revisiones ilimitadas hasta tu aprobación. Al final, si no tienes acceso a todos tus activos digitales como prometimos, te reembolsamos la parte proporcional."
    },
    {
      question: "¿Por qué solo 10 espacios al mes?",
      answer: "Cada implementación requiere atención personalizada:\n\n• Brief detallado de tu negocio\n• Diseño custom (no plantillas)\n• Verificación manual de Google\n• Capacitación 1-on-1 al final\n\nPara mantener calidad, limitamos a 10 implementaciones simultáneas."
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-32 bg-muted/50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas saber antes de empezar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-2xl px-8 border-2 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left text-lg sm:text-xl font-bold hover:no-underline py-8 leading-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg text-muted-foreground pb-8 leading-relaxed whitespace-pre-line">
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