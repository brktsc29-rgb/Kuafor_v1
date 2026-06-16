import { Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect, useEffect } from 'react'
import AwardsPage       from './components/AwardsPage'
import TokatKuaforPage  from './pages/TokatKuaforPage'
import TokatGelinSaciPage from './pages/TokatGelinSaciPage'
import TurhalKuaforPage from './pages/TurhalKuaforPage'
import TokatOmbrePage   from './pages/TokatOmbrePage'
import TokatRoflePage   from './pages/TokatRoflePage'
import TokatMakyajPage  from './pages/TokatMakyajPage'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

function ScrollToTop() {
  const { pathname } = useLocation()
  useIsomorphicLayoutEffect(() => { window.scrollTo(0, 0) }, [pathname])
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
        <Route path="/tokat-rofle"      element={<TokatRoflePage />} />
        <Route path="/tokat-makyaj"     element={<TokatMakyajPage />} />
      </Routes>
    </>
  )
}
