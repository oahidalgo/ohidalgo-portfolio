import styled from 'styled-components';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 4.8rem;
  align-items: center;
`;

export default GridLayout;
