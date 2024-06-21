// ExpandingDiv.js
import React, { useState, useEffect, createContext, useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const ExpandingDivContext = createContext();

const grow = keyframes`
  0% {
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const shrink = keyframes`
  0% {
    width: 100vw;
    height: 100vh;
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

const ExpandingDivContainer = styled.div`
  position: fixed;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--color-brand-500)'};
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
  width: 100vw;
  height: 100vh;
`;

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

const ExpandingDiv = ({ children, backgroundColor }) => {
  const [isExpanding, setIsExpanding] = useState(false);
  const [showExpandingDiv, setShowExpandingDiv] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const handleOpenClick = () => {
    setIsExpanding(true);
    setShowExpandingDiv(true);
    document.body.style.overflow = 'hidden'; // Disable scroll
  };

  const handleCloseClick = () => {
    setIsExpanding(false);
    setShowCloseButton(false);
    setTimeout(() => {
      setShowExpandingDiv(false);
      document.body.style.overflow = 'auto'; // Enable scroll
    }, 1000); // Wait for animation to complete before hiding div
  };

  useEffect(() => {
    if (isExpanding) {
      const timer = setTimeout(() => setShowCloseButton(true), 2000); // Show button after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [isExpanding]);

  return (
    <ExpandingDivContext.Provider
      value={{
        handleOpenClick,
        handleCloseClick,
        isExpanding,
        showExpandingDiv,
        showCloseButton,
        backgroundColor,
      }}
    >
      {children}
    </ExpandingDivContext.Provider>
  );
};

const Container = () => {
  const {
    isExpanding,
    showExpandingDiv,
    showCloseButton,
    handleCloseClick,
    backgroundColor,
  } = useContext(ExpandingDivContext);
  return (
    showExpandingDiv && (
      <ExpandingDivContainer
        isExpanding={isExpanding}
        backgroundColor={backgroundColor}
      >
        {showCloseButton && (
          <CloseButton onClick={handleCloseClick}>
            <FaTimes size={24} />
          </CloseButton>
        )}
      </ExpandingDivContainer>
    )
  );
};

ExpandingDiv.Container = Container;

export default ExpandingDiv;
