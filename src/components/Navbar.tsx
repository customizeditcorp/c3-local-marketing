import { Button } from "@/components/ui/button";
import c3Logo from "@/assets/logos/c3Verticalorange200x200.svg";

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
            <img 
              src={c3Logo} 
              alt="C3 Local Business Marketing" 
              className="h-16 sm:h-20 lg:h-24 w-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
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