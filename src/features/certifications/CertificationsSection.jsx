import Container from '../../ui/Container';
import GridLayout from '../../ui/GridLayout';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Certification from './Certification';
import styled from 'styled-components';

const StyledCertificationsSection = styled.section`
  background-color: var(--color-secondary-200);
  padding: 4.8rem 0 9.6rem 0;
`;

function CertificationsSection() {
  return (
    <StyledCertificationsSection id='certifications'>
      <Container>
        <Heading as='h2'>Certifications</Heading>
        <GridLayout>
          <Certification
            title='CKAD - Certified Kubernetes Application Developer'
            issuer='The linux foundation'
            img='ckad.png'
            alt='Certified Kubernetes Application Developer'
            link='https://www.credly.com/badges/abdf44fd-5fca-42d4-b871-ebadac693762/public_url'
          />
          <Certification
            title='JSNAD - JavaScript Application Developer'
            issuer='The linux foundation'
            img='jsnad.png'
            alt='JavaScript Application Developer'
            link='https://www.credly.com/badges/b73b9a07-91e5-473d-9560-94e1c97d12a2/public_url'
          />
          <Certification
            title='SMC - Scrum Master Certified'
            issuer='SCRUMstudy'
            img='SMC.png'
            alt='Scrum Master Certified'
            link='https://www.scrumstudy.com/certification/verify?type=SMC&number=792150'
          />
        </GridLayout>
      </Container>
    </StyledCertificationsSection>
  );
}

export default CertificationsSection;
