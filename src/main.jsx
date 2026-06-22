import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import App from './App.jsx'

import HomePage from './Pages/HomePage.jsx'


import DetailsPage from './Pages/DetailsPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/events/:id" element={<DetailsPage />} />
  </Routes>
</BrowserRouter>
)
