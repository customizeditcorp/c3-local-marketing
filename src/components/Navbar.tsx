import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import c3Logo from "@/assets/logos/c3Verticalorange200x200.svg";

const Navbar = () => {
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
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
          >
            Acceso Clientes
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
