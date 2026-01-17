import React, { useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { X } from 'lucide-react'
import './Modal.css'

const Modal = ({ isOpen, onClose, title, children, size = 'medium' }) => {
  const { language } = useLanguage()
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Add escape key listener
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.body.style.overflow = 'unset'
        document.removeEventListener('keydown', handleEscape)
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const translations = {
    en: {
      close: 'Close modal'
    },
    sw: {
      close: 'Funga modali'
    }
  }

  const trans = translations[language]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal modal-${size}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          {title && <h3 className="modal-title" id="modal-title">{title}</h3>}
          <button 
            className="modal-close" 
            onClick={onClose}
            aria-label={trans.close}
          >
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal