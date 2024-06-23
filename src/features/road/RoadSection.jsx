// RoadSection.js
import { useState } from 'react';
import Road from './Road';
import Diamond from './Diamond';
import ExpandingDiv from '../../ui/ExpandingDiv';
import GridLayout from '../../ui/GridLayout';
import diamonds from '../../data/diamonds';
import WorkExperience from '../work-exp/WorkExperience';
import workExperience from '../../data/workExperience';

const RoadSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDiamondClick = (index) => {
    setSelectedIndex(index);
  };

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
