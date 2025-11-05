import c3Logo from "@/assets/logos/c3white200x200.svg";
import { Mail, Globe, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Cómo Funciona", href: "#como-funciona" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Precio", href: "#precio" },
    { label: "FAQ", href: "#faq" },
    { label: "Agendar Llamada", href: "#cta-final" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(0,0%,35%)] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Column 1: Logo + Tagline */}
          <div>
            <div className="bg-primary rounded-lg p-3 w-fit mb-4">
              <img src={c3Logo} alt="C3 Marketing" className="h-12 w-auto" />
            </div>
            <p className="text-lg sm:text-xl font-semibold mb-2">
              De invisible a visible. En 90 días.
            </p>
            <p className="text-sm sm:text-base text-white/80">
              Sistema Imán Local™ - C3 Marketing
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:inf@c3marketinghub.com" className="hover:text-secondary transition-colors text-sm sm:text-base">
                  inf@c3marketinghub.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+18056310946" className="hover:text-secondary transition-colors text-sm sm:text-base">
                  (805) 631-0946
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">134B Inger Dr, Santa Maria CA 93454</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 flex-shrink-0" />
                <a href="http://c3localmarketing.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors text-sm sm:text-base">
                  c3localmarketing.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-secondary transition-colors text-left text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm sm:text-base text-white/80">
            © 2025 C3 Marketing. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;