import { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturedPosterBanner from "./components/FeaturedPosterBanner";
import PhasesSection from "./components/PhasesSection";
import OpportunitiesSection from "./components/OpportunitiesSection";
import PrizesSection from "./components/PrizesSection";
import WinnersSection from "./components/WinnersSection";
import CompetitionWinnersSection from "./components/CompetitionWinnersSection";
import FAQSection from "./components/FAQSection";
import PostersSection from "./components/PostersSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GuidelinesModal from "./components/GuidelinesModal";
import ProjectsSection from "./components/ProjectsSection";
import ProjectDetailPage from "./components/ProjectDetailPage";
import ProjectVideoModal from "./components/ProjectVideoModal";
import { getProjectByPath } from "./components/projectsData";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewProject, setPreviewProject] = useState(null);
  const [location, setLocation] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
  }));

  useEffect(() => {
    const syncLocation = () => {
      setLocation({
        pathname: window.location.pathname,
        hash: window.location.hash,
      });
    };

    window.addEventListener("popstate", syncLocation);
    window.addEventListener("hashchange", syncLocation);

    return () => {
      window.removeEventListener("popstate", syncLocation);
      window.removeEventListener("hashchange", syncLocation);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const targetId = location.hash.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start" });
      });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    setPreviewProject(null);
  }, [location.pathname]);

  const navigate = (to) => {
    if (to === `${window.location.pathname}${window.location.hash}`) {
      return;
    }

    setPreviewProject(null);
    window.history.pushState({}, "", to);
    setLocation({
      pathname: window.location.pathname,
      hash: window.location.hash,
    });

    if (!to.includes("#")) {
      window.scrollTo(0, 0);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenPreview = (project) => {
    setPreviewProject(project);
  };

  const handleClosePreview = () => {
    setPreviewProject(null);
  };

  const activeProject = getProjectByPath(location.pathname);

  return (
    <div className="App">
      <Header onRegisterClick={handleOpenModal} onNavigate={navigate} />
      <main id="main">
        {activeProject ? (
          <ProjectDetailPage
            project={activeProject}
            onNavigate={navigate}
            onPreviewVideo={handleOpenPreview}
          />
        ) : (
          <>
            <HeroSection onRegisterClick={handleOpenModal} />
            <div id="about">
              <AboutSection />
            </div>
            <CompetitionWinnersSection />
            
            <FeaturedPosterBanner />
            <ProjectsSection
              onNavigate={navigate}
              onPreviewVideo={handleOpenPreview}
            />
            <div id="phases">
              <PhasesSection />
            </div>
            <div id="opportunities">
              <OpportunitiesSection />
            </div>
            <div id="prizes">
              <PrizesSection />
            </div>
            <div id="winners">
              <WinnersSection />
            </div>
            <div id="faq">
              <FAQSection />
            </div>
            <div id="posters">
              <PostersSection />
            </div>
          </>
        )}
      </main>
      <Footer />

      <GuidelinesModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <ProjectVideoModal project={previewProject} onClose={handleClosePreview} />
    </div>
  );
}

export default App;
