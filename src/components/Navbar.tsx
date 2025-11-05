import { Button } from "@/components/ui/button";
import c3Logo from "@/assets/logos/c3white200x200.svg";

const Navbar = () => {
  const scrollToContact = () => {
    const element = document.getElementById('cta-final');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <div className="bg-primary rounded-lg p-2">
              <img 
                src={c3Logo} 
                alt="C3 Marketing" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
          </div>
          <Button 
            onClick={scrollToContact}
            size="sm"
            className="text-sm sm:text-base"
          >
            Agenda tu Auditoría Gratuita
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;