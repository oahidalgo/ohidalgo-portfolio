import Heading from '../../ui/Heading';
import styled from 'styled-components';
import TechStack from './TechStack';
import Paragraph from '../../ui/Paragraph';

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
      <Paragraph color='secondary'>
        I am not limited to the backend; I also have experience developing
        dynamic interfaces in the frontend, implementing automated tasks and
        creating reports.
      </Paragraph>
      <Paragraph color='secondary' className='text-center'>
        My tech stack includes, but is not limited to:
      </Paragraph>
      <TechStack />
    </div>
  );
}

export default HeroTextBox;
