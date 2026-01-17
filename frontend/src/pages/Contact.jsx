import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ContactForm from '../components/Sections/ContactForm'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from 'lucide-react'
import './CSS/Contact.css'

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null)
  const { language } = useLanguage()

  const translations = {
    en: {
      heroTitle: 'Contact Us',
      heroSubtitle: 'Ready to power your mining operations? Get in touch with our team.',
      address: 'Address',
      headquarters: 'Iramba – Singida, Tanzania',
      miningDistrict: 'Mining District Office',
      viewOnMap: 'View on Map',
      branchOffices: 'Branch Offices',
      locateUs: 'Locate Us',
      phone: 'Phone',
      hours: 'Mon-Fri 8AM-6PM',
      callNow: 'Call Now',
      email: 'Email',
      responseTime: '24hr response time',
      sendEmail: 'Send Email',
      hoursTitle: 'Hours',
      emergencyLine: '24/7 Emergency Line',
      alwaysAvailable: 'Always available',
      emergencyContact: 'Emergency Contact',
      sendMessage: 'Send Us a Message',
      contactByDept: 'Contact by Department',
      rightTeam: 'Get in touch with the right team for your needs',
      generalInquiries: 'General Inquiries',
      salesQuotations: 'Sales & Quotations',
      technicalSupport: 'Technical Support',
      safetyCompliance: 'Safety & Compliance',
      humanResources: 'Human Resources',
      emergencyContactDept: 'Emergency Contact',
      connectWithUs: 'Connect With Us',
      socialMedia: 'Follow us on social media for updates and industry insights',
      quickContact: 'Quick Contact',
      requestCallback: 'Request Callback',
      mapIntegration: 'Map Integration',
      comingSoon: 'Coming Soon',
      departments: [
        'General Inquiries',
        'Sales & Quotations',
        'Technical Support',
        'Safety & Compliance',
        'Human Resources',
        'Emergency Contact'
      ]
    },
    sw: {
      heroTitle: 'Wasiliana Nasi',
      heroSubtitle: 'Tayari kuwezesha shughuli zako za uchimbaji madini? Wasiliana na timu yetu.',
      address: 'Anwani',
      headquarters: 'Iramba – Singida, Tanzania',
      miningDistrict: 'Ofisi ya Wilaya ya Uchimbaji',
      viewOnMap: 'Angalia Ramani',
      branchOffices: 'Ofisi za Tawi',
      locateUs: 'Tupate',
      phone: 'Simu',
      hours: 'Jumatatu-Ijumaa 8AM-6PM',
      callNow: 'Piga Sasa',
      email: 'Barua Pepe',
      responseTime: 'Majibu ndani ya masaa 24',
      sendEmail: 'Tuma Barua',
      hoursTitle: 'Saa',
      emergencyLine: 'Mstari wa Dharura 24/7',
      alwaysAvailable: 'Inapatikana kila wakati',
      emergencyContact: 'Mawasiliano ya Dharura',
      sendMessage: 'Tutume Ujumbe',
      contactByDept: 'Wasiliana kwa Idara',
      rightTeam: 'Wasiliana na timu sahihi kwa mahitaji yako',
      generalInquiries: 'Maswali ya Jumla',
      salesQuotations: 'Uuzaji na Nukuu',
      technicalSupport: 'Msaada wa Kiufundi',
      safetyCompliance: 'Usalama na Kufuata',
      humanResources: 'Rasilimali ya Watu',
      emergencyContactDept: 'Mawasiliano ya Dharura',
      connectWithUs: 'Ungana Nasi',
      socialMedia: 'Tufuate kwenye mitandao ya kijamii kwa visasisho na ufahamu wa tasnia',
      quickContact: 'Mawasiliano ya Haraka',
      requestCallback: 'Omba Wito wa Kurudi',
      mapIntegration: 'Ujumuishaji wa Ramani',
      comingSoon: 'Inakuja Hivi Karibuni',
      departments: [
        'Maswali ya Jumla',
        'Uuzaji na Nukuu',
        'Msaada wa Kiufundi',
        'Usalama na Kufuata',
        'Rasilimali ya Watu',
        'Mawasiliano ya Dharura'
      ]
    }
  }

  const trans = translations[language]

  const contactInfo = [
    {
      icon: <MapPin />,
      title: trans.address,
      details: [trans.headquarters, trans.miningDistrict],
      action: trans.viewOnMap
    },
    {
      icon: <MapPin />,
      title: trans.branchOffices,
      details: ['Tabora', 'Shinyanga (Kahama)', 'Geita'],
      action: trans.locateUs
    },
    {
      icon: <Phone />,
      title: trans.phone,
      details: ['+255 123 456 789', trans.hours],
      action: trans.callNow
    },
    {
      icon: <Mail />,
      title: trans.email,
      details: ['info@kaluuexplosives.co.tz', trans.responseTime],
      action: trans.sendEmail
    },
    {
      icon: <Clock />,
      title: trans.hoursTitle,
      details: [trans.emergencyLine, trans.alwaysAvailable],
      action: trans.emergencyContact
    }
  ]

  const socialLinks = [
    { icon: <Facebook />, name: 'Facebook', url: '#' },
    { icon: <Twitter />, name: 'Twitter', url: '#' },
    { icon: <Linkedin />, name: 'LinkedIn', url: '#' }
  ]

  const departments = [
    { name: trans.departments[0], email: 'info@kaluuexplosives.co.tz' },
    { name: trans.departments[1], email: 'sales@kaluuexplosives.co.tz' },
    { name: trans.departments[2], email: 'support@kaluuexplosives.co.tz' },
    { name: trans.departments[3], email: 'safety@kaluuexplosives.co.tz' },
    { name: trans.departments[4], email: 'hr@kaluuexplosives.co.tz' },
    { name: trans.departments[5], email: 'emergency@kaluuexplosives.co.tz' }
  ]

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>{trans.heroTitle}</h1>
            <p className="hero-subtitle">
              {trans.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <button className="btn btn-secondary btn-small">{info.action}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="contact-form-section">
            <div className="form-container">
              <h2>{trans.sendMessage}</h2>
              <ContactForm onStatusChange={setFormStatus} />
              
              {formStatus && (
                <div className={`form-status ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
            </div>
            
            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={48} />
                <p>{trans.mapIntegration}</p>
                <p className="placeholder-note">{trans.comingSoon}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>{trans.contactByDept}</h2>
            <p>{trans.rightTeam}</p>
          </div>
          
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <h3>{dept.name}</h3>
                <p className="department-email">{dept.email}</p>
                <a href={`mailto:${dept.email}`} className="btn btn-secondary btn-small">
                  {trans.sendEmail}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Social Media */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="social-section">
            <div className="social-content">
              <h2>{trans.connectWithUs}</h2>
              <p>{trans.socialMedia}</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="quick-contact">
              <h3>{trans.quickContact}</h3>
              <div className="quick-info">
                <div className="quick-item">
                  <Phone size={20} />
                  <span>+255 123 456 789</span>
                </div>
                <div className="quick-item">
                  <Mail size={20} />
                  <span>info@kaluuexplosives.co.tz</span>
                </div>
              </div>
              <button className="btn btn-primary">{trans.requestCallback}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact