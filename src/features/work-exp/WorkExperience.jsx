import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import { useUI } from '../../hooks/useUI';
import ProjectCard from './ProjectCard';

const Main = styled.main`
  max-width: 112rem;
  margin: 0 auto;
  padding: 6.4rem 4rem 9.6rem;
  animation: fadeUp 0.45s ease both;

  @media (max-width: 44em) {
    padding: 4rem 1.8rem 6.4rem;
  }
`;

const BackLink = styled.button`
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--brand);
  cursor: pointer;

  &:hover {
    color: var(--accent);
  }
`;

const Title = styled.h2`
  margin: 2.6rem 0 1.2rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 3.8rem;
  letter-spacing: -0.02em;
  color: var(--ink);

  @media (max-width: 44em) {
    font-size: 3rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
  margin-top: 1.2rem;
`;

const Item = styled.div`
  border-left: 2px solid var(--line);
  padding-left: 2.8rem;
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  left: -8px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--bg);
`;

const Company = styled.div`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2.1rem;
  color: var(--ink);
`;

const Role = styled.div`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--brand);
  margin: 4px 0 10px;
`;

const Desc = styled.p`
  margin: 0 0 1.8rem;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1.35rem;
  line-height: 1.6;
  color: var(--text);
  max-width: 72rem;
`;

const Period = styled.div`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--muted);
  margin-bottom: 1.2rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
`;

function WorkExperience() {
  const { t } = useUI();
  const { companyId } = useParams();
  const navigate = useNavigate();

  const filterIndex =
    companyId !== undefined && t.work[Number(companyId)] ? Number(companyId) : null;

  const companies =
    filterIndex !== null
      ? [{ company: t.work[filterIndex], index: filterIndex }]
      : t.work.map((company, index) => ({ company, index }));

  // Back link returns to the "My Road" section on the home page.
  function backToRoad() {
    navigate('/home');
    setTimeout(() => {
      const el = document.getElementById('sec-road');
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 72,
          behavior: 'smooth',
        });
      }
    }, 100);
  }

  return (
    <Main>
      <BackLink onClick={backToRoad}>{t.ui.back}</BackLink>
      <Title>{t.ui.workTitle}</Title>

      <List>
        {companies.map(({ company, index }) => (
          <Item key={company.id}>
            <Dot />
            <Company>{company.company}</Company>
            <Role>{company.role}</Role>
            {company.period && <Period>{company.period}</Period>}
            <Desc>{company.desc}</Desc>
            {company.projects.length > 0 && (
              <Cards>
                {company.projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpen={() =>
                      navigate(`/experience/${index}/${project.id}`)
                    }
                  />
                ))}
              </Cards>
            )}
          </Item>
        ))}
      </List>
    </Main>
  );
}

export default WorkExperience;
