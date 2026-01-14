import { Card, CardContent } from "@/components/ui/card";

const VideoTestimonialSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
            Resultados Reales, <span className="text-primary">Sin Filtros.</span>
          </h2>

          {/* Video Container */}
          <Card className="border-0 shadow-soft-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/0necdQ-wcTo"
                  title="Testimonio de Cliente"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Footer Quote */}
          <p className="text-center text-lg sm:text-xl text-muted-foreground italic mt-8">
            "De invisible a referente local en tiempo récord."
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
