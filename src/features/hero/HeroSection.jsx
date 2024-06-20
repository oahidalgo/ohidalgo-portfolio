import styled from 'styled-components';
import HeroImgBox from './HeroImgBox';
import HeroTextBox from './HeroTextBox';
import GridLayout from '../../ui/GridLayout';

const StyledHeroSection = styled.section`
  background-color: var(--color-brand-500);
  padding: 4.8rem 0 9.6rem 0;
`;

const Hero = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
`;

function HeroSection() {
  return (
    <StyledHeroSection>
      <Hero>
        <GridLayout>
          <HeroImgBox />
          <HeroTextBox />
        </GridLayout>
      </Hero>
    </StyledHeroSection>
  );
}

export default HeroSection;
