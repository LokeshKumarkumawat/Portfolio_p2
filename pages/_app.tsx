import "../styles/globals.css";
import type { AppProps } from "next/app";
import styles from "../style";
import "../styles/featuredproducts.css";

// INTERNAL IMPORT
import Navbar from "../components/Navbar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className=" ">
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
