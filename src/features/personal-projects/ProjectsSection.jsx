import styled from 'styled-components';

import { useUI } from '../../hooks/useUI';
import Project from './Project';

const Section = styled.section`
  background: var(--panel2);
  transition: background 0.3s;
`;

const Inner = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 8.8rem 4rem;

  @media (max-width: 44em) {
    padding: 5.6rem 1.8rem;
  }
`;

const Title = styled.h2`
  margin: 0 0 5.6rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 3.8rem;
  letter-spacing: -0.02em;
  color: var(--ink);

  @media (max-width: 44em) {
    font-size: 3rem;
    margin-bottom: 4rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
`;

function ProjectsSection() {
  const { t } = useUI();

  return (
    <Section id='sec-projects'>
      <Inner data-reveal>
        <Title>{t.ui.projTitle}</Title>
        <List>
          {t.personalProjects.map((project, i) => (
            <Project
              key={project.name}
              project={project}
              index={i}
              visitLabel={t.ui.visit}
            />
          ))}
        </List>
      </Inner>
    </Section>
  );
}

export default ProjectsSection;
