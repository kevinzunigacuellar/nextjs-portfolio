import SpotifyPlayer from 'components/SpotifyPlayer'
import Navbar from 'components/Navbar'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 sm:px-8 mt-20 mb-36">
        {children}
        <footer className="mt-10 border-t pt-6 dark:border-gray-800">
          <SpotifyPlayer />
        </footer>
      </main>
    </>
  )
}
