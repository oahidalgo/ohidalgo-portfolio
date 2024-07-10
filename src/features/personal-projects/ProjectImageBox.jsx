import styled from 'styled-components';

const StyledProjectImageBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectImage = styled.img`
  width: 50%;
`;

function ProjectImageBox({ img, alt }) {
  return (
    <StyledProjectImageBox>
      <ProjectImage src={img} alt={alt} />
    </StyledProjectImageBox>
  );
}

export default ProjectImageBox;
