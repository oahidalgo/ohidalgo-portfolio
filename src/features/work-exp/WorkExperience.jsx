import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Container from '../../ui/Container';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Paragraph from '../../ui/Paragraph';

function WorkExperience({ company, position, project, description }) {
  return (
    <Container>
      <Row className='gap-md'>
        <Row>
          <Heading as='h3' color='secondary-300'>
            {company}
          </Heading>
          <Heading as='h4' color='secondary-300'>
            {position}
          </Heading>
          <Paragraph color='secondary'>{description}</Paragraph>
        </Row>
        <div className='grid grid--3-cols'>
          {project.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default WorkExperience;
