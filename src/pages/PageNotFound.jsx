import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledPageNotFound = styled.main`
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  padding: 4.8rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 3.2rem;
  letter-spacing: -0.02em;
`;

const HomeLink = styled(Link)`
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1.35rem;
  background: var(--btnbg);
  color: var(--btnink);
  border-radius: 8px;
  padding: 12px 22px;

  &:hover {
    color: var(--btnink);
    opacity: 0.85;
  }
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Title>404 — Page not found 😢</Title>
      <HomeLink to='/home'>← Back to home</HomeLink>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
