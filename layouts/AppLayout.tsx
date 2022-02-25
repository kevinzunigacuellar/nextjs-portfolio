import SpotifyPlayer from "components/SpotifyPlayer";
import Navbar from "components/Navbar";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-screen bg-gray-100 antialiased selection:bg-teal-300 selection:text-teal-900 dark:bg-gray-900/95 dark:selection:bg-indigo-300 dark:selection:text-indigo-900">
        <div className="mx-auto max-w-3xl px-8 pb-36 pt-20">
          {children}
          <div className="mt-10 border-t pt-6 dark:border-gray-700">
            <SpotifyPlayer />
          </div>
        </div>
      </main>
    </>
  );
}
