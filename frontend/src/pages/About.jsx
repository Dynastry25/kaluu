import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  CheckCircle, 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Target, 
  Globe, 
  TrendingUp,
  MapPin,
  Heart,
  Zap,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Quote,
  BookOpen,
  BarChart3,
  Calendar,
  Medal,
  Leaf,
  Building,
  Compass
} from 'lucide-react'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'
import Modal from '../components/UI/Modal'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import './CSS/About.css'

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [activeTeam, setActiveTeam] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [counterStats, setCounterStats] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    team: 0
  })
  const statsRef = useRef(null)
  const timelineRef = useRef(null)
  
  const { language, t } = useLanguage()

  // Complete translations for About page
  const translations = {
    en: {
      heroTitle: "Building Tanzania's",
      heroTitleHighlight: "Mining Future",
      heroSubtitle: "For over two decades, KALUU Explosives has been at the forefront of mining solutions, combining expertise with innovation to power Tanzania's mineral wealth.",
      since: "Since 2000",
      watchStory: "Watch Our Story",
      downloadProfile: "Download Company Profile",
      missionTitle: "Our Mission",
      missionDescription: "To provide safe, reliable, and innovative mining solutions that empower Tanzania's mining industry while maintaining the highest standards of environmental stewardship and community engagement.",
      visionTitle: "Our Vision",
      visionDescription: "To be East Africa's leading provider of comprehensive mining solutions, recognized for our unwavering commitment to safety, quality, and sustainable development.",
      safetyExcellence: "Safety Excellence",
      techInnovation: "Technological Innovation",
      sustainablePractices: "Sustainable Practices",
      industryLeader: "Industry Leader",
      regionalExpansion: "Regional Expansion",
      innovationHub: "Innovation Hub",
      topProvider: "Top provider by 2030",
      eastAfricaCoverage: "East Africa coverage",
      techCenter: "Technology center of excellence",
      storySection: "Our Journey",
      storyTitle: "Company Story",
      storySubtitle: "From humble beginnings to industry leadership - our journey of growth and excellence",
      beginningTitle: "The Beginning",
      beginningContent: "Founded in 2000, KALUU Explosives began as a small supply company serving local mining operations in the Geita region. With a focus on safety and quality, we quickly gained the trust of industry leaders.",
      growthTitle: "Growth & Expansion",
      growthContent: "Today, we operate across Tanzania, providing end-to-end mining solutions from explosives supply to equipment rental and logistics. Our growth is built on decades of expertise and an unwavering commitment to our clients' success.",
      futureTitle: "Looking Forward",
      futureContent: "As we continue to innovate and expand, our focus remains on delivering exceptional value to our clients while upholding our core values of safety, integrity, and excellence.",
      yearsExcellence: "Years of Excellence",
      teamMembers: "Team Members",
      projectsCompleted: "Projects Completed",
      safetyRecord: "Safety Record",
      supportAvailable: "Support Available",
      nationalCoverage: "National Coverage",
      milestones: "Milestones",
      timelineTitle: "Our Journey Through Time",
      timelineSubtitle: "Key moments that shaped our growth and success",
      companyFounded: "Company Founded",
      foundedDescription: "Started operations in Iramba Singida with focus on local mining",
      firstOffice: "First office established",
      initialTeam: "Initial team of 5 experts",
      firstContract: "First major contract secured",
      isoCert: "ISO Certification",
      isoDescription: "Achieved ISO 9001:2000 certification for quality management",
      qualitySystem: "Quality management system",
      processStandard: "Process standardization",
      clientSatisfaction: "Client satisfaction improvement",
      nationalExpansion: "National Expansion",
      expansionDescription: "Expanded operations to all major mining regions in Tanzania",
      regionalOffices: "Regional offices opened",
      nationwideLogistics: "Nationwide logistics network",
      increasedClients: "Increased client base",
      equipmentFleet: "Equipment Fleet",
      fleetDescription: "Introduced modern equipment rental and maintenance services",
      modernMachinery: "Modern machinery fleet",
      maintenanceFacility: "Maintenance facility",
      operatorTraining: "Operator training program",
      safetyMilestone: "Safety Milestone",
      safetyDescription: "5 consecutive years without any major safety incidents",
      zeroIncidents: "Zero incident record",
      safetyTraining: "Safety training expansion",
      industryRecognition: "Industry recognition",
      digitalTransformation: "Digital Transformation",
      digitalDescription: "Implemented advanced tracking and management systems",
      digitalPlatform: "Digital operations platform",
      realTimeTracking: "Real-time tracking",
      dataAnalytics: "Data analytics integration",
      valuesTitle: "Core Values",
      valuesSubtitle: "The principles that guide everything we do",
      safetyFirst: "Safety First",
      safetyDesc: "Our zero-incident policy drives every decision we make.",
      excellence: "Excellence",
      excellenceDesc: "Consistently delivering superior quality and service.",
      integrity: "Integrity",
      integrityDesc: "Honest, transparent, and ethical in all our dealings.",
      reliability: "Reliability",
      reliabilityDesc: "Dependable service you can count on, every time.",
      sustainability: "Sustainability",
      sustainabilityDesc: "Committed to environmental stewardship and sustainable practices.",
      innovation: "Innovation",
      innovationDesc: "Embracing technology and innovation for better solutions.",
      iso45001: "ISO 45001:2018 Certified",
      zeroInjuries: "Zero Lost Time Injuries",
      comprehensiveTraining: "Comprehensive Safety Training",
      emergencyResponse: "24/7 Emergency Response",
      iso9001: "ISO 9001:2015 Certified",
      continuousImprovement: "Continuous Improvement",
      qualityManagement: "Quality Management",
      clientFocus: "Client Satisfaction Focus",
      ethicalPractices: "Ethical Business Practices",
      transparentCommunication: "Transparent Communication",
      environmentalResponsibility: "Environmental Responsibility",
      communityEngagement: "Community Engagement",
      onTimeDelivery: "On-time Delivery",
      consistentQuality: "Consistent Quality",
      support247: "24/7 Support",
      nationwide: "Nationwide Coverage",
      environmentalCompliance: "Environmental Compliance",
      wasteReduction: "Waste Reduction",
      energyEfficiency: "Energy Efficiency",
      sustainableSourcing: "Sustainable Sourcing",
      techAdoption: "Technology Adoption",
      processOptimization: "Process Optimization",
      rndInvestment: "R&D Investment",
      industryPartnerships: "Industry Partnerships",
      learnMore: "Learn More",
      leadershipTitle: "Leadership Team",
      leadershipSubtitle: "Experienced professionals driving our success",
      certificationsTitle: "Certifications & Standards",
      certificationsSubtitle: "Recognized for excellence and compliance with international standards",
      qualityManagementSystem: "Quality Management System",
      occupationalHealth: "Occupational Health & Safety",
      environmentalManagement: "Environmental Management",
      tanzaniaMiningCommission: "Tanzania Mining Commission",
      issued: "Issued:",
      validUntil: "Valid Until:",
      viewCertificate: "View Certificate",
      standardsNote: "Our commitment to quality and safety is reflected in our adherence to international standards and continuous improvement processes.",
      ctaTitle: "Partner with Tanzania's Mining Leader",
      ctaDescription: "Join the many mining companies that trust KALUU for their explosives, equipment, and logistics needs. Experience the difference of working with an industry leader.",
      becomePartner: "Become a Partner",
      scheduleConsultation: "Schedule Consultation",
      yearsExperience: "Years Experience",
      successfulProjects: "Successful Projects",
      expertTeam: "Expert Team",
      videoTitle: "Our Story",
      videoDescription: "Discover the journey of KALUU Explosives - from our founding in 2000 to becoming Tanzania's leading provider of mining solutions. Learn about our values, achievements, and vision for the future.",
      loadingVideo: "Loading video...",
      fromHumbleBeginnings: "From Humble Beginnings to Industry Leadership"
    },
    sw: {
      heroTitle: "Kujenga Tanzania ya",
      heroTitleHighlight: "Siku za Baadaye ya Uchimbaji",
      heroSubtitle: "Kwa zaidi ya miongo miwili, KALUU Explosives imekuwa mstari wa mbele katika utoaji wa suluhisho za uchimbaji madini, ikichanganya utaalamu na ubunifu kuimarisha utajiri wa madini Tanzania.",
      since: "Tangu 2000",
      watchStory: "Tazama Hadithi Yetu",
      downloadProfile: "Pakua Wasifu wa Kampuni",
      missionTitle: "Dhamira Yetu",
      missionDescription: "Kutoa suluhisho salama, zinazotegemewa na za ubunifu za uchimbaji madini zinazoimarisha tasnia ya uchimbaji madini Tanzania huku tukizingatia viwango vya juu zaidi vya utunzaji wa mazingira na ushirikiano wa jamii.",
      visionTitle: "Dira Yetu",
      visionDescription: "Kuwa mtoaji wa kuongoza wa Afrika Mashariki wa suluhisho kamili za uchimbaji madini, tukitambuliwa kwa kujitoa kwetu kwa usalama, ubora na maendeleo endelevu.",
      safetyExcellence: "Ubora wa Usalama",
      techInnovation: "Ubunifu wa Teknolojia",
      sustainablePractices: "Mazoea Endelevu",
      industryLeader: "Kiongozi wa Tasnia",
      regionalExpansion: "Upanuzi wa Kikanda",
      innovationHub: "Kituo cha Ubunifu",
      topProvider: "Mtoaji bora kufikia 2030",
      eastAfricaCoverage: "Ufunzaji wa Afrika Mashariki",
      techCenter: "Kituo cha ubunifu cha teknolojia",
      storySection: "Safari Yetu",
      storyTitle: "Wasifu wa Kampuni",
      storySubtitle: "Kutoka mwanzo mnyenyekevu hadi uongozi wa tasnia - safari yetu ya ukuaji na ubora",
      beginningTitle: "Mwanzo",
      beginningContent: "Iliyoanzishwa mwaka 2000, KALUU Explosives ilianza kama kampuni ndogo ya usambazaji ikihudumia shughuli za uchimbaji madini katika mkoa wa Geita. Kwa kuzingatia usalama na ubora, tulipata kwa haraka imani ya viongozi wa tasnia.",
      growthTitle: "Ukuaji na Upanuzi",
      growthContent: "Leo, tunafanya kazi kote Tanzania, tukitoa suluhisho kamili za uchimbaji madini kutoka usambazaji wa milipuko hadi kukodi vifaa na usafirishaji. Ukuaji wetu umejengwa kwa miongo ya utaalamu na kujitolea usiokwama kwa mafanikio ya wateja wetu.",
      futureTitle: "Kuangalia Mbele",
      futureContent: "Tunapoendelea kubuni na kupanuka, lengo letu bado ni kutoa thamani ya kipekee kwa wateja wetu huku tukizingatia maadili yetu ya msingi ya usalama, uadilifu na ubora.",
      yearsExcellence: "Miaka ya Ubora",
      teamMembers: "Wanachama wa Timu",
      projectsCompleted: "Miradi Imekamilika",
      safetyRecord: "Rekodi ya Usalama",
      supportAvailable: "Msaada Unapatikana",
      nationalCoverage: "Ufunzaji wa Kitaifa",
      milestones: "Hatua Muhimu",
      timelineTitle: "Safari Yetu Kupitia Muda",
      timelineSubtitle: "Wakati muhimu ulioshape ukuaji na mafanikio yetu",
      companyFounded: "Kampuni Ilianzishwa",
      foundedDescription: "Ilianza shughuli katika Iramba Singida kwa kuzingatia uchimbaji wa ndani",
      firstOffice: "Ofisi ya kwanza ilianzishwa",
      initialTeam: "Timu ya awali ya wataalamu 5",
      firstContract: "Mkataba wa kwanza mkubwa ulihakikishiwa",
      isoCert: "Udhibitisho wa ISO",
      isoDescription: "Ilipata udhibitisho wa ISO 9001:2000 kwa usimamizi wa ubora",
      qualitySystem: "Mfumo wa usimamizi wa ubora",
      processStandard: "Sanifu ya mchakato",
      clientSatisfaction: "Uboreshaji wa kuridhika kwa wateja",
      nationalExpansion: "Upanuzi wa Kitaifa",
      expansionDescription: "Upanuzi wa shughuli kwa mikoa yote kuu ya uchimbaji madini Tanzania",
      regionalOffices: "Ofisi za mikoa zilizofunguliwa",
      nationwideLogistics: "Mtandao wa kitaifa wa usafirishaji",
      increasedClients: "Kuongezeka kwa msingi wa wateja",
      equipmentFleet: "Kundi la Vifaa",
      fleetDescription: "Ilianzisha huduma za kukodi vifaa vya kisasa na matengenezo",
      modernMachinery: "Kundi la mashine za kisasa",
      maintenanceFacility: "Kituo cha matengenezo",
      operatorTraining: "Programu ya mafunzo ya waendeshaji",
      safetyMilestone: "Hatua ya Usalama",
      safetyDescription: "Miaka 5 mfululizo bila matukio makubwa ya usalama",
      zeroIncidents: "Rekodi ya matukio sifuri",
      safetyTraining: "Upanuzi wa mafunzo ya usalama",
      industryRecognition: "Utambuzi wa tasnia",
      digitalTransformation: "Mabadiliko ya Kidijitali",
      digitalDescription: "Ilianzisha mifumo ya juu ya ufuatiliaji na usimamizi",
      digitalPlatform: "Jukwaa la shughuli za kidijitali",
      realTimeTracking: "Ufuatiliaji wa wakati halisi",
      dataAnalytics: "Ujumuishaji wa uchambuzi wa data",
      valuesTitle: "Maadili ya Msingi",
      valuesSubtitle: "Kanuni zinazoongoza kila kitu tunachofanya",
      safetyFirst: "Usalama Kwanza",
      safetyDesc: "Sera yetu ya matukio sifuri inayoongoza kila uamuzi tunalofanya.",
      excellence: "Ubora",
      excellenceDesc: "Kutoa ubora bora na huduma mara kwa mara.",
      integrity: "Uadilifu",
      integrityDesc: "Mwaminifu, wazi, na kimaadili katika mazungumzo yote yetu.",
      reliability: "Kuaminika",
      reliabilityDesc: "Huduma ya kuaminika unayoweza kutegemea, kila wakati.",
      sustainability: "Uendelevu",
      sustainabilityDesc: "Kujitolea kwa utunzaji wa mazingira na mazoea endelevu.",
      innovation: "Ubunifu",
      innovationDesc: "Kukubali teknolojia na ubunifu kwa suluhisho bora.",
      iso45001: "Imedhibitishwa ISO 45001:2018",
      zeroInjuries: "Majeraha Sifuri ya Muda Ulopotea",
      comprehensiveTraining: "Mafunzo Kamili ya Usalama",
      emergencyResponse: "Majibu ya Dharura 24/7",
      iso9001: "Imedhibitishwa ISO 9001:2015",
      continuousImprovement: "Uboreshaji Endelevu",
      qualityManagement: "Usimamizi wa Ubora",
      clientFocus: "Mkazo wa Kuridhika kwa Mteja",
      ethicalPractices: "Mazoea ya Biashara ya Kimaadili",
      transparentCommunication: "Mawasiliano ya Wazi",
      environmentalResponsibility: "Uwajibikaji wa Mazingira",
      communityEngagement: "Ushirikiano wa Jamii",
      onTimeDelivery: "Uwasilishaji kwa Muda",
      consistentQuality: "Ubora Thabiti",
      support247: "Msaada 24/7",
      nationwide: "Ufunzaji wa Kitaifa",
      environmentalCompliance: "Kufuata Mazingira",
      wasteReduction: "Kupunguza Taka",
      energyEfficiency: "Ufanisi wa Nishati",
      sustainableSourcing: "Ugavi Endelevu",
      techAdoption: "Kukubali Teknolojia",
      processOptimization: "Ubora wa Mchakato",
      rndInvestment: "Uwekezaji wa R&D",
      industryPartnerships: "Ushirikiano wa Tasnia",
      learnMore: "Jifunze Zaidi",
      leadershipTitle: "Timu ya Uongozi",
      leadershipSubtitle: "Wataalam wenye uzoefu wanaosukuma mafanikio yetu",
      certificationsTitle: "Udhibitisho na Viwango",
      certificationsSubtitle: "Kutambuliwa kwa ubora na kufuata viwango vya kimataifa",
      qualityManagementSystem: "Mfumo wa Usimamizi wa Ubora",
      occupationalHealth: "Afya na Usalama wa Kazini",
      environmentalManagement: "Usimamizi wa Mazingira",
      tanzaniaMiningCommission: "Tume ya Uchimbaji Madini Tanzania",
      issued: "Imetolewa:",
      validUntil: "Inathamini hadi:",
      viewCertificate: "Angalia Cheti",
      standardsNote: "Kujitolea kwetu kwa ubora na usalama kunaonekana katika kufuata kwetu viwango vya kimataifa na michakato ya uboreshaji endelevu.",
      ctaTitle: "Shirikiana na Kiongozi wa Uchimbaji Tanzania",
      ctaDescription: "Jiunge na makampuni mengi ya uchimbaji madini yanayomwamini KALUU kwa mahitaji yao ya milipuko, vifaa na usafirishaji. Jione tofauti ya kufanya kazi na kiongozi wa tasnia.",
      becomePartner: "Kuwa Mshirika",
      scheduleConsultation: "Panga Mashauriano",
      yearsExperience: "Miaka ya Uzoefu",
      successfulProjects: "Miradi Imefanikiwa",
      expertTeam: "Timu ya Wataalam",
      videoTitle: "Hadithi Yetu",
      videoDescription: "Gundua safari ya KALUU Explosives - kutoka kuanzishwa kwetu mwaka 2000 hadi kuwa mtoaji wa kuongoza wa Tanzania wa suluhisho za uchimbaji madini. Jifunze kuhusu maadili yetu, mafanikio na dira ya siku zijazo.",
      loadingVideo: "Inapakia video...",
      fromHumbleBeginnings: "Kutoka Mwanzo Mnyenyekevu hadi Uongozi wa Tasnia"
    }
  }

  const trans = translations[language]

  const values = [
    {
      icon: <Shield />,
      title: trans.safetyFirst,
      description: trans.safetyDesc,
      color: 'primary',
      points: [
        trans.iso45001,
        trans.zeroInjuries,
        trans.comprehensiveTraining,
        trans.emergencyResponse
      ]
    },
    {
      icon: <Award />,
      title: trans.excellence,
      description: trans.excellenceDesc,
      color: 'secondary',
      points: [
        trans.iso9001,
        trans.continuousImprovement,
        trans.qualityManagement,
        trans.clientFocus
      ]
    },
    {
      icon: <Heart />,
      title: trans.integrity,
      description: trans.integrityDesc,
      color: 'accent',
      points: [
        trans.ethicalPractices,
        trans.transparentCommunication,
        trans.environmentalResponsibility,
        trans.communityEngagement
      ]
    },
    {
      icon: <Target />,
      title: trans.reliability,
      description: trans.reliabilityDesc,
      color: 'success',
      points: [
        trans.onTimeDelivery,
        trans.consistentQuality,
        trans.support247,
        trans.nationwide
      ]
    },
    {
      icon: <Globe />,
      title: trans.sustainability,
      description: trans.sustainabilityDesc,
      color: 'info',
      points: [
        trans.environmentalCompliance,
        trans.wasteReduction,
        trans.energyEfficiency,
        trans.sustainableSourcing
      ]
    },
    {
      icon: <TrendingUp />,
      title: trans.innovation,
      description: trans.innovationDesc,
      color: 'warning',
      points: [
        trans.techAdoption,
        trans.processOptimization,
        trans.rndInvestment,
        trans.industryPartnerships
      ]
    }
  ]

  const milestones = [
    {
      year: '2000',
      title: trans.companyFounded,
      description: trans.foundedDescription,
      icon: <Building />,
      color: 'primary',
      achievements: [trans.firstOffice, trans.initialTeam, trans.firstContract]
    },
    {
      year: '2005',
      title: trans.isoCert,
      description: trans.isoDescription,
      icon: <Award />,
      color: 'secondary',
      achievements: [trans.qualitySystem, trans.processStandard, trans.clientSatisfaction]
    },
    {
      year: '2010',
      title: trans.nationalExpansion,
      description: trans.expansionDescription,
      icon: <Globe />,
      color: 'accent',
      achievements: [trans.regionalOffices, trans.nationwideLogistics, trans.increasedClients]
    },
    {
      year: '2015',
      title: trans.equipmentFleet,
      description: trans.fleetDescription,
      icon: <Zap />,
      color: 'success',
      achievements: [trans.modernMachinery, trans.maintenanceFacility, trans.operatorTraining]
    },
    {
      year: '2020',
      title: trans.safetyMilestone,
      description: trans.safetyDescription,
      icon: <Shield />,
      color: 'info',
      achievements: [trans.zeroIncidents, trans.safetyTraining, trans.industryRecognition]
    },
    {
      year: '2025',
      title: trans.digitalTransformation,
      description: trans.digitalDescription,
      icon: <Compass />,
      color: 'warning',
      achievements: [trans.digitalPlatform, trans.realTimeTracking, trans.dataAnalytics]
    }
  ]

  const leadershipTeam = [
    {
      id: 1,
      name: 'James Mwangi',
      role: language === 'en' ? 'Founder & CEO' : 'Mwanzilishi na Mkurugenzi Mtendaji',
      experience: '30+ Years',
      image: 'JM',
      bio: language === 'en' 
        ? 'Pioneered modern explosives management in Tanzania with extensive industry experience.' 
        : 'Alianzisha usimamizi wa kisasa wa milipuko nchini Tanzania na uzoefu mkubwa wa tasnia.',
      specialties: language === 'en' 
        ? ['Strategic Planning', 'Industry Relations', 'Safety Standards']
        : ['Mipango ya Kimkakati', 'Mahusiano ya Tasnia', 'Viwango vya Usalama'],
      contact: 'james@kaluuexplosives.co.tz'
    },
    {
      id: 2,
      name: 'Sarah Kimaro',
      role: language === 'en' ? 'Operations Director' : 'Mkurugenzi wa Operesheni',
      experience: '20+ Years',
      image: 'SK',
      bio: language === 'en' 
        ? 'Expert in mining operations and logistics with focus on efficiency and safety.' 
        : 'Mtaalamu wa shughuli za uchimbaji madini na usafirishaji kwa kuzingatia ufanisi na usalama.',
      specialties: language === 'en' 
        ? ['Operations Management', 'Logistics Optimization', 'Quality Control']
        : ['Usimamizi wa Operesheni', 'Ubora wa Usafirishaji', 'Udhibiti wa Ubora'],
      contact: 'sarah@kaluuexplosives.co.tz'
    },
    {
      id: 3,
      name: 'Robert Msangi',
      role: language === 'en' ? 'Safety Director' : 'Mkurugenzi wa Usalama',
      experience: '15+ Years',
      image: 'RM',
      bio: language === 'en' 
        ? 'Safety certification expert with international training and multiple awards.' 
        : 'Mtaalamu wa udhibitisho wa usalama na mafunzo ya kimataifa na tuzo nyingi.',
      specialties: language === 'en' 
        ? ['Safety Compliance', 'Risk Assessment', 'Emergency Response']
        : ['Kufuata Usalama', 'Tathmini ya Hatari', 'Majibu ya Dharura'],
      contact: 'robert@kaluuexplosives.co.tz'
    },
    {
      id: 4,
      name: 'Grace Mushi',
      role: language === 'en' ? 'Technical Director' : 'Mkurugenzi wa Kiufundi',
      experience: '25+ Years',
      image: 'GM',
      bio: language === 'en' 
        ? 'Blasting technology specialist with numerous patents and innovations.' 
        : 'Mtaalamu wa teknolojia ya blasting na hati miliki nyingi na ubunifu.',
      specialties: language === 'en' 
        ? ['Technical Innovation', 'Equipment Design', 'Process Optimization']
        : ['Ubunifu wa Kiufundi', 'Ubunifu wa Vifaa', 'Ubora wa Mchakato'],
      contact: 'grace@kaluuexplosives.co.tz'
    }
  ]

  const certifications = [
    {
      code: 'ISO 9001:2015',
      title: trans.qualityManagementSystem,
      issuer: 'International Organization for Standardization',
      date: '2023',
      validity: '2026',
      color: 'blue'
    },
    {
      code: 'ISO 45001:2018',
      title: trans.occupationalHealth,
      issuer: 'International Organization for Standardization',
      date: '2022',
      validity: '2025',
      color: 'green'
    },
    {
      code: 'ISO 14001:2015',
      title: trans.environmentalManagement,
      issuer: 'International Organization for Standardization',
      date: '2023',
      validity: '2026',
      color: 'teal'
    },
    {
      code: 'TMC LIC-2024',
      title: trans.tanzaniaMiningCommission,
      issuer: language === 'en' ? 'Government of Tanzania' : 'Serikali ya Tanzania',
      date: '2024',
      validity: '2025',
      color: 'orange'
    }
  ]

  const achievements = [
    { number: '25+', label: trans.yearsExcellence, icon: <Star /> },
    { number: '150+', label: trans.teamMembers, icon: <Users /> },
    { number: '500+', label: trans.projectsCompleted, icon: <BarChart3 /> },
    { number: '100%', label: trans.safetyRecord, icon: <Shield /> },
    { number: '24/7', label: trans.supportAvailable, icon: <Clock /> },
    { number: language === 'en' ? 'National' : 'Kitaifa', label: trans.nationalCoverage, icon: <MapPin /> }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(25, 'years', 2000)
            animateCounter(150, 'clients', 2000)
            animateCounter(500, 'projects', 2000)
            animateCounter(150, 'team', 2000)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline(prev => (prev + 1) % milestones.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [milestones.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeam(prev => (prev + 1) % leadershipTeam.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [leadershipTeam.length])

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
      setCounterStats(prev => ({ ...prev, [key]: Math.floor(count) }))
    }, duration / steps)
  }

  const nextTimeline = () => {
    setActiveTimeline(prev => (prev + 1) % milestones.length)
  }

  const prevTimeline = () => {
    setActiveTimeline(prev => (prev - 1 + milestones.length) % milestones.length)
  }

  const nextTeam = () => {
    setActiveTeam(prev => (prev + 1) % leadershipTeam.length)
  }

  const prevTeam = () => {
    setActiveTeam(prev => (prev - 1 + leadershipTeam.length) % leadershipTeam.length)
  }

  const handleVideoPlay = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsVideoModalOpen(true)
    }, 800)
  }

  return (
    <div className="about-page">
      {/* Animated Background */}
      <div className="about-background">
        <div className="bg-particle particle-1"></div>
        <div className="bg-particle particle-2"></div>
        <div className="bg-particle particle-3"></div>
        <div className="bg-gradient gradient-1"></div>
        <div className="bg-gradient gradient-2"></div>
      </div>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <Shield size={18} />
                <span>{trans.since}</span>
              </div>
              <h1>
                {trans.heroTitle}
                <br />
                <span className="hero-highlight">{trans.heroTitleHighlight}</span>
              </h1>
              <p className="hero-subtitle">
                {trans.heroSubtitle}
              </p>
              <div className="hero-actions">
                <Button variant="primary" size="large" onClick={handleVideoPlay}>
                  <Play size={20} />
                  {trans.watchStory}
                </Button>
                <Button variant="secondary" size="large">
                  {trans.downloadProfile}
                </Button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-placeholder">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="hero-stats-preview">
                  <div className="stat-preview">
                    <div className="stat-number">{counterStats.years}+</div>
                    <div className="stat-label">{language === 'en' ? 'Years' : 'Miaka'}</div>
                  </div>
                  <div className="stat-preview">
                    <div className="stat-number">{counterStats.clients}+</div>
                    <div className="stat-label">{language === 'en' ? 'Clients' : 'Wateja'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section section-padding">
        <div className="container">
          <div className="mission-grid">
            <Card className="mission-card" hover>
              <div className="card-icon">
                <Target size={32} />
              </div>
              <h2>{trans.missionTitle}</h2>
              <p>
                {trans.missionDescription}
              </p>
              <div className="mission-points">
                <div className="point">
                  <CheckCircle size={18} />
                  <span>{trans.safetyExcellence}</span>
                </div>
                <div className="point">
                  <CheckCircle size={18} />
                  <span>{trans.techInnovation}</span>
                </div>
                <div className="point">
                  <CheckCircle size={18} />
                  <span>{trans.sustainablePractices}</span>
                </div>
              </div>
            </Card>
            <Card className="vision-card" hover>
              <div className="card-icon">
                <Compass size={32} />
              </div>
              <h2>{trans.visionTitle}</h2>
              <p>
                {trans.visionDescription}
              </p>
              <div className="vision-targets">
                <div className="target">
                  <div className="target-icon">🏆</div>
                  <div className="target-content">
                    <h4>{trans.industryLeader}</h4>
                    <p>{trans.topProvider}</p>
                  </div>
                </div>
                <div className="target">
                  <div className="target-icon">🌍</div>
                  <div className="target-content">
                    <h4>{trans.regionalExpansion}</h4>
                    <p>{trans.eastAfricaCoverage}</p>
                  </div>
                </div>
                <div className="target">
                  <div className="target-icon">💡</div>
                  <div className="target-content">
                    <h4>{trans.innovationHub}</h4>
                    <p>{trans.techCenter}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="story-section section-padding bg-light" ref={statsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{trans.storySection}</span>
            <h2>{trans.storyTitle}</h2>
            <p className="section-description">
              {trans.storySubtitle}
            </p>
          </div>
          
          <div className="story-content">
            <div className="story-text">
              <div className="story-paragraph">
                <h3>{trans.beginningTitle}</h3>
                <p>
                  {trans.beginningContent}
                </p>
              </div>
              <div className="story-paragraph">
                <h3>{trans.growthTitle}</h3>
                <p>
                  {trans.growthContent}
                </p>
              </div>
              <div className="story-paragraph">
                <h3>{trans.futureTitle}</h3>
                <p>
                  {trans.futureContent}
                </p>
              </div>
            </div>
            
            <div className="story-stats">
              <div className="stats-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>
                    <div className="achievement-content">
                      <div className="achievement-number">{achievement.number}</div>
                      <div className="achievement-label">{achievement.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{trans.milestones}</span>
            <h2>{trans.timelineTitle}</h2>
            <p className="section-description">
              {trans.timelineSubtitle}
            </p>
          </div>
          
          <div className="timeline-container" ref={timelineRef}>
            <div className="timeline-track">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`timeline-milestone ${index === activeTimeline ? 'active' : ''}`}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className="milestone-year">{milestone.year}</div>
                  <div className="milestone-content">
                    <div className={`milestone-icon ${milestone.color}`}>
                      {milestone.icon}
                    </div>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                    <div className="milestone-achievements">
                      {milestone.achievements.map((achievement, idx) => (
                        <div key={idx} className="achievement">
                          <CheckCircle size={14} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="timeline-controls">
              <button className="control-btn prev" onClick={prevTimeline}>
                <ChevronLeft size={24} />
              </button>
              <div className="timeline-dots">
                {milestones.map((_, index) => (
                  <button
                    key={index}
                    className={`timeline-dot ${index === activeTimeline ? 'active' : ''}`}
                    onClick={() => setActiveTimeline(index)}
                  />
                ))}
              </div>
              <button className="control-btn next" onClick={nextTimeline}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{language === 'en' ? 'Our Foundation' : 'Msingi Wetu'}</span>
            <h2>{trans.valuesTitle}</h2>
            <p className="section-description">
              {trans.valuesSubtitle}
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className={`value-card ${value.color}`}>
                <div className="value-icon-wrapper">
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <div className="value-glow"></div>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="value-points">
                  {value.points.map((point, idx) => (
                    <div key={idx} className="point-item">
                      <CheckCircle size={16} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="value-hover">
                  <BookOpen size={20} />
                  <span>{trans.learnMore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">
              {language === 'en' ? 'Meet Our Leaders' : 'Kutana na Viongozi Wetu'}
            </span>
            <h2>{trans.leadershipTitle}</h2>
            <p className="section-description">
              {trans.leadershipSubtitle}
            </p>
          </div>
          
          <div className="team-container">
            <div className="team-showcase">
              {leadershipTeam.map((member, index) => (
                <div 
                  key={member.id}
                  className={`team-member ${index === activeTeam ? 'active' : ''}`}
                >
                  <div className="member-image">
                    <div className="image-placeholder">
                      {member.image}
                    </div>
                    <div className="member-experience">
                      <Clock size={16} />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <div className="member-role">{member.role}</div>
                    <p className="member-bio">{member.bio}</p>
                    <div className="member-specialties">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="specialty-tag">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <a href={`mailto:${member.contact}`} className="member-contact">
                      {member.contact}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="team-controls">
              <button className="team-btn prev" onClick={prevTeam}>
                <ChevronLeft size={24} />
              </button>
              <div className="team-dots">
                {leadershipTeam.map((_, index) => (
                  <button
                    key={index}
                    className={`team-dot ${index === activeTeam ? 'active' : ''}`}
                    onClick={() => setActiveTeam(index)}
                  />
                ))}
              </div>
              <button className="team-btn next" onClick={nextTeam}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section section-padding bg-dark">
        <div className="container">
          <div className="section-header light">
            <span className="section-subtitle">
              {language === 'en' ? 'Accreditations' : 'Udhibitisho'}
            </span>
            <h2>{trans.certificationsTitle}</h2>
            <p className="section-description">
              {trans.certificationsSubtitle}
            </p>
          </div>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <Card key={index} className={`cert-card ${cert.color}`} hover>
                <div className="cert-header">
                  <div className="cert-code">{cert.code}</div>
                  <div className="cert-badge">
                    {language === 'en' ? 'Valid' : 'Inathamini'}
                  </div>
                </div>
                <div className="cert-body">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-dates">
                    <div className="date-item">
                      <span className="date-label">{trans.issued}</span>
                      <span className="date-value">{cert.date}</span>
                    </div>
                    <div className="date-item">
                      <span className="date-label">{trans.validUntil}</span>
                      <span className="date-value">{cert.validity}</span>
                    </div>
                  </div>
                </div>
                <div className="cert-footer">
                  <Button variant="outline" size="small">
                    {trans.viewCertificate}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="standards-note">
            <Quote size={24} />
            <p>
              {trans.standardsNote}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section-padding">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>{trans.ctaTitle}</h2>
              <p>
                {trans.ctaDescription}
              </p>
              <div className="cta-actions">
                <Button variant="primary" size="large">
                  {trans.becomePartner}
                </Button>
                <Button variant="secondary" size="large">
                  {trans.scheduleConsultation}
                </Button>
              </div>
            </div>
            <div className="cta-visual">
              <div className="cta-stats">
                <div className="cta-stat">
                  <div className="stat-value">{counterStats.years}+</div>
                  <div className="stat-label">{trans.yearsExperience}</div>
                </div>
                <div className="cta-stat">
                  <div className="stat-value">{counterStats.projects}+</div>
                  <div className="stat-label">{trans.successfulProjects}</div>
                </div>
                <div className="cta-stat">
                  <div className="stat-value">{counterStats.team}+</div>
                  <div className="stat-label">{trans.expertTeam}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <Modal
          isOpen={true}
          onClose={() => setIsVideoModalOpen(false)}
          title={trans.videoTitle}
          size="large"
        >
          <div className="video-modal-content">
            {isLoading ? (
              <div className="video-loading">
                <LoadingSpinner size="large" />
                <p>{trans.loadingVideo}</p>
              </div>
            ) : (
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="KALUU Explosives - Our Story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="video-description">
              <h3>{trans.fromHumbleBeginnings}</h3>
              <p>
                {trans.videoDescription}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default About