import "../styles/globals.css";
import type { AppProps } from "next/app";

// INTERNAL IMPORT
import Navbar from "../components/Navbar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="gradient-bg-welcome  ">
      <div className="">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
