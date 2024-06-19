import styled from 'styled-components';
import Paragraph from '../../ui/Paragraph';
import Heading from '../../ui/Heading';

const StyledNumber = styled.p`
  font-size: 8.6rem;
  font-weight: 600;
  color: var(--color-brand-500);
`;

function ProjectDescription() {
  return (
    <div className='step-text-box'>
      <StyledNumber>01</StyledNumber>
      <Heading as='h3'>Movies App</Heading>
      <Paragraph>
        The app allows you to search for movies, see the details of each one and
        save them to your favorites list. It was built using React and a
        third-party API.
      </Paragraph>
    </div>
  );
}

export default ProjectDescription;
