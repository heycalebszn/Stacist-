import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import HeroSection from "./sections/HeroSection";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import Tracking from "./sections/Tracking";

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