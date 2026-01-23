import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-white/80 hover:text-white transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <span className="text-white/40">|</span>
            <Link 
              to="/terms-of-service" 
              className="text-white/80 hover:text-white transition-colors"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
