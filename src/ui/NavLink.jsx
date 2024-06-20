import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import DarkModeToggle from './DarkModeToggle';

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

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    color: var(--color-secondary-50);
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-secondary-600);
  }
`;

const StyledCtaNavLink = styled(StyledNavLink)`
  &:link,
  &:visited {
    background-color: var(--color-secondary-500);
    color: var(--color-grey-800);
    border-radius: var(--border-radius-sm);
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-secondary-700);
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <Nav>
      <NavList>
        <li>
          <StyledNavLink to='/about'>About me</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/projects'>Personal Projects</StyledNavLink>
        </li>
        <li>
          <StyledCtaNavLink to='/road'>My Road</StyledCtaNavLink>
        </li>

        {/* <li>
        <DarkModeToggle />
        </li> */}
      </NavList>
    </Nav>
  );
}

export default Header;
