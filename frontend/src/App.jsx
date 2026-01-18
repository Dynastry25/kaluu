import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'
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


function AppContent() {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const [prevLocation, setPrevLocation] = useState(location)

  useEffect(() => {
    // Anza loading wakati location inabadilika
    if (prevLocation.pathname !== location.pathname) {
      setIsLoading(true)
      setPrevLocation(location)
    }
  }, [location, prevLocation])

  // Ongeza useEffect ya kusimulate loading time
  useEffect(() => {
    if (isLoading) {
      // Tumia setTimeout ya kuonyesha loading kwa muda mfupi
      // Hii ni kwa ajili ya UX - wasikose kuona loading
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 900) // 0.5 sekunde tu kuonyesha loading

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  // Simulate page load wakati unaanza app
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          flexDirection: 'column',
          gap: '20px'
        }}>
          <LoadingSpinner 
            size="large" 
            color="primary"
            message="Preparing your experience..."
          />
        </div>
      )}
      
      <Layout>
        <Routes location={location}>
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
    </>
  )
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ErrorBoundary>
          <AppContent />
        </ErrorBoundary>
      </LanguageProvider>
    </Router>
  )
}

export default App