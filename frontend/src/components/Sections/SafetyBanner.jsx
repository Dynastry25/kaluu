import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Shield, Award, Users, AlertTriangle, CheckCircle, Clock, Star, TrendingUp } from 'lucide-react'
import Button from '../UI/Button'
import './SafetyBanner.css'

const SafetyBanner = () => {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Safety First - Always",
      subtitle: "Safety isn't just a priority—it's embedded in our culture",
      description: "Our zero-incident policy ensures the highest safety standards across all operations. Certified by international safety organizations and fully compliant with Tanzania Mining Commission regulations.",
      ctaPrimary: "View Safety Standards",
      ctaSecondary: "Download Safety Manual",
      viewProtocols: "Emergency Protocols",
      certifiedBy: "Certified & Accredited by:",
      lostTimeInjuries: "Lost Time Injuries",
      inPastYears: "In past 5 years",
      complianceRate: "Compliance Rate",
      allAuditsPassed: "All audits passed",
      trainingHours: "Training Hours",
      annualTraining: "Annual staff training",
      emergencyResponse: "Emergency Response",
      alwaysAvailable: "Always available",
      safetyMilestone: "Safety Milestone",
      consecutiveYears: "Consecutive safe years",
      certifiedExperts: "Certified Experts",
      qualifiedPersonnel: "Qualified personnel",
      incidentFree: "Incident-Free Operations",
      ongoingRecord: "Ongoing record",
      iso9001: "ISO 9001:2015",
      iso45001: "ISO 45001:2018",
      tmcLicensed: "TMC Licensed",
      safetyCertified: "Safety Certified",
      ohsas18001: "OHSAS 18001",
      iso14001: "ISO 14001:2015",
      exploreSafety: "Explore Our Safety Program",
      getCertified: "Get Certified With Us"
    },
    sw: {
      title: "Usalama Kwanza - Daima",
      subtitle: "Usalama sio kipaumbele tu—imeingizwa katika utamaduni wetu",
      description: "Sera yetu ya matukio sifuri inahakikisha viwango vya juu zaidi vya usalama katika shughuli zote. Imethibitishwa na mashirika ya kimataifa ya usalama na inafuata kikamilifu kanuni za Tume ya Uchimbaji Madini Tanzania.",
      ctaPrimary: "Angalia Viwango vya Usalama",
      ctaSecondary: "Pakua Mwongozo wa Usalama",
      viewProtocols: "Itifaki za Dharura",
      certifiedBy: "Imethibitishwa na Kusajiliwa na:",
      lostTimeInjuries: "Majeraha ya Muda Ulio Potea",
      inPastYears: "Katika miaka 5 iliyopita",
      complianceRate: "Kiwango cha Kufuata",
      allAuditsPassed: "Ukaguzi wote umepitishwa",
      trainingHours: "Saa za Mafunzo",
      annualTraining: "Mafunzo ya kila mwaka ya wafanyakazi",
      emergencyResponse: "Majibu ya Dharura",
      alwaysAvailable: "Inapatikana kila wakati",
      safetyMilestone: "Hatua ya Usalama",
      consecutiveYears: "Miaka mfululizo salama",
      certifiedExperts: "Wataalam Waliothibitishwa",
      qualifiedPersonnel: "Wafanyakazi waliohitimu",
      incidentFree: "Shughuli Bila Matukio",
      ongoingRecord: "Rekodi endelevu",
      iso9001: "ISO 9001:2015",
      iso45001: "ISO 45001:2018",
      tmcLicensed: "Imelicenshwa TUME",
      safetyCertified: "Imethibitishwa Usalama",
      ohsas18001: "OHSAS 18001",
      iso14001: "ISO 14001:2015",
      exploreSafety: "Chunguza Programu Yetu ya Usalama",
      getCertified: "Pata Udhibitisho Nasi"
    }
  }

  const trans = translations[language]

  const safetyStats = [
    {
      icon: <Shield />,
      number: '0',
      label: trans.lostTimeInjuries,
      period: trans.inPastYears,
      color: 'primary',
      animation: 'pulse'
    },
    {
      icon: <CheckCircle />,
      number: '100%',
      label: trans.complianceRate,
      period: trans.allAuditsPassed,
      color: 'success',
      animation: 'bounce'
    },
    {
      icon: <Users />,
      number: '5K+',
      label: trans.trainingHours,
      period: trans.annualTraining,
      color: 'info',
      animation: 'count'
    },
    {
      icon: <AlertTriangle />,
      number: '24/7',
      label: trans.emergencyResponse,
      period: trans.alwaysAvailable,
      color: 'warning',
      animation: 'blink'
    },
    {
      icon: <Star />,
      number: '25+',
      label: trans.safetyMilestone,
      period: trans.consecutiveYears,
      color: 'accent',
      animation: 'glow'
    },
    {
      icon: <Award />,
      number: '150+',
      label: trans.certifiedExperts,
      period: trans.qualifiedPersonnel,
      color: 'secondary',
      animation: 'float'
    }
  ]

  const certifications = [
    { code: trans.iso9001, type: 'Quality' },
    { code: trans.iso45001, type: 'Safety' },
    { code: trans.tmcLicensed, type: 'Legal' },
    { code: trans.safetyCertified, type: 'Safety' },
    { code: trans.ohsas18001, type: 'Health' },
    { code: trans.iso14001, type: 'Environment' }
  ]

  return (
    <section className="safety-banner">
      {/* Background Safety Image */}
      <div className="safety-background-image">
        <img 
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop" 
          alt={language === 'en' ? "Safety equipment and protocols" : "Vifaa vya usalama na itifaki"}
          loading="lazy"
        />
        <div className="safety-image-overlay"></div>
      </div>
      
      <div className="container">
        <div className="safety-banner-content">
          {/* Header Section */}
          <div className="safety-header">
            <div className="safety-badge">
              <Shield size={20} />
              <span>{language === 'en' ? 'Certified Safety' : 'Usalama Uliothibitishwa'}</span>
            </div>
            <h2>{trans.title}</h2>
            <p className="safety-subtitle">{trans.subtitle}</p>
            <p className="safety-description">{trans.description}</p>
            
            <div className="safety-actions">
              <Button variant="primary" size="medium">
                {trans.ctaPrimary}
              </Button>
              <Button variant="secondary" size="medium">
                {trans.ctaSecondary}
              </Button>
              <a href="#emergency" className="safety-link">
                <AlertTriangle size={16} />
                {trans.viewProtocols}
              </a>
            </div>
          </div>
          
          {/* Stats Grid with Enhanced Design */}
          <div className="safety-stats-grid">
            {safetyStats.map((stat, index) => (
              <div 
                key={index} 
                className={`safety-stat ${stat.color} ${stat.animation}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="stat-icon-wrapper">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-glow"></div>
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-period">{stat.period}</div>
                </div>
                <div className="stat-hover">
                  <TrendingUp size={16} />
                  <span>{language === 'en' ? 'View Details' : 'Angalia Maelezo'}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications Section */}
          <div className="safety-certifications-section">
            <div className="certifications-header">
              <h3>{trans.certifiedBy}</h3>
              <div className="certification-badges">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className={`cert-badge ${cert.type.toLowerCase()}`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                  >
                    <div className="cert-code">{cert.code}</div>
                    <div className="cert-type">{cert.type}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="safety-progress">
              <div className="progress-header">
                <span>{language === 'en' ? 'Safety Compliance Progress' : 'Maendeleo ya Kufuata Usalama'}</span>
                <span>100%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="progress-labels">
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
                <span>2026</span>
              </div>
            </div>
            
            {/* Additional CTA */}
            <div className="safety-cta">
              <div className="cta-content">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w-200&h=200&fit=crop" 
                  alt={language === 'en' ? "Safety monitoring equipment" : "Vifaa vya ufuatiliaji wa usalama"}
                  className="safety-cta-image"
                />
                <div>
                  <h4>{language === 'en' ? '24/7 Safety Hotline' : 'Mstari wa Usalama 24/7'}</h4>
                  <p className="hotline-number">+255 123 456 789</p>
                </div>
              </div>
              <div className="cta-buttons">
                <Button variant="outline" size="small">
                  {trans.exploreSafety}
                </Button>
                <Button variant="primary" size="small">
                  {trans.getCertified}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Safety Features Grid */}
          <div className="safety-features">
            <div className="feature">
              <div className="feature-icon success">
                <CheckCircle size={24} />
              </div>
              <h4>{language === 'en' ? 'Regular Audits' : 'Ukaguzi wa Mara Kwa Mara'}</h4>
              <p>{language === 'en' ? 'Monthly safety inspections and compliance checks' : 'Ukaguzi wa usalama wa kila mwezi na ukaguzi wa kufuata'}</p>
            </div>
            <div className="feature">
              <div className="feature-icon warning">
                <AlertTriangle size={24} />
              </div>
              <h4>{language === 'en' ? 'Emergency Drills' : 'Mazoezi ya Dharura'}</h4>
              <p>{language === 'en' ? 'Quarterly emergency response simulations' : 'Uigizaji wa kila robo mwaka wa majibu ya dharura'}</p>
            </div>
            <div className="feature">
              <div className="feature-icon info">
                <Users size={24} />
              </div>
              <h4>{language === 'en' ? 'Continuous Training' : 'Mafunzo Endelevu'}</h4>
              <p>{language === 'en' ? 'Ongoing safety training for all personnel' : 'Mafunzo endelevu ya usalama kwa wafanyakazi wote'}</p>
            </div>
            <div className="feature">
              <div className="feature-icon primary">
                <Shield size={24} />
              </div>
              <h4>{language === 'en' ? 'PPE Provided' : 'Vifaa vya Kinga'}</h4>
              <p>{language === 'en' ? 'Complete personal protective equipment for all workers' : 'Vifaa kamili vya kinga ya kibinafsi kwa wafanyakazi wote'}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Safety Message */}
      <div className="floating-safety-message">
        <div className="message-content">
          <Shield size={16} />
          <span>{language === 'en' ? 'Safety is our #1 Priority' : 'Usalama ni Kipaumbele Chetu #1'}</span>
        </div>
      </div>
    </section>
  )
}

export default SafetyBanner