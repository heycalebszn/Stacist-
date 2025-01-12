import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import HeroSection from "./sections/HeroSection";

const App = () => {
  return(
    <div>
      <Navbar />
      <Section>
      <HeroSection />
      
      </Section>
    </div>
  )
}

export default App;