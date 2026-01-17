import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ServiceGrid from '../components/Sections/ServiceGrid'
import './CSS/Services.css'

const Services = () => {
  const { language } = useLanguage()

  const translations = {
    en: {
      heroTitle: 'Our Services',
      heroSubtitle: 'Comprehensive mining solutions tailored to your specific needs',
      serviceDetails: 'Service Details',
      learnAboutServices: 'Learn more about our comprehensive service offerings',
      explosivesTitle: 'Explosives Supply',
      explosivesDesc: 'Comprehensive range of industrial explosives and accessories',
      equipmentTitle: 'Equipment Rental',
      equipmentDesc: 'Modern mining and construction equipment',
      logisticsTitle: 'Logistics & Transport',
      logisticsDesc: 'Complete supply chain solutions',
      consultingTitle: 'Consulting Services',
      consultingDesc: 'Expert guidance and support',
      keyFeatures: 'Key Features:',
      bulkEmulsion: 'Bulk Emulsion Explosives',
      anfoProducts: 'ANFO Products',
      electronicDetonators: 'Electronic Detonators',
      safetyFuses: 'Safety Fuses',
      boostersPrimers: 'Boosters & Primers',
      blastingAccessories: 'Blasting Accessories',
      excavatorsLoaders: 'Excavators & Loaders',
      dumpTrucks: 'Dump Trucks',
      drillingRigs: 'Drilling Rigs',
      supportMachinery: 'Support Machinery',
      maintenanceServices: 'Maintenance Services',
      operatorTraining: 'Operator Training',
      hazmatTransportation: 'Hazmat Transportation',
      customsClearance: 'Customs Clearance',
      warehousing: 'Warehousing',
      inventoryManagement: 'Inventory Management',
      routeOptimization: 'Route Optimization',
      realtimeTracking: 'Real-time Tracking',
      licensingAssistance: 'Licensing Assistance',
      safetyAudits: 'Safety Audits',
      regulatoryCompliance: 'Regulatory Compliance',
      trainingPrograms: 'Training Programs',
      environmentalAssessments: 'Environmental Assessments',
      riskManagement: 'Risk Management',
      learnMore: 'Learn More',
      ourProcess: 'Our Process',
      howWeDeliver: 'How we deliver excellence from start to finish',
      consultation: 'Consultation',
      consultationDesc: 'Understanding your specific requirements and challenges',
      planning: 'Planning',
      planningDesc: 'Developing customized solutions with safety as priority',
      execution: 'Execution',
      executionDesc: 'Deploying our expert team and resources efficiently',
      support: 'Support',
      supportDesc: 'Ongoing maintenance, monitoring, and optimization'
    },
    sw: {
      heroTitle: 'Huduma Zetu',
      heroSubtitle: 'Suluhisho kamili za uchimbaji madini zilizoboreshwa kwa mahitaji yako maalum',
      serviceDetails: 'Maelezo ya Huduma',
      learnAboutServices: 'Jifunze zaidi kuhuru matoleo yetu kamili ya huduma',
      explosivesTitle: 'Usambazaji wa Milipuko',
      explosivesDesc: 'Aina kamili ya milipuko ya viwandani na vifaa vya ziada',
      equipmentTitle: 'Kukodi Vifaa',
      equipmentDesc: 'Vifaa vya kisasa vya uchimbaji madini na ujenzi',
      logisticsTitle: 'Usafirishaji na Usafirishaji',
      logisticsDesc: 'Suluhisho kamili za mnyororo wa usambazaji',
      consultingTitle: 'Huduma za Ushauri',
      consultingDesc: 'Mwongozo wa wataalamu na usaidizi',
      keyFeatures: 'Vipengele Muhimu:',
      bulkEmulsion: 'Milipuko ya Emulsion ya Wingi',
      anfoProducts: 'Bidhaa za ANFO',
      electronicDetonators: 'Detonator za Elektroniki',
      safetyFuses: 'Fyuzi za Usalama',
      boostersPrimers: 'Vichocheo na Vyandishi',
      blastingAccessories: 'Vifaa vya Blasting',
      excavatorsLoaders: 'Ekskaveta na Loaders',
      dumpTrucks: 'Malori ya Kutupa',
      drillingRigs: 'Mashine za Kuchimba',
      supportMachinery: 'Mashine za Usaidizi',
      maintenanceServices: 'Huduma za Matengenezo',
      operatorTraining: 'Mafunzo ya Waendeshaji',
      hazmatTransportation: 'Usafirishaji wa Vitu Hatari',
      customsClearance: 'Ukombozi wa Forodha',
      warehousing: 'Uhifadhi',
      inventoryManagement: 'Usimamizi wa Hisa',
      routeOptimization: 'Ubora wa Njia',
      realtimeTracking: 'Ufuatiliaji wa Wakati Halisi',
      licensingAssistance: 'Usaidizi wa Leseni',
      safetyAudits: 'Ukaguzi wa Usalama',
      regulatoryCompliance: 'Kufuata Kanuni',
      trainingPrograms: 'Programu za Mafunzo',
      environmentalAssessments: 'Tathmini ya Mazingira',
      riskManagement: 'Usimamizi wa Hatari',
      learnMore: 'Jifunze Zaidi',
      ourProcess: 'Mchakato Wetu',
      howWeDeliver: 'Jinsi tunavyotoa ubora kutoka mwanzo hadi mwisho',
      consultation: 'Mashauriano',
      consultationDesc: 'Kuelewa mahitaji yako maalum na changamoto',
      planning: 'Kupanga',
      planningDesc: 'Kubuni suluhisho zilizobinafsishwa kwa usalama kama kipaumbele',
      execution: 'Utendaji',
      executionDesc: 'Kupeleka timu yetu ya wataalamu na rasilimali kwa ufanisi',
      support: 'Msaada',
      supportDesc: 'Matengenezo endelevu, ufuatiliaji, na ubora'
    }
  }

  const trans = translations[language]

  const serviceDetails = {
    explosives: {
      title: trans.explosivesTitle,
      description: trans.explosivesDesc,
      features: [
        trans.bulkEmulsion,
        trans.anfoProducts,
        trans.electronicDetonators,
        trans.safetyFuses,
        trans.boostersPrimers,
        trans.blastingAccessories
      ]
    },
    equipment: {
      title: trans.equipmentTitle,
      description: trans.equipmentDesc,
      features: [
        trans.excavatorsLoaders,
        trans.dumpTrucks,
        trans.drillingRigs,
        trans.supportMachinery,
        trans.maintenanceServices,
        trans.operatorTraining
      ]
    },
    logistics: {
      title: trans.logisticsTitle,
      description: trans.logisticsDesc,
      features: [
        trans.hazmatTransportation,
        trans.customsClearance,
        trans.warehousing,
        trans.inventoryManagement,
        trans.routeOptimization,
        trans.realtimeTracking
      ]
    },
    consulting: {
      title: trans.consultingTitle,
      description: trans.consultingDesc,
      features: [
        trans.licensingAssistance,
        trans.safetyAudits,
        trans.regulatoryCompliance,
        trans.trainingPrograms,
        trans.environmentalAssessments,
        trans.riskManagement
      ]
    }
  }

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>{trans.heroTitle}</h1>
            <p className="hero-subtitle">
              {trans.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <ServiceGrid />

      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>{trans.serviceDetails}</h2>
            <p>{trans.learnAboutServices}</p>
          </div>
          
          <div className="service-details">
            {Object.entries(serviceDetails).map(([key, service]) => (
              <div key={key} className="service-detail-card">
                <div className="service-detail-header">
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-features">
                  <h4>{trans.keyFeatures}</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-cta">
                  <button className="btn btn-primary">{trans.learnMore}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>{trans.ourProcess}</h2>
            <p>{trans.howWeDeliver}</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>{trans.consultation}</h3>
              <p>{trans.consultationDesc}</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>{trans.planning}</h3>
              <p>{trans.planningDesc}</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>{trans.execution}</h3>
              <p>{trans.executionDesc}</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>{trans.support}</h3>
              <p>{trans.supportDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services