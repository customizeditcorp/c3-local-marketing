import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Lo Que Dicen <span className="text-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Calificación promedio de 5 estrellas
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 sm:p-12 border-2">
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-10 w-10 fill-primary text-primary" />
              ))}
            </div>
            
            <div className="text-center mb-10">
              <p className="text-5xl sm:text-6xl font-bold mb-2">5.0</p>
              <p className="text-xl text-muted-foreground font-semibold">Basado en reseñas de Google</p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic mb-3 leading-relaxed">
                  "Excelente servicio, muy profesional y atento a los detalles. Transformaron completamente nuestra presencia digital."
                </p>
                <p className="font-bold">- Cliente de Google Business</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic mb-3 leading-relaxed">
                  "El equipo de C3 superó nuestras expectativas. Ahora recibimos llamadas de clientes que nos encuentran en Google."
                </p>
                <p className="font-bold">- Cliente de Google Business</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic mb-3 leading-relaxed">
                  "Inversión que valió totalmente la pena. El sistema funciona solo y ya estamos viendo resultados reales."
                </p>
                <p className="font-bold">- Cliente de Google Business</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
