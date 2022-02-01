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
      <main className="bg-white dark:bg-gray-900/95 min-h-screen w-screen">
        <motion.div
          className="max-w-4xl mx-auto px-6 pb-36 py-20"
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
