import styled from 'styled-components';

const StyledProjectImageBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: 'HOLAAAA';
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    width: 60%;
    padding-bottom: 60%;
    background-color: black;
    z-index: -2;
  }

  &::after {
    width: 45%;
    padding-bottom: 45%;
    background-color: red;
    z-index: -1;
  }
`;

const ProjectImage = styled.img`
  width: 50%;
`;

function ProjectImageBox() {
  return (
    <StyledProjectImageBox>
      <ProjectImage
        src='img/oliver.jpg'
        alt='iPhone app
            preferences selection screen'
      />
    </StyledProjectImageBox>
  );
}

export default ProjectImageBox;
