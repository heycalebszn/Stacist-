import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import HeroSection from "./sections/HeroSection";
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
      </Section>
    </div>
  )
}

export default App;