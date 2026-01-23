import { useContext } from 'react';
import { LanguageContext, Language } from '@/contexts/LanguageContext';
import { translations } from '@/i18n/translations';

export const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { language, setLanguage, t, isEnglish: language === 'en', isSpanish: language === 'es' };
};

export type { Language };
