import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import HeroSection from "./sections/HeroSection";
import Tracking from "./sections/Tracking";

const App = () => {
  return(
    <div>
      <Navbar />
      <Section>
      <HeroSection />
      <Tracking />
      </Section>
    </div>
  )
}

export default App;