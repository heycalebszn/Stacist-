import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import HeroSection from "./layout/HeroSection";
import Pricing from "./layout/Pricing";
import Testimonials from "./layout/Testimonials";
import Tracking from "./layout/Tracking";

const App = () => {
  return(
    <div>
      <Navbar />
      <Section>
      <HeroSection />
      <Tracking />
      <Testimonials />
      <Pricing />
      </Section>
      <Footer />
    </div>
  )
}

export default App;