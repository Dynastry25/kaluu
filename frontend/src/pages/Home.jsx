import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import HeroSection from '../components/Sections/HeroSection'
import ServiceGrid from '../components/Sections/ServiceGrid'
import ProductCategory from '../components/Sections/ProductCategory'
import SafetyBanner from '../components/Sections/SafetyBanner'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'
import professionalPerson from '../components/assets/mine-inspection.jpg' 
import professionalTeam from '../components/assets/mining-team.jpg' 
import { 
  ArrowRight, 
  ChevronRight, 
  PlayCircle, 
  Star, 
  Users, 
  Award, 
  Shield, 
  Clock, 
  TrendingUp,
  MapPin,
  CheckCircle,
  Zap,
  Globe,
  Target,
  Flag,
  Heart
} from 'lucide-react'
import './CSS/Home.css'

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    safety: 100
  })
  const statsRef = useRef(null)
  const { language } = useLanguage()

  const translations = {
    en: {
      servicesTitle: "Our Core Services",
      servicesSubtitle: "Comprehensive solutions designed to optimize your mining operations with safety and efficiency at the forefront.",
      featuredWork: "Featured Work",
      projectShowcase: "Project Showcase",
      exploreProjects: "Explore our recent successful mining operations across Tanzania",
      geitaGold: "Geita Gold Mine Expansion",
      mwanzaLimestone: "Mwanza Limestone Quarry",
      dodomaTunnel: "Dodoma Highway Tunnel",
      viewCaseStudy: "View Case Study",
      productsTitle: "Products & Equipment",
      productsSubtitle: "State-of-the-art explosives and equipment for safe, efficient mining operations",
      whyChooseUs: "Why Choose KALUU",
      whatSetsApart: "What Sets Us Apart",
      discoverDifferentiators: "Discover the key differentiators that make us Tanzania's preferred mining partner",
      licensedCertified: "Licensed & Certified",
      licensedDesc: "Fully licensed by Tanzania Mining Commission and ISO certified operations.",
      expertTeam: "Expert Team",
      expertDesc: "Decades of experience with certified blasting engineers and technicians.",
      cuttingEdge: "Cutting-Edge Technology",
      cuttingDesc: "Latest electronic detonation systems and precision equipment.",
      nationwideCoverage: "Nationwide Coverage",
      coverageDesc: "Operational across all major mining regions in Tanzania.",
      clientStories: "Client Stories",
      trustedBy: "Trusted by industry leaders across Tanzania",
      seeOurWork: "See Our Work in Action",
      watchHow: "Watch how we transform mining operations with precision, safety, and cutting-edge technology.",
      watchVideo: "Watch Video",
      ctaTitle: "Ready to Power Your Mining Success?",
      ctaSubtitle: "Contact us today for a personalized consultation and discover how KALUU can optimize your mining operations.",
      requestConsultation: "Request Free Consultation",
      downloadBrochure: "Download Brochure",
      companyOverview: "KALUU Explosives - Company Overview",
      clickToPlay: "Click to play",
      goldMining: "Gold Mining",
      quarryOps: "Quarry Operations",
      infrastructure: "Infrastructure",
      geitaRegion: "Geita Region",
      mwanza: "Mwanza",
      dodomaRegion: "Dodoma Region",
      blasts: "250+ controlled blasts with zero safety incidents",
      wasteReduced: "Optimized blast patterns reduced material waste by 30%",
      precisionBlasting: "Precision tunnel blasting through complex geological conditions",
      karibu: "Welcome to KALUU EXPLOSIVE CO. LTD",
      companyProfile: "Company Profile",
      ourVision: "Our Vision",
      ourMission: "Our Mission",
      coreValues: "Core Values",
      briefHistory: "Brief History",
      ourPresence: "Our Presence",
      headquarters: "Headquarters",
      regionalOffices: "Regional Offices",
      professionalSolutions: "We provide professional solutions for mining, construction, and strategic project needs."
    },
    sw: {
      servicesTitle: "Huduma Zetu Za Msingi",
      servicesSubtitle: "Suluhisho kamili zilizobuniwa kuboresha shughuli zako za uchimbaji madini kwa usalama na ufanisi mstari wa mbele.",
      featuredWork: "Kazi Ilioangaziwa",
      projectShowcase: "Onyesho la Mradi",
      exploreProjects: "Chunguza shughuli zetu za hivi karibuni za uchimbaji madini zilizofanikiwa kote Tanzania",
      geitaGold: "Upanuzi wa Mgodi wa Dhahabu Geita",
      mwanzaLimestone: "Mchimbaji wa Chokaa Mwanza",
      dodomaTunnel: "Mtaro wa Barabara Kuu Dodoma",
      viewCaseStudy: "Angalia Uchambuzi wa Kesi",
      productsTitle: "Bidhaa na Vifaa",
      productsSubtitle: "Milipuko ya kisasa na vifaa vya uchimbaji madini salama na yenye ufanisi",
      whyChooseUs: "Kwa Nini Kuchagua KALUU",
      whatSetsApart: "Nini Kinatutofautisha",
      discoverDifferentiators: "Gundua vigeuzi muhimu vinavyotufanya kuwa mshirika wa kuchaguliwa wa uchimbaji madini Tanzania",
      licensedCertified: "Imelicenshwa na Kudhibitishwa",
      licensedDesc: "Imelicenshwa kikamilifu na Tume ya Uchimbaji Madini Tanzania na shughuli zilizodhibitishwa na ISO.",
      expertTeam: "Timu ya Wataalam",
      expertDesc: "Uzoefu wa miongo na wahandisi waliokaguliwa wa blasting na watendaji.",
      cuttingEdge: "Teknolojia ya Upeo",
      cuttingDesc: "Mifumo ya hivi karibuni ya detonation ya elektroniki na vifaa sahihi.",
      nationwideCoverage: "Ufunzaji wa Kitaifa",
      coverageDesc: "Operesheni katika mikoa yote mikuu ya uchimbaji madini Tanzania.",
      clientStories: "Hadithi za Wateja",
      trustedBy: "Imeaminika na viongozi wa tasnia kote Tanzania",
      seeOurWork: "Ona Kazi Yetu Kitendo",
      watchHow: "Tazama jinsi tunavyobadilisha shughuli za uchimbaji madini kwa usahihi, usalama na teknolojia ya upeo.",
      watchVideo: "Tazama Video",
      ctaTitle: "Tayari Kuwezesha Mafanikio Yako ya Uchimbaji?",
      ctaSubtitle: "Wasiliana nasi leo kwa mashauriano ya kibinafsi na ugundue jinsi KALUU inavyoweza kuboresha shughuli zako za uchimbaji madini.",
      requestConsultation: "Omba Mashauriano ya Bure",
      downloadBrochure: "Pakua Brochure",
      companyOverview: "KALUU Explosives - Mwonekano wa Kampuni",
      clickToPlay: "Bonyeza kucheza",
      goldMining: "Uchimbaji wa Dhahabu",
      quarryOps: "Shughuli za Mchimbaji",
      infrastructure: "Miundombinu",
      geitaRegion: "Mkoa wa Geita",
      mwanza: "Mwanza",
      dodomaRegion: "Mkoa wa Dodoma",
      blasts: "Milipuko 250+ iliyodhibitiwa bila matukio ya usalama",
      wasteReduced: "Miundo bora ya milipuko ilipunguza taka ya nyenzo kwa 30%",
      precisionBlasting: "Blasting sahihi ya mtaro kupitia hali tata za kijiolojia",
      karibu: "Karibu KALUU EXPLOSIVE CO. LTD",
      companyProfile: "Wasifu wa Kampuni",
      ourVision: "Dira Yetu",
      ourMission: "Dhamira Yetu",
      coreValues: "Maadili Yetu",
      briefHistory: "Historia Fupi",
      ourPresence: "Uwepo Wetu",
      headquarters: "Makao Makuu",
      regionalOffices: "Ofisi za Mikoa",
      professionalSolutions: "Tunatoa suluhisho la kitaalamu kwa mahitaji ya migodini, ujenzi na miradi ya kimkakati."
    }
  }

  const trans = translations[language]

  const testimonials = [
    {
      name: "James Mwangi",
      role: language === 'en' ? "Operations Director" : "Mkurugenzi wa Operesheni",
      company: "Geita Gold Mining Ltd",
      content: language === 'en' 
        ? "KALUU's precision blasting and commitment to safety exceeded our expectations. Their team integrated seamlessly with our operations." 
        : "Blasting sahihi ya KALUU na kujitolea kwa usalama ilizidi matarajio yetu. Timu yao iliunganishwa vizuri na shughuli zetu.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      initials: "JM"
    },
    {
      name: "Sarah Kimaro",
      role: language === 'en' ? "Plant Manager" : "Meneja wa Kituo",
      company: "Tanzania Cement Corporation",
      content: language === 'en' 
        ? "The efficiency gains from KALUU's optimized blasting techniques have significantly improved our production capacity." 
        : "Faida za ufanisi kutoka kwa mbinu bora za blasting za KALUU zimeboresha uwezo wetu wa uzalishaji kwa kiasi kikubwa.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      initials: "SK"
    },
    {
      name: "Robert Msangi",
      role: language === 'en' ? "Project Engineer" : "Mhandisi wa Mradi",
      company: "TANROADS",
      content: language === 'en' 
        ? "Working through challenging rock formations, KALUU delivered on schedule while maintaining highest safety standards." 
        : "Kufanya kazi kupitia umbizo changamoto la miamba, KALUU ilitoa kwa ratiba huku ikidumisha viwango vya juu zaidi vya usalama.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      initials: "RM"
    }
  ]

  const slides = [
    {
      title: trans.geitaGold,
      category: trans.goldMining,
      location: trans.geitaRegion,
      description: trans.blasts,
      image: "https://images.unsplash.com/photo-1574007557239-acf6863bc375?w=800&h=600&fit=crop",
      color: "gold"
    },
    {
      title: trans.mwanzaLimestone,
      category: trans.quarryOps,
      location: trans.mwanza,
      description: trans.wasteReduced,
      image: "https://images.unsplash.com/photo-1543966888-7c1dc482a810?w=800&h=600&fit=crop",
      color: "gray"
    },
    {
      title: trans.dodomaTunnel,
      category: trans.infrastructure,
      location: trans.dodomaRegion,
      description: trans.precisionBlasting,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      color: "blue"
    }
  ]

  const features = [
    {
      icon: <Shield />,
      title: trans.licensedCertified,
      description: trans.licensedDesc,
      gradient: "primary"
    },
    {
      icon: <Users />,
      title: trans.expertTeam,
      description: trans.expertDesc,
      gradient: "secondary"
    },
    {
      icon: <Zap />,
      title: trans.cuttingEdge,
      description: trans.cuttingDesc,
      gradient: "accent"
    },
    {
      icon: <Globe />,
      title: trans.nationwideCoverage,
      description: trans.coverageDesc,
      gradient: "success"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000
            const steps = 60
            const increment = (target, current) => {
              const step = target / steps
              let count = current
              const timer = setInterval(() => {
                count += step
                if (count >= target) {
                  count = target
                  clearInterval(timer)
                }
                setStats(prev => ({ ...prev, [current]: Math.floor(count) }))
              }, duration / steps)
            }

            increment(500, 'projects')
            increment(150, 'clients')
            increment(25, 'experience')
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
    <div className="home-page">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>

      <HeroSection />

      

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">
              {language === 'en' ? 'Who We Are' : 'Sisi Ni Nani'}
            </span>
            <h2>{trans.karibu}</h2>
            <p className="section-description">
              {language === 'en' 
                ? "KALUU EXPLOSIVE CO. LTD is a Tanzanian company specializing in explosives distribution for mining activities, blasting training, sale of mining equipment, along with construction services and professional consultancy. With headquarters in Iramba – Singida, and offices in Tabora, Shinyanga (Kahama), and Geita regions, we serve our clients with emphasis on safety, quality, efficiency, and compliance with all national laws and regulations."
                : "KALUU EXPLOSIVE CO. LTD ni kampuni ya Kitanzania inayojishughulisha na usambazaji wa milipuko kwa shughuli za migodini, mafunzo ya Blasting activities, uuzaji wa vifaa vya uchimbaji, pamoja na huduma za ujenzi (Construction) na ushauri wa kitaalamu (Consultancy services). Tukiwa na makao makuu Iramba – Singida, na ofisi katika mikoa ya Tabora, Shinyanga (Kahama) na Geita, tunahudumia wateja wetu kwa kuzingatia usalama, ubora, ufanisi na kuzingatia sheria na kanuni zote za nchi."}
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-images">
              <div className="image-main">
                <img 
                  src= {professionalTeam} 
                  alt={language === 'en' ? "KALUU professional team at mining site" : "Timu ya kitaalamu ya KALUU katika tovuti ya uchimbaji"}
                  loading="lazy"
                />
              </div>
              <div className="image-secondary">
                <img 
                  src={professionalPerson} 
                  alt={language === 'en' ? "Mining operation with KALUU explosives" : "Uendeshaji wa uchimbaji na milipuko ya KALUU"}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">
                  <Shield size={32} />
                </div>
                <h3>{trans.companyProfile}</h3>
                <p>{language === 'en' 
                  ? "KALUU EXPLOSIVE CO. LTD is a legally registered private company under the laws of the United Republic of Tanzania. The company was established to provide superior and safe services in mining, construction, and professional consultancy sectors, specifically in activities involving the use of explosives."
                  : "KALUU EXPLOSIVE CO. LTD ni kampuni binafsi iliyosajiliwa kisheria chini ya sheria za Jamhuri ya Muungano wa Tanzania. Kampuni ilianzishwa kwa lengo la kutoa huduma bora na salama katika sekta ya migodini, ujenzi na ushauri wa kitaalamu, hususan katika shughuli zinazohusisha matumizi ya milipuko (explosives)."}
                </p>
                <p className="about-highlight">
                  {trans.professionalSolutions}
                </p>
              </div>
              
              <div className="about-card">
                <div className="about-icon">
                  <Target size={32} />
                </div>
                <h3>{trans.ourVision}</h3>
                <p>{language === 'en' 
                  ? "To be the leading company in Tanzania and the East African region in mining blasting services, blasting training, construction, and professional consultancy."
                  : "Kuwa kampuni inayoongoza nchini na kanda ya Afrika Mashariki katika huduma za milipuko migodini, mafunzo ya blasting, ujenzi na ushauri wa kitaalamu."}
                </p>
              </div>
              
              <div className="about-card">
                <div className="about-icon">
                  <Flag size={32} />
                </div>
                <h3>{trans.ourMission}</h3>
                <p>{language === 'en' 
                  ? "To provide high-safety, quality, and efficient services using technology, expertise, and experience to contribute to the development of the mining and construction sectors in the country."
                  : "Kutoa huduma zenye usalama wa hali ya juu, ubora na ufanisi, kwa kutumia teknolojia, utaalamu na uzoefu ili kuchangia maendeleo ya sekta ya migodini na ujenzi nchini."}
                </p>
              </div>
              
              <div className="about-card">
                <div className="about-icon">
                  <Heart size={32} />
                </div>
                <h3>{trans.coreValues}</h3>
                <ul className="values-list">
                  <li>{language === 'en' ? 'Safety First' : 'Usalama Kwanza'}</li>
                  <li>{language === 'en' ? 'Integrity and Accountability' : 'Uadilifu na Uwajibikaji'}</li>
                  <li>{language === 'en' ? 'Service Quality' : 'Ubora wa Huduma'}</li>
                  <li>{language === 'en' ? 'Expertise and Innovation' : 'Utaalamu na Ubunifu'}</li>
                  <li>{language === 'en' ? 'Environmental and Community Respect' : 'Kuheshimu Mazingira na Jamii'}</li>
                </ul>
              </div>
            </div>
            
            <div className="company-history">
              <h3>{trans.briefHistory}</h3>
              <p>
                {language === 'en' 
                  ? "Since its establishment, KALUU EXPLOSIVE CO. LTD has continued to build professional expertise by collaborating with experienced experts in the mining and construction sectors, while adhering to national and international safety and environmental standards."
                  : "Tangu kuanzishwa kwake, KALUU EXPLOSIVE CO. LTD imeendelea kujijenga kitaalamu kwa kushirikiana na wataalamu wenye uzoefu mkubwa katika sekta ya migodini na ujenzi, huku ikizingatia viwango vya kitaifa na kimataifa vya usalama na mazingira."}
              </p>
            </div>
            
            <div className="presence-section">
              <h3>{trans.ourPresence}</h3>
              <div className="presence-grid">
                <div className="presence-item">
                  <MapPin size={24} />
                  <div>
                    <strong>{trans.headquarters}</strong>
                    <p>Iramba, Singida – Tanzania</p>
                  </div>
                </div>
                <div className="presence-item">
                  <MapPin size={24} />
                  <div>
                    <strong>{trans.regionalOffices}</strong>
                    <p>Tabora, Shinyanga (Kahama), Geita</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">
              {language === 'en' ? 'What We Do' : 'Tunachofanya'}
            </span>
            <h2>{trans.servicesTitle}</h2>
            <p className="section-description">
              {trans.servicesSubtitle}
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>
      
      {/* Interactive Project Showcase */}
      <section className="project-showcase section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{trans.featuredWork}</span>
            <h2>{trans.projectShowcase}</h2>
            <p className="section-description">
              {trans.exploreProjects}
            </p>
          </div>
          
          <div className="showcase-container">
            <div className="showcase-slider">
              <div className="slider-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div key={index} className={`slide ${index === activeSlide ? 'active' : ''}`}>
                    <div className="slide-image">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="slide-image-bg"
                        loading="lazy"
                      />
                      <div className="slide-overlay">
                        <div className="slide-badge">{slide.category}</div>
                      </div>
                    </div>
                    <div className="slide-content">
                      <div className="slide-meta">
                        <span className="meta-item">
                          <MapPin size={16} />
                          {slide.location}
                        </span>
                      </div>
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                      <Button variant="text" className="slide-btn">
                        {trans.viewCaseStudy}
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="slider-controls">
              <button className="control-btn prev" onClick={prevSlide}>
                <ChevronRight size={20} />
              </button>
              <div className="slider-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
              <button className="control-btn next" onClick={nextSlide}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="products-section section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">
              {language === 'en' ? 'Premium Quality' : 'Ubora wa Juu'}
            </span>
            <h2>{trans.productsTitle}</h2>
            <p className="section-description">
              {trans.productsSubtitle}
            </p>
          </div>
          <ProductCategory />
        </div>
      </section>
      
      {/* Why Choose Us - Enhanced */}
      <section className="features-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{trans.whyChooseUs}</span>
            <h2>{trans.whatSetsApart}</h2>
            <p className="section-description">
              {trans.discoverDifferentiators}
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
              >
                <div className={`feature-icon-wrapper gradient-${feature.gradient}`}>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-hover">
                  <CheckCircle size={20} />
                  <span>{language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SafetyBanner />
      
      {/* Testimonials Section */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{trans.clientStories}</span>
            <h2>{language === 'en' ? 'What Our Clients Say' : 'Wateja Wetu Wasemaje'}</h2>
            <p className="section-description">
              {trans.trustedBy}
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card" hover>
                <div className="testimonial-header">
                  <div className="client-avatar">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      loading="lazy"
                    />
                    <div className="avatar-fallback">
                      {testimonial.initials}
                    </div>
                  </div>
                  <div className="client-info">
                    <h4>{testimonial.name}</h4>
                    <p className="client-role">{testimonial.role}</p>
                    <p className="client-company">{testimonial.company}</p>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.rating ? 'filled' : ''}
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Showcase */}
      <section className="video-section section-padding">
        <div className="container">
          <div className="video-container">
            <div className="video-content">
              <h2>{trans.seeOurWork}</h2>
              <p>
                {trans.watchHow}
              </p>
              <Button 
                variant="primary" 
                className="video-btn"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <PlayCircle size={20} />
                {trans.watchVideo}
              </Button>
            </div>
            <div className="video-placeholder" onClick={() => setIsVideoModalOpen(true)}>
              <img 
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&h=400&fit=crop" 
                alt={trans.companyOverview}
                className="video-thumbnail"
                loading="lazy"
              />
              <div className="play-button">
                <PlayCircle size={48} />
              </div>
              <div className="video-overlay">
                <span>{trans.clickToPlay}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section section-padding bg-dark">
        <div className="container">
          <div className="cta-content">
            <h2>{trans.ctaTitle}</h2>
            <p>
              {trans.ctaSubtitle}
            </p>
            <div className="cta-actions">
              <Button variant="primary" size="large">
                {trans.requestConsultation}
                <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" size="large">
                {trans.downloadBrochure}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal">
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setIsVideoModalOpen(false)}
            >
              ×
            </button>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title={trans.companyOverview}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home