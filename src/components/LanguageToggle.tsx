import { useLanguage } from '@/hooks/use-language';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
      <button
        onClick={() => setLanguage('es')}
        className={`w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all ${
          language === 'es' 
            ? 'ring-2 ring-primary ring-offset-2 bg-white shadow-sm' 
            : 'opacity-60 hover:opacity-100'
        }`}
        title="Español"
        aria-label="Cambiar a Español"
      >
        🇲🇽
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all ${
          language === 'en' 
            ? 'ring-2 ring-primary ring-offset-2 bg-white shadow-sm' 
            : 'opacity-60 hover:opacity-100'
        }`}
        title="English"
        aria-label="Switch to English"
      >
        🇺🇸
      </button>
    </div>
  );
};

export default LanguageToggle;
