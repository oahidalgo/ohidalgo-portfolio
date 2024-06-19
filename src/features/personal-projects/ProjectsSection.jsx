import styled from 'styled-components';
import GridLayout from '../../ui/GridLayout';
import Heading from '../../ui/Heading';
import ProjectDescription from './ProjectDescription';
import ProjectImageBox from './ProjectImageBox';

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
  return (
    <StyledProjectsSection>
      <Projects>
        <div>
          <Heading as='h2'>Check some of my personal projects</Heading>
        </div>
        <GridLayout>
          <ProjectDescription />
          <ProjectImageBox />
          <ProjectImageBox />
          <ProjectDescription />
          <ProjectDescription />
          <ProjectImageBox />
        </GridLayout>
      </Projects>
    </StyledProjectsSection>
  );
}

export default ProjectsSection;
