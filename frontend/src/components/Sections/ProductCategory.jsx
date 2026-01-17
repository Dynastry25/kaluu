import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { 
  Package, 
  Shield, 
  Truck, 
  Settings, 
  Zap, 
  HardHat, 
  Wrench, 
  Fuel, 
  ArrowRight, 
  ChevronRight,
  CheckCircle,
  Star,
  Award,
  TrendingUp
} from 'lucide-react'
import Button from '../UI/Button'
import './ProductCategory.css'

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
      industryLeadingQuality: 'Industry-leading quality and support'
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
      industryLeadingQuality: 'Ubora wa kuongoza tasnia na msaada'
    }
  }

  const trans = translations[language]

  const categories = [
    {
      id: 'explosives',
      icon: <Zap />,
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
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h-400&fit=crop'
    },
    {
      id: 'safety',
      icon: <HardHat />,
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
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h-400&fit=crop'
    },
    {
      id: 'equipment',
      icon: <Truck />,
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
      image: 'https://images.unsplash.com/photo-1570032211195-4221d5d63e4c?w=600&h-400&fit=crop'
    },
    {
      id: 'consumables',
      icon: <Wrench />,
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
      image: 'https://images.unsplash.com/photo-1564604761388-83eafc96f668?w=600&h-400&fit=crop'
    },
    {
      id: 'detonators',
      icon: <Package />,
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
      image: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=600&h-400&fit=crop'
    },
    {
      id: 'accessories',
      icon: <Settings />,
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
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h-400&fit=crop'
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle />,
      title: trans.guaranteedQuality,
      description: language === 'en' ? 'All products meet international quality standards' : 'Bidhaa zote zinakidhi viwango vya kimataifa vya ubora'
    },
    {
      icon: <Shield />,
      title: trans.safetyApproved,
      description: language === 'en' ? 'Full compliance with safety regulations' : 'Kufuata kamili kanuni za usalama'
    },
    {
      icon: <Award />,
      title: trans.technicalSupport,
      description: language === 'en' ? 'Expert technical support available 24/7' : 'Msaada wa kiufundi wa wataalamu unapatikana 24/7'
    },
    {
      icon: <Truck />,
      title: trans.delivery,
      description: language === 'en' ? 'Nationwide delivery across Tanzania' : 'Uwasilishaji kitaifa kote Tanzania'
    },
    {
      icon: <Settings />,
      title: trans.training,
      description: language === 'en' ? 'Free training on product usage and safety' : 'Mafunzo ya bure juu ya matumizi ya bidhaa na usalama'
    },
    {
      icon: <Star />,
      title: trans.warranty,
      description: language === 'en' ? 'Comprehensive warranty on all products' : 'Dhamana kamili kwenye bidhaa zote'
    }
  ]

  return (
    <div className="product-category-section">
      {/* Animated Background */}
      <div className="category-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="bg-gradient"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-content">
            <span className="section-badge">
              <Award size={16} />
              {trans.featuredProducts}
            </span>
            <h2>{trans.productRange}</h2>
            <p className="section-description">
              {trans.trustedByIndustry}
            </p>
          </div>
          
          <div className="header-actions">
            <Button variant="outline" size="medium">
              {trans.viewAll}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="category-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`category-card ${category.color} ${category.popular ? 'popular' : ''} ${index === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
              onMouseEnter={() => setActiveCategory(index)}
            >
              {category.badge && (
                <div className={`category-badge ${category.color}`}>
                  {category.badge}
                </div>
              )}
              
              <div className="category-card-header">
                <div className="category-image">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="card-header">
                <div className="category-icon-wrapper">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>
                <div className="category-meta">
                  <div className="category-count">
                    <span className="count-number">{category.count}</span>
                    <span className="count-unit">{category.unit}</span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <h3>{category.title}</h3>
                <p className="category-description">{category.description}</p>
                
                <div className="category-features">
                  <h4>{trans.categoryFeatures}</h4>
                  <ul>
                    {category.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="category-tags">
                  {category.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <div className="footer-content">
                  <Button variant="primary" size="small">
                    {trans.browse}
                    <ChevronRight size={16} />
                  </Button>
                  <div className="action-links">
                    <a href="#" className="link">{trans.learnMore}</a>
                    <a href="#" className="link">{trans.getQuote}</a>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="card-overlay">
                <div className="overlay-content">
                  <TrendingUp size={24} />
                  <span>{trans.explore} {category.title.toLowerCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Navigation */}
        <div className="category-navigation">
          <div className="nav-dots">
            {categories.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeCategory ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
                aria-label={`${language === 'en' ? 'View category' : 'Angalia kategoria'} ${index + 1}`}
              />
            ))}
          </div>
          <div className="nav-info">
            <span className="current-category">
              {categories[activeCategory].title}
            </span>
            <span className="category-counter">
              {activeCategory + 1}/{categories.length}
            </span>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <div className="benefits-header">
            <h3>{trans.whyChooseProducts}</h3>
            <p>{trans.industryLeadingQuality}</p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <div className="benefit-content">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="category-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h3>{trans.needExpertAdvice}</h3>
              <p>
                {trans.technicalTeamReady}
              </p>
            </div>
            <div className="cta-actions">
              <Button variant="primary" size="large">
                {trans.getQuote}
              </Button>
              <Button variant="secondary" size="large">
                {trans.contactSales}
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="large">
                <Settings size={20} />
                {language === 'en' ? 'Technical Support' : 'Msaada wa Kiufundi'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategory