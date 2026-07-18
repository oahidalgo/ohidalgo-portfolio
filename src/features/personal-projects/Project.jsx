import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 5.6rem;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};

  @media (max-width: 59em) {
    /* On small screens stack vertically with the image ALWAYS on top */
    flex-direction: column;
    gap: 2.4rem;
  }
`;

const ImageSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 59em) {
    order: -1;
  }
`;

const Thumb = styled.img`
  width: 100%;
  max-width: 32rem;
  height: 28rem;
  object-fit: cover;
  object-position: top center;
  border-radius: 14px;
  display: block;
`;

const TextSide = styled.div`
  flex: 1;

  @media (max-width: 59em) {
    width: 100%;
  }
`;

const Number = styled.div`
  line-height: 1;
  margin-bottom: 8px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 8.8rem;
  color: var(--muted);
  opacity: 0.3;
`;

const Name = styled.h3`
  margin: 0 0 1.4rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2.6rem;
  color: var(--ink);
`;

const Desc = styled.p`
  margin: 0 0 1.8rem;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.65;
  color: var(--text);
  max-width: 42rem;
`;

const Visit = styled.a`
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--brand);

  &:hover {
    color: var(--accent);
  }
`;

function Project({ project, index, visitLabel }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <Row $reverse={index % 2 === 0}>
      <ImageSide>
        <Thumb src={`/${project.img}`} alt={project.name} />
      </ImageSide>
      <TextSide>
        <Number>{num}</Number>
        <Name>{project.name}</Name>
        <Desc>{project.desc}</Desc>
        <Visit href={project.link} target='_blank' rel='noreferrer'>
          {visitLabel}
        </Visit>
      </TextSide>
    </Row>
  );
}

export default Project;
