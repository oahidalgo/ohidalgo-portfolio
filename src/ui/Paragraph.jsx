import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 1.6rem;
  color: ${({ color }) =>
    color === 'secondary'
      ? 'var(--color-secondary-300)'
      : 'var(--color-brand-500)'};
`;

export default Paragraph;
