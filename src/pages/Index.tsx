import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-foreground">
      <Navigation />
      <main>
        <Hero />
        {/* Order matches Navigation: Home -> About -> Experience -> Competency Matrix -> Product Strategy -> Projects -> Contact */}
        <About />
        <Experience />
        <Skills />    {/* Title: Competency Matrix */}
        <Services />  {/* Title: Product Strategy */}
        <Projects />  {/* Title: Projects */}
        <Contact />   {/* Title: Contact */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
