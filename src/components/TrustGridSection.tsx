import { Shield, LockOpen, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustGridSection = () => {
  const trustItems = [
    {
      icon: Shield,
      title: "Verificación Anti-Suspensión",
      description: "Blindamos tu negocio legalmente ante Google."
    },
    {
      icon: LockOpen,
      title: "Dueño, no Inquilino",
      description: "Te entregamos las llaves de tu web y dominio."
    },
    {
      icon: Smartphone,
      title: "Tu Propia App",
      description: "Gestiona clientes y cobros desde tu celular."
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-soft-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustGridSection;
