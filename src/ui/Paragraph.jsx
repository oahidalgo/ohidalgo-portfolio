import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 1.6rem;
  color: ${({ color }) => `var(--color-${color})` || 'black'};
`;

export default Paragraph;
