import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'ko' | 'en'
type LanguageValue = { language: Language; toggleLanguage: () => void }
const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'ko')
  useEffect(() => { document.documentElement.lang = language; document.title = language === 'ko' ? '김정후 | 기계·자동차공학 포트폴리오' : 'Kim Jeonghu | Mechanical Engineering Portfolio'; localStorage.setItem('portfolio-language', language) }, [language])
  return <LanguageContext.Provider value={{ language, toggleLanguage: () => setLanguage(value => value === 'ko' ? 'en' : 'ko') }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used within LanguageProvider')
  return value
}
