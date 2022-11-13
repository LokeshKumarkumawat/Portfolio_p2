import "../styles/globals.css";
import type { AppProps } from "next/app";

// INTERNAL IMPORT
import Navbar from "../components/Navbar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="xl:w-[1200px] m-auto overflow-hidden bg-slate-400">
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
};

export default App;
