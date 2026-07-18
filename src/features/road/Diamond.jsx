// Diamond.js — restored to the commit 33c5560 look/behavior (px positioning,
// bounce, "Click Me!" tooltip). Only the click handler was rewired to the new
// /experience route (the old ExpandingDiv/Outlet mechanism was removed).
import styled, { keyframes } from 'styled-components';

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
  cursor: pointer;
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
  return (
    <DiamondContainer
      $bottom={bottom}
      $left={left}
      $tabletBottom={tabletBottom}
      $tabletLeft={tabletLeft}
      onClick={onDiamondClick}
    >
      <Tooltip>{tooltipText}</Tooltip>
      <StyledDiamond src={imgSrc} alt={imgAlt} />
    </DiamondContainer>
  );
};

export default Diamond;
