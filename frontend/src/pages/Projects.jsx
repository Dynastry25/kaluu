import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { MapPin, Calendar, Users, Award } from 'lucide-react'
import './CSS/Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const { language } = useLanguage()

  const translations = {
    en: {
      heroTitle: 'Our Projects',
      heroSubtitle: 'Showcasing our successful mining operations across Tanzania',
      allProjects: 'All Projects',
      goldMining: 'Gold Mining',
      diamondMining: 'Diamond Mining',
      copperMining: 'Copper Mining',
      quarryOperations: 'Quarry Operations',
      infrastructure: 'Infrastructure',
      geitaGold: 'Geita Gold Mine Expansion',
      geitaDesc: 'Comprehensive blasting operations for expansion of one of Africa\'s largest gold mines',
      mwanzaLimestone: 'Mwanza Limestone Quarry',
      mwanzaDesc: 'Full-service quarry blasting and material extraction for cement production',
      dodomaTunnel: 'Dodoma Highway Tunnel',
      dodomaDesc: 'Precision tunnel blasting for new highway connecting major economic zones',
      williamsonDiamond: 'Williamson Diamond Mine',
      williamsonDesc: 'Specialized blasting operations for diamond extraction requiring precise control',
      tangaCopper: 'Tanga Copper Mine',
      tangaDesc: 'Open-pit mining operations with optimized blasting patterns',
      arushaInfrastructure: 'Arusha Infrastructure Project',
      arushaDesc: 'Urban development project with controlled demolition and excavation',
      viewDetails: 'View Details',
      caseStudy: 'Case Study',
      projectStatistics: 'Project Statistics',
      trackRecord: 'Our track record of success',
      projectsCompleted: 'Projects Completed',
      happyClients: 'Happy Clients',
      yearsExperience: 'Years Experience',
      safetyRecord: 'Safety Record',
      blasts: 'Blasts',
      material: 'Material',
      duration: 'Duration',
      months: 'months'
    },
    sw: {
      heroTitle: 'Miradi Yetu',
      heroSubtitle: 'Kuonyesha shughuli zetu zilizofanikiwa za uchimbaji madini kote Tanzania',
      allProjects: 'Miradi Yote',
      goldMining: 'Uchimbaji wa Dhahabu',
      diamondMining: 'Uchimbaji wa Almasi',
      copperMining: 'Uchimbaji wa Shaba',
      quarryOperations: 'Shughuli za Mchimbaji',
      infrastructure: 'Miundombinu',
      geitaGold: 'Upanuzi wa Mgodi wa Dhahabu Geita',
      geitaDesc: 'Shughuli kamili za blasting kwa upanuzi wa mgodi mmoja wa dhahabu mkubwa zaidi barani Afrika',
      mwanzaLimestone: 'Mchimbaji wa Chokaa Mwanza',
      mwanzaDesc: 'Blasting ya huduma kamili ya mchimbaji na uchimbaji wa nyenzo kwa uzalishaji wa saruji',
      dodomaTunnel: 'Mtaro wa Barabara Kuu Dodoma',
      dodomaDesc: 'Blasting sahihi ya mtaro kwa barabara kuu mpya inayounganisha maeneo makubwa ya kiuchumi',
      williamsonDiamond: 'Mgodi wa Almasi Williamson',
      williamsonDesc: 'Shughuli maalum za blasting kwa uchimbaji wa almasi zinazohitaji udhibiti sahihi',
      tangaCopper: 'Mgodi wa Shaba Tanga',
      tangaDesc: 'Shughuli za uchimbaji madini wa mashimo wazi na miundo bora ya blasting',
      arushaInfrastructure: 'Mradi wa Miundombinu Arusha',
      arushaDesc: 'Mradi wa maendeleo ya mijini na uharibifu uliodhibitiwa na uchimbaji',
      viewDetails: 'Angalia Maelezo',
      caseStudy: 'Uchambuzi wa Kesi',
      projectStatistics: 'Takwimu za Mradi',
      trackRecord: 'Rekodi yetu ya mafanikio',
      projectsCompleted: 'Miradi Imekamilika',
      happyClients: 'Wateja Wenye Furaha',
      yearsExperience: 'Miaka ya Uzoefu',
      safetyRecord: 'Rekodi ya Usalama',
      blasts: 'Milipuko',
      material: 'Nyenzo',
      duration: 'Muda',
      months: 'miezi'
    }
  }

  const trans = translations[language]

  const projects = [
    {
      id: 1,
      title: trans.geitaGold,
      category: 'gold',
      location: language === 'en' ? 'Geita Region' : 'Mkoa wa Geita',
      year: '2024',
      description: trans.geitaDesc,
      stats: { blasts: '250+', material: '2.5M tons', duration: '18' }
    },
    {
      id: 2,
      title: trans.mwanzaLimestone,
      category: 'quarry',
      location: language === 'en' ? 'Mwanza' : 'Mwanza',
      year: '2023',
      description: trans.mwanzaDesc,
      stats: { blasts: '180+', material: '1.8M tons', duration: '12' }
    },
    {
      id: 3,
      title: trans.dodomaTunnel,
      category: 'infrastructure',
      location: language === 'en' ? 'Dodoma Region' : 'Mkoa wa Dodoma',
      year: '2023',
      description: trans.dodomaDesc,
      stats: { blasts: '320+', material: '800K tons', duration: '24' }
    },
    {
      id: 4,
      title: trans.williamsonDiamond,
      category: 'diamond',
      location: language === 'en' ? 'Shinyanga' : 'Shinyanga',
      year: '2022',
      description: trans.williamsonDesc,
      stats: { blasts: '150+', material: '1.2M tons', duration: '14' }
    },
    {
      id: 5,
      title: trans.tangaCopper,
      category: 'copper',
      location: language === 'en' ? 'Tanga Region' : 'Mkoa wa Tanga',
      year: '2022',
      description: trans.tangaDesc,
      stats: { blasts: '200+', material: '3M tons', duration: '16' }
    },
    {
      id: 6,
      title: trans.arushaInfrastructure,
      category: 'infrastructure',
      location: language === 'en' ? 'Arusha' : 'Arusha',
      year: '2021',
      description: trans.arushaDesc,
      stats: { blasts: '120+', material: '500K tons', duration: '10' }
    }
  ]

  const filters = [
    { id: 'all', label: trans.allProjects },
    { id: 'gold', label: trans.goldMining },
    { id: 'diamond', label: trans.diamondMining },
    { id: 'copper', label: trans.copperMining },
    { id: 'quarry', label: trans.quarryOperations },
    { id: 'infrastructure', label: trans.infrastructure }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1>{trans.heroTitle}</h1>
            <p className="hero-subtitle">
              {trans.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="project-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="category-badge">
                    {filters.find(f => f.id === project.category)?.label || project.category}
                  </div>
                  <div className="image-placeholder">
                    <span>{project.title}</span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span className="meta-item">
                      <MapPin size={16} />
                      {project.location}
                    </span>
                    <span className="meta-item">
                      <Calendar size={16} />
                      {project.year}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-stats">
                    <div className="stat">
                      <div className="stat-number">{project.stats.blasts}</div>
                      <div className="stat-label">{trans.blasts}</div>
                    </div>
                    <div className="stat">
                      <div className="stat-number">{project.stats.material}</div>
                      <div className="stat-label">{trans.material}</div>
                    </div>
                    <div className="stat">
                      <div className="stat-number">{project.stats.duration}</div>
                      <div className="stat-label">{trans.duration} ({trans.months})</div>
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    <button className="btn btn-primary">{trans.viewDetails}</button>
                    <button className="btn btn-secondary">{trans.caseStudy}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="section-header light">
            <h2>{trans.projectStatistics}</h2>
            <p>{trans.trackRecord}</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">{trans.projectsCompleted}</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <div className="stat-number">150+</div>
              <div className="stat-label">{trans.happyClients}</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Calendar size={32} />
              </div>
              <div className="stat-number">25+</div>
              <div className="stat-label">{trans.yearsExperience}</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">{trans.safetyRecord}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects