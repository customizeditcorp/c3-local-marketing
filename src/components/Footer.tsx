import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import c3Logo from "@/assets/logos/c3white200x200.svg";

const Footer = () => {
  const { t, isEnglish } = useLanguage();

  const serviceLinks = [
    { label: "Google Business Profile", href: "/servicios/google-business-profile" },
    { label: isEnglish ? "Meta Ads" : "Meta Ads", href: "/servicios/meta-ads-facebook-instagram" },
    { label: isEnglish ? "Websites" : "Websites", href: "/servicios/websites-profesionales" },
    { label: isEnglish ? "CRM & Automation" : "CRM y Automatización", href: "/servicios/crm-automatizacion" },
  ];

  const areaLinks = [
    { label: isEnglish ? "Santa Barbara County" : "Condado de Santa Barbara", href: "/areas-de-servicio/santa-barbara-county" },
    { label: isEnglish ? "San Luis Obispo County" : "Condado de San Luis Obispo", href: "/areas-de-servicio/san-luis-obispo-county" },
  ];

  const resourceLinks = [
    { label: isEnglish ? "CSLB Forms" : "Formularios CSLB", href: "/recursos/formularios-cslb-california" },
    { label: isEnglish ? "Verify Business Name" : "Verificar Nombre", href: "/recursos/verificar-nombre-negocio-california" },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* NAP + Map */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="inline-block">
              <img src={c3Logo} alt="C3 Local Marketing" className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-white/70">
              {isEnglish 
                ? "Digital marketing agency for Hispanic contractors in California." 
                : "Agencia de marketing digital para contratistas hispanos en California."}
            </p>
            <div className="space-y-3 text-sm text-white/80">
              <a href="https://maps.google.com/?q=134+Inger+Dr,+Santa+Maria,+CA+93454" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>134 Inger Dr, Santa Maria, CA 93454</span>
              </a>
              <a href="tel:+18053634044" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(805) 363-4044</span>
              </a>
              <a href="mailto:info@c3localmarketing.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@c3localmarketing.com</span>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden border border-white/10 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.8!2d-120.4357!3d34.9530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ec64f0a3d4f0a1%3A0x1234567890abcdef!2s134+Inger+Dr%2C+Santa+Maria%2C+CA+93454!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="C3 Local Marketing - Office Location"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {isEnglish ? "Services" : "Servicios"}
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas + Industries */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {isEnglish ? "Service Areas" : "Áreas de Servicio"}
            </h4>
            <ul className="space-y-2 mb-6">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {isEnglish ? "Resources" : "Recursos"}
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} C3 Local Marketing. {isEnglish ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
