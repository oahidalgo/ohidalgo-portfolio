// Diamond.js
import { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { ExpandingDivContext } from '../../ui/ExpandingDiv';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const fadeIn = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const DiamondContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  animation: ${bounce} 2s infinite;

  @media (max-width: 944px) {
    bottom: ${({ $tabletBottom }) => $tabletBottom};
    left: ${({ $tabletLeft }) => $tabletLeft};
  }
`;

const StyledDiamond = styled.img`
  width: 5.8rem;
  height: 4.8rem;
`;

const Tooltip = styled.div`
  background-color: var(--color-brand-800);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  position: relative;
  animation: ${fadeIn} 2s infinite;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: var(--color-brand-800) transparent transparent transparent;
  }
`;

const Diamond = ({
  bottom,
  left,
  tabletBottom,
  tabletLeft,
  tooltipText,
  imgSrc,
  imgAlt,
  onDiamondClick,
}) => {
  const { handleOpenClick } = useContext(ExpandingDivContext);

  const handleClick = () => {
    onDiamondClick();
    handleOpenClick();
  };

  return (
    <DiamondContainer
      $bottom={bottom}
      $left={left}
      $tabletBottom={tabletBottom}
      $tabletLeft={tabletLeft}
      onClick={handleClick}
    >
      <Tooltip>{tooltipText}</Tooltip>
      <StyledDiamond src={imgSrc} alt={imgAlt} />
    </DiamondContainer>
  );
};

export default Diamond;
