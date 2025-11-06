import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ShieldCheck, TrendingUp } from "lucide-react";

const LogosSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Respaldados por la Comunidad
            </h3>
            <p className="text-lg text-muted-foreground">
              Miembros activos y certificados
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all border-2">
              <Award className="h-16 w-16 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Cámara de Comercio</h4>
              <p className="text-sm text-muted-foreground">Miembro Certificado</p>
            </Card>

            <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all border-2">
              <ShieldCheck className="h-16 w-16 text-primary mb-4" />
              <Badge className="mb-3 text-base px-4 py-2">Google Partner</Badge>
              <p className="text-sm text-muted-foreground">Especialistas Certificados</p>
            </Card>

            <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all border-2">
              <TrendingUp className="h-16 w-16 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">SEO Local Expert</h4>
              <p className="text-sm text-muted-foreground">Resultados Comprobados</p>
            </Card>

            <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all border-2">
              <Award className="h-16 w-16 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Small Business</h4>
              <p className="text-sm text-muted-foreground">Enfoque Especializado</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
