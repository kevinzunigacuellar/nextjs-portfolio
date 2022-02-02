import "styles/globals.css";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Navbar from "components/Navbar";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="system"
    >
      <Navbar />
      <main className="min-h-screen w-screen bg-white dark:bg-gray-900/95">
        <motion.div
          className="mx-auto max-w-4xl px-6 py-20 pb-36"
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
