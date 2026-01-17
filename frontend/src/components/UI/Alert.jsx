import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react'
import './Alert.css'

const Alert = ({ 
  type = 'info', 
  title, 
  children, 
  showIcon = true, 
  onClose 
}) => {
  const { language } = useLanguage()
  
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertCircle,
    error: XCircle,
  }

  const Icon = icons[type]

  // Alert type translations
  const typeTranslations = {
    en: {
      info: 'Information',
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      close: 'Close'
    },
    sw: {
      info: 'Taarifa',
      success: 'Mafanikio',
      warning: 'Onyo',
      error: 'Hitilafu',
      close: 'Funga'
    }
  }

  const trans = typeTranslations[language]

  return (
    <div className={`alert alert-${type}`} role="alert">
      {showIcon && <Icon className="alert-icon" size={20} />}
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        {children && <div className="alert-message">{children}</div>}
      </div>
      {onClose && (
        <button 
          className="alert-close" 
          onClick={onClose}
          aria-label={trans.close}
        >
          <XCircle size={20} />
        </button>
      )}
    </div>
  )
}

export default Alert