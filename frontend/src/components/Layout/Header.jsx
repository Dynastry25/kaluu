import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Globe } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Header.css'
import KALUU from '/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  const navItems = [
    { name: language === 'en' ? 'Home' : 'Nyumbani', path: '/' },
    { name: language === 'en' ? 'About' : 'Kuhusu', path: '/about' },
    { name: language === 'en' ? 'Services' : 'Huduma', path: '/services' },
    { name: language === 'en' ? 'Products' : 'Bidhaa', path: '/products' },
    { name: language === 'en' ? 'Projects' : 'Miradi', path: '/projects' },
    { name: language === 'en' ? 'Safety' : 'Usalama', path: '/safety' },
    { name: language === 'en' ? 'News' : 'Habari', path: '/news' },
    { name: language === 'en' ? 'Contact' : 'Wasiliana', path: '/contact' },
  ]

  return (
    <header className="kaluu-header">
      {/* Top Bar */}
      <div className="kaluu-top-bar">
        <div className="container">
          <div className="kaluu-top-bar-content">
            <div className="kaluu-contact-info">
              <div className="kaluu-contact-item">
                <Phone size={16} color={'white'} fontWeight={600} />
                <span>+255 123 456 789</span>
              </div>
              <div className="kaluu-contact-item">
                <MapPin size={16} color={'white'} fontWeight={600} />
                <span>Iramba – Singida, Tanzania</span>
              </div>
            </div>
            <div className="kaluu-top-bar-actions">
              {/* Language Switcher */}
              <button 
                className="kaluu-language-switcher"
                onClick={toggleLanguage}
                aria-label={language === 'en' ? 'Switch to Swahili' : 'Switch to English'}
              >
                <Globe size={16} color={'white'} fontWeight={600} />
                <span>{language === 'en' ? 'SW' : 'EN'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="kaluu-main-nav">
        <div className="container">
          <div className="kaluu-nav-content">
            {/* Logo */}
            <Link to="/" className="kaluu-logo">
              <img src={KALUU} className='kaluu-logo-icon' alt="KALUU Logo" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="kaluu-desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="kaluu-nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="kaluu-header-actions">
              <button className="btn btn-primary">
                {language === 'en' ? 'Get Quote' : 'Pata Bei'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="kaluu-mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="kaluu-mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="kaluu-mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="kaluu-mobile-actions">
                <button className="btn btn-primary">
                  {language === 'en' ? 'Get Quote' : 'Pata Bei'}
                </button>
                <button 
                  className="btn btn-secondary kaluu-language-switcher-mobile"
                  onClick={toggleLanguage}
                >
                  <Globe size={18} />
                  {language === 'en' ? 'SWAHILI' : 'ENGLISH'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header