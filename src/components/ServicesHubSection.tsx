import { Link } from "react-router-dom";
import { MapPin, Megaphone, Monitor, Cog, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const services = [
  {
    icon: MapPin,
    borderClass: "border-t-4",
    borderStyle: { borderImage: "linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853) 1" },
    titleEs: "Domina Google Maps.",
    titleEn: "Dominate Google Maps.",
    descEs: "Deja de perder clientes frente a tu competencia local.",
    descEn: "Stop losing clients to your local competition.",
    link: "/servicios/google-business-profile",
    btnEs: "Saber Más",
    btnEn: "Learn More",
  },
  {
    icon: Megaphone,
    borderClass: "border-t-4 border-[hsl(var(--meta-blue))]",
    titleEs: "Facebook & Instagram Ads.",
    titleEn: "Facebook & Instagram Ads.",
    descEs: "Atrae clientes listos para comprar, no solo 'likes' o curiosos.",
    descEn: "Attract clients ready to buy, not just 'likes' or window shoppers.",
    link: "/servicios/meta-ads-facebook-instagram",
    btnEs: "Saber Más",
    btnEn: "Learn More",
  },
  {
    icon: Monitor,
    borderClass: "border-t-4 border-primary",
    titleEs: "Sitios Web que Venden.",
    titleEn: "Websites that Sell.",
    descEs: "Convierte visitantes en llamadas reales y filtra clientes de bajo presupuesto.",
    descEn: "Turn visitors into real calls and filter out low-budget clients.",
    link: "/servicios/websites-profesionales",
    btnEs: "Saber Más",
    btnEn: "Learn More",
  },
  {
    icon: Cog,
    borderClass: "border-t-4 border-accent",
    titleEs: "Sistemas de Automatización.",
    titleEn: "Automation Systems.",
    descEs: "Que tu negocio haga seguimiento automático a los prospectos mientras tú duermes.",
    descEn: "Let your business follow up with prospects automatically while you sleep.",
    link: "/servicios/crm-automatizacion",
    btnEs: "Saber Más",
    btnEn: "Learn More",
  },
];

const ServicesHubSection = () => {
  const { isEnglish } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          {isEnglish
            ? "Our Approach: Real Growth, Not Fake Metrics."
            : "Nuestro Enfoque: Crecimiento Real, No Métricas Falsas."}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Card
                key={i}
                className={`${s.borderClass} flex flex-col`}
                style={s.borderStyle}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6 text-primary shrink-0" />
                    <CardTitle className="text-lg">{isEnglish ? s.titleEn : s.titleEs}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {isEnglish ? s.descEn : s.descEs}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={s.link}>
                      {isEnglish ? s.btnEn : s.btnEs} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesHubSection;
