"use client";
import { usePathname } from 'next/navigation';

export function useLanguage() {
  const pathname = usePathname();
  
  // URL'den dil kodunu çıkar (örn: /en/services -> 'en')
  const locale = pathname.split('/')[1];
  
  // Desteklenen diller
  const supportedLocales = ['tr', 'en'];
  
  // Geçerli bir dil kodu mu kontrol et
  const currentLocale = supportedLocales.includes(locale) ? locale : 'tr';
  
  return {
    locale: currentLocale,
    isEnglish: currentLocale === 'en',
    isTurkish: currentLocale === 'tr'
  };
}