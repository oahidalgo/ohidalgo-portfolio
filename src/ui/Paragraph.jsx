import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: var(--font-size-6);
  line-height: 1.6;
  margin-bottom: 1.6rem;
  color: ${({ color }) =>
    color === 'secondary'
      ? 'var(--color-secondary-300)'
      : 'var(--color-brand-500)'};

  @media (max-width: 34em) {
    font-size: 1.7rem;
  }
`;

export default Paragraph;
