import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">
            © 2025 C3 Marketing Hub. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Privacidad
            </Link>
            <span className="text-white/40">|</span>
            <Link 
              to="/terms-of-service" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
