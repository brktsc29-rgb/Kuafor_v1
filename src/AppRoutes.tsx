import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { lenisInstance } from './hooks/useLenis'
import AwardsPage         from './components/AwardsPage'
import TokatKuaforPage    from './pages/TokatKuaforPage'
import TokatGelinSaciPage from './pages/TokatGelinSaciPage'
import TurhalKuaforPage   from './pages/TurhalKuaforPage'
import TokatOmbrePage     from './pages/TokatOmbrePage'
import AmasyaKuaforPage   from './pages/AmasyaKuaforPage'
import TokatMakyajPage    from './pages/TokatMakyajPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"                 element={<AwardsPage />} />
        <Route path="/tokat-kuafor"     element={<TokatKuaforPage />} />
        <Route path="/tokat-gelin-saci" element={<TokatGelinSaciPage />} />
        <Route path="/turhal-kuafor"    element={<TurhalKuaforPage />} />
        <Route path="/tokat-ombre"      element={<TokatOmbrePage />} />
        <Route path="/amasya-kuafor"    element={<AmasyaKuaforPage />} />
        <Route path="/tokat-rofle"      element={<Navigate to="/amasya-kuafor" replace />} />
        <Route path="/tokat-makyaj"     element={<TokatMakyajPage />} />
      </Routes>
    </>
  )
}
