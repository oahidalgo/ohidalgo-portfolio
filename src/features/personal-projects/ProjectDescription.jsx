import styled from 'styled-components';
import Paragraph from '../../ui/Paragraph';
import Heading from '../../ui/Heading';
import { StyledExternalLink } from '../../ui/StyledNavLink';

const StyledNumber = styled.p`
  line-height: 1;
  font-size: var(--font-size-12);
  font-weight: 600;
  color: #b5b5b5;
`;

function ProjectDescription({ index, name, description, link }) {
  return (
    <div>
      <StyledNumber>{String(index + 1).padStart(2, '0')}</StyledNumber>
      <Heading as='h3'>{name}</Heading>
      <Paragraph>{description} </Paragraph>
      <StyledExternalLink href={link}>Check it out!</StyledExternalLink>
    </div>
  );
}

export default ProjectDescription;
