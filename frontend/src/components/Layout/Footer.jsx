import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import KALUU from '/logo.png'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()

  const translations = {
    en: {
      companyDescription: "Tanzania's leading provider of industrial explosives, mining equipment, and comprehensive logistics solutions for the mining industry.",
      services: "Services",
      explosivesSupply: "Explosives Supply",
      equipmentRental: "Equipment Rental",
      logisticsTransport: "Logistics & Transport",
      consultingServices: "Consulting Services",
      company: "Company",
      aboutUs: "About Us",
      safetyStandards: "Safety Standards",
      projects: "Projects",
      newsUpdates: "News & Updates",
      contactUs: "Contact Us",
      subscribe: "Subscribe to our newsletter",
      yourEmail: "Your email",
      subscribeBtn: "Subscribe",

      safetyCertified: "Safety Certified",
      copyright: `© ${currentYear} KALUU Explosives Company Limited. All rights reserved.`,
      licensed: "Licensed by Tanzania Mining Commission"
    },
    sw: {
      companyDescription: "Mtoaji wa kuongoza wa Tanzania wa milipuko ya viwandani, vifaa vya uchimbaji madini, na suluhisho kamili za usafirishaji kwa tasnia ya uchimbaji madini.",
      services: "Huduma",
      explosivesSupply: "Usambazaji wa Milipuko",
      equipmentRental: "Kukodi Vifaa",
      logisticsTransport: "Usafirishaji na Usafirishaji",
      consultingServices: "Huduma za Ushauri",
      company: "Kampuni",
      aboutUs: "Kuhusu Sisi",
      safetyStandards: "Viwango vya Usalama",
      projects: "Miradi",
      newsUpdates: "Habari na Sasisho",
      contactUs: "Wasiliana Nasi",
      subscribe: "Jiandikishe kwa jarida letu",
      yourEmail: "Barua pepe yako",
      subscribeBtn: "Jiandikishe",
      iso9001: "ISO 9001:2015",
      tmcLicensed: "Imelicenshwa TUME",
      safetyCertified: "Imethibitishwa Usalama",
      copyright: `© ${currentYear} Kampuni ya KALUU Explosives Limited. Haki zote zimehifadhiwa.`,
      licensed: "Imelicenshwa na Tume ya Uchimbaji Madini Tanzania"
    }
  }

  const trans = translations[language]

  const footerLinks = {
    services: [
      { name: trans.explosivesSupply, path: '/services#explosives' },
      { name: trans.equipmentRental, path: '/services#equipment' },
      { name: trans.logisticsTransport, path: '/services#logistics' },
      { name: trans.consultingServices, path: '/services#consulting' },
    ],
    company: [
      { name: trans.aboutUs, path: '/about' },
      { name: trans.safetyStandards, path: '/safety' },
      { name: trans.projects, path: '/projects' },
      { name: trans.newsUpdates, path: '/news' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Instagram, label: 'Instagram', url: '#' },
  ]

  const contactInfo = [
    { icon: Phone, text: '+255 123 456 789' },
    { icon: Mail, text: 'info@kaluuexplosives.co.tz' },
    { icon: MapPin, text: 'Iramba – Singida, Tanzania' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand & Info */}
          <div className="footer-brand">
            <img src={KALUU} alt="KALUU Logo" className='footer-logo' />
            <p className="company-description">
              {trans.companyDescription}
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="social-link"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">{trans.services}</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">{trans.company}</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">{trans.contactUs}</h4>
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <info.icon size={18} />
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
            <div className="newsletter">
              <p>{trans.subscribe}</p>
              <div className="newsletter-form">
                <input type="email" placeholder={trans.yourEmail} />
                <button className="btn btn-primary">{trans.subscribeBtn}</button>
              </div>
            </div>
          </div>
        </div>

 
      </div>
    </footer>
  )
}

export default Footer