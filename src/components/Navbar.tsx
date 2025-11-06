import { Button } from "@/components/ui/button";
import c3Logo from "@/assets/logos/c3white200x200.svg";

const Navbar = () => {
  const scrollToContact = () => {
    const element = document.getElementById('cta-final');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-2 border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={c3Logo} 
                alt="C3 Marketing" 
                className="h-14 sm:h-16 lg:h-20 w-auto"
              />
            </div>
          </div>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="text-base sm:text-lg font-bold px-6 sm:px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Agenda tu Auditoría Gratuita
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;