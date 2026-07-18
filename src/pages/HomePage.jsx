import styled from 'styled-components';

import HeroSection from '../features/hero/HeroSection';
import ProjectsSection from '../features/personal-projects/ProjectsSection';
import RoadSection from '../features/road/RoadSection';
import CertificationsSection from '../features/certifications/CertificationsSection';

const Main = styled.main`
  animation: fadeUp 0.45s ease both;
`;

function HomePage() {
  return (
    <Main>
      <HeroSection />
      <RoadSection />
      <ProjectsSection />
      <CertificationsSection />
    </Main>
  );
}

export default HomePage;
