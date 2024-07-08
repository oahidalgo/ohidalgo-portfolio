import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Container from '../../ui/Container';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Paragraph from '../../ui/Paragraph';
import Spinner from '../../ui/Spinner';
import { useJob } from './useJob';

function WorkExperience() {
  const { isLoading, error, job } = useJob();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <Container>
      <Row className='gap-md'>
        <Row>
          <Heading as='h3' color='secondary-300'>
            {job.company}
          </Heading>
          <Heading as='h4' color='secondary-300'>
            {job.position}
          </Heading>
          <Paragraph color='secondary'>{job.description}</Paragraph>
        </Row>
        <div className='grid grid--3-cols'>
          {job.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default WorkExperience;
