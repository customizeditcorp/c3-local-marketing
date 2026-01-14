import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const SoftwareSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
            Deja de <span className="text-primary">pagar de más.</span>
          </h2>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Competition Card */}
            <Card className="border-2 border-muted bg-muted/50">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <X className="h-6 w-6 text-muted-foreground" />
                  <span className="text-lg font-semibold text-muted-foreground">Competencia</span>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-muted-foreground line-through">Podium</p>
                  <p className="text-muted-foreground line-through">Mailchimp</p>
                  <p className="text-muted-foreground line-through">Quickbooks</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-2xl sm:text-3xl font-bold text-muted-foreground line-through">
                    ~$425/mo
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    3 apps separadas
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* C3 Control Card */}
            <Card className="border-2 border-primary bg-white shadow-soft-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMENDADO
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Check className="h-6 w-6 text-primary" />
                  <span className="text-lg font-semibold text-foreground">C3 Control</span>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-foreground font-medium flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> CRM Integrado
                  </p>
                  <p className="text-foreground font-medium flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Email Marketing
                  </p>
                  <p className="text-foreground font-medium flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Facturación
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    $149/mo
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Todo en uno + App móvil
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
