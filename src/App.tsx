import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import DiagnosticResults from "./pages/DiagnosticResults";

// Services
import GoogleBusinessProfile from "./pages/services/GoogleBusinessProfile";
import MetaAds from "./pages/services/MetaAds";
import Websites from "./pages/services/Websites";
import CRMAutomation from "./pages/services/CRMAutomation";

// Locations
import SantaBarbaraCounty from "./pages/locations/SantaBarbaraCounty";
import SanLuisObispoCounty from "./pages/locations/SanLuisObispoCounty";

// Industries
import Landscaping from "./pages/industries/Landscaping";
import Roofing from "./pages/industries/Roofing";
import Plumbing from "./pages/industries/Plumbing";
import Electrical from "./pages/industries/Electrical";
import Painting from "./pages/industries/Painting";
import HVAC from "./pages/industries/HVAC";
import GeneralBuilding from "./pages/industries/GeneralBuilding";

// Resources
import CSLBForms from "./pages/resources/CSLBForms";
import VerifyBusinessName from "./pages/resources/VerifyBusinessName";
import KnowledgeBase from "./pages/KnowledgeBase";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resultados" element={<DiagnosticResults />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* Services */}
            <Route path="/servicios/google-business-profile" element={<GoogleBusinessProfile />} />
            <Route path="/servicios/meta-ads-facebook-instagram" element={<MetaAds />} />
            <Route path="/servicios/websites-profesionales" element={<Websites />} />
            <Route path="/servicios/crm-automatizacion" element={<CRMAutomation />} />

            {/* Locations */}
            <Route path="/areas-de-servicio/santa-barbara-county" element={<SantaBarbaraCounty />} />
            <Route path="/areas-de-servicio/san-luis-obispo-county" element={<SanLuisObispoCounty />} />

            {/* Industries */}
            <Route path="/industrias/c-27-landscaping-paisajismo" element={<Landscaping />} />
            <Route path="/industrias/c-39-roofing-techados" element={<Roofing />} />
            <Route path="/industrias/c-36-plumbing-plomeria" element={<Plumbing />} />
            <Route path="/industrias/c-10-electrical-electricidad" element={<Electrical />} />
            <Route path="/industrias/c-33-painting-pintura" element={<Painting />} />
            <Route path="/industrias/c-20-hvac-climatizacion" element={<HVAC />} />
            <Route path="/industrias/class-b-general-building-contractors" element={<GeneralBuilding />} />

            {/* Resources */}
            <Route path="/recursos/formularios-cslb-california" element={<CSLBForms />} />
            <Route path="/recursos/verificar-nombre-negocio-california" element={<VerifyBusinessName />} />

            {/* Knowledge Base for chatbot training */}
            <Route path="/kb" element={<KnowledgeBase />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
