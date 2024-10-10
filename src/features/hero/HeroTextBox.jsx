import Heading from '../../ui/Heading';
import TechStack from './TechStack';
import Paragraph from '../../ui/Paragraph';

function HeroTextBox() {
  return (
    <div>
      <Heading
        as='h1'
        style={{
          marginBottom: '0.4rem',
        }}
      >
        Oliver Hidalgo
      </Heading>
      <Heading as='h2' color='secondary-300'>
        Software Engineer Specialized in Systems Integration
      </Heading>
      <Paragraph color='secondary'>
        Over 7 years of experience across diverse industries, including BPO,
        Higher Education, and Administrative Services using agile methodologies
        like SCRUM. Throughout my career, I have developed scalable software
        solutions and integrated systems using a variety of mechanisms, such as
        SOAP and REST web services, GraphQL, RPC, and custom libraries.
      </Paragraph>
      <Paragraph color='secondary' className='text-center'>
        My tech stack includes, but is not limited to:
      </Paragraph>
      <TechStack />
    </div>
  );
}

export default HeroTextBox;
