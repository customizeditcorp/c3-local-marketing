import carlosImage from "@/assets/team/team_carlos_cordero.png";
import juanImage from "@/assets/team/team_juan_arroyo.png";
import mariaImage from "@/assets/team/team_maria_cordero.png";
import luisImage from "@/assets/team/team_luis_arroyo.png";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";

const TeamSection = () => {
  const { t } = useLanguage();

  const team = [
    { name: "Carlos Cordero", image: carlosImage },
    { name: "Juan Arroyo", image: juanImage },
    { name: "María Cordero", image: mariaImage },
    { name: "Luis Arroyo", image: luisImage }
  ];

  return (
    <section id="equipo" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
            {t('team.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {/* Team Avatars */}
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {team.map((member, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {member.name.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 bg-border" />

            {/* Experience Badge */}
            <Badge 
              variant="outline" 
              className="px-6 py-3 text-base sm:text-lg font-bold border-2 border-primary/30 bg-primary/5"
            >
              <span className="text-primary text-xl sm:text-2xl mr-2">20+</span>
              {t('team.yearsExperience')}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
