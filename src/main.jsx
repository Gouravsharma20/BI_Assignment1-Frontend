import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import HomePage from './Pages/HomePage.jsx'

import Header from './Components/Header.jsx'
import DetailsPage from './Pages/DetailsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <HomePage />
    <DetailsPage/>
  </StrictMode>,
)
