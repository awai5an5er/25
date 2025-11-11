import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import Socials from "./components/Socials";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Tech from "./components/Tech";
import CounterSection from "./components/CounterSection";

function App() {
  return (
    <div>
      <Intro />
      <Navbar />
      <Hero />
      <SectionA />
      <Socials />
      <SectionB />
      <Team />
      {/* <Faq /> */}
      <CounterSection />
      <Tech />
      <Footer />
    </div>
  );
}

export default App;
