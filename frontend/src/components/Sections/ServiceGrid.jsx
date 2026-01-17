import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { 
  Bomb, 
  Truck, 
  Settings, 
  FileText, 
  ChevronRight, 
  Zap, 
  Shield,
  Clock,
  CheckCircle,
  ArrowUpRight,
  BarChart3,
  Users,
  Globe,
  Wrench,
  Package,
  Cpu
} from 'lucide-react'
import Modal from '../UI/Modal'
import explosive from '../../components/assets/explosive.jpg'
import equipment from '../../components/assets/Excavetor.jpg'
import Logistic from '../../components/assets/transport.jpg'
import Safety from '../../components/assets/safety.jpg'
import './ServiceGrid.css'

const ServiceGrid = () => {
  const { language } = useLanguage()
  const [selectedService, setSelectedService] = useState(null)
  const [expandedService, setExpandedService] = useState(null)
  const [hoveredService, setHoveredService] = useState(null)

  // Translations for services
  const translations = {
    en: {
      // Service titles and descriptions
      explosivesTitle: 'Explosives Supply',
      explosivesTagline: 'Precision Power for Mining',
      explosivesDesc: 'Premium industrial explosives including emulsions, ANFO, detonators, and blasting accessories. All products meet international safety standards.',
      explosivesFullDesc: 'We provide a comprehensive range of industrial explosives tailored to meet the specific requirements of your mining operations. Our products undergo rigorous quality control and are backed by extensive technical support.',
      
      equipmentTitle: 'Equipment Rental',
      equipmentTagline: 'State-of-the-Art Machinery',
      equipmentDesc: 'Modern mining and construction equipment available for short and long-term rental. Fully maintained fleet with operator support available.',
      equipmentFullDesc: 'Our extensive equipment fleet includes the latest models from leading manufacturers. All equipment is regularly serviced and comes with trained operators if required.',
      
      logisticsTitle: 'Logistics & Transport',
      logisticsTagline: 'Reliable Supply Chain',
      logisticsDesc: 'Complete logistics solutions for mining operations including freight forwarding, customs clearance, and specialized hazmat transport.',
      logisticsFullDesc: 'We manage the entire supply chain from procurement to delivery, ensuring your materials arrive on time and in perfect condition, even to remote locations.',
      
      consultingTitle: 'Consulting Services',
      consultingTagline: 'Expert Guidance & Solutions',
      consultingDesc: 'Expert guidance on licensing, regulatory compliance, safety protocols, and operational optimization for mining operations.',
      consultingFullDesc: 'Our team of experienced mining engineers and consultants provide comprehensive advisory services to help you optimize operations, ensure compliance, and maximize profitability.',
      
      // Common labels
      learnMore: 'Learn More',
      requestQuote: 'Request Quote',
      downloadBrochure: 'Download Brochure',
      readyToLeverage: 'Ready to leverage our services?',
      keyFeatures: 'Key Features',
      benefits: 'Benefits',
      
      // Stats bar
      coreServices: 'Core Services',
      expertTeam: 'Expert Team',
      support: 'Support',
      coverage: 'Coverage',
      whyChoose: 'Why Choose Our Services',
      industryLeading: 'Industry-leading quality and support',
    },
    sw: {
      // Service titles and descriptions
      explosivesTitle: 'Usambazaji wa Milipuko',
      explosivesTagline: 'Nguvu Kamili kwa Uchimbaji',
      explosivesDesc: 'Milipuko bora ya viwandani ikiwa ni pamoja na emulsions, ANFO, detonator, na vifaa vya blasting. Bidhaa zote zinakidhi viwango vya kimataifa vya usalama.',
      explosivesFullDesc: 'Tunatoa anuwai kamili ya milipuko ya viwandani iliyoundwa kukidhi mahitaji maalum ya shughuli zako za uchimbaji madini. Bidhaa zetu hupitiwa udhibiti wa ubora na zinasaidiwa na msaada mkubwa wa kiufundi.',
      
      equipmentTitle: 'Kukodisha Vifaa',
      equipmentTagline: 'Mashine za Kisasa',
      equipmentDesc: 'Vifaa vya kisasa vya uchimbaji na ujenzi vinapatikana kwa kukodisha kwa muda mfupi na mrefu. Msafara uliodumishwa kikamilifu na msaada wa waendeshaji unapatikana.',
      equipmentFullDesc: 'Msafara wetu mpana wa vifaa unajumuisha aina za hivi karibuni kutoka kwa wazalishaji wakuu. Vifaa vyote hudumwa mara kwa mara na vina waendeshaji waliofunzwa ikiwa ni lazima.',
      
      logisticsTitle: 'Mfumo wa Usambazaji',
      logisticsTagline: 'Mfumo wa Usambazaji Unaaminika',
      logisticsDesc: 'Suluhisho kamili la mfumo wa usambazaji kwa shughuli za uchimbaji ikiwa ni pamoja na usafirishaji wa mizigo, usafishaji wa forodha, na usafirishaji maalum wa vifaa vya hatari.',
      logisticsFullDesc: 'Tunasimamia mfumo mzima wa usambazaji kutoka ununuzi hadi uwasilishaji, kuhakikisha vifaa vyako vinafika kwa wakati na katika hali kamili, hata kwenye maeneo ya mbali.',
      
      consultingTitle: 'Huduma za Ushauri',
      consultingTagline: 'Mwongozo wa Wataalamu',
      consultingDesc: 'Mwongozo wa wataalamu juu ya leseni, kufuata kanuni, itifaki za usalama, na uboreshaji wa uendeshaji kwa shughuli za uchimbaji.',
      consultingFullDesc: 'Timu yetu ya wahandisi wa madini wenye uzoefu na washauri hutoa huduma kamili za ushauri ili kukusaidia kuboresha shughuli, kuhakikisha utiifu, na kuongeza faida.',
      
      // Common labels
      learnMore: 'Jifunze Zaidi',
      requestQuote: 'Omba Nukuu',
      downloadBrochure: 'Pakua Brochure',
      readyToLeverage: 'Tayari kutumia huduma zetu?',
      keyFeatures: 'Vipengele Muhimu',
      benefits: 'Faida',
      
      // Stats bar
      coreServices: 'Huduma Msingi',
      expertTeam: 'Timu ya Wataalamu',
      support: 'Msaada',
      coverage: 'Uenezi',
      whyChoose: 'Kwa Nini Kuchagua Huduma Zetu',
      industryLeading: 'Ubora wa kuongoza tasnia na msaada',
    }
  }

  const trans = translations[language]

  const services = [
    {
      id: 1,
      icon: <Bomb />,
      title: trans.explosivesTitle,
      tagline: trans.explosivesTagline,
      description: trans.explosivesDesc,
      fullDescription: trans.explosivesFullDesc,
      features: language === 'en' ? [
        'Bulk Emulsion Explosives',
        'ANFO Products',
        'Electronic Detonators',
        'Blasting Accessories',
        'Safety Fuses & Boosters',
        'Packaged Explosives'
      ] : [
        'Milipuko ya Emulsion kwa wingi',
        'Bidhaa za ANFO',
        'Detonator za Kielektroniki',
        'Vifaa vya Blasting',
        'Miyayo ya Usalama na Viboreshaji',
        'Milipuko Iliofungwa'
      ],
      benefits: language === 'en' ? [
        'Enhanced fragmentation',
        'Improved safety margins',
        'Cost-effective solutions',
        'Custom formulations available',
        '24/7 technical support'
      ] : [
        'Uvunjaji ulioboreshwa',
        'Vipimo vya usalama vilivyoboreshwa',
        'Suluhisho zenye gharama nafuu',
        'Miundo maalum inapatikana',
        'Msaada wa kiufundi 24/7'
      ],
      stats: [
        { label: language === 'en' ? 'Products' : 'Bidhaa', value: '25+' },
        { label: language === 'en' ? 'Safety Rating' : 'Kiwango cha Usalama', value: '100%' },
        { label: language === 'en' ? 'Delivery Time' : 'Muda wa Uwasilishaji', value: '<24h' }
      ],
      color: 'primary',
      gradient: 'orange',
      modalImage: 'explosives',
      serviceImage: explosive
    },
    {
      id: 2,
      icon: <Settings />,
      title: trans.equipmentTitle,
      tagline: trans.equipmentTagline,
      description: trans.equipmentDesc,
      fullDescription: trans.equipmentFullDesc,
      features: language === 'en' ? [
        'Excavators & Loaders',
        'Dump Trucks',
        'Drilling Equipment',
        'Support Machinery',
        'Blasting Equipment',
        'Surveying Tools'
      ] : [
        'Exaveta na Malodari',
        'Malori ya Mizigo',
        'Vifaa vya Kuchimba',
        'Mashine za Usaidizi',
        'Vifaa vya Blasting',
        'Zana za Upimaji'
      ],
      benefits: language === 'en' ? [
        'No capital investment',
        'Latest technology',
        'Maintenance included',
        'Flexible rental terms',
        'Operator training'
      ] : [
        'Hakuna uwekezaji wa mtaji',
        'Teknolojia ya kisasa',
        'Matengenezo yamejumuishwa',
        'Masharti rahisi ya kukodisha',
        'Mafunzo ya waendeshaji'
      ],
      stats: [
        { label: language === 'en' ? 'Machines' : 'Mashine', value: '100+' },
        { label: language === 'en' ? 'Availability' : 'Upatikanaji', value: '95%' },
        { label: language === 'en' ? 'Uptime' : 'Muda wa Kazi', value: '98%' }
      ],
      color: 'secondary',
      gradient: 'blue',
      modalImage: 'equipment',
      serviceImage: equipment
    },
    {
      id: 3,
      icon: <Truck />,
      title: trans.logisticsTitle,
      tagline: trans.logisticsTagline,
      description: trans.logisticsDesc,
      fullDescription: trans.logisticsFullDesc,
      features: language === 'en' ? [
        'Hazmat Transportation',
        'Customs Clearance',
        'Warehousing',
        'Supply Chain Management',
        'Route Optimization',
        'Real-time Tracking'
      ] : [
        'Usafirishaji wa Vifaa vya Hatari',
        'Usafishaji wa Forodha',
        'Uhifadhi wa Bidhaa',
        'Usimamizi wa Mfumo wa Usambazaji',
        'Uboreshaji wa Njia',
        'Ufuatiliaji wa Wakati Halisi'
      ],
      benefits: language === 'en' ? [
        'Reduced downtime',
        'Cost optimization',
        'Risk mitigation',
        'Compliance assurance',
        '24/7 monitoring'
      ] : [
        'Kupunguzwa kwa muda wa kusimama',
        'Uboreshaji wa gharama',
        'Kupunguza hatari',
        'Uhakikisho wa kufuata kanuni',
        'Ufuatiliaji 24/7'
      ],
      stats: [
        { label: language === 'en' ? 'Fleet Size' : 'Ukubwa wa Msafara', value: '50+' },
        { label: language === 'en' ? 'On-time Delivery' : 'Uwasilishaji wa Wakati', value: '99%' },
        { label: language === 'en' ? 'Coverage' : 'Uenezi', value: language === 'en' ? 'Nationwide' : 'Kitaifa' }
      ],
      color: 'accent',
      gradient: 'yellow',
      modalImage: 'logistics',
      serviceImage: Logistic
    },
    {
      id: 4,
      icon: <FileText />,
      title: trans.consultingTitle,
      tagline: trans.consultingTagline,
      description: trans.consultingDesc,
      fullDescription: trans.consultingFullDesc,
      features: language === 'en' ? [
        'Licensing Assistance',
        'Safety Audits',
        'Regulatory Compliance',
        'Training Programs',
        'Environmental Assessments',
        'Risk Management'
      ] : [
        'Msaada wa Leseni',
        'Ukaguzi wa Usalama',
        'Kufuata Kanuni',
        'Mipango ya Mafunzo',
        'Tathmini ya Mazingira',
        'Usimamizi wa Hatari'
      ],
      benefits: language === 'en' ? [
        'Regulatory compliance',
        'Risk reduction',
        'Operational efficiency',
        'Cost savings',
        'Expert insights'
      ] : [
        'Kufuata kanuni',
        'Kupunguza hatari',
        'Ufanisi wa uendeshaji',
        'Akiba ya gharama',
        'Ufahamu wa wataalamu'
      ],
      stats: [
        { label: language === 'en' ? 'Experts' : 'Wataalamu', value: '25+' },
        { label: language === 'en' ? 'Projects' : 'Miradi', value: '500+' },
        { label: language === 'en' ? 'Client Satisfaction' : 'Uridhisho wa Mteja', value: '95%' }
      ],
      color: 'success',
      gradient: 'green',
      modalImage: 'consulting',
      serviceImage: Safety
    }
  ]

  const openServiceModal = (service) => {
    setSelectedService(service)
    setExpandedService(null)
  }

  const toggleServiceExpansion = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  const getServiceIcon = (icon, gradient) => {
    return (
      <div className={`service-icon-wrapper gradient-${gradient}`}>
        <div className="service-icon">
          {icon}
        </div>
        <div className="icon-glow"></div>
      </div>
    )
  }

  const getAdditionalFeatures = (serviceId) => {
    const additionalFeatures = {
      1: [
        { icon: <Cpu />, text: language === 'en' ? 'Electronic Blasting Systems' : 'Mifumo ya Kielektroniki ya Blasting' },
        { icon: <Shield />, text: language === 'en' ? 'Safety Management Systems' : 'Mifumo ya Usimamizi wa Usalama' },
        { icon: <Package />, text: language === 'en' ? 'Custom Packaging Solutions' : 'Suluhisho Maalum za Ufungaji' }
      ],
      2: [
        { icon: <Wrench />, text: language === 'en' ? 'On-site Maintenance' : 'Matengenezo Mahali Pa Kazi' },
        { icon: <Clock />, text: language === 'en' ? '24/7 Emergency Support' : 'Msaada wa Dharura 24/7' },
        { icon: <Users />, text: language === 'en' ? 'Operator Training' : 'Mafunzo ya Waendeshaji' }
      ],
      3: [
        { icon: <Globe />, text: language === 'en' ? 'International Logistics' : 'Mfumo wa Usambazaji wa Kimataifa' },
        { icon: <BarChart3 />, text: language === 'en' ? 'Supply Chain Analytics' : 'Uchambuzi wa Mfumo wa Usambazaji' },
        { icon: <Shield />, text: language === 'en' ? 'Compliance Management' : 'Usimamizi wa Kufuata Kanuni' }
      ],
      4: [
        { icon: <Zap />, text: language === 'en' ? 'Digital Transformation' : 'Mageuzi ya Kidijitali' },
        { icon: <Users />, text: language === 'en' ? 'Team Training' : 'Mafunzo ya Timu' },
        { icon: <BarChart3 />, text: language === 'en' ? 'Performance Analytics' : 'Uchambuzi wa Utendaji' }
      ]
    }
    return additionalFeatures[serviceId] || []
  }

  return (
    <div className="service-grid-section">
      {/* Animated Background Elements */}
      <div className="service-grid-decorations">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-line line-1"></div>
        <div className="decoration-line line-2"></div>
      </div>

      <div className="container">
        <div className="service-grid">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${hoveredService === service.id ? 'hovered' : ''} ${expandedService === service.id ? 'expanded' : ''}`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => toggleServiceExpansion(service.id)}
            >
              {/* Service Image */}
              <div className="service-image">
                <img 
                  src={service.serviceImage} 
                  alt={service.title}
                  loading="lazy"
                />
              </div>

              {/* Card Header */}
              <div className="card-header">
                {getServiceIcon(service.icon, service.gradient)}
                <div className="service-tagline">{service.tagline}</div>
                <h3>{service.title}</h3>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <p className="service-description">{service.description}</p>
                
                {/* Features List - Always Visible */}
                <div className="features-list">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Expanded Content */}
                {expandedService === service.id && (
                  <div className="expanded-content">
                    <div className="expanded-features">
                      {getAdditionalFeatures(service.id).map((feature, index) => (
                        <div key={index} className="expanded-feature">
                          <div className="expanded-feature-icon">{feature.icon}</div>
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="service-stats">
                      {service.stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                          <div className="stat-value">{stat.value}</div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <div className="card-actions">
                  <button 
                    className="btn-learn-more"
                    onClick={(e) => {
                      e.stopPropagation()
                      openServiceModal(service)
                    }}
                  >
                    {trans.learnMore}
                    <ArrowUpRight size={18} />
                  </button>
                  <button 
                    className={`btn-expand ${expandedService === service.id ? 'expanded' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleServiceExpansion(service.id)
                    }}
                    aria-label={expandedService === service.id ? 
                      (language === 'en' ? "Collapse details" : "Funga maelezo") : 
                      (language === 'en' ? "Expand details" : "Panua maelezo")
                    }
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="card-hover-overlay"></div>

              {/* Animated Border */}
              <div className="animated-border"></div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          size="large"
        >
          <div className="service-modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <div className={`modal-icon gradient-${selectedService.gradient}`}>
                {selectedService.icon}
              </div>
              <div className="modal-header-content">
                <h3>{selectedService.tagline}</h3>
                <p className="modal-description">{selectedService.fullDescription}</p>
              </div>
            </div>

            <div className="modal-body">
              {/* Features & Benefits Grid */}
              <div className="modal-grid">
                <div className="modal-section">
                  <h4>{trans.keyFeatures}</h4>
                  <ul className="modal-features">
                    {selectedService.features.map((feature, index) => (
                      <li key={index}>
                        <CheckCircle size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>{trans.benefits}</h4>
                  <ul className="modal-benefits">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index}>
                        <Zap size={18} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>



              {/* CTA Section */}
              <div className="modal-cta">
                <p>{trans.readyToLeverage}</p>
                <div className="modal-actions">
                  <button className="btn btn-primary">
                    {trans.requestQuote}
                  </button>
                  <button className="btn btn-secondary">
                    {trans.downloadBrochure}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default ServiceGrid