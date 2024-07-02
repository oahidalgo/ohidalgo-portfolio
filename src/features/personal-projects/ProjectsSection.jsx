import styled from 'styled-components';
import GridLayout from '../../ui/FlexLayout';
import Heading from '../../ui/Heading';
import ProjectDescription from './ProjectDescription';
import ProjectImageBox from './ProjectImageBox';
import Project from './Project';
import projects from '../../data/projects';
import Row from '../../ui/Row';
import { usePersonalProjects } from './usePersonalProjects';

const StyledProjectsSection = styled.section`
  background-color: var(--color-secondary-200);
  padding: 4.8rem 0 9.6rem 0;
`;

const Projects = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3.2rem;
`;

function ProjectsSection() {
  const { personalProjects, isLoading, error } = usePersonalProjects();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <StyledProjectsSection id='projects'>
      <Projects>
        <Heading as='h2'>Check some of my personal projects</Heading>
        <Row className='gap-xl'>
          {personalProjects.map((project, index) => (
            <Project key={index} index={index} project={project} />
          ))}
        </Row>
      </Projects>
    </StyledProjectsSection>
  );
}

export default ProjectsSection;
