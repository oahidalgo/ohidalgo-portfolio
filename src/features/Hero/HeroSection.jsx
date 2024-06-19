import styled from 'styled-components';

import HeroImgBox from './HeroImgBox';
import HeroTextBox from './HeroTextBox';

const StyledHeroSection = styled.section`
  background-color: var(--color-brand-500);
  padding: 4.8rem 0 9.6rem 0;
`;

const Hero = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  gap: 4.8rem;
  align-items: center;
`;

function HeroSection() {
  return (
    <StyledHeroSection>
      <Hero>
        <HeroGrid>
          <HeroImgBox />
          <HeroTextBox />
        </HeroGrid>
      </Hero>
    </StyledHeroSection>
  );
}

export default HeroSection;
