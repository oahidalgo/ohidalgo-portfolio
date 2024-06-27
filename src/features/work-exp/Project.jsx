import styled from 'styled-components';
import Card from '../../ui/Card';
import Heading from '../../ui/Heading';
import Paragraph from '../../ui/Paragraph';
import TechTag from './TechTag';
import Row from '../../ui/Row';

const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 2.4rem;
`;

const Image = styled.img`
  width: 100%;
  border-top-right-radius: var(--border-radius-md);
`;

const Content = styled.div`
  padding: 0 2.4rem;
  flex: 1; // Allow the content to grow and take up available space
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.6rem;
`;

const Footer = styled.div`
  padding: 2.4rem;
  margin-top: auto; // Push the footer to the bottom
`;

function Project({ project }) {
  const { code, name, techStack, summary, imgName } = project;
  const imagePath = `/img/${imgName}`;

  return (
    <Card>
      <Row>
        <ProjectImage>
          <Image src={imagePath} alt={name} />
        </ProjectImage>
        <Content>
          <ProjectTags>
            {techStack.map((tech, index) => (
              <TechTag key={index} tech={tech} />
            ))}
          </ProjectTags>
          <Heading as='h4'>{name}</Heading>
          <Paragraph className='font-size-5'>{summary}</Paragraph>
        </Content>
        <Footer>
          <a href='#' className='btn btn--full'>
            Learn more &rarr;
          </a>
        </Footer>
      </Row>
    </Card>
  );
}

export default Project;
