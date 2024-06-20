import HeroSection from '../features/hero/HeroSection';
import ProjectsSection from '../features/personal-projects/ProjectsSection';
import RoadSection from '../features/road/RoadSection';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <RoadSection />
    </main>
  );
}

export default HomePage;
