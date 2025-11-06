import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoTestimonialSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Escucha la Historia de <span className="text-primary">Éxito Real</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Cliente satisfecho comparte su experiencia
            </p>
          </div>

          <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all">
            <div className="aspect-video bg-muted relative group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0necdQ-wcTo"
                title="Testimonio de Cliente - Santa Maria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors pointer-events-none" />
            </div>
            
            <div className="p-8 sm:p-12 bg-gradient-to-br from-background to-muted/20">
              <div className="flex items-start gap-6">
                <Play className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    De Invisible a Referencia Local
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Conoce cómo transformamos la presencia digital de un negocio local en Santa María, 
                    llevándolo de ser prácticamente invisible en Google a convertirse en una referencia 
                    en su industria.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                      <p className="font-bold text-primary">+300%</p>
                      <p className="text-sm text-muted-foreground">Visibilidad</p>
                    </div>
                    <div className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                      <p className="font-bold text-primary">90 días</p>
                      <p className="text-sm text-muted-foreground">Tiempo</p>
                    </div>
                    <div className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                      <p className="font-bold text-primary">100%</p>
                      <p className="text-sm text-muted-foreground">Satisfacción</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <a 
              href="https://www.customizeitca.com/presencia-digital-santa-maria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline text-lg font-semibold"
            >
              Ver caso de estudio completo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
