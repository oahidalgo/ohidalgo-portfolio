import styled from 'styled-components';

import Heading from '../../ui/Heading';
import Paragraph from '../../ui/Paragraph';
import Row from '../../ui/Row';
import { HiCheckCircle } from 'react-icons/hi';
import { useProject } from './useProject';
import Container from '../../ui/Container';
import BackButton from '../../ui/BackButton';
import Spinner from '../../ui/Spinner';

const Task = styled.li`
  color: var(--color-secondary-300);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
`;

const CheckIcon = styled(HiCheckCircle)`
  margin-right: 0.5rem;
  margin-top: 0.2rem; /* Ajusta este valor para alinear el ícono correctamente */
  flex-shrink: 0;
`;

const TaskText = styled.span`
  line-height: 1.2;
`;

function ProjectDetail() {
  const { project, isLoading, error } = useProject();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <>
      <BackButton />
      <Container>
        <Row>
          <Heading as='h3' color='secondary-300'>
            {project.name}
          </Heading>
          <Paragraph color='secondary'>{project.summary}</Paragraph>
          <div className='grid grid--3-cols align-center'>
            <Row>
              <Heading as='h4' color='secondary-300'>
                Main Tasks
              </Heading>
              <ul>
                {project.project_tasks.map((task, index) => (
                  <Task key={index} className='font-size-5'>
                    <CheckIcon />
                    <TaskText>{task.description}</TaskText>
                  </Task>
                ))}
              </ul>
            </Row>
            <Row className='grid-col-span-2'>
              <img src={project.diagram} alt={project.name} />
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default ProjectDetail;
