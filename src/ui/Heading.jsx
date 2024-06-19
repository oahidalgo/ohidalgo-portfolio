import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 5.2rem;
      font-weight: 600;
      margin-bottom: 3.2rem;

      @media (max-width: 34em) {
        font-size: 4.4rem;
      }
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 4.4rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 3rem;
      font-weight: 500;
    `}

    
  ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 1.6rem;
      font-weight: 600;
      text-align: center;
    `}

  letter-spacing: -0.2rem;
  line-height: 1.2;
`;

export default Heading;
