import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AwardsPage from './components/AwardsPage'
import TokatKuaforPage from './pages/TokatKuaforPage'
import TokatGelinSaciPage from './pages/TokatGelinSaciPage'
import TurhalKuaforPage from './pages/TurhalKuaforPage'
import TokatOmbrePage from './pages/TokatOmbrePage'
import TokatRoflePage from './pages/TokatRoflePage'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AwardsPage />} />
          <Route path="/tokat-kuafor" element={<TokatKuaforPage />} />
          <Route path="/tokat-gelin-saci" element={<TokatGelinSaciPage />} />
          <Route path="/turhal-kuafor" element={<TurhalKuaforPage />} />
          <Route path="/tokat-ombre" element={<TokatOmbrePage />} />
          <Route path="/tokat-rofle" element={<TokatRoflePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
