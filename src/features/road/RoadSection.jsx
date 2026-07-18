import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useUI } from '../../hooks/useUI';
import diamonds from '../../data/diamonds';
import Diamond from './Diamond';

// Road container restored exactly as in commit 33c5560 (fixed 1920px-wide
// background in a 1050px-tall stage, which is what the px diamond positions in
// data/diamonds.js are calibrated against).
const Road = styled.section`
  background-image: url('/img/mountainRoad.webp');
  background-size: 1920px auto;
  width: 100vw;
  height: 1050px;
  position: relative;
  padding-top: 2.4rem;

  @media (max-width: 944px) {
    background-position: -55rem center;
  }
`;

// The only addition over the original: the "My Road" heading + instructions.
const Head = styled.div`
  position: relative;
  z-index: 1;
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;

  @media (max-width: 44em) {
    padding: 0 1.8rem;
  }
`;

const Title = styled.h2`
  margin: 0 0 0.6rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 3.8rem;
  letter-spacing: -0.02em;
  color: #eef4f9;
  text-shadow: 0 2px 12px rgba(8, 16, 25, 0.65);

  @media (max-width: 44em) {
    font-size: 2.6rem;
  }
`;

const Sub = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1.4rem;
  color: #e3edf4;
  text-shadow: 0 1px 10px rgba(8, 16, 25, 0.65);
  max-width: 46rem;
`;

function RoadSection() {
  const { t } = useUI();
  const navigate = useNavigate();

  return (
    <Road id='sec-road'>
      <Head>
        <Title>{t.ui.roadTitle}</Title>
        <Sub>{t.ui.roadSub}</Sub>
      </Head>
      {diamonds.map((pos, index) => (
        <Diamond
          key={index}
          bottom={pos.bottom}
          left={pos.left}
          tabletBottom={pos.tabletBottom}
          tabletLeft={pos.tabletLeft}
          tooltipText={t.ui.clickMe}
          imgSrc='/img/diamond.png'
          imgAlt='diamond'
          onDiamondClick={() => navigate(`/experience/${index}`)}
        />
      ))}
    </Road>
  );
}

export default RoadSection;
