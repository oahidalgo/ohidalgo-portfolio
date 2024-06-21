// RoadSection.js
import React from 'react';
import Road from './Road';
import Diamond from './Diamond';
import ExpandingDiv from '../../ui/ExpandingDiv';

const RoadSection = () => {
  const diamonds = [
    {
      bottom: '85px',
      left: '800px',
      tabletBottom: '100px',
      tabletLeft: '270px',
    },
    {
      bottom: '180px',
      left: '590px',
      tabletBottom: '200px',
      tabletLeft: '40px',
    },
    {
      bottom: '285px',
      left: '735px',
      tabletBottom: '310px',
      tabletLeft: '185px',
    },
  ];

  return (
    <Road>
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
          />
        ))}
        <ExpandingDiv.Container />
      </ExpandingDiv>
    </Road>
  );
};

export default RoadSection;
