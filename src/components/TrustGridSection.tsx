import { Shield, LockOpen, Smartphone } from "lucide-react";

const trustCards = [
  {
    icon: Shield,
    title: "Verificación Anti-Suspensión",
    description: "Validamos tu negocio manualmente (NAP Legal) para que aparezcas en el mapa sin riesgo, incluso sin oficina física."
  },
  {
    icon: LockOpen,
    title: "Dueño, no Inquilino",
    description: "Al terminar, te entregamos todas las llaves (Web, Dominio, Gmail). Es tu patrimonio, no una renta."
  },
  {
    icon: Smartphone,
    title: "Tu Propia App",
    description: "Deja el papel y lápiz. Gestiona clientes, cobros y reseñas desde tu celular con nuestra App C3 Control."
  }
];

const TrustGridSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {trustCards.map((card, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustGridSection;
