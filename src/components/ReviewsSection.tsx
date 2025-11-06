import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const ReviewsSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
            <div className="elfsight-app-ca4a2a87-be2a-4c74-8b7e-2f02e19c2c53" data-elfsight-app-lazy></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
