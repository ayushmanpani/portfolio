import Hero from "../components/sections/Hero";
import Philosophy from "../components/sections/Philosophy";
import ProjectsPreview from "../components/sections/ProjectsPreview";
import Skills from "../components/sections/Skills";
import Profiles from "../components/sections/Profiles";
import ContactCTA from "../components/sections/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <ProjectsPreview />
      <Skills />
      <Profiles />
      <ContactCTA />
    </>
  );
};

export default Home;
