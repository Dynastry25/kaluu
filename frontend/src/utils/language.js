// Language utility functions
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    dir: 'ltr'
  },
  sw: {
    code: 'sw',
    name: 'Kiswahili',
    dir: 'ltr'
  }
};

// Language context for React
export const LanguageContext = React.createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key
});

// Translation dictionary
export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    products: 'Products',
    projects: 'Projects',
    safety: 'Safety',
    news: 'News',
    contact: 'Contact',
    
    // Common phrases
    readMore: 'Read More',
    learnMore: 'Learn More',
    viewDetails: 'View Details',
    download: 'Download',
    subscribe: 'Subscribe',
    getQuote: 'Get Quote',
    
    // About page translations will be added
    aboutHeroTitle: "Building Tanzania's Mining Future",
    // ... more translations
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    about: 'Kuhusu',
    services: 'Huduma',
    products: 'Bidhaa',
    projects: 'Miradi',
    safety: 'Usalama',
    news: 'Habari',
    contact: 'Wasiliana',
    
    // Common phrases
    readMore: 'Soma Zaidi',
    learnMore: 'Jifunze Zaidi',
    viewDetails: 'Angalia Maelezo',
    download: 'Pakua',
    subscribe: 'Jiandikishe',
    getQuote: 'Pata Bei',
    
    // About page translations
    aboutHeroTitle: "Kujenga Siku za Baadaye ya Uchimbaji Tanzania",
    // ... more Swahili translations
  }
};