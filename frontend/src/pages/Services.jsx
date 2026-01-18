import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ServiceGrid from '../components/Sections/ServiceGrid'
import './CSS/Services.css'

const Services = () => {
  const { language } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const translations = {
    en: {
      // Hero
      heroTitle: 'KALUU Explosives Company Limited',
      swahiliSubtitle: 'Kampuni ya Milipuko KALUU Limited',
      heroDescription: 'Your trusted partner for comprehensive chemical and explosive solutions in Tanzania. We supply a wide range of industrial, agricultural, and specialized chemicals with over 15 years of experience.',
      
      // Stats
      statsTitle: 'Our Commitment to Tanzania',
      projectsCompleted: 'Projects Completed',
      happyClients: 'Satisfied Clients',
      yearsExperience: 'Years of Experience',
      certifiedProducts: 'Certified Products',
      
      // Categories
      categoriesTitle: 'Our Core Services',
      categoriesSubtitle: 'Comprehensive chemical and industrial solutions across multiple sectors',
      
      explosivesChemicals: 'Explosives & Mining Chemicals',
      explosivesDesc: 'Complete range of industrial explosives and mining chemicals for all operations',
      
      agriculturalChemicals: 'Agricultural Chemicals',
      agriculturalDesc: 'Fertilizers, pesticides, insecticides and crop protection solutions',
      
      cleaningSanitation: 'Cleaning & Sanitation Chemicals',
      cleaningDesc: 'Hospital-grade disinfectants and industrial cleaning chemicals',
      
      constructionChemicals: 'Construction Chemicals',
      constructionDesc: 'Specialized chemicals for concrete, coatings, and construction materials',
      
      wastewaterTreatment: 'Wastewater Treatment Chemicals',
      wastewaterDesc: 'Chemicals for industrial and municipal water treatment systems',
      
      professionalServices: 'Professional Services',
      professionalDesc: 'Consulting, security, and technical services for businesses',
      
      // Detailed Services
      detailsTitle: 'Service Categories',
      detailsSubtitle: 'Detailed overview of our comprehensive service offerings',
      
      // Product Details - Explosives
      explosivesTitle: 'Explosives & Mining Chemicals',
      explosivesDetail: 'High-velocity explosives used for rock fragmentation in mining, quarrying, and large-scale construction projects. Dynamite contains nitroglycerin absorbed in inert materials making it stable for transport but powerful upon detonation, essential for breaking hard rock formations in Tanzanian mines.',
      
      explosivesDetail2: 'Critical chemical in gold mining for leaching gold from ore through the cyanide process. It dissolves gold into solution for later recovery, making it indispensable for Tanzania\'s gold mining industry where it\'s used in heap leaching and tank leaching operations.',
      
      // Product Details - Agricultural
      agriculturalTitle: 'Agricultural Chemicals',
      agriculturalDetail: 'Nitrogen-Phosphorus-Potassium compounds essential for crop nutrition. Nitrogen promotes leaf growth, phosphorus aids root development and flowering, while potassium strengthens plants against diseases - vital for Tanzania\'s maize, rice, and cash crop cultivation to increase yields.',
      
      agriculturalDetail2: 'Chemical agents controlling weeds (herbicides) and insects (pesticides) that threaten crop productivity. These protect Tanzania\'s agricultural output by eliminating competitive vegetation and destructive insects, ensuring food security and commercial crop success.',
      
      // Product Details - Cleaning
      cleaningTitle: 'Hospital & Cleaning Chemicals',
      cleaningDetail: 'Powerful antimicrobial agents used in hospitals for surface disinfection, instrument sterilization, and water treatment. These eliminate pathogens including bacteria, viruses, and fungi, crucial for infection control in Tanzanian healthcare facilities.',
      
      cleaningDetail2: 'Versatile disinfectant and antiseptic used for wound cleaning, surface disinfection, and medical equipment sterilization. Its oxidizing action destroys microorganisms effectively, serving both healthcare and industrial sanitation needs across Tanzania.',
      
      // Product Details - Construction
      constructionTitle: 'Construction Chemicals',
      constructionDetail: 'Chemical additives that increase concrete strength and durability while preventing water penetration. These extend structure lifespan in Tanzania\'s construction projects, protecting buildings from moisture damage and increasing load-bearing capacity.',
      
      constructionDetail2: 'High-strength adhesives and protective coatings for construction applications. Epoxy bonds materials permanently while providing chemical resistance, essential for industrial floors, structural repairs, and protective linings in Tanzanian infrastructure projects.',
      
      // Product Details - Wastewater
      wastewaterTitle: 'Wastewater Treatment Chemicals',
      wastewaterDetail: 'Chemicals that aggregate suspended particles in wastewater for easier removal. Coagulants neutralize charges on particles while flocculants form larger clusters that settle out, essential for purifying industrial and municipal wastewater in Tanzania.',
      
      wastewaterDetail2: 'Acids (like sulphuric) and bases (like sodium hydroxide) that correct wastewater pH to optimal treatment levels. Proper pH ensures effective biological treatment and chemical precipitation, meeting Tanzania\'s environmental discharge standards.',
      
      // Product Details - Professional Services
      professionalTitle: 'Professional Services',
      professionalDetail: 'Expert guidance on mining operations, safety compliance, and regulatory navigation in Tanzania. Consultants help mines optimize extraction processes, ensure environmental compliance, and implement international best practices for sustainable mining.',
      
      professionalDetail2: 'Professional security personnel and safety consultants protecting mining sites and chemical facilities. These services prevent unauthorized access, manage hazardous material safety, and ensure compliance with Tanzania\'s strict safety regulations for chemical handling.',
      
      // Features
      keyFeatures: 'Key Products & Applications',
      learnMore: 'Request Detailed Info',
      contactUs: 'Contact Sales',
      getQuote: 'Get Quote',
      
      // Features Lists
      explosiveProducts: [
        'Dynamite & Nitroglycerin for rock blasting',
        'Sodium Cyanide for gold extraction',
        'Activated Carbon for gold recovery',
        'Industrial acids for mineral processing',
        'Blasting caps and detonators',
        'Mining safety chemicals'
      ],
      
      agriculturalProducts: [
        'NPK Fertilizers for crop nutrition',
        'Herbicides for weed control',
        'Pesticides for insect protection',
        'Soil conditioners and amendments',
        'Fungicides for disease prevention',
        'Complete agrochemical solutions'
      ],
      
      cleaningProducts: [
        'Chlorine-based disinfectants',
        'Hydrogen Peroxide solutions',
        'Hospital-grade sanitizers',
        'Industrial cleaning agents',
        'Surface disinfectants',
        'Medical sterilization chemicals'
      ],
      
      constructionProducts: [
        'Concrete hardeners & waterproofers',
        'Epoxy coatings & adhesives',
        'Protective surface coatings',
        'Polymer bonding agents',
        'Ready-mix construction chemicals',
        'Structural repair materials'
      ],
      
      wastewaterProducts: [
        'Coagulants & flocculants',
        'pH adjustment chemicals',
        'Disinfection chemicals',
        'Water treatment additives',
        'Industrial wastewater solutions',
        'Municipal treatment chemicals'
      ],
      
      professionalProducts: [
        'Mining operational consultancy',
        'Safety compliance services',
        'Chemical handling training',
        'Security personnel services',
        'Environmental compliance',
        'Technical support services'
      ],
      
      // Process
      processTitle: 'Our Service Process',
      processSubtitle: 'How we deliver chemical solutions to Tanzanian industries',
      
      consultation: 'Industry Assessment',
      consultationDesc: 'We analyze your specific industrial needs and chemical requirements',
      
      planning: 'Solution Design',
      planningDesc: 'We design customized chemical solutions for your specific applications',
      
      execution: 'Supply Chain Management',
      executionDesc: 'Safe and compliant delivery of chemicals to your operational sites',
      
      support: 'Technical & Safety Support',
      supportDesc: 'Ongoing technical assistance, safety training, and regulatory compliance',
      
      // Contact
      contactTitle: 'Need Chemical Solutions for Your Industry?',
      contactText: 'Contact our technical team today for customized chemical solutions tailored to Tanzanian industrial requirements.',
      getInTouch: 'Contact Technical Team'
    },
    sw: {
      // Hero
      heroTitle: 'Kampuni ya Milipuko KALUU Limited',
      swahiliSubtitle: 'KALUU Explosives Company Limited',
      heroDescription: 'Mshirika wako wa kuaminika kwa suluhisho kamili za kemikali na milipuko Tanzania. Tunatoa anuwai pana ya kemikali za viwandani, kilimo, na maalum na uzoefu wa zaidi ya miaka 15.',
      
      // Stats
      statsTitle: 'Ahadi Yetu kwa Tanzania',
      projectsCompleted: 'Miradi Imekamilika',
      happyClients: 'Wateja Waliyoridhika',
      yearsExperience: 'Miaka ya Uzoefu',
      certifiedProducts: 'Bidhaa Zilizoidhinishwa',
      
      // Categories
      categoriesTitle: 'Huduma Zetu za Msingi',
      categoriesSubtitle: 'Suluhisho kamili za kemikali na viwandani kwenye sekta mbalimbali',
      
      explosivesChemicals: 'Milipuko na Kemikali za Uchimbaji',
      explosivesDesc: 'Aina kamili ya milipuko ya viwandani na kemikali za uchimbaji kwa shughuli zote',
      
      agriculturalChemicals: 'Kemikali za Kilimo',
      agriculturalDesc: 'Mbolea, dawa za wadudu, viua wadudu na suluhisho za ulinzi wa mazao',
      
      cleaningSanitation: 'Kemikali za Usafi na Usafi',
      cleaningDesc: 'Viua vijidudu vya daraja la hospitali na kemikali za usafi wa viwandani',
      
      constructionChemicals: 'Kemikali za Ujenzi',
      constructionDesc: 'Kemikali maalum kwa saruji, mipako, na vifaa vya ujenzi',
      
      wastewaterTreatment: 'Kemikali za Matibabu ya Maji Taka',
      wastewaterDesc: 'Kemikali kwa mifumo ya matibabu ya maji ya viwandani na manispaa',
      
      professionalServices: 'Huduma za Kitaalamu',
      professionalDesc: 'Ushauri, usalama, na huduma za kiufundi kwa biashara',
      
      // Detailed Services
      detailsTitle: 'Aina za Huduma',
      detailsSubtitle: 'Muhtasari wa kina wa matoleo yetu ya huduma',
      
      // Product Details - Explosives
      explosivesTitle: 'Milipuko na Kemikali za Uchimbaji',
      explosivesDetail: 'Milipuko ya kasi ya juu inayotumiwa kuvunja miamba katika uchimbaji, uchimbaji mawe, na miradi mikubwa ya ujenzi. Dynamite ina nitroglycerin iliyotiwa kwenye vitu visivyofanya, ikifanya iwe imara kwa usafirishaji lakini yenye nguvu inapochomwa, muhimu kuvunja miamba ngumu katika migodi ya Tanzania.',
      
      explosivesDetail2: 'Kemikali muhimu katika uchimbaji wa dhahabu kwa kufilisisha dhahabu kutoka kwenye mawe kupitia mchakato wa cyanide. Inayeyusha dhahabu ndani ya suluhisho kwa urejesho baadaye, ikifanya iwe muhimu kwa tasnia ya uchimbaji dhahabu ya Tanzania ambapo hutumiwa katika kufilisisha kwenye rundo na kwenye tanki.',
      
      // Product Details - Agricultural
      agriculturalTitle: 'Kemikali za Kilimo',
      agriculturalDetail: 'Misombo ya Nitrojeni-Fosforasi-Potasiamu muhimu kwa lishe ya mazao. Nitrojeni inakuza ukuaji wa majani, fosforasi husaidia ukuaji wa mizizi na uchanishaji, wakati potasiamu inaimarisha mimea dhidi ya magonjwa - muhimu kwa kilimo cha mahindi, mchele, na mazao ya biashara Tanzania ili kuongeza mavuno.',
      
      agriculturalDetail2: 'Vitu vya kemikali vinavyodhibiti magugu (dawa za magugu) na wadudu (dawa za wadudu) vinavyotishia uzalishaji wa mazao. Hivi vinalinda uzalishaji wa kilimo Tanzania kwa kuondoa uoto wa ushindani na wadudu wa uharibifu, kuhakikisha usalama wa chakula na mafanikio ya mazao ya biashara.',
      
      // Product Details - Cleaning
      cleaningTitle: 'Kemikali za Hospitali na Usafi',
      cleaningDetail: 'Vitu vikali vya kupambana na vijidudu vinavyotumika katika hospitali kwa usafi wa uso, kutupua vifaa, na matibabu ya maji. Hivi huondoa vijasumizi ikiwa ni pamoja na bakteria, virusi, na kuvu, muhimu kwa udhibiti wa maambukizo katika vituo vya afya Tanzania.',
      
      cleaningDetail2: 'Suluhisho la kutumika kwa namna nyingi la kuua vijidudu na antiseptiki inayotumika kwa usafi wa majeraha, usafi wa uso, na kutupua vifaa vya matibabu. Ushirikiano wake wa oksidi huangamiza vijidudu kwa ufanisi, ikitumika kwa mahitaji ya usafi wa afya na viwandani katika Tanzania.',
      
      // Product Details - Construction
      constructionTitle: 'Kemikali za Ujenzi',
      constructionDetail: 'Viungo vya kemikali vinavyoongeza nguvu na uimara wa saruji wakati wa kuzuia kuingia kwa maji. Hivi hupanua maisha ya miundo katika miradi ya ujenzi Tanzania, ikilinda majengo dhidi ya uharibifu wa unyevu na kuongeza uwezo wa kubeba mizigo.',
      
      constructionDetail2: 'Gundi zenye nguvu na mipako ya kinga kwa matumizi ya ujenzi. Epoksi huunganisha vifaa kwa kudumu wakati inatoa kinga ya kemikali, muhimu kwa sakafu za viwandani, ukarabati wa miundo, na vivuli vya kinga katika miradi ya miundombinu Tanzania.',
      
      // Product Details - Wastewater
      wastewaterTitle: 'Kemikali za Matibabu ya Maji Taka',
      wastewaterDetail: 'Kemikali zinazokusanya chembechembe zilizosimama kwenye maji taka kwa uondoaji rahisi. Vichocheo huondoa malipo kwenye chembechembe huku vifunganishi vikiumba makundi makubwa yanayotulia, muhimu kwa kusafisha maji taka ya viwandani na manispaa Tanzania.',
      
      wastewaterDetail2: 'Asidi (kama sulfuriki) na besi (kama sodiamu hidroksidi) ambazo husahihisha pH ya maji taka kwa viwango bora vya matibabu. pH inayofaa inahakikisha matibabu bora ya kibayolojia na mvua ya kemikali, ikikidhi viwango vya utupaji wa mazingira Tanzania.',
      
      // Product Details - Professional Services
      professionalTitle: 'Huduma za Kitaalamu',
      professionalDetail: 'Mwongozo wa wataalamu juu ya shughuli za uchimbaji, kufuata usalama, na uelekezaji wa kanuni Tanzania. Washauri husaidia migodi kuboresha michakato ya uchimbaji, kuhakikisha kufuata mazingira, na kutekeleza njia bora za kimataifa za uchimbaji endelevu.',
      
      professionalDetail2: 'Wafanyikazi wa usalama wa kitaalamu na washauri wa usalama wanaolinda tovuti za uchimbaji na vituo vya kemikali. Huduma hizi zinazuia ufikiaji usioidhinishwa, kusimamia usalama wa vifaa hatari, na kuhakikisha kufuata kanuni kali za Tanzania za usimamizi wa kemikali.',
      
      // Features
      keyFeatures: 'Bidhaa Muhimu na Matumizi',
      learnMore: 'Omba Maelezo ya Kina',
      contactUs: 'Wasiliana na Mauzo',
      getQuote: 'Pata Bei',
      
      // Features Lists
      explosiveProducts: [
        'Dynamite & Nitroglycerin kwa kuvunjia miamba',
        'Sodium Cyanide kwa uchimbaji dhahabu',
        'Karboni Iliyoamilishwa kwa urejesho dhahabu',
        'Asidi za viwandani kwa usindikaji madini',
        'Vifuniko vya kulipuka na detonator',
        'Kemikali za usalama wa uchimbaji'
      ],
      
      agriculturalProducts: [
        'Mbolea NPK kwa lishe ya mazao',
        'Dawa za magugu kwa udhibiti magugu',
        'Dawa za wadudu kwa ulinzi wa wadudu',
        'Viungo vya udongo na marekebisho',
        'Dawa za kuvu kwa kuzuia magonjwa',
        'Suluhisho kamili za kemikali za kilimo'
      ],
      
      cleaningProducts: [
        'Viua vijidudu vya msingi wa klorini',
        'Suluhisho za Hidrojeni Peroksidi',
        'Viua vijidudu vya daraja la hospitali',
        'Vitu vya usafi wa viwandani',
        'Viua vijidudu vya uso',
        'Kemikali za kutupua matibabu'
      ],
      
      constructionProducts: [
        'Viimarisha saruji & vizuia maji',
        'Mipako ya epoksi & gundi',
        'Mipako ya uso ya kinga',
        'Vitu vya kuunganishia polima',
        'Kemikali tayari za ujenzi',
        'Vifaa vya ukarabati wa miundo'
      ],
      
      wastewaterProducts: [
        'Vichocheo & vifunganishi',
        'Kemikali za kurekebisha pH',
        'Kemikali za kuua vijidudu',
        'Viungo vya matibabu ya maji',
        'Suluhisho za maji taka viwandani',
        'Kemikali za matibabu manispaa'
      ],
      
      professionalProducts: [
        'Ushauri wa shughuli za uchimbaji',
        'Huduma za kufuata usalama',
        'Mafunzo ya usimamizi kemikali',
        'Huduma za wafanyikazi usalama',
        'Kufuata mazingira',
        'Huduma za usaidizi wa kiufundi'
      ],
      
      // Process
      processTitle: 'Mchakato Wetu wa Huduma',
      processSubtitle: 'Jinsi tunavyotoa suluhisho za kemikali kwa tasnia za Tanzania',
      
      consultation: 'Tathmini ya Tasnia',
      consultationDesc: 'Tunachambua mahitaji yako maalum ya kiindustri na mahitaji ya kemikali',
      
      planning: 'Ubunifu wa Suluhisho',
      planningDesc: 'Tunabuni suluhisho maalum za kemikali kwa matumizi yako maalum',
      
      execution: 'Usimamizi wa Mnyororo wa Usambazaji',
      executionDesc: 'Uwasilishaji salama na unaofuata kanuni wa kemikali kwa tovuti zako za uendeshaji',
      
      support: 'Usaidizi wa Kiufundi na Usalama',
      supportDesc: 'Usaidizi endelevu wa kiufundi, mafunzo ya usalama, na kufuata kanuni',
      
      // Contact
      contactTitle: 'Unahitaji Suluhisho za Kemikali kwa Tasnia Yako?',
      contactText: 'Wasiliana na timu yetu ya kiufundi leo kwa suluhisho maalum za kemikali zilizoboreshwa kwa mahitaji ya kiindustri ya Tanzania.',
      getInTouch: 'Wasiliana na Timu ya Kiufundi'
    }
  }

  const trans = translations[language]

  const serviceCategories = [
    {
      id: 'explosives',
      title: trans.explosivesChemicals,
      description: trans.explosivesDesc,
      icon: '💥'
    },
    {
      id: 'agricultural',
      title: trans.agriculturalChemicals,
      description: trans.agriculturalDesc,
      icon: '🌱'
    },
    {
      id: 'cleaning',
      title: trans.cleaningSanitation,
      description: trans.cleaningDesc,
      icon: '🧼'
    },
    {
      id: 'construction',
      title: trans.constructionChemicals,
      description: trans.constructionDesc,
      icon: '🏗️'
    },
    {
      id: 'wastewater',
      title: trans.wastewaterTreatment,
      description: trans.wastewaterDesc,
      icon: '💧'
    },
    {
      id: 'professional',
      title: trans.professionalServices,
      description: trans.professionalDesc,
      icon: '📊'
    }
  ]

  const serviceDetails = [
    {
      id: 'explosives',
      title: trans.explosivesTitle,
      description: [trans.explosivesDetail, trans.explosivesDetail2],
      products: trans.explosiveProducts
    },
    {
      id: 'agricultural',
      title: trans.agriculturalTitle,
      description: [trans.agriculturalDetail, trans.agriculturalDetail2],
      products: trans.agriculturalProducts
    },
    {
      id: 'cleaning',
      title: trans.cleaningTitle,
      description: [trans.cleaningDetail, trans.cleaningDetail2],
      products: trans.cleaningProducts
    },
    {
      id: 'construction',
      title: trans.constructionTitle,
      description: [trans.constructionDetail, trans.constructionDetail2],
      products: trans.constructionProducts
    },
    {
      id: 'wastewater',
      title: trans.wastewaterTitle,
      description: [trans.wastewaterDetail, trans.wastewaterDetail2],
      products: trans.wastewaterProducts
    },
    {
      id: 'professional',
      title: trans.professionalTitle,
      description: [trans.professionalDetail, trans.professionalDetail2],
      products: trans.professionalProducts
    }
  ]

  const stats = [
    { number: '200+', label: trans.projectsCompleted },
    { number: '100+', label: trans.happyClients },
    { number: '15+', label: trans.yearsExperience },
    { number: '50+', label: trans.certifiedProducts }
  ]

  const processSteps = [
    { title: trans.consultation, description: trans.consultationDesc },
    { title: trans.planning, description: trans.planningDesc },
    { title: trans.execution, description: trans.executionDesc },
    { title: trans.support, description: trans.supportDesc }
  ]

  const handleContactClick = () => {
    window.location.href = '/contact'
  }

  const handleLearnMoreClick = (serviceId) => {
    window.location.href = `/services/${serviceId}`
  }

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-message">
        <h3>Error Loading Services</h3>
        <p>Please try again later.</p>
        <button 
          className="btn-primary mt-30"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>{trans.heroTitle}</h1>
            <div className="swahili-subtitle">{trans.swahiliSubtitle}</div>
            <p className="hero-description">
              {trans.heroDescription}
            </p>
            <button className="btn-primary" onClick={handleContactClick}>
              {trans.contactUs}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title text-center mb-60">{trans.statsTitle}</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="service-categories-section">
        <div className="container">
          <h2 className="section-title">{trans.categoriesTitle}</h2>
          <p className="section-subtitle">{trans.categoriesSubtitle}</p>
          
          <div className="service-categories-grid">
            {serviceCategories.map((category) => (
              <div key={category.id} className="service-category-card">
                <div className="service-icon">{category.icon}</div>
                <h3 className="service-title">{category.title}</h3>
                <p className="service-description">{category.description}</p>
                <button 
                  className="btn-outline"
                  onClick={() => handleLearnMoreClick(category.id)}
                >
                  {trans.getQuote}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services with Product Explanations */}
      <section className="detailed-services">
        <div className="container">
          <h2 className="section-title">{trans.detailsTitle}</h2>
          <p className="section-subtitle mb-60">{trans.detailsSubtitle}</p>
          
          <div className="detailed-services-grid">
            {serviceDetails.map((service) => (
              <div key={service.id} className="service-detail-card">
                <h3 className="detail-title">{service.title}</h3>
                
                {/* Two paragraph detailed explanation */}
                {Array.isArray(service.description) ? (
                  <div className="detailed-explanation">
                    <p className="detail-paragraph">{service.description[0]}</p>
                    <p className="detail-paragraph">{service.description[1]}</p>
                  </div>
                ) : (
                  <p className="detail-description">{service.description}</p>
                )}
                
                <h4 className="features-title">{trans.keyFeatures}</h4>
                <ul className="features-list">
                  {service.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
                
                <button 
                  className="btn-primary"
                  onClick={() => handleLearnMoreClick(service.id)}
                >
                  {trans.getQuote}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-steps-container">
          <h2 className="section-title">{trans.processTitle}</h2>
          <p className="section-subtitle mb-60">{trans.processSubtitle}</p>
          
          <div className="process-steps-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number"></div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="contact-banner">
        <div className="container">
          <h2 className="banner-title">{trans.contactTitle}</h2>
          <p className="banner-text">{trans.contactText}</p>
          <button className="btn-primary" onClick={handleContactClick}>
            {trans.getInTouch}
          </button>
        </div>
      </section>
    </div>
  )
}

export default Services