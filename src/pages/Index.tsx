import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Github from "@/components/Github";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
