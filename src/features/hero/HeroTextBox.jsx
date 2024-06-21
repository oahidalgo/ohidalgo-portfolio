import Heading from '../../ui/Heading';
import styled from 'styled-components';
import TechStack from './TechStack';

const HeroDescription = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 1.6rem;
`;

function HeroTextBox() {
  return (
    <div>
      <Heading as='h1' className='mb'>
        Software Engineer Specialized in Systems Integration
      </Heading>
      <HeroDescription>
        I am not limited to the backend; I also have experience developing
        dynamic interfaces in the frontend, implementing automated tasks and
        creating reports.
      </HeroDescription>
      <HeroDescription className='text-center'>
        My tech stack includes, but is not limited to:
      </HeroDescription>
      <TechStack />
    </div>
  );
}

export default HeroTextBox;
