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
    <footer className="bg-[hsl(0,0%,20%)] text-white py-16 sm:py-24 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 mb-12">
          {/* Column 1: Logo + Tagline */}
          <div>
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 w-fit mb-6 shadow-xl">
              <img src={c3Logo} alt="C3 Marketing" className="h-14 sm:h-16 w-auto" />
            </div>
            <p className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
              De invisible a visible. <span className="text-secondary">En 90 días.</span>
            </p>
            <p className="text-base sm:text-lg text-white/90 font-semibold">
              Sistema Imán Local™ - C3 Marketing
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">Contacto</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <a href="mailto:inf@c3marketinghub.com" className="hover:text-secondary transition-colors text-base sm:text-lg font-medium">
                  inf@c3marketinghub.com
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <a href="tel:+18056310946" className="hover:text-secondary transition-colors text-base sm:text-lg font-medium">
                  (805) 631-0946
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-base sm:text-lg font-medium">134B Inger Dr, Santa Maria CA 93454</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
                <a href="http://c3localmarketing.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors text-base sm:text-lg font-medium">
                  c3localmarketing.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-secondary hover:translate-x-2 transition-all text-left text-base sm:text-lg font-medium flex items-center gap-2"
                  >
                    <span className="text-secondary">→</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-white/20 pt-10 text-center">
          <p className="text-base sm:text-lg text-white/90 font-medium">
            © 2025 C3 Marketing. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;