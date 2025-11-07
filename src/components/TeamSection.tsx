import { Card } from "@/components/ui/card";
import carlosImage from "@/assets/team/team_carlos_cordero.png";
import juanImage from "@/assets/team/team_juan_arroyo.png";
import mariaImage from "@/assets/team/team_maria_cordero.png";
import luisImage from "@/assets/generated/hero_luis_consulting.png";
import { Mail } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Carlos Cordero",
      role: "Marketing Expert",
      specialty: "Google Ads & Meta Ads",
      image: carlosImage,
      description: "20+ años de experiencia en marketing digital para negocios locales. Especialista en maximizar ROI de campañas publicitarias.",
      linkedin: "#",
      email: "carlos@c3marketing.com"
    },
    {
      name: "Juan Arroyo",
      role: "Identidad Visual",
      specialty: "Web Master & Diseño",
      image: juanImage,
      description: "Experto en crear identidades visuales impactantes que convierten visitantes en clientes. Diseño web responsive y optimizado.",
      linkedin: "#",
      email: "juan@c3marketing.com"
    },
    {
      name: "María Cordero",
      role: "Google Business Profile",
      specialty: "Programa de Fidelización",
      image: mariaImage,
      description: "Especialista en optimización de Google Business Profile y estrategias de retención de clientes para negocios locales.",
      linkedin: "#",
      email: "maria@c3marketing.com"
    },
    {
      name: "Luis Arroyo",
      role: "Asesor Comercial",
      specialty: "Implementador IA",
      image: luisImage,
      description: "Experto en implementación de soluciones de inteligencia artificial y automatización para negocios locales. Asesor comercial especializado.",
      linkedin: "#",
      email: "luis@c3marketing.com"
    }
  ];

  return (
    <section id="equipo" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Conoce al <span className="text-primary">Equipo C3</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expertos con 20+ años de experiencia ayudando a negocios locales hispanos a crecer con marketing digital
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary/50"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full h-full object-cover ${member.name === 'Luis Arroyo' ? 'object-left' : 'object-center'} group-hover:scale-110 transition-transform duration-500`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-lg font-semibold text-primary mb-2">{member.role}</p>
                <p className="text-base font-medium text-secondary mb-4">{member.specialty}</p>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                    <span className="hidden sm:inline">Email</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <p className="text-lg sm:text-xl font-semibold mb-2">
              💼 Experiencia Combinada
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              60+ Años
            </p>
            <p className="text-sm text-muted-foreground">
              Ayudando a negocios locales hispanos a crecer
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
