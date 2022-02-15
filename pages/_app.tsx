import "styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import Navbar from "components/Navbar";
import type { AppProps } from "next/app";
import SpotifyPlayer from "components/SpotifyPlayer";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="system"
    >
      <SessionProvider session={session}>
        <Navbar />
        <main className="min-h-screen w-screen bg-white antialiased selection:bg-teal-300 selection:text-teal-900 dark:bg-gray-900/95 dark:selection:bg-sky-300 dark:selection:text-sky-900">
          <div className="mx-auto max-w-4xl px-8 pb-36 pt-20">
            <Component {...pageProps} />
            <div className="mt-10 border-t pt-6 dark:border-gray-700">
              <SpotifyPlayer />
            </div>
          </div>
        </main>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
