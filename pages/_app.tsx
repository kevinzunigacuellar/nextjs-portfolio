import "styles/globals.css";
import type { AppProps } from "next/app";

/** This is the app component. It is the root of the application.
 * @return {JSX.Element}: The JSX element to render.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
