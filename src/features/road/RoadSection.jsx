import styled from 'styled-components';

import Diamond from './Diamond';
import ExpandingDiv from '../../ui/ExpandingDiv';
import diamonds from '../../data/diamonds';
import Heading from '../../ui/Heading';
import Container from '../../ui/Container';
import { Outlet, useNavigate } from 'react-router-dom';

const Road = styled.div`
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

const RoadSection = () => {
  const navigate = useNavigate();

  const handleDiamondClick = (index) => {
    navigate(`work-experience/${index + 1}`);
  };

  return (
    <Road id='road'>
      <Container>
        <Heading as='h2' color='secondary-300'>
          My Road
        </Heading>
      </Container>
      <ExpandingDiv
        backgroundColor='var(--color-brand-500)'
        //Additional onClose behavior, the div should be
        //in charge of regular onClose behavior
        onClose={() => navigate('/home')}
      >
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
          <Outlet />
        </ExpandingDiv.Container>
      </ExpandingDiv>
    </Road>
  );
};

export default RoadSection;
