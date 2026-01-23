import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import c3Logo from "@/assets/logos/c3Verticalorange200x200.svg";
import googlePartner from "@/assets/logos/google-business-profile.webp";
import certificadoGbp from "@/assets/logos/certificado-gbp.png";
import sello20Anios from "@/assets/logos/sello-20-anios-experiencia.webp";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/hooks/use-language";

const Navbar = () => {
  const { t } = useLanguage();

  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar-section');
    const diagnosticSection = document.getElementById('diagnostico');
    
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    } else if (diagnosticSection) {
      diagnosticSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={c3Logo} 
              alt="C3 Marketing Hub" 
              className="h-12 sm:h-16 w-auto"
            />
          </Link>
          
          {/* Certifications - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <img 
              src={googlePartner} 
              alt="Google Business Profile Partner" 
              className="h-9 lg:h-11 w-auto max-w-[90px] lg:max-w-[110px] object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src={certificadoGbp} 
              alt="Certificado Google Business Profile" 
              className="h-11 lg:h-14 w-auto max-w-[90px] lg:max-w-[110px] object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src={sello20Anios} 
              alt="20 Años de Experiencia" 
              className="h-10 lg:h-12 w-auto max-w-[90px] lg:max-w-[110px] object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button 
              onClick={scrollToCalendar}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2"
            >
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">{t('navbar.scheduleCall')}</span>
              <span className="sm:hidden">{t('navbar.schedule')}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
