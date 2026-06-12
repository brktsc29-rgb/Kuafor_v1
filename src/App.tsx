import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AwardsPage from './components/AwardsPage'
import TokatKuaforPage from './pages/TokatKuaforPage'
import TokatGelinSaciPage from './pages/TokatGelinSaciPage'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AwardsPage />} />
          <Route path="/tokat-kuafor" element={<TokatKuaforPage />} />
          <Route path="/tokat-gelin-saci" element={<TokatGelinSaciPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
