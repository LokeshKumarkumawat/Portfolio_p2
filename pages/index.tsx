import Head from "next/head";
import Image from "next/image";
import BlueBox from "../components/BlueBox";
import Contact from "../components/Contact";
import Design from "../components/Design";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <BlueBox />
      <Services />
      <Projects />
      <Design />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
