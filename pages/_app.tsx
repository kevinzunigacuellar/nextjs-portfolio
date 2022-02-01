import "styles/globals.css";
import type { AppProps } from "next/app";

import Navbar from "components/Navbar";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  console.log(router.route);
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-900/95 min-h-screen w-screen">
        <motion.div
          className="max-w-4xl mx-auto px-6 pb-24 py-20"
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </main>
    </>
  );
}

export default MyApp;
