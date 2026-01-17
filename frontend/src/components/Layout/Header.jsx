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
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} color={'white'} fontWeight={600} />
                <span>+255 123 456 789</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} color={'white'} fontWeight={600} />
                <span>Iramba – Singida, Tanzania</span>
              </div>
            </div>
            <div className="top-bar-actions">
              <span className="badge">
                {language === 'en' 
                  ? 'Licensed by Tanzania Mining Commission' 
                  : 'Imelicenshwa na Tume ya Uchimbaji Madini Tanzania'
                }
              </span>
              {/* Language Switcher */}
              <button 
                className="language-switcher"
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
      <div className="main-nav">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <img src={KALUU} className='logo-icon' alt="KALUU Logo" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="header-actions">
              <button className="btn btn-primary">
                {language === 'en' ? 'Get Quote' : 'Pata Bei'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mobile-actions">
                <button className="btn btn-primary">
                  {language === 'en' ? 'Get Quote' : 'Pata Bei'}
                </button>
                <button 
                  className="btn btn-secondary language-switcher-mobile"
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