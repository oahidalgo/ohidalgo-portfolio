import styled from 'styled-components';
import Heading from '../../ui/Heading';
import { StyledExternalLink } from '../../ui/StyledNavLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 20rem;
  height: 20rem;
  margin-bottom: 1.8rem;
`;

function Certification({ title, issuer, img, alt, link }) {
  return (
    <Container>
      <StyledImage src={`/img/${img}`} alt={alt} />
      <Heading as='h3'>{title}</Heading>
      <Heading as='h4'>{issuer}</Heading>
      <StyledExternalLink href={link}>View credential</StyledExternalLink>
    </Container>
  );
}

export default Certification;
