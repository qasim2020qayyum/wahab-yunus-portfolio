import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Contacts from './components/contacts/Contacts'
import PortfolioD from './components/portfolio/PortfolioD/PortfolioD'
import PortfolioInfo from './components/portfolio/PortfolioInfo'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='home' />
          <Route path='about' />
          <Route path='services' />
          <Route path='experience' />
          <Route path='portfolio'>
            <Route path=':portfolioId' element={<PortfolioInfo />} />
          </Route>
          <Route path='/portfolio-web' element={<PortfolioD />} />
          <Route path='testimonials' />
          <Route path='/contacts' element={<Contacts/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
