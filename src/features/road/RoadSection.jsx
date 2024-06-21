import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaTimes } from 'react-icons/fa'; // Importar el icono de cierre de react-icons

// Definir la animación de rebote
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Definir la animación de fade in/out para el tooltip
const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

// Definir la animación de crecimiento
const grow = keyframes`
  0% {
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    width: 99vw;
    height: 99vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

// Definir la animación de reducción
const shrink = keyframes`
  0% {
    width: 99vw;
    height: 99vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

// Estilos para el contenedor de la carretera
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

// Estilos para el contenedor del diamante
const DiamondContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${bounce} 2s infinite;
`;

// Estilos para la imagen del diamante
const StyledDiamond = styled.img`
  width: 5.8rem;
  height: 4.8rem;
`;

// Estilos para el tooltip
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
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

// Estilos para el diamante
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

// Estilos para el div expansible
const ExpandingDiv = styled.div`
  position: fixed;
  background-color: var(--color-brand-500);
  z-index: 1000;
  ${({ isExpanding }) => css`
    animation: ${isExpanding
      ? css`
          ${grow} 2s forwards
        `
      : css`
          ${shrink} 1s forwards
        `};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
  height: 99vh;
`;

// Estilos para el botón de cierre
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoadSection = () => {
  const [isExpanding, setIsExpanding] = useState(false);
  const [showExpandingDiv, setShowExpandingDiv] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const diamonds = [
    { bottom: '6%', left: '40%', tabletBottom: '4%', tabletLeft: '14%' },
    { bottom: '16%', left: '31%', tabletBottom: '15%', tabletLeft: '2%' },
    { bottom: '27%', left: '38.5%', tabletBottom: '26%', tabletLeft: '9.5%' },
  ];

  const handleDiamondClick = () => {
    setIsExpanding(true);
    setShowExpandingDiv(true);
    document.body.style.overflow = 'hidden'; // Desactivar el scroll
  };

  const handleCloseClick = () => {
    setIsExpanding(false);
    setShowCloseButton(false);
    setTimeout(() => {
      setShowExpandingDiv(false);
      document.body.style.overflow = 'auto'; // Activar el scroll
    }, 1000); // Espera a que termine la animación antes de ocultar el div
  };

  useEffect(() => {
    if (isExpanding) {
      const timer = setTimeout(() => setShowCloseButton(true), 2000); // Mostrar el botón después de 2 segundos
      return () => clearTimeout(timer);
    }
  }, [isExpanding]);

  return (
    <Road id='road'>
      {diamonds.map((pos, index) => (
        <Diamond
          key={index}
          bottom={pos.bottom}
          left={pos.left}
          tabletBottom={pos.tabletBottom}
          tabletLeft={pos.tabletLeft}
          onClick={handleDiamondClick}
          onTouchStart={handleDiamondClick} // Agregar soporte para eventos táctiles
        >
          <Tooltip>Click Me!</Tooltip>
          <StyledDiamond src='/img/diamond.png' alt='diamond' />
        </Diamond>
      ))}
      {showExpandingDiv && (
        <ExpandingDiv isExpanding={isExpanding}>
          {showCloseButton && (
            <CloseButton onClick={handleCloseClick}>
              <FaTimes size={24} /> {/* Tamaño del icono */}
            </CloseButton>
          )}
        </ExpandingDiv>
      )}
    </Road>
  );
};

export default RoadSection;
