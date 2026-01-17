import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../UI/Button'
import './ProductCategory.css'

// Import images
import explosive from '../../components/assets/emulsion.jpg'
import equipment from '../../components/assets/drilling.jpg'
import equipment2 from '../../components/assets/Excavetor.jpg'
import equipment3 from '../../components/assets/denator.jpg'
import equipment4 from '../../components/assets/Blaster.jpg'
import Safety from '../../components/assets/Danger.jpg'

const ProductCategory = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const { language } = useLanguage()

  const translations = {
    en: {
      explosivesTitle: 'Industrial Explosives',
      explosivesDesc: 'Premium quality explosives for all mining applications with maximum safety and efficiency',
      safetyTitle: 'Safety Equipment',
      safetyDesc: 'Complete safety gear and monitoring systems for comprehensive site protection',
      equipmentTitle: 'Mining Equipment',
      equipmentDesc: 'Heavy machinery and support equipment for optimal mining operations',
      consumablesTitle: 'Mining Consumables',
      consumablesDesc: 'Drill bits, lubricants, and maintenance supplies for continuous operation',
      detonatorsTitle: 'Detonators & Accessories',
      detonatorsDesc: 'Precision detonation systems and accessories for controlled blasting',
      accessoriesTitle: 'Blasting Accessories',
      accessoriesDesc: 'Complete range of blasting accessories and support equipment',
      products: 'Products',
      items: 'Items',
      machines: 'Machines',
      supplies: 'Supplies',
      systems: 'Systems',
      browse: 'Browse Products',
      viewAll: 'View All',
      explore: 'Explore',
      certified: 'ISO Certified',
      safetyApproved: 'Safety Approved',
      qualityAssured: 'Quality Assured',
      premiumQuality: 'Premium Quality',
      featuredProducts: 'Featured Products',
      productRange: 'Our Product Range',
      trustedByIndustry: 'Trusted by the mining industry',
      categoryFeatures: 'Key Features',
      guaranteedQuality: 'Guaranteed Quality',
      technicalSupport: '24/7 Technical Support',
      delivery: 'Nationwide Delivery',
      training: 'Free Training',
      warranty: '1 Year Warranty',
      maintenance: 'Maintenance Support',
      expertAdvice: 'Expert Advice',
      bestSeller: 'Best Seller',
      newArrival: 'New Arrival',
      limitedStock: 'Limited Stock',
      featured: 'Featured',
      learnMore: 'Learn More',
      getQuote: 'Get Quote',
      orderNow: 'Order Now',
      needExpertAdvice: 'Need Expert Product Advice?',
      technicalTeamReady: 'Our technical team is ready to help you select the right products for your mining operations.',
      contactSales: 'Contact Sales',
      whyChooseProducts: 'Why Choose Our Products',
      industryLeadingQuality: 'Industry-leading quality and support',
      customerSatisfaction: 'Customer Satisfaction',
      supportAvailable: 'Support Available',
      projectsCompleted: 'Projects Completed',
      yearsExperience: 'Years Experience',
      readyToExperience: 'Ready to experience the difference?',
      scheduleConsultation: 'Schedule a Consultation'
    },
    sw: {
      explosivesTitle: 'Milipuko ya Viwandani',
      explosivesDesc: 'Milipuko ya ubora wa juu kwa matumizi yote ya uchimbaji madini kwa usalama wa juu na ufanisi',
      safetyTitle: 'Vifaa vya Usalama',
      safetyDesc: 'Vifaa kamili vya usalama na mifumo ya ufuatiliaji kwa ulinzi kamili wa tovuti',
      equipmentTitle: 'Vifaa vya Uchimbaji',
      equipmentDesc: 'Mashine nzito na vifaa vya usaidizi kwa shughuli bora za uchimbaji madini',
      consumablesTitle: 'Vifaa Vinavyotumiwa Uchimbaji',
      consumablesDesc: 'Viboko vya kuchimba, mafuta ya kukolea, na vifaa vya matengenezo kwa uendeshaji endelevu',
      detonatorsTitle: 'Detonator na Vifaa',
      detonatorsDesc: 'Mifumo sahihi ya detonation na vifaa kwa blasting iliyodhibitiwa',
      accessoriesTitle: 'Vifaa vya Blasting',
      accessoriesDesc: 'Aina kamili ya vifaa vya blasting na vifaa vya usaidizi',
      products: 'Bidhaa',
      items: 'Vitu',
      machines: 'Mashine',
      supplies: 'Vifaa',
      systems: 'Mifumo',
      browse: 'Chunguza Bidhaa',
      viewAll: 'Angalia Zote',
      explore: 'Chunguza',
      certified: 'Imethibitishwa ISO',
      safetyApproved: 'Imekubaliwa Usalama',
      qualityAssured: 'Ubora Umehakikishwa',
      premiumQuality: 'Ubora wa Juu',
      featuredProducts: 'Bidhaa Zilizoangaziwa',
      productRange: 'Aina Yetu ya Bidhaa',
      trustedByIndustry: 'Imeaminika na tasnia ya uchimbaji madini',
      categoryFeatures: 'Vipengele Muhimu',
      guaranteedQuality: 'Ubora Umehakikishwa',
      technicalSupport: 'Msaada wa Kiufundi 24/7',
      delivery: 'Uwasilishaji Kitaifa',
      training: 'Mafunzo ya Bure',
      warranty: 'Dhamana ya Mwaka 1',
      maintenance: 'Msaada wa Matengenezo',
      expertAdvice: 'Ushauri wa Wataalamu',
      bestSeller: 'Inauzwa Zaidi',
      newArrival: 'Mpya',
      limitedStock: 'Hisa Ndogo',
      featured: 'Imeangaziwa',
      learnMore: 'Jifunze Zaidi',
      getQuote: 'Pata Nukuu',
      orderNow: 'Agiza Sasa',
      needExpertAdvice: 'Unahitaji Ushauri wa Wataalamu wa Bidhaa?',
      technicalTeamReady: 'Timu yetu ya kiufundi iko tayari kukusaidia kuchagua bidhaa sahihi kwa shughuli zako za uchimbaji madini.',
      contactSales: 'Wasiliana na Mauzo',
      whyChooseProducts: 'Kwa Nini Kuchagua Bidhaa Zetu',
      industryLeadingQuality: 'Ubora wa kuongoza tasnia na msaada',
      customerSatisfaction: 'Uridhifu wa Wateja',
      supportAvailable: 'Msaada Unapatikana',
      projectsCompleted: 'Miradi Imekamilika',
      yearsExperience: 'Miaka ya Uzoefu',
      readyToExperience: 'Tayari kujisikia tofauti?',
      scheduleConsultation: 'Panga Mashauriano'
    }
  }

  const trans = translations[language] || translations.en

  const categories = [
    {
      id: 'explosives',
      title: trans.explosivesTitle,
      description: trans.explosivesDesc,
      count: '25+',
      unit: trans.products,
      color: 'primary',
      features: language === 'en' ? [
        'Emulsion Explosives',
        'ANFO Products',
        'Gelatin Explosives',
        'Boosters & Primers'
      ] : [
        'Milipuko ya Emulsion',
        'Bidhaa za ANFO',
        'Milipuko ya Gelatin',
        'Viboreshaji na Vianzo'
      ],
      tags: [trans.certified, trans.bestSeller],
      badge: trans.featured,
      popular: true,
      image: explosive
    },
    {
      id: 'safety',
      title: trans.safetyTitle,
      description: trans.safetyDesc,
      count: '50+',
      unit: trans.items,
      color: 'success',
      features: language === 'en' ? [
        'Personal Protective Equipment',
        'Gas Detection Systems',
        'Safety Monitoring',
        'Emergency Kits'
      ] : [
        'Vifaa vya Kinga ya Kibinafsi',
        'Mifumo ya Kugundua Gesi',
        'Ufuatiliaji wa Usalama',
        'Vifaa vya Dharura'
      ],
      tags: [trans.safetyApproved, trans.newArrival],
      badge: trans.newArrival,
      popular: false,
      image: Safety
    },
    {
      id: 'equipment',
      title: trans.equipmentTitle,
      description: trans.equipmentDesc,
      count: '100+',
      unit: trans.machines,
      color: 'secondary',
      features: language === 'en' ? [
        'Excavators & Loaders',
        'Drilling Rigs',
        'Support Machinery',
        'Maintenance Equipment'
      ] : [
        'Exaveta na Malodari',
        'Mashine za Kuchimba',
        'Mashine za Usaidizi',
        'Vifaa vya Matengenezo'
      ],
      tags: [trans.qualityAssured, trans.featured],
      badge: trans.bestSeller,
      popular: true,
      image: equipment2
    },
    {
      id: 'consumables',
      title: trans.consumablesTitle,
      description: trans.consumablesDesc,
      count: '200+',
      unit: trans.supplies,
      color: 'accent',
      features: language === 'en' ? [
        'Drill Bits & Rods',
        'Lubricants & Greases',
        'Hydraulic Fluids',
        'Cleaning Supplies'
      ] : [
        'Viboko vya Kuchimba na Mifupa',
        'Mafuta ya Kukolea na Grisi',
        'Maji ya Hydraulic',
        'Vifaa vya Kusafisha'
      ],
      tags: [trans.premiumQuality, trans.limitedStock],
      badge: trans.limitedStock,
      popular: false,
      image: equipment
    },
    {
      id: 'detonators',
      title: trans.detonatorsTitle,
      description: trans.detonatorsDesc,
      count: '40+',
      unit: trans.systems,
      color: 'info',
      features: language === 'en' ? [
        'Electronic Detonators',
        'Non-electric Detonators',
        'Safety Fuses',
        'Blasting Machines'
      ] : [
        'Detonator za Kielektroniki',
        'Detonator zisizo za Umeme',
        'Miyayo ya Usalama',
        'Mashine za Blasting'
      ],
      tags: [trans.certified, trans.safetyApproved],
      badge: trans.featured,
      popular: true,
      image: equipment3
    },
    {
      id: 'accessories',
      title: trans.accessoriesTitle,
      description: trans.accessoriesDesc,
      count: '75+',
      unit: trans.items,
      color: 'warning',
      features: language === 'en' ? [
        'Blasting Accessories',
        'Connection Wires',
        'Timing Devices',
        'Testing Equipment'
      ] : [
        'Vifaa vya Blasting',
        'Waya za Muunganisho',
        'Vifaa vya Kuweka Muda',
        'Vifaa vya Kupimia'
      ],
      tags: [trans.qualityAssured, trans.premiumQuality],
      badge: trans.newArrival,
      popular: false,
      image: equipment4
    }
  ]

  const benefits = [
    {
      id: 'benefit-quality',
      title: trans.guaranteedQuality || 'Guaranteed Quality',
      description: language === 'en' 
        ? 'All products meet international quality standards' 
        : 'Bidhaa zote zinakidhi viwango vya kimataifa vya ubora'
    },
    {
      id: 'benefit-safety',
      title: trans.safetyApproved || 'Safety Approved',
      description: language === 'en' 
        ? 'Full compliance with safety regulations' 
        : 'Kufuata kamili kanuni za usalama'
    },
    {
      id: 'benefit-support',
      title: trans.technicalSupport || '24/7 Technical Support',
      description: language === 'en' 
        ? 'Expert technical support available 24/7' 
        : 'Msaada wa kiufundi wa wataalamu unapatikana 24/7'
    },
    {
      id: 'benefit-delivery',
      title: trans.delivery || 'Nationwide Delivery',
      description: language === 'en' 
        ? 'Nationwide delivery across Tanzania' 
        : 'Uwasilishaji kitaifa kote Tanzania'
    },
    {
      id: 'benefit-training',
      title: trans.training || 'Free Training',
      description: language === 'en' 
        ? 'Free training on product usage and safety' 
        : 'Mafunzo ya bure juu ya matumizi ya bidhaa na usalama'
    },
    {
      id: 'benefit-warranty',
      title: trans.warranty || '1 Year Warranty',
      description: language === 'en' 
        ? 'Comprehensive warranty on all products' 
        : 'Dhamana kamili kwenye bidhaa zote'
    }
  ]

  return (
    <div className="mining-products-section">
      {/* Background Pattern */}
      <div className="mining-bg-pattern">
        <div className="mining-bg-shape mining-shape-1"></div>
        <div className="mining-bg-shape mining-shape-2"></div>
        <div className="mining-bg-shape mining-shape-3"></div>
        <div className="mining-bg-gradient"></div>
      </div>

      <div className="mining-container">
        {/* Section Header */}
        <div className="mining-section-header">
          <div className="mining-header-content">
            <span className="mining-section-badge">
              {trans.featuredProducts}
            </span>
            <h2 className="mining-section-title">{trans.productRange}</h2>
            <p className="mining-section-desc">
              {trans.trustedByIndustry}
            </p>
          </div>
          
          <div className="mining-header-actions">
            <Button variant="outline" size="medium">
              {trans.viewAll}
              <span className="mining-arrow">→</span>
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mining-category-grid">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={`mining-category-card mining-card-${category.color} ${category.popular ? 'mining-card-popular' : ''} ${index === activeCategory ? 'mining-card-active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.badge && (
                <div className={`mining-category-badge mining-badge-${category.color}`}>
                  {category.badge}
                </div>
              )}
              
              {/* Category Image */}
              <div className="mining-category-image">
                <img 
                  src={category.image} 
                  alt={category.title}
                  loading="lazy"
                  className="mining-category-img"
                />
              </div>
              
              <div className="mining-card-header">
                <div className="mining-icon-container">
                  <div className={`mining-category-icon mining-icon-${category.color}`}>
                    {category.id === 'explosives' ? '💥' : 
                     category.id === 'safety' ? '⛑️' :
                     category.id === 'equipment' ? '🚜' :
                     category.id === 'consumables' ? '🔧' :
                     category.id === 'detonators' ? '📦' : '⚙️'}
                  </div>
                  <div className={`mining-icon-glow mining-glow-${category.color}`}></div>
                </div>
                <div className="mining-category-meta">
                  <div className="mining-category-count">
                    <span className={`mining-count-number mining-number-${category.color}`}>{category.count}</span>
                    <span className="mining-count-unit">{category.unit}</span>
                  </div>
                </div>
              </div>

              <div className="mining-card-body">
                <h3 className="mining-card-title">{category.title}</h3>
                <p className="mining-card-desc">{category.description}</p>
                
                <div className="mining-features-section">
                  <h4 className="mining-features-title">{trans.categoryFeatures}</h4>
                  <ul className="mining-features-list">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="mining-feature-item">
                        <span className="mining-check-icon">✓</span>
                        <span className="mining-feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mining-tags-container">
                  {category.tags.map((tag, idx) => (
                    <span key={idx} className={`mining-tag mining-tag-${category.color}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mining-card-footer">
                <div className="mining-footer-content">
                  <Button variant="primary" size="small">
                    {trans.browse}
                    <span className="mining-chevron">›</span>
                  </Button>
                  <div className="mining-action-links">
                    <a href="#" className="mining-link">{trans.learnMore}</a>
                    <a href="#" className="mining-link">{trans.getQuote}</a>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="mining-card-overlay">
                <div className="mining-overlay-content">
                  <span className="mining-trend-icon">📈</span>
                  <span className="mining-overlay-text">{trans.explore} {category.title.toLowerCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Navigation */}
        <div className="mining-category-nav">
          <div className="mining-nav-dots">
            {categories.map((_, index) => (
              <button
                key={index}
                className={`mining-nav-dot ${index === activeCategory ? 'mining-nav-dot-active' : ''}`}
                onClick={() => setActiveCategory(index)}
                aria-label={`${language === 'en' ? 'View category' : 'Angalia kategoria'} ${index + 1}`}
              />
            ))}
          </div>
          <div className="mining-nav-info">
            <span className="mining-current-category">
              {categories[activeCategory].title}
            </span>
            <span className="mining-category-counter">
              {activeCategory + 1}/{categories.length}
            </span>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mining-benefits-section">
          <div className="mining-benefits-header">
            <h3 className="mining-benefits-title">{trans.whyChooseProducts}</h3>
            <p className="mining-benefits-subtitle">{trans.industryLeadingQuality}</p>
          </div>
          
          <div className="mining-benefits-grid">
            {benefits.map((benefit) => (
              <div 
                key={benefit.id} 
                className="mining-benefit-card"
              >
                <span className="mining-benefit-number">0{benefits.indexOf(benefit) + 1}</span>
                
                <div className="mining-benefit-icon">
                  {benefit.id === 'benefit-quality' ? '✓' : 
                   benefit.id === 'benefit-safety' ? '🛡️' :
                   benefit.id === 'benefit-support' ? '📞' :
                   benefit.id === 'benefit-delivery' ? '🚚' :
                   benefit.id === 'benefit-training' ? '🎓' : '⭐'}
                </div>
                
                <div className="mining-benefit-content">
                  <h4 className="mining-benefit-heading">{benefit.title}</h4>
                  <p className="mining-benefit-desc">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mining-stats-container">
            <div className="mining-stat-card">
              <div className="mining-stat-number">98%</div>
              <div className="mining-stat-label">
                {trans.customerSatisfaction}
              </div>
            </div>
            <div className="mining-stat-card">
              <div className="mining-stat-number">24/7</div>
              <div className="mining-stat-label">
                {trans.supportAvailable}
              </div>
            </div>
            <div className="mining-stat-card">
              <div className="mining-stat-number">1000+</div>
              <div className="mining-stat-label">
                {trans.projectsCompleted}
              </div>
            </div>
            <div className="mining-stat-card">
              <div className="mining-stat-number">15+</div>
              <div className="mining-stat-label">
                {trans.yearsExperience}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mining-benefits-cta">
            <p className="mining-cta-text">
              {trans.readyToExperience}
            </p>
            <Button variant="primary" size="large">
              {trans.scheduleConsultation}
              <span className="mining-arrow">→</span>
            </Button>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="mining-main-cta">
          <div className="mining-cta-wrapper">
            <div className="mining-cta-text-section">
              <h3 className="mining-cta-title">{trans.needExpertAdvice}</h3>
              <p className="mining-cta-desc">
                {trans.technicalTeamReady}
              </p>
            </div>
            <div className="mining-cta-buttons">
              <Button variant="primary" size="large">
                {trans.getQuote}
              </Button>
              <Button variant="secondary" size="large">
                {trans.contactSales}
                <span className="mining-arrow">→</span>
              </Button>
              <Button variant="outline" size="large">
                <span className="mining-settings-icon">⚙️</span>
                {trans.technicalSupport}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategory