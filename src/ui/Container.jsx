import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3.2rem;

  @media (max-width: 44em) {
    padding: 0 1.8rem;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
