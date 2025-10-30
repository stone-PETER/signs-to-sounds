import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PhasesSection from "./components/PhasesSection";
import OpportunitiesSection from "./components/OpportunitiesSection";
import PrizesSection from "./components/PrizesSection";
import FAQSection from "./components/FAQSection";
import PostersSection from "./components/PostersSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="phases">
          <PhasesSection />
        </div>
        <div id="opportunities">
          <OpportunitiesSection />
        </div>
        <div id="prizes">
          <PrizesSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="posters">
          <PostersSection />
        </div>
        {/* <div id="team">
          <TeamSection />
        </div> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
