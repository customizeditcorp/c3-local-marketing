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
      answer: "El Sistema Imán Local™ está diseñado específicamente para negocios de servicios locales (home services) como landscaping, plomería, HVAC, electricidad, construcción, pintura, etc. Si tienes 4+ empleados y quieres dejar de depender solo de referencias, esto es para ti."
    },
    {
      question: "¿Realmente seré dueño de todo?",
      answer: "Sí, 100%. Al final de los 90 días recibes todas las credenciales: Gmail, Squarespace, Google Business Profile. Todo está a tu nombre desde el principio. Si dejas de trabajar con nosotros, te quedas con todo funcionando."
    },
    {
      question: "¿Por qué 90 días y no más rápido?",
      answer: "La verificación de Google Business Profile toma 3-5 semanas (especialmente para negocios sin sede física). La optimización SEO necesita tiempo para implementarse correctamente. 90 días es el tiempo real para hacer las cosas bien, no para cobrar más meses de mensualidades."
    },
    {
      question: "¿Qué pasa después de los 90 días?",
      answer: "Tu sistema sigue trabajando 100% solo. No hay mensualidades obligatorias. Solo pagas el hosting de Squarespace (~$16-23/mes directo al proveedor). Si quieres mantenimiento opcional (actualizar contenido, gestionar reseñas, etc.), podemos ofrecer planes desde $300/mes, pero NO es obligatorio."
    },
    {
      question: "¿Necesito saber de tecnología?",
      answer: "No. Todo el proceso técnico lo manejamos nosotros. Tú solo necesitas aprobar diseños y proveer fotos de tus servicios. Al final te capacitamos para las tareas básicas (responder reseñas, actualizar horarios), pero son cosas simples."
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
      answer: "Cada implementación requiere atención personalizada: brief detallado, diseño custom, verificación manual, capacitación 1-on-1. Para mantener calidad, limitamos a 10 implementaciones simultáneas."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6">
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