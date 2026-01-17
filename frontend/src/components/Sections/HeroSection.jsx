import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../UI/Button'
import { 
  ArrowRight, 
  PlayCircle, 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  Zap, 
  Globe, 
  Truck, 
  Building,
  TrendingUp,
  Star
} from 'lucide-react'
import './HeroSection.css'

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [stats, setStats] = useState({
    years: 0,
    projects: 0,
    safety: 0,
    clients: 0
  })
  const statsRef = useRef(null)
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Powering Tanzania's Mining Future",
      subtitle: "Comprehensive explosives, equipment, and logistics solutions for safe and efficient mining operations across Tanzania.",
      ctaPrimary: "Explore Our Services",
      ctaSecondary: "Watch Introduction",
      slide1: "Explosives Supply",
      slide2: "Equipment Rental",
      slide3: "Blasting Training",
      slide4: "Consultancy Services",
      slide5: "Logistics Solutions",
      slide6: "Safety Compliance",
      yearsExperience: "Years Experience",
      successfulProjects: "Successful Projects",
      safetyRecord: "Safety Record",
      satisfiedClients: "Satisfied Clients",
      companyOverview: "KALUU Explosives - Company Overview",
      exploreSolutions: "Explore Solutions",
      heroDescription: "With over two decades of expertise, KALUU Explosives delivers innovative mining solutions that power Tanzania's mineral wealth while prioritizing safety, efficiency, and environmental responsibility.",
      heroDescription2: "From explosives supply to comprehensive mining consultancy, we provide end-to-end solutions that optimize operations and maximize productivity across Tanzania's mining sector."
    },
    sw: {
      title: "Kuwawezesha Siku za Baadaye ya Uchimbaji Madini Tanzania",
      subtitle: "Suluhisho kamili za milipuko, vifaa, na usafirishaji kwa shughuli salama na zenye ufanisi za uchimbaji madini kote Tanzania.",
      ctaPrimary: "Chunguza Huduma Zetu",
      ctaSecondary: "Tazama Utangulizi",
      licensed: "Imelicenshwa na Tume ya Uchimbaji Madini Tanzania",
      certified: "Shughuli Zilizodhibitishwa ISO",
      experts: "Wataalam Waliokaguliwa",
      safety: "Rekodi ya Usalama ya Matukio Sifuri",
      national: "Ufunzaji wa Kitaifa",
      innovation: "Teknolojia ya Upeo",
      slide1: "Usambazaji wa Milipuko",
      slide2: "Kukodi Vifaa",
      slide3: "Mafunzo ya Blasting",
      slide4: "Huduma za Ushauri",
      slide5: "Suluhisho za Usafirishaji",
      slide6: "Kufuata Usalama",
      yearsExperience: "Miaka ya Uzoefu",
      successfulProjects: "Miradi Imefanikiwa",
      safetyRecord: "Rekodi ya Usalama",
      satisfiedClients: "Wateja Wameridhika",
      playVideo: "Tazama Hadithi Yetu",
      companyOverview: "KALUU Explosives - Mwonekano wa Kampuni",
      exploreSolutions: "Chunguza Suluhisho",
      heroDescription: "Kwa zaidi ya miongo miwili ya utaalamu, KALUU Explosives inatoa suluhisho za ubunifu za uchimbaji madini zinazoweza utajiri wa madini Tanzania huku zikipa kipaumbele usalama, ufanisi, na uwajibikaji wa mazingira.",
      heroDescription2: "Kutoka usambazaji wa milipuko hadi ushauri kamili wa uchimbaji madini, tunatoa suluhisho kamili zinazoboresha shughuli na kuongeza uzalishaji katika sekta ya uchimbaji madini Tanzania."
    }
  }

  const trans = translations[language]

  const slides = [
    { 
      title: trans.slide1, 
      color: 'kaluu-primary',
      icon: <Zap size={24} />,
      description: language === 'en' ? 'Premium industrial explosives for all mining needs' : 'Milipuko ya ubora wa juu ya viwandani kwa mahitaji yote ya uchimbaji'
    },
    { 
      title: trans.slide2, 
      color: 'kaluu-secondary',
      icon: <Truck size={24} />,
      description: language === 'en' ? 'Modern equipment rental and maintenance services' : 'Huduma za kukodi vifaa vya kisasa na matengenezo'
    },
    { 
      title: trans.slide3, 
      color: 'kaluu-accent',
      icon: <Users size={24} />,
      description: language === 'en' ? 'Comprehensive blasting training and certification' : 'Mafunzo kamili ya blasting na udhibitisho'
    },
    { 
      title: trans.slide4, 
      color: 'kaluu-success',
      icon: <Building size={24} />,
      description: language === 'en' ? 'Expert mining consultancy and project management' : 'Ushauri wa wataalamu wa uchimbaji na usimamizi wa miradi'
    },
    { 
      title: trans.slide5, 
      color: 'kaluu-info',
      icon: <Globe size={24} />,
      description: language === 'en' ? 'Nationwide logistics and transportation solutions' : 'Suluhisho za usafirishaji na usafirishaji kitaifa'
    },
    { 
      title: trans.slide6, 
      color: 'kaluu-warning',
      icon: <Shield size={24} />,
      description: language === 'en' ? 'Full safety compliance and risk management' : 'Kufuata kamili usalama na usimamizi wa hatari'
    }
  ]

  const achievements = [
    { 
      number: '25+', 
      label: trans.yearsExperience,
      icon: <Star />,
      color: 'kaluu-primary'
    },
    { 
      number: '500+', 
      label: trans.successfulProjects,
      icon: <TrendingUp />,
      color: 'kaluu-secondary'
    },
    { 
      number: '100%', 
      label: trans.safetyRecord,
      icon: <Shield />,
      color: 'kaluu-success'
    },
    { 
      number: '150+', 
      label: trans.satisfiedClients,
      icon: <Users />,
      color: 'kaluu-accent'
    }
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateCounter = (target, key, duration) => {
              const steps = 60
              const increment = target / steps
              let count = 0
              const timer = setInterval(() => {
                count += increment
                if (count >= target) {
                  count = target
                  clearInterval(timer)
                }
                setStats(prev => ({ ...prev, [key]: Math.floor(count) }))
              }, duration / steps)
            }

            animateCounter(25, 'years', 2000)
            animateCounter(500, 'projects', 2500)
            animateCounter(100, 'safety', 1500)
            animateCounter(150, 'clients', 3000)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="kaluu-hero-section">
      {/* Animated Background Elements */}
      <div className="kaluu-hero-background">
        <div className="kaluu-hero-gradient"></div>
        <div className="kaluu-hero-overlay"></div>
        <div className="kaluu-hero-particle kaluu-particle-1"></div>
        <div className="kaluu-hero-particle kaluu-particle-2"></div>
        <div className="kaluu-hero-particle kaluu-particle-3"></div>
        <div className="kaluu-hero-shape kaluu-shape-1"></div>
        <div className="kaluu-hero-shape kaluu-shape-2"></div>
      </div>
      
      <div className="container">
        <div className="kaluu-hero-content">
          <div className="kaluu-hero-text" data-aos="fade-right">
            
            <h1>
              {trans.title}
              <span className="kaluu-hero-highlight">.</span>
            </h1>
            
            <p className="kaluu-hero-subtitle">{trans.subtitle}</p>
            <p className="kaluu-hero-description">{trans.heroDescription}</p>
            

            
            <div className="kaluu-hero-actions">
              <Button variant="primary" size="large" className="kaluu-btn-glow">
                {trans.ctaPrimary}
                <ArrowRight size={20} />
              </Button>
            </div>
            

          </div>
          

        </div>
      </div>
    
    </section>
  )
}

export default HeroSection