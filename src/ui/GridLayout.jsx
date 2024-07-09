import styled from 'styled-components';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 4.8rem;
  align-items: center;

  @media (max-width: 75em) {
    gap: 3.2rem;
  }

  @media (max-width: 59em) {
    gap: 2.4rem;
  }
`;

export default GridLayout;
