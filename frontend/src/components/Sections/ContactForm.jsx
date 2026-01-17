import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Send, User, Mail, Building, MessageSquare } from 'lucide-react'
import './ContactForm.css'

const ContactForm = ({ onStatusChange }) => {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Translations for contact form
  const translations = {
    en: {
      nameLabel: 'Your Name *',
      emailLabel: 'Email Address *',
      companyLabel: 'Company Name',
      phoneLabel: 'Phone Number',
      subjectLabel: 'Subject',
      messageLabel: 'Your Message *',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.',
      requiredNote: '* Required fields. We respect your privacy and will never share your information.',
      placeholderName: 'John Doe',
      placeholderEmail: 'john@company.com',
      placeholderCompany: 'Mining Corp Ltd',
      placeholderPhone: '+255 XXX XXX XXX',
      placeholderMessage: 'Tell us about your project requirements, questions, or concerns...',
      
      // Subjects
      generalInquiry: 'General Inquiry',
      requestQuote: 'Request Quote',
      technicalSupport: 'Technical Support',
      safetyConsultation: 'Safety Consultation',
      equipmentRental: 'Equipment Rental',
      careers: 'Careers',
      other: 'Other'
    },
    sw: {
      nameLabel: 'Jina Lako *',
      emailLabel: 'Anwani ya Barua Pepe *',
      companyLabel: 'Jina la Kampuni',
      phoneLabel: 'Nambari ya Simu',
      subjectLabel: 'Mada',
      messageLabel: 'Ujumbe Wako *',
      sendButton: 'Tuma Ujumbe',
      sending: 'Inatumwa...',
      successMessage: 'Asante! Ujumbe wako umetumwa kikamilifu. Tutawasiliana nawe ndani ya masaa 24.',
      requiredNote: '* Sehemu zinazohitajika. Tunaheshimu faragha yako na hatutawahi kushiriki maelezo yako.',
      placeholderName: 'Juma Mohamed',
      placeholderEmail: 'juma@kampuni.com',
      placeholderCompany: 'Kampuni ya Uchimbaji Madini Ltd',
      placeholderPhone: '+255 XXX XXX XXX',
      placeholderMessage: 'Tuambie kuhusu mahitaji ya mradi wako, maswali, au wasiwasi...',
      
      // Subjects
      generalInquiry: 'Uchunguzi wa Kawaida',
      requestQuote: 'Omba Nukuu',
      technicalSupport: 'Msaada wa Kiufundi',
      safetyConsultation: 'Ushauri wa Usalama',
      equipmentRental: 'Kukodisha Vifaa',
      careers: 'Kazi',
      other: 'Nyingine'
    }
  }

  const trans = translations[language]

  const subjects = [
    trans.generalInquiry,
    trans.requestQuote,
    trans.technicalSupport,
    trans.safetyConsultation,
    trans.equipmentRental,
    trans.careers,
    trans.other
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onStatusChange({
        type: 'success',
        message: trans.successMessage
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: trans.generalInquiry,
        message: ''
      })
    }, 1500)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">
            <User size={18} />
            {trans.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={trans.placeholderName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <Mail size={18} />
            {trans.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={trans.placeholderEmail}
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">
            <Building size={18} />
            {trans.companyLabel}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={trans.placeholderCompany}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            <User size={18} />
            {trans.phoneLabel}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={trans.placeholderPhone}
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="subject">
            <MessageSquare size={18} />
            {trans.subjectLabel}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">
            <MessageSquare size={18} />
            {trans.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder={trans.placeholderMessage}
          />
        </div>
      </div>

      <div className="form-actions">
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? trans.sending : trans.sendButton}
          {!isSubmitting && <Send size={18} />}
        </button>
        <p className="form-note">
          {trans.requiredNote}
        </p>
      </div>
    </form>
  )
}

export default ContactForm