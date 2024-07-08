import styled, { css } from 'styled-components';

const Heading = styled.h1`
  letter-spacing: -0.2rem;
  line-height: 1.2;
  color: ${({ color, as }) =>
    color
      ? `var(--color-${color})`
      : as === 'h1'
      ? 'var(--color-secondary-300)'
      : 'var(--color-brand-500)'};

  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 5.2rem;
      font-weight: 600;
      margin-bottom: var(--space-7);

      @media (max-width: 34em) {
        font-size: 4rem;
      }
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 4.4rem;
      font-weight: 600;
      margin-bottom: var(--space-6);

      @media (max-width: 34em) {
        font-size: 3rem;
      }
    `}

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: var(--space-4);

      @media (max-width: 34em) {
        font-size: 2.2rem;
      }
    `}

  ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 1.6rem;
      letter-spacing: -0.1rem;

      @media (max-width: 34em) {
        font-size: 1.8rem;
      }
    `}
`;

export default Heading;
