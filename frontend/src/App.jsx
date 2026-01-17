// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Projects from './pages/Projects'
import Safety from './pages/Safety'
import News from './pages/News'
import Contact from './pages/Contact'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import './App.css'

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ErrorBoundary>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </ErrorBoundary>
      </LanguageProvider>
    </Router>
  )
}

export default App