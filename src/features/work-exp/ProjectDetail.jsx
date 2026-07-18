import styled from 'styled-components';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { useUI } from '../../hooks/useUI';

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
  color: var(--muted);
  cursor: pointer;

  &:hover {
    color: var(--accent);
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0 0.8rem;
`;

const Logo = styled.div`
  width: 64px;
  height: 64px;
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  border: 1px solid var(--line);
  flex: none;
`;

const Name = styled.h2`
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 3.2rem;
  letter-spacing: -0.02em;
  color: var(--ink);

  @media (max-width: 44em) {
    font-size: 2.6rem;
  }
`;

const CompanyLine = styled.div`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--brand);
  margin-top: 4px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 1.8rem 0 2.8rem;
`;

const Tag = styled.span`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.05rem;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 5px;
  padding: 4px 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.6rem;
  align-items: start;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    gap: 2.8rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Label = styled.div`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--brand);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

const Summary = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.65;
  color: var(--text);
`;

const Tasks = styled.ul`
  margin: 0;
  padding-left: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: disc;

  li {
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 1.35rem;
    line-height: 1.55;
    color: var(--text);
  }
`;

const Diagram = styled.div`
  width: 100%;
  height: 38rem;
  background-image: url(${({ $img }) => $img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  border: 1px solid var(--line);
  background-color: #fff;
`;

function ProjectDetail() {
  const { t } = useUI();
  const { companyId, projectId } = useParams();
  const navigate = useNavigate();

  const company = t.work[Number(companyId)];
  const project = company?.projects.find((p) => p.id === Number(projectId));

  if (!company || !project) {
    return <Navigate replace to='/experience' />;
  }

  return (
    <Main>
      <BackLink onClick={() => navigate(`/experience/${companyId}`)}>
        {t.ui.backList}
      </BackLink>

      <Head>
        <Logo $img={`/img/${project.imgName}`} role='img' aria-label={project.name} />
        <div>
          <Name>{project.name}</Name>
          <CompanyLine>
            {company.company} — {company.role}
          </CompanyLine>
        </div>
      </Head>

      <Tags>
        {project.tech.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <Grid>
        <Column>
          <div>
            <Label>{t.ui.summaryTitle}</Label>
            <Summary>{project.summary}</Summary>
          </div>
          <div>
            <Label>{t.ui.tasksTitle}</Label>
            <Tasks>
              {project.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </Tasks>
          </div>
        </Column>
        <div>
          <Label>{t.ui.diagTitle}</Label>
          <Diagram $img={`/${project.diagram}`} role='img' aria-label='Diagram' />
        </div>
      </Grid>
    </Main>
  );
}

export default ProjectDetail;
