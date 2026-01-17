import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import SafetyBanner from '../components/Sections/SafetyBanner'
import { Shield, Award, Users, AlertTriangle, FileText, Target } from 'lucide-react'
import './CSS/Safety.css'

const Safety = () => {
  const { language } = useLanguage()

  const translations = {
    en: {
      pillarsTitle: 'Our Safety Pillars',
      pillarsSubtitle: 'The foundation of our safety-first culture',
      zeroIncident: 'Zero Incident Policy',
      zeroDesc: 'Our commitment to zero safety incidents drives every decision we make.',
      certifiedExcellence: 'Certified Excellence',
      certifiedDesc: 'ISO certified with full compliance to all mining commission regulations.',
      expertTraining: 'Expert Training',
      expertDesc: 'All personnel undergo rigorous training covering all safety aspects.',
      emergencyResponse: 'Emergency Response',
      emergencyDesc: '24/7 emergency response team with regular drills and updated protocols.',
      documentation: 'Documentation',
      documentationDesc: 'Comprehensive safety documentation and compliance reporting.',
      continuousImprovement: 'Continuous Improvement',
      improvementDesc: 'Regular safety audits and continuous improvement initiatives.',
      safetyStandards: 'Safety Standards & Compliance',
      standardsSubtitle: 'Adhering to the highest international standards',
      complianceFramework: 'Our Compliance Framework',
      iso45001: 'ISO 45001:2018 Occupational Health & Safety',
      iso14001: 'ISO 14001:2015 Environmental Management',
      tmcRegulations: 'Tanzania Mining Commission Regulations',
      intlStandards: 'International Explosives Safety Standards',
      envProtection: 'Environmental Protection Guidelines',
      communityProtocols: 'Community Safety Protocols',
      certifications: 'Certifications & Accreditations',
      standardsNote: 'All certifications are regularly audited and maintained to ensure ongoing compliance with evolving standards.',
      trainingPrograms: 'Safety Training Programs',
      trainingSubtitle: 'Comprehensive training for all personnel',
      basicSafety: 'Basic Safety Training',
      explosivesHandling: 'Explosives Handling',
      emergencyResponseTraining: 'Emergency Response',
      environmentalCompliance: 'Environmental Compliance',
      firstAid: 'First Aid & CPR',
      advancedBlasting: 'Advanced Blasting Safety',
      duration: 'Duration:',
      audience: 'Audience:',
      allEmployees: 'All Employees',
      technicalStaff: 'Technical Staff',
      safetyOfficers: 'Safety Officers',
      managers: 'Managers',
      engineers: 'Engineers',
      comprehensiveTraining: 'Comprehensive training covering all aspects of',
      learnMore: 'Learn More',
      emergencyTitle: 'Emergency Response',
      emergencyPrepared: 'Prepared for any situation',
      emergencyLine: '24/7 Emergency Line',
      available: 'Always available for immediate assistance',
      rapidResponse: 'Rapid Response Team',
      rapidDesc: 'Certified emergency responders on standby',
      regularDrills: 'Regular Drills',
      drillsDesc: 'Monthly emergency response simulations',
      medicalSupport: 'Medical Support',
      medicalDesc: 'On-site medical facilities and trained personnel',
      lostTimeInjuries: 'Lost Time Injuries',
      complianceRate: 'Compliance Rate',
      trainingHours: 'Training Hours',
      emergencyAvailability: 'Emergency Response',
      inPastYears: 'In the past 5 years',
      allAuditsPassed: 'All regulatory audits passed',
      annualDevelopment: 'Annual staff development',
      alwaysAvailable: 'Always available'
    },
    sw: {
      pillarsTitle: 'Nguzo Zetu za Usalama',
      pillarsSubtitle: 'Msingi wa utamaduni wetu wa usalama-kwanza',
      zeroIncident: 'Sera ya Matukio Sifuri',
      zeroDesc: 'Kujitolea kwetu kwa matukio sifuri ya usalama kinaongoza kila uamuzi tunalofanya.',
      certifiedExcellence: 'Ubora Uliothibitishwa',
      certifiedDesc: 'Imethibitishwa ISO na kufuata kamili kanuni zote za tume ya uchimbaji madini.',
      expertTraining: 'Mafunzo ya Wataalam',
      expertDesc: 'Wafanyakazi wote hupitia mafunzo makali yanayoshughulikia vipengele vyote vya usalama.',
      emergencyResponse: 'Majibu ya Dharura',
      emergencyDesc: 'Timu ya majibu ya dharura 24/7 na mazoezi ya mara kwa mara na itifaki zilizosasishwa.',
      documentation: 'Nyaraka',
      documentationDesc: 'Nyaraka kamili za usalama na kuripoti kufuata.',
      continuousImprovement: 'Uboreshaji Endelevu',
      improvementDesc: 'Ukaguzi wa mara kwa mara wa usalama na mipango ya uboreshaji endelevu.',
      safetyStandards: 'Viwango vya Usalama na Kufuata',
      standardsSubtitle: 'Kuzingatia viwango vya juu zaidi vya kimataifa',
      complianceFramework: 'Mfumo Wetu wa Kufuata',
      iso45001: 'ISO 45001:2018 Afya na Usalama wa Kazini',
      iso14001: 'ISO 14001:2015 Usimamizi wa Mazingira',
      tmcRegulations: 'Kanuni za Tume ya Uchimbaji Madini Tanzania',
      intlStandards: 'Viwango vya Kimataifa vya Usalama wa Milipuko',
      envProtection: 'Miongozo ya Ulinzi wa Mazingira',
      communityProtocols: 'Itifaki za Usalama wa Jamii',
      certifications: 'Udhibitisho na Usajili',
      standardsNote: 'Udhibitisho wote hukaguliwa kwa mara kwa mara na kudumishwa ili kuhakikisha kufuata endelevu na viwango vinavyobadilika.',
      trainingPrograms: 'Programu za Mafunzo ya Usalama',
      trainingSubtitle: 'Mafunzo kamili kwa wafanyakazi wote',
      basicSafety: 'Mafunzo ya Msingi ya Usalama',
      explosivesHandling: 'Usimamizi wa Milipuko',
      emergencyResponseTraining: 'Majibu ya Dharura',
      environmentalCompliance: 'Kufuata Mazingira',
      firstAid: 'Huduma ya Kwanza na CPR',
      advancedBlasting: 'Usalama wa Juu wa Blasting',
      duration: 'Muda:',
      audience: 'Watazamaji:',
      allEmployees: 'Wafanyakazi Wote',
      technicalStaff: 'Wafanyakazi wa Kiufundi',
      safetyOfficers: 'Maafisa wa Usalama',
      managers: 'Wasimamizi',
      engineers: 'Wahandisi',
      comprehensiveTraining: 'Mafunzo kamili yanayoshughulikia vipengele vyote vya',
      learnMore: 'Jifunze Zaidi',
      emergencyTitle: 'Majibu ya Dharura',
      emergencyPrepared: 'Imetayarishwa kwa hali yoyote',
      emergencyLine: 'Mstari wa Dharura 24/7',
      available: 'Inapatikana kila wakati kwa msaada wa haraka',
      rapidResponse: 'Timu ya Majibu ya Haraka',
      rapidDesc: 'Wajibu wa dharura walio thibitishwa wako tayari',
      regularDrills: 'Mazoezi ya Mara kwa Mara',
      drillsDesc: 'Uigizaji wa kila mwezi wa majibu ya dharura',
      medicalSupport: 'Msaada wa Kimatibabu',
      medicalDesc: 'Vifaa vya matibabu kwenye tovuti na wafanyakazi waliofunzwa',
      lostTimeInjuries: 'Majeraha ya Muda Ulio Potea',
      complianceRate: 'Kiwango cha Kufuata',
      trainingHours: 'Saa za Mafunzo',
      emergencyAvailability: 'Majibu ya Dharura',
      inPastYears: 'Katika miaka 5 iliyopita',
      allAuditsPassed: 'Ukaguzi wote wa kanuni umepitishwa',
      annualDevelopment: 'Maendeleo ya kila mwaka ya wafanyakazi',
      alwaysAvailable: 'Inapatikana kila wakati'
    }
  }

  const trans = translations[language]

  const safetyPillars = [
    {
      icon: <Shield />,
      title: trans.zeroIncident,
      description: trans.zeroDesc
    },
    {
      icon: <Award />,
      title: trans.certifiedExcellence,
      description: trans.certifiedDesc
    },
    {
      icon: <Users />,
      title: trans.expertTraining,
      description: trans.expertDesc
    },
    {
      icon: <AlertTriangle />,
      title: trans.emergencyResponse,
      description: trans.emergencyDesc
    },
    {
      icon: <FileText />,
      title: trans.documentation,
      description: trans.documentationDesc
    },
    {
      icon: <Target />,
      title: trans.continuousImprovement,
      description: trans.improvementDesc
    }
  ]

  const safetyStandards = [
    trans.iso45001,
    trans.iso14001,
    trans.tmcRegulations,
    trans.intlStandards,
    trans.envProtection,
    trans.communityProtocols
  ]

  const trainingPrograms = [
    {
      title: trans.basicSafety,
      duration: language === 'en' ? '2 Days' : 'Siku 2',
      audience: trans.allEmployees
    },
    {
      title: trans.explosivesHandling,
      duration: language === 'en' ? '5 Days' : 'Siku 5',
      audience: trans.technicalStaff
    },
    {
      title: trans.emergencyResponseTraining,
      duration: language === 'en' ? '3 Days' : 'Siku 3',
      audience: trans.safetyOfficers
    },
    {
      title: trans.environmentalCompliance,
      duration: language === 'en' ? '2 Days' : 'Siku 2',
      audience: trans.managers
    },
    {
      title: trans.firstAid,
      duration: language === 'en' ? '1 Day' : 'Siku 1',
      audience: trans.allEmployees
    },
    {
      title: trans.advancedBlasting,
      duration: language === 'en' ? '4 Days' : 'Siku 4',
      audience: trans.engineers
    }
  ]

  return (
    <div className="safety-page">
      <SafetyBanner />

      {/* Safety Pillars */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>{trans.pillarsTitle}</h2>
            <p>{trans.pillarsSubtitle}</p>
          </div>
          
          <div className="safety-pillars">
            {safetyPillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon">
                  {pillar.icon}
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Statistics */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="safety-stats">
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">{trans.lostTimeInjuries}</div>
              <div className="stat-period">{trans.inPastYears}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">{trans.complianceRate}</div>
              <div className="stat-period">{trans.allAuditsPassed}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5K+</div>
              <div className="stat-label">{trans.trainingHours}</div>
              <div className="stat-period">{trans.annualDevelopment}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{trans.emergencyAvailability}</div>
              <div className="stat-period">{trans.alwaysAvailable}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>{trans.safetyStandards}</h2>
            <p>{trans.standardsSubtitle}</p>
          </div>
          
          <div className="standards-grid">
            <div className="standards-list">
              <h3>{trans.complianceFramework}</h3>
              <ul>
                {safetyStandards.map((standard, index) => (
                  <li key={index}>
                    <span className="checkmark">✓</span>
                    {standard}
                  </li>
                ))}
              </ul>
            </div>
            <div className="certifications-display">
              <h3>{trans.certifications}</h3>
              <div className="cert-badges">
                <div className="cert-badge">ISO 45001</div>
                <div className="cert-badge">ISO 14001</div>
                <div className="cert-badge">{language === 'en' ? 'TMC' : 'TUME'}</div>
                <div className="cert-badge">OHSAS</div>
              </div>
              <p className="cert-description">
                {trans.standardsNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>{trans.trainingPrograms}</h2>
            <p>{trans.trainingSubtitle}</p>
          </div>
          
          <div className="training-grid">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="training-card">
                <h3>{program.title}</h3>
                <div className="training-details">
                  <div className="detail">
                    <span className="label">{trans.duration}</span>
                    <span className="value">{program.duration}</span>
                  </div>
                  <div className="detail">
                    <span className="label">{trans.audience}</span>
                    <span className="value">{program.audience}</span>
                  </div>
                </div>
                <p className="training-description">
                  {trans.comprehensiveTraining} {program.title.toLowerCase()}.
                </p>
                <button className="btn btn-secondary btn-small">{trans.learnMore}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>{trans.emergencyTitle}</h2>
            <p>{trans.emergencyPrepared}</p>
          </div>
          
          <div className="emergency-grid">
            <div className="emergency-card">
              <h3>{trans.emergencyLine}</h3>
              <p className="emergency-number">+255 123 456 789</p>
              <p>{trans.available}</p>
            </div>
            <div className="emergency-card">
              <h3>{trans.rapidResponse}</h3>
              <p>{trans.rapidDesc}</p>
            </div>
            <div className="emergency-card">
              <h3>{trans.regularDrills}</h3>
              <p>{trans.drillsDesc}</p>
            </div>
            <div className="emergency-card">
              <h3>{trans.medicalSupport}</h3>
              <p>{trans.medicalDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Safety