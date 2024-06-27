// RoadSection.js
import { useState } from 'react';
import styled from 'styled-components';

import Diamond from './Diamond';
import ExpandingDiv from '../../ui/ExpandingDiv';
import diamonds from '../../data/diamonds';
import WorkExperience from '../work-exp/WorkExperience';
import workExperience from '../../data/workExperience';
import Heading from '../../ui/Heading';
import Container from '../../ui/Container';

const Road = styled.div`
  background-image: url('/img/mountainRoad.webp');
  /* fixed width, auto height */
  background-size: 1920px auto;
  width: 100vw;
  height: 1050px;
  position: relative;
  padding-top: 2.4rem;

  @media (max-width: 944px) {
    background-position: -55rem center;
  }
`;

const RoadSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDiamondClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Road id='road'>
      <Container>
        <Heading as='h2' color='secondary-300'>
          My Road
        </Heading>
      </Container>
      <ExpandingDiv backgroundColor='var(--color-brand-500)'>
        {diamonds.map((pos, index) => (
          <Diamond
            key={index}
            bottom={pos.bottom}
            left={pos.left}
            tabletBottom={pos.tabletBottom}
            tabletLeft={pos.tabletLeft}
            tooltipText='Click Me!'
            imgSrc='/img/diamond.png'
            imgAlt='diamond'
            onDiamondClick={() => handleDiamondClick(index)}
          />
        ))}
        <ExpandingDiv.Container>
          {selectedIndex !== null && (
            <WorkExperience
              company={workExperience[selectedIndex].company}
              position={workExperience[selectedIndex].position}
              project={workExperience[selectedIndex].project}
              description={workExperience[selectedIndex].description}
            />
          )}
        </ExpandingDiv.Container>
      </ExpandingDiv>
    </Road>
  );
};

export default RoadSection;
