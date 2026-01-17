import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ProductCategory from '../components/Sections/ProductCategory'
import { CheckCircle } from 'lucide-react'
import './CSS/Products.css'

const Products = () => {
  const { language } = useLanguage()

  const translations = {
    en: {
      heroTitle: 'Our Products',
      heroSubtitle: 'Premium quality explosives and equipment for safe, efficient mining operations',
      categoriesTitle: 'Product Categories',
      categoriesSubtitle: 'Comprehensive range of mining products and supplies',
      industrialExplosives: 'Industrial Explosives',
      emulsionExplosives: 'Emulsion Explosives',
      emulsionDesc: 'Water-resistant, high-performance explosives',
      anfoProducts: 'ANFO Products',
      anfoDesc: 'Ammonium nitrate fuel oil mixtures',
      gelatinExplosives: 'Gelatin Explosives',
      gelatinDesc: 'High-density, high-velocity explosives',
      detonatingCord: 'Detonating Cord',
      cordDesc: 'Reliable initiation systems',
      detonatorsTitle: 'Detonators & Accessories',
      electronicDetonators: 'Electronic Detonators',
      electronicDesc: 'Precision timing with digital control',
      nonelectricDetonators: 'Non-electric Detonators',
      nonelectricDesc: 'Safe, reliable initiation',
      safetyFuses: 'Safety Fuses',
      fusesDesc: 'Reliable burn-rate fuses',
      blastingMachines: 'Blasting Machines',
      machinesDesc: 'Advanced firing systems',
      safetyTitle: 'Safety Equipment',
      ppe: 'Personal Protective Equipment',
      ppeDesc: 'Complete safety gear for workers',
      monitoringSystems: 'Monitoring Systems',
      monitoringDesc: 'Vibration and air quality monitors',
      fireSafety: 'Fire Safety Equipment',
      fireDesc: 'Fire extinguishers and suppression systems',
      emergencyKits: 'Emergency Kits',
      kitsDesc: 'Comprehensive emergency response kits',
      consumablesTitle: 'Mining Consumables',
      drillBits: 'Drill Bits & Rods',
      drillDesc: 'High-quality drilling components',
      lubricants: 'Lubricants & Greases',
      lubricantsDesc: 'Specialized industrial lubricants',
      hydraulicFluids: 'Hydraulic Fluids',
      hydraulicDesc: 'Premium hydraulic system fluids',
      cleaningSupplies: 'Cleaning Supplies',
      cleaningDesc: 'Industrial-grade cleaning products',
      inquire: 'Inquire',
      qualityAssurance: 'Quality Assurance',
      qualitySubtitle: 'Our commitment to product excellence',
      isoCertified: 'ISO Certified',
      isoDesc: 'All products meet international quality standards',
      rigorousTesting: 'Rigorous Testing',
      testingDesc: 'Comprehensive testing and quality control procedures',
      compliance: 'Compliance',
      complianceDesc: 'Full compliance with Tanzania Mining Commission regulations',
      safeDelivery: 'Safe Delivery',
      deliveryDesc: 'Secure transportation and handling protocols',
      technicalSupport: 'Technical Support',
      supportSubtitle: 'Expert guidance for optimal product usage',
      productTraining: 'Product Training',
      trainingDesc: 'Comprehensive training on proper handling and usage',
      technicalDocumentation: 'Technical Documentation',
      documentationDesc: 'Detailed manuals and safety data sheets',
      onsiteSupport: 'On-site Support',
      onsiteDesc: 'Expert technicians available for on-site assistance',
      emergencyResponse: 'Emergency Response',
      emergencyDesc: '24/7 emergency technical support'
    },
    sw: {
      heroTitle: 'Bidhaa Zetu',
      heroSubtitle: 'Milipuko ya ubora wa juu na vifaa vya shughuli salama na zenye ufanisi za uchimbaji madini',
      categoriesTitle: 'Jamii za Bidhaa',
      categoriesSubtitle: 'Aina kamili ya bidhaa za uchimbaji madini na vifaa',
      industrialExplosives: 'Milipuko ya Viwandani',
      emulsionExplosives: 'Milipuko ya Emulsion',
      emulsionDesc: 'Milipuko isiyo na maji, ya utendaji wa juu',
      anfoProducts: 'Bidhaa za ANFO',
      anfoDesc: 'Mchanganyiko wa nitrate ya amonia na mafuta',
      gelatinExplosives: 'Milipuko ya Gelatin',
      gelatinDesc: 'Milipuko ya msongamano wa juu, kasi ya juu',
      detonatingCord: 'Kamba ya Detonating',
      cordDesc: 'Mifumo ya uanzishaji inayotegemewa',
      detonatorsTitle: 'Detonator na Vifaa',
      electronicDetonators: 'Detonator za Elektroniki',
      electronicDesc: 'Uratibu wa usahihi na udhibiti wa kidijitali',
      nonelectricDetonators: 'Detonator zisizo za Umeme',
      nonelectricDesc: 'Uanzishaji salama, unaotegemewa',
      safetyFuses: 'Fyuzi za Usalama',
      fusesDesc: 'Fyuzi zinazoteketeza kwa kiwango kinachotegemewa',
      blastingMachines: 'Mashine za Blasting',
      machinesDesc: 'Mifumo ya juu ya kuwasha',
      safetyTitle: 'Vifaa vya Usalama',
      ppe: 'Vifaa vya Kinga ya Kibinafsi',
      ppeDesc: 'Vifaa kamili vya usalama kwa wafanyikazi',
      monitoringSystems: 'Mifumo ya Ufuatiliaji',
      monitoringDesc: 'Vipima mtikisiko na ubora wa hewa',
      fireSafety: 'Vifaa vya Usalama wa Moto',
      fireDesc: 'Vizima moto na mifumo ya kuzima moto',
      emergencyKits: 'Vifurushi vya Dharura',
      kitsDesc: 'Vifurushi kamili vya majibu ya dharura',
      consumablesTitle: 'Vifaa Vinavyotumiwa Uchimbaji',
      drillBits: 'Viboko na Vijiti vya Kuchimba',
      drillDesc: 'Vipengele vya ubora wa juu vya kuchimba',
      lubricants: 'Mafuta ya Kukolea na Grease',
      lubricantsDesc: 'Mafuta maalum ya viwandani ya kukolea',
      hydraulicFluids: 'Maji ya Hydraulic',
      hydraulicDesc: 'Maji ya ubora wa juu ya mfumo wa hydraulic',
      cleaningSupplies: 'Vifaa vya Kusafisha',
      cleaningDesc: 'Bidhaa za kusafisha za kiwango cha viwandani',
      inquire: 'Uliza',
      qualityAssurance: 'Hakikisho la Ubora',
      qualitySubtitle: 'Kujitolea kwetu kwa ubora wa bidhaa',
      isoCertified: 'Imethibitishwa ISO',
      isoDesc: 'Bidhaa zote zinakidhi viwango vya kimataifa vya ubora',
      rigorousTesting: 'Kupima kwa Ukali',
      testingDesc: 'Taratibu kamili za upimaji na udhibiti wa ubora',
      compliance: 'Kufuata',
      complianceDesc: 'Kufuata kamili kanuni za Tume ya Uchimbaji Madini Tanzania',
      safeDelivery: 'Uwasilishaji Salama',
      deliveryDesc: 'Itifaki salama za usafirishaji na usimamizi',
      technicalSupport: 'Msaada wa Kiufundi',
      supportSubtitle: 'Mwongozo wa wataalamu kwa matumizi bora ya bidhaa',
      productTraining: 'Mafunzo ya Bidhaa',
      trainingDesc: 'Mafunzo kamili juu ya usimamizi sahihi na matumizi',
      technicalDocumentation: 'Nyaraka za Kiufundi',
      documentationDesc: 'Miongozo ya kina na karatasi za data za usalama',
      onsiteSupport: 'Msaada wa Kwenye Tovuti',
      onsiteDesc: 'Wataalamu wa kiteknolojia wanapatikana kwa msaada wa kwenye tovuti',
      emergencyResponse: 'Majibu ya Dharura',
      emergencyDesc: 'Msaada wa kiufundi wa dharura 24/7'
    }
  }

  const trans = translations[language]

  const productCategories = [
    {
      id: 'explosives',
      title: trans.industrialExplosives,
      products: [
        { name: trans.emulsionExplosives, description: trans.emulsionDesc },
        { name: trans.anfoProducts, description: trans.anfoDesc },
        { name: trans.gelatinExplosives, description: trans.gelatinDesc },
        { name: trans.detonatingCord, description: trans.cordDesc }
      ]
    },
    {
      id: 'detonators',
      title: trans.detonatorsTitle,
      products: [
        { name: trans.electronicDetonators, description: trans.electronicDesc },
        { name: trans.nonelectricDetonators, description: trans.nonelectricDesc },
        { name: trans.safetyFuses, description: trans.fusesDesc },
        { name: trans.blastingMachines, description: trans.machinesDesc }
      ]
    },
    {
      id: 'safety',
      title: trans.safetyTitle,
      products: [
        { name: trans.ppe, description: trans.ppeDesc },
        { name: trans.monitoringSystems, description: trans.monitoringDesc },
        { name: trans.fireSafety, description: trans.fireDesc },
        { name: trans.emergencyKits, description: trans.kitsDesc }
      ]
    },
    {
      id: 'consumables',
      title: trans.consumablesTitle,
      products: [
        { name: trans.drillBits, description: trans.drillDesc },
        { name: trans.lubricants, description: trans.lubricantsDesc },
        { name: trans.hydraulicFluids, description: trans.hydraulicDesc },
        { name: trans.cleaningSupplies, description: trans.cleaningDesc }
      ]
    }
  ]

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <h1>{trans.heroTitle}</h1>
            <p className="hero-subtitle">
              {trans.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <ProductCategory />

      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>{trans.categoriesTitle}</h2>
            <p>{trans.categoriesSubtitle}</p>
          </div>
          
          <div className="product-categories">
            {productCategories.map((category) => (
              <div key={category.id} className="product-category-card">
                <div className="category-header">
                  <h3>{category.title}</h3>
                </div>
                <div className="category-products">
                  <ul>
                    {category.products.map((product, index) => (
                      <li key={index} className="product-item">
                        <div className="product-info">
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                        </div>
                        <button className="btn btn-secondary btn-small">
                          {trans.inquire}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>{trans.qualityAssurance}</h2>
            <p>{trans.qualitySubtitle}</p>
          </div>
          
          <div className="quality-features">
            <div className="quality-feature">
              <div className="feature-icon">
                <CheckCircle size={24} />
              </div>
              <h3>{trans.isoCertified}</h3>
              <p>{trans.isoDesc}</p>
            </div>
            <div className="quality-feature">
              <div className="feature-icon">🔬</div>
              <h3>{trans.rigorousTesting}</h3>
              <p>{trans.testingDesc}</p>
            </div>
            <div className="quality-feature">
              <div className="feature-icon">📋</div>
              <h3>{trans.compliance}</h3>
              <p>{trans.complianceDesc}</p>
            </div>
            <div className="quality-feature">
              <div className="feature-icon">🚚</div>
              <h3>{trans.safeDelivery}</h3>
              <p>{trans.deliveryDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>{trans.technicalSupport}</h2>
            <p>{trans.supportSubtitle}</p>
          </div>
          
          <div className="support-services">
            <div className="support-card">
              <h3>{trans.productTraining}</h3>
              <p>{trans.trainingDesc}</p>
            </div>
            <div className="support-card">
              <h3>{trans.technicalDocumentation}</h3>
              <p>{trans.documentationDesc}</p>
            </div>
            <div className="support-card">
              <h3>{trans.onsiteSupport}</h3>
              <p>{trans.onsiteDesc}</p>
            </div>
            <div className="support-card">
              <h3>{trans.emergencyResponse}</h3>
              <p>{trans.emergencyDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products