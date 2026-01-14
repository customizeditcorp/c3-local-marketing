import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Smartphone } from "lucide-react";

const competitors = [
  { name: "Podium/Birdeye", price: "$300/mo" },
  { name: "Mailchimp", price: "$60/mo" },
  { name: "Quickbooks", price: "$50/mo" },
  { name: "Calendly", price: "$15/mo" }
];

const c3Features = [
  "CRM Todo en Uno",
  "Invoices Ilimitados",
  "App Móvil Android/iOS",
  "Base de Datos Propia"
];

const SoftwareSection = () => {
  const scrollToDiagnostic = () => {
    const element = document.getElementById('diagnostico');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Deja de regalar dinero a 5 apps diferentes.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Todo lo que necesitas para operar, por una fracción del precio.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Competitors Column */}
          <div className="bg-muted rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-muted-foreground mb-6 text-center">
              Lo que pagas hoy
            </h3>
            <div className="space-y-4">
              {competitors.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-background/50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-destructive" />
                    <span className="text-muted-foreground line-through">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground line-through font-medium">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-muted-foreground">Total Mercado:</span>
                <span className="text-2xl font-bold text-muted-foreground line-through">~$425/mo</span>
              </div>
            </div>
          </div>

          {/* C3 Control Column */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 sm:p-8 shadow-soft-lg relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                RECOMENDADO
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                C3 Control
              </h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-primary">$149</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {c3Features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={scrollToDiagnostic}
              className="w-full py-6 text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Empezar con C3 Control
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Phone Mockup Placeholder */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-64 h-[500px] bg-muted rounded-[3rem] border-4 border-foreground/10 flex items-center justify-center shadow-soft-lg">
              <div className="text-center p-6">
                <Smartphone className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">
                  App C3 Control
                  <br />
                  <span className="text-xs">Disponible en iOS y Android</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
