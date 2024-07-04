import styled from 'styled-components';
import { useMoveBack } from '../hooks/useMoveBack';
import { FaArrowLeft } from 'react-icons/fa';

const StyledBackButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function BackButton() {
  const moveBack = useMoveBack();

  return (
    <StyledBackButton onClick={moveBack}>
      <FaArrowLeft size='2.2rem' />
    </StyledBackButton>
  );
}

export default BackButton;
