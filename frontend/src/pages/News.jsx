import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Calendar, Tag, ArrowRight, Share2 } from 'lucide-react'
import './CSS/News.css'

const News = () => {
  const { language } = useLanguage()

  const translations = {
    en: {
      heroTitle: 'News & Insights',
      heroSubtitle: 'Stay updated with the latest from KALUU and the mining industry',
      companyUpdate: 'Company Update',
      safetyBulletin: 'Safety Bulletin',
      industryInsight: 'Industry Insight',
      projectUpdate: 'Project Update',
      allNews: 'All News',
      expandOperations: 'KALUU Expands Operations to Northern Mining Region',
      expandExcerpt: 'We are proud to announce the opening of our new regional office in Mwanza.',
      safetyProtocols: 'Updated Blasting Safety Protocols for 2026',
      safetyExcerpt: 'New comprehensive safety guidelines implemented across all operations.',
      detonationTech: 'The Future of Electronic Detonation Technology',
      detonationExcerpt: 'Exploring how advanced detonators are revolutionizing precision blasting.',
      isoCertification: 'KALUU Achieves ISO 45001 Safety Certification',
      isoExcerpt: 'Our commitment to occupational health and safety recognized with ISO certification.',
      sustainableMining: 'Sustainable Mining: Reducing Environmental Impact',
      sustainableExcerpt: 'How modern techniques minimize environmental footprint while maximizing efficiency.',
      geitaMilestone: 'Geita Gold Mine Project Reaches Milestone',
      geitaExcerpt: 'Successful completion of phase one blasting operations.',
      featured: 'Featured',
      readFullArticle: 'Read Full Article',
      share: 'Share',
      subscribeNewsletter: 'Subscribe to Our Newsletter',
      newsletterDesc: 'Get the latest updates, safety tips, and industry insights delivered to your inbox',
      enterEmail: 'Enter your email address',
      subscribe: 'Subscribe',
      privacyNote: 'By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.',
      readMore: 'Read More'
    },
    sw: {
      heroTitle: 'Habari na Ufahamu',
      heroSubtitle: 'Endelea kusasishwa na habari za hivi karibuni kutoka KALUU na tasnia ya uchimbaji madini',
      companyUpdate: 'Sasisho la Kampuni',
      safetyBulletin: 'Taarifa ya Usalama',
      industryInsight: 'Ufahamu wa Tasnia',
      projectUpdate: 'Sasisho la Mradi',
      allNews: 'Habari Zote',
      expandOperations: 'KALUU Inapanua Shughuli kwa Mkoa wa Kaskazini wa Uchimbaji',
      expandExcerpt: 'Tunafurahi kutangaza kufunguliwa kwa ofisi yetu mpya ya kikanda huko Mwanza.',
      safetyProtocols: 'Itifaki Zilizosasishwa za Usalama wa Blasting kwa 2026',
      safetyExcerpt: 'Miongozo mpya kamili ya usalama imeanzishwa katika shughuli zote.',
      detonationTech: 'Siku za Baadaye ya Teknolojia ya Detonation ya Elektroniki',
      detonationExcerpt: 'Kuchunguza jinsi detonator za juu zinavyobadilisha blasting sahihi.',
      isoCertification: 'KALUU Inapata Udhibitisho wa Usalama ISO 45001',
      isoExcerpt: 'Kujitolea kwetu kwa afya na usalama wa kazi kimetambuliwa na udhibitisho wa ISO.',
      sustainableMining: 'Uchimbaji Endelevu: Kupunguza Athari ya Mazingira',
      sustainableExcerpt: 'Jinsi mbinu za kisasa zinavyopunguza alama ya mazingira huku zikiongeza ufanisi.',
      geitaMilestone: 'Mradi wa Mgodi wa Dhahabu Geita Unafikia Hatua',
      geitaExcerpt: 'Ukamilishaji wa mafanikio wa shughuli za blasting za awamu ya kwanza.',
      featured: 'Imeangaziwa',
      readFullArticle: 'Soma Nakala Kamili',
      share: 'Shiriki',
      subscribeNewsletter: 'Jiandikishe kwa Jarida Letu',
      newsletterDesc: 'Pata visasisho vya hivi karibuni, vidokezo vya usalama, na ufahamu wa tasnia vilivyowasilishwa kwenye sanduku lako la barua',
      enterEmail: 'Weka anwani yako ya barua pepe',
      subscribe: 'Jiandikishe',
      privacyNote: 'Kwa kujiandikisha, unakubaliana na Sera yetu ya Faragha. Unaweza kujiondoa wakati wowote.',
      readMore: 'Soma Zaidi'
    }
  }

  const trans = translations[language]

  const newsArticles = [
    {
      id: 1,
      category: trans.companyUpdate,
      title: trans.expandOperations,
      excerpt: trans.expandExcerpt,
      date: language === 'en' ? 'January 5, 2026' : '5 Januari 2026',
      featured: true
    },
    {
      id: 2,
      category: trans.safetyBulletin,
      title: trans.safetyProtocols,
      excerpt: trans.safetyExcerpt,
      date: language === 'en' ? 'January 2, 2026' : '2 Januari 2026',
      featured: false
    },
    {
      id: 3,
      category: trans.industryInsight,
      title: trans.detonationTech,
      excerpt: trans.detonationExcerpt,
      date: language === 'en' ? 'December 28, 2025' : '28 Desemba 2025',
      featured: false
    },
    {
      id: 4,
      category: trans.companyUpdate,
      title: trans.isoCertification,
      excerpt: trans.isoExcerpt,
      date: language === 'en' ? 'December 20, 2025' : '20 Desemba 2025',
      featured: false
    },
    {
      id: 5,
      category: trans.industryInsight,
      title: trans.sustainableMining,
      excerpt: trans.sustainableExcerpt,
      date: language === 'en' ? 'December 15, 2025' : '15 Desemba 2025',
      featured: false
    },
    {
      id: 6,
      category: trans.projectUpdate,
      title: trans.geitaMilestone,
      excerpt: trans.geitaExcerpt,
      date: language === 'en' ? 'December 10, 2025' : '10 Desemba 2025',
      featured: false
    }
  ]

  const categories = [
    trans.allNews,
    trans.companyUpdate,
    trans.safetyBulletin,
    trans.industryInsight,
    trans.projectUpdate
  ]

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="container">
          <div className="news-hero-content">
            <h1>{trans.heroTitle}</h1>
            <p className="hero-subtitle">
              {trans.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container">
          {newsArticles.filter(article => article.featured).map(article => (
            <div key={article.id} className="featured-article">
              <div className="featured-image">
                <div className="article-badge">{trans.featured}</div>
              </div>
              <div className="featured-content">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-date">
                    <Calendar size={16} />
                    {article.date}
                  </span>
                </div>
                <h2>{article.title}</h2>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-actions">
                  <button className="btn btn-primary">
                    {trans.readFullArticle}
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn btn-text">
                    <Share2 size={18} />
                    {trans.share}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="news-categories">
            {categories.map(category => (
              <button key={category} className="category-btn">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="news-grid">
            {newsArticles.filter(article => !article.featured).map(article => (
              <article key={article.id} className="news-card">
                <div className="news-image">
                  <div className="category-tag">
                    <Tag size={12} />
                    {article.category}
                  </div>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                  </div>
                  <h3>{article.title}</h3>
                  <p className="news-excerpt">{article.excerpt}</p>
                  <div className="news-actions">
                    <button className="btn btn-text">{trans.readMore}</button>
                    <button className="btn btn-text">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="newsletter-section">
            <h2>{trans.subscribeNewsletter}</h2>
            <p>{trans.newsletterDesc}</p>
            <div className="newsletter-form">
              <input type="email" placeholder={trans.enterEmail} />
              <button className="btn btn-primary">{trans.subscribe}</button>
            </div>
            <p className="newsletter-note">
              {trans.privacyNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News