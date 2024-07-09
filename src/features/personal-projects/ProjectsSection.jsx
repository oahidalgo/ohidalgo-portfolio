import styled from 'styled-components';

import Heading from '../../ui/Heading';
import Project from './Project';
import Row from '../../ui/Row';
import Spinner from '../../ui/Spinner';
import Container from '../../ui/Container';

import { usePersonalProjects } from './usePersonalProjects';

const StyledProjectsSection = styled.section`
  background-color: var(--color-secondary-200);
  padding: 4.8rem 0 9.6rem 0;
`;

function ProjectsSection() {
  const { personalProjects, isLoading, error } = usePersonalProjects();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <StyledProjectsSection id='projects'>
      <Container>
        <Heading as='h2' className='mb-8'>
          Check some of my personal projects
        </Heading>
        <Row>
          {personalProjects.map((project, index) => (
            <Project key={index} index={index} project={project} />
          ))}
        </Row>
      </Container>
    </StyledProjectsSection>
  );
}

export default ProjectsSection;
