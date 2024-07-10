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
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'var(--color-brand-500)'};
  z-index: 1000;
  ${({ $isExpanding }) => css`
    animation: ${$isExpanding
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
  overflow-y: auto; /* Enable scroll inside the modal */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  padding: 2.4rem 0;
  max-height: 90vh; /* Limit the height of the content to enable internal scroll */
  overflow-y: auto;
`;

const ExpandingDiv = ({ children, backgroundColor, onClose }) => {
  const [isExpanding, setIsExpanding] = useState(false);
  const [showExpandingDiv, setShowExpandingDiv] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const handleOpenClick = () => {
    setIsExpanding(true);
    setShowExpandingDiv(true);
    document.body.style.overflow = 'hidden'; // Disable scroll on the document
  };

  const handleCloseClick = () => {
    setIsExpanding(false);
    setShowCloseButton(false);
    //Only call onClose if it is provided
    //Additional functionality can be added here
    //This component is in charge of its own close behavior but can be extended
    onClose?.();
    setTimeout(() => {
      setShowExpandingDiv(false);
      document.body.style.overflow = 'auto'; // Enable scroll on the document
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

const BoxContainer = ({ children }) => {
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
        $isExpanding={isExpanding}
        $backgroundColor={backgroundColor}
      >
        {showCloseButton && (
          <div>
            <CloseButton onClick={handleCloseClick}>
              <FaTimes size={24} />
            </CloseButton>
            <ModalContent>{children}</ModalContent>
          </div>
        )}
      </ExpandingDivContainer>
    )
  );
};

ExpandingDiv.Container = BoxContainer;

export default ExpandingDiv;
