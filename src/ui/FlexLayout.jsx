import styled from 'styled-components';

const FlexLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
  align-items: center;
  justify-content: space-between;

  > * {
    flex: 1 1 calc(40rem - 4.8rem);
    max-width: calc(50% - 2.4rem);

    @media (max-width: 944px) {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;

export default FlexLayout;
