import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
import c3Logo from "@/assets/logos/c3orange200x200.png";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/hooks/use-language";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const Navbar = () => {
  const { t, isEnglish } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenAccordion(null);
  }, [location.pathname]);

  const navItems: NavItem[] = [
    { label: isEnglish ? "Home" : "Inicio", href: "/" },
    {
      label: isEnglish ? "Services" : "Servicios",
      children: [
        { label: "Google Business Profile", href: "/servicios/google-business-profile" },
        { label: isEnglish ? "Meta Ads (Facebook & Instagram)" : "Meta Ads (Facebook e Instagram)", href: "/servicios/meta-ads-facebook-instagram" },
        { label: isEnglish ? "Professional Websites" : "Websites Profesionales", href: "/servicios/websites-profesionales" },
        { label: isEnglish ? "CRM & Automation" : "CRM y Automatización", href: "/servicios/crm-automatizacion" },
      ],
    },
    {
      label: isEnglish ? "Service Areas" : "Áreas de Servicio",
      children: [
        { label: isEnglish ? "Santa Barbara County" : "Condado de Santa Barbara", href: "/areas-de-servicio/santa-barbara-county" },
        { label: isEnglish ? "San Luis Obispo County" : "Condado de San Luis Obispo", href: "/areas-de-servicio/san-luis-obispo-county" },
      ],
    },
    {
      label: isEnglish ? "Industries" : "Industrias",
      children: [
        { label: "C-27 Landscaping", href: "/industrias/c-27-landscaping-paisajismo" },
        { label: "C-39 Roofing", href: "/industrias/c-39-roofing-techados" },
        { label: "C-36 Plumbing", href: "/industrias/c-36-plumbing-plomeria" },
        { label: "C-10 Electrical", href: "/industrias/c-10-electrical-electricidad" },
        { label: "C-33 Painting", href: "/industrias/c-33-painting-pintura" },
        { label: "C-20 HVAC", href: "/industrias/c-20-hvac-climatizacion" },
        { label: isEnglish ? "Class B General Building" : "Class B General Building", href: "/industrias/class-b-general-building-contractors" },
      ],
    },
    {
      label: isEnglish ? "Resources" : "Recursos",
      children: [
        { label: isEnglish ? "CSLB Forms" : "Formularios CSLB", href: "/recursos/formularios-cslb-california" },
        { label: isEnglish ? "Verify Business Name" : "Verificar Nombre de Negocio", href: "/recursos/verificar-nombre-negocio-california" },
      ],
    },
  ];

  const scrollToDiagnostic = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById("diagnostico");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#diagnostico";
    }
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={c3Logo} alt="C3 Local Marketing" className="h-12 sm:h-16 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-md transition-colors">
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-lg shadow-soft-lg z-50 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <Button onClick={scrollToDiagnostic} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 hidden sm:inline-flex">
              <Calendar className="h-4 w-4" />
              {isEnglish ? "Free Diagnosis" : "Diagnóstico Gratis"}
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-soft-lg max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-semibold text-foreground hover:text-primary rounded-md"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openAccordion === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openAccordion === item.label && (
                    <div className="pl-4 space-y-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="block px-3 py-3 text-sm font-semibold text-foreground hover:text-primary rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-border">
              <Button onClick={scrollToDiagnostic} className="w-full bg-primary text-primary-foreground font-semibold gap-2">
                <Calendar className="h-4 w-4" />
                {isEnglish ? "Free Diagnosis" : "Diagnóstico Gratis"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
