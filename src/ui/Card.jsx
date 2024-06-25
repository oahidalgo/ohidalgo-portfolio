import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: var(--color-secondary-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  transition: all 0.4s;

  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: var(--shadow-lg);
  }
`;

export default StyledCard;
