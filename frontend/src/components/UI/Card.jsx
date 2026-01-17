import React from 'react'
import './Card.css'

const Card = ({ children, className = '', hover = false, variant = 'default', ...props }) => {
  const variantClass = variant !== 'default' ? `card-${variant}` : ''
  return (
    <div 
      className={`card ${hover ? 'card-hover' : ''} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className = '' }) => (
  <div className={`card-header ${className}`}>{children}</div>
)

export const CardBody = ({ children, className = '' }) => (
  <div className={`card-body ${className}`}>{children}</div>
)

export const CardFooter = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>{children}</div>
)

export default Card