import styled from 'styled-components';

const Card = styled.div`
  width: 250px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
    border-color: var(--accent);
  }

  @media (max-width: 44em) {
    width: 100%;
  }
`;

const Thumb = styled.div`
  width: 100%;
  height: 110px;
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid var(--line);
`;

const Body = styled.div`
  padding: 14px 16px;
`;

const Name = styled.div`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.35rem;
  color: var(--ink);
`;

const TechLine = styled.div`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.05rem;
  color: var(--muted);
  margin-top: 5px;
`;

function ProjectCard({ project, onOpen }) {
  const techLine = project.tech.slice(0, 3).join(' · ');

  return (
    <Card onClick={onOpen}>
      <Thumb
        $img={`/img/${project.imgName}`}
        role='img'
        aria-label={project.name}
      />
      <Body>
        <Name>{project.name}</Name>
        <TechLine>{techLine}</TechLine>
      </Body>
    </Card>
  );
}

export default ProjectCard;
