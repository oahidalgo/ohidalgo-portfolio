import styled from 'styled-components';
import Paragraph from '../../ui/Paragraph';
import Heading from '../../ui/Heading';

const StyledNumber = styled.p`
  font-size: 8.6rem;
  font-weight: 600;
  color: #b5b5b5;
`;

function ProjectDescription({ index, name, description, link }) {
  return (
    <div>
      <StyledNumber>{String(index + 1).padStart(2, '0')}</StyledNumber>
      <Heading as='h3'>{name}</Heading>
      <Paragraph>{description} </Paragraph>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        Check it out!
      </a>
    </div>
  );
}

export default ProjectDescription;
