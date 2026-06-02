import { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import MainWebsite from './components/MainWebsite'

export default function App() {
  const [showMain, setShowMain] = useState(false)
  const [exitingIntro, setExitingIntro] = useState(false)

  const handleEnter = () => {
    setExitingIntro(true)
    setTimeout(() => {
      setShowMain(true)
    }, 700)
  }

  return (
    <>
      {!showMain && (
        <IntroScreen onEnter={handleEnter} exiting={exitingIntro} />
      )}
      {showMain && <MainWebsite />}
    </>
  )
}
