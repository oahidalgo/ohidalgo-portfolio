import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ScrollLink from './ScrollLink';

const Nav = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: var(--color-brand-500);

  height: 9.6rem;
  padding: 1.6rem 3.2rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 3.6rem;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <Nav>
      <NavList>
        <li>
          <ScrollLink to='projects'>Personal Projects</ScrollLink>
        </li>
        <li>
          <ScrollLink to='road'>My Road</ScrollLink>
        </li>
      </NavList>
    </Nav>
  );
}

export default Header;
