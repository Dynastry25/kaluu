import React, { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('kaluu_language')
    const browserLang = navigator.language.split('-')[0]
    return savedLang || (browserLang === 'sw' ? 'sw' : 'en')
  })

  useEffect(() => {
    localStorage.setItem('kaluu_language', language)
    document.documentElement.lang = language
    document.documentElement.dir = 'ltr'
  }, [language])

  const t = (key, translations) => {
    if (translations && translations[language]) {
      return translations[language][key] || key
    }
    return key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sw' : 'en')
  }

  const setLanguageTo = (lang) => {
    if (['en', 'sw'].includes(lang)) {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: setLanguageTo, 
      t, 
      toggleLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}