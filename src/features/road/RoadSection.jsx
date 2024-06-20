import styled, { keyframes } from 'styled-components';

const Road = styled.div`
  background-size: cover;
  background-image: url('/img/mountainRoad.webp');
  background-position: center;
  width: 100vw;
  min-width: 210rem;
  height: 100rem;
  position: relative;

  @media (max-width: 944px) {
    background-position: -60.2rem center;
  }
`;

// Definir la animación usando keyframes
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const DiamondContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${bounce} 2s infinite;
`;

const StyledDiamond = styled.img`
  width: 5.8rem;
  height: 4.8rem;
`;

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  background-color: var(--color-brand-800);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  position: relative;
  animation: ${fadeInOut} 2s infinite;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px; /* Ajustar según sea necesario */
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const Diamond = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${bounce} 2s infinite;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};

  @media (max-width: 944px) {
    bottom: ${({ tabletBottom }) => tabletBottom};
    left: ${({ tabletLeft }) => tabletLeft};
  }
`;

const RoadSection = () => {
  const diamonds = [
    { bottom: '6%', left: '40%', tabletBottom: '4%', tabletLeft: '14%' },
    { bottom: '16%', left: '31%', tabletBottom: '15%', tabletLeft: '2%' },
    { bottom: '27%', left: '38.5%', tabletBottom: '26%', tabletLeft: '9.5%' },
  ];

  return (
    <Road id='road'>
      {diamonds.map((pos, index) => (
        <Diamond
          key={index}
          bottom={pos.bottom}
          left={pos.left}
          tabletBottom={pos.tabletBottom}
          tabletLeft={pos.tabletLeft}
        >
          <Tooltip>Click Me!</Tooltip>
          <StyledDiamond src='/img/diamond.png' alt='diamond' />
        </Diamond>
      ))}
    </Road>
  );
};

export default RoadSection;
