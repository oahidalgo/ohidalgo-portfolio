import styled from 'styled-components';

const StyledHeroSection = styled.section`
  background-color: var(--color-brand-500);
  color: var(--color-secondary-500);
  padding: 4.8rem;
`;

const Hero = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4.8rem;
  align-items: center;
  justify-content: center;
`;

const HeroImg = styled.img`
  width: 36rem;
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
`;

function HeroSection() {
  return (
    <StyledHeroSection>
      <Hero>
        <HeroImg src='img/oliver.jpg' alt='Hero' />
        <div className='hero-text-box'>
          <h1 className='heading-primary'>
            Software Engineer Specialized in Systems Integration
          </h1>
          <p className='hero-description'>
            I am not limited to the backend; I also have experience developing
            dynamic interfaces in the frontend, creating reports, and
            implementing automated tasks.
          </p>
          <p className='hero-description last-desc'>
            My tech stack includes, but is not limited to:
          </p>
          <ul className='hero-description'>
            <li>Node.js</li>
            <li>React</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Git</li>
          </ul>
        </div>
      </Hero>
    </StyledHeroSection>
  );
}

export default HeroSection;
