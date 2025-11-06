import { Card } from "@/components/ui/card";
import googleBusinessProfile from "@/assets/logos/google-business-profile.webp";
import smvcLogo from "@/assets/logos/smvc.png";
import sello20Anos from "@/assets/logos/sello-20-anios-experiencia.webp";
import certificadoGbp from "@/assets/logos/certificado-gbp.png";

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all border-2 min-h-[280px]">
              <img 
                src={smvcLogo} 
                alt="Santa Maria Valley Chamber" 
                className="h-32 w-auto mb-6 object-contain"
              />
              <h4 className="font-bold text-lg mb-2">Cámara de Comercio</h4>
              <p className="text-sm text-muted-foreground">Miembro Certificado</p>
            </Card>

            <Card className="p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all border-2 min-h-[280px]">
              <img 
                src={googleBusinessProfile} 
                alt="Google Business Profile Partner" 
                className="h-32 w-auto mb-6 object-contain"
              />
              <p className="text-sm text-muted-foreground font-semibold">Especialistas Certificados</p>
            </Card>

            <Card className="p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all border-2 min-h-[280px]">
              <img 
                src={sello20Anos} 
                alt="20 años de experiencia" 
                className="h-32 w-auto mb-6 object-contain"
              />
              <h4 className="font-bold text-lg mb-2">Experiencia Comprobada</h4>
              <p className="text-sm text-muted-foreground">Más de 20 años en el mercado</p>
            </Card>

            <Card className="p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all border-2 min-h-[280px]">
              <img 
                src={certificadoGbp} 
                alt="Google My Business Certificate" 
                className="h-32 w-auto mb-6 object-contain"
              />
              <h4 className="font-bold text-lg mb-2">Google My Business</h4>
              <p className="text-sm text-muted-foreground">Completion ID: 387663641</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
