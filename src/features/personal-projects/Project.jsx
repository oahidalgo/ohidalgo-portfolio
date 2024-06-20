import React from 'react';
import styled from 'styled-components';
import ProjectDescription from './ProjectDescription';
import ProjectImageBox from './ProjectImageBox';
import FlexLayout from '../../ui/FlexLayout';

const ProjectContainer = styled(FlexLayout)`
  flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
`;

function Project({ index, project }) {
  const isReverse = index % 2 === 0;

  return (
    <ProjectContainer isReverse={isReverse}>
      <ProjectImageBox img={project.img} alt={project.alt} />
      <ProjectDescription
        index={index}
        name={project.name}
        description={project.description}
        link={project.link}
      />
    </ProjectContainer>
  );
}

export default Project;
