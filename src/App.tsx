import { useState } from 'react'
import AwardsPage    from './components/AwardsPage'
import CampaignPlayer from './components/CampaignPlayer'

type Page = 'awards' | 'campaign'

export default function App() {
  const [page, setPage] = useState<Page>('campaign')

  if (page === 'campaign') {
    return <CampaignPlayer onExit={() => setPage('awards')} />
  }

  return (
    <>
      <AwardsPage />
      {/* Floating link back to campaign player */}
      <button
        onClick={() => setPage('campaign')}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.7rem] tracking-wide transition-all duration-200 hover:scale-105"
        style={{ fontFamily: 'Inter, sans-serif', background: '#0B0906', color: '#C9A87C', border: '1px solid rgba(201,168,124,0.3)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
      >
        <span style={{ fontSize: '0.6rem' }}>▶</span>
        Campaign Player
      </button>
    </>
  )
}
