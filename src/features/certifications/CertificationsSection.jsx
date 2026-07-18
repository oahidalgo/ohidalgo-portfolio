import styled from 'styled-components';

import { useUI } from '../../hooks/useUI';
import Certification from './Certification';

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
  margin: 0 0 3.6rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 3.8rem;
  letter-spacing: -0.02em;
  color: var(--ink);

  @media (max-width: 44em) {
    font-size: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

function CertificationsSection() {
  const { t } = useUI();

  return (
    <Section id='sec-certs'>
      <Inner data-reveal>
        <Title>{t.ui.certTitle}</Title>
        <Grid>
          {t.certifications.map((cert) => (
            <Certification key={cert.name} cert={cert} cta={t.ui.certCta} />
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

export default CertificationsSection;
