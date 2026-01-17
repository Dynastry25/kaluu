// src/components/UI/LoadingSpinner.jsx
import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './LoadingSpinner.css'

const LoadingSpinner = ({ size = 'medium', color = 'primary', message = null }) => {
  const { language } = useLanguage()
  
  const sizeClass = `spinner-${size}`
  const colorClass = `spinner-${color}`

  // Default messages based on language
  const defaultMessages = {
    en: 'Loading...',
    sw: 'Inapakia...'
  }

  const displayMessage = message || defaultMessages[language]

  return (
    <div className="enhanced-loading-spinner" role="status" aria-live="polite">
      <div className="spinner-wrapper">
        <div className={`spinner-container ${sizeClass} ${colorClass}`}>
          <div className="spinner">
            <div className="spinner-inner"></div>
          </div>
        </div>
        <div className="spinner-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>
      {displayMessage && (
        <div className="spinner-message" aria-label={displayMessage}>
          {displayMessage}
        </div>
      )}
    </div>
  )
}

export default LoadingSpinner