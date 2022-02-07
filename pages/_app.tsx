import "styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import Navbar from "components/Navbar";
import type { AppProps } from "next/app";

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
          <div className="mx-auto max-w-4xl px-6 py-20 pb-36">
            <Component {...pageProps} />
          </div>
        </main>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
