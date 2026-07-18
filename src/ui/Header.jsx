import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { useUI } from '../hooks/useUI';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.8rem;
  padding: 0 4rem;
  background: var(--header);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);

  @media (max-width: 44em) {
    padding: 0 1.8rem;
  }
`;

const Logo = styled.span`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--brand);
  cursor: pointer;

  &:hover {
    color: var(--accent);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.8rem;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.3rem;

  @media (max-width: 59em) {
    display: none;
  }
`;

const NavItem = styled.span`
  color: var(--text);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--accent);
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const LangSwitch = styled.div`
  display: flex;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.1rem;
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow: hidden;
`;

const LangButton = styled.button`
  padding: 5px 9px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(props) => (props.$active ? 'var(--btnbg)' : 'transparent')};
  color: ${(props) => (props.$active ? 'var(--btnink)' : 'var(--muted)')};
`;

const IconButton = styled.button`
  display: flex;
  cursor: pointer;
  color: var(--text);

  &:hover {
    color: var(--accent);
  }
`;

const ContactButton = styled.button`
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--btnink);
  background: var(--btnbg);
  border-radius: 7px;
  padding: 7px 15px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

function Header() {
  const { lang, setLang, isDark, toggleTheme, t } = useUI();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function scrollToSection(id) {
    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 72,
          behavior: 'smooth',
        });
      }
    };
    if (pathname !== '/home' && id !== 'sec-contact') {
      navigate('/home');
      setTimeout(go, 100);
    } else {
      go();
    }
  }

  const navActions = [
    () => scrollToSection('sec-projects'),
    () => scrollToSection('sec-road'),
    () => navigate('/experience'),
    () => scrollToSection('sec-certs'),
  ];

  return (
    <StyledHeader>
      <Logo onClick={() => navigate('/home')}>{t.ui.logo}</Logo>

      <Nav>
        {t.ui.nav.map((label, i) => (
          <NavItem key={label} onClick={navActions[i]}>
            {label}
          </NavItem>
        ))}
      </Nav>

      <Right>
        <LangSwitch>
          <LangButton $active={lang === 'es'} onClick={() => setLang('es')}>
            ES
          </LangButton>
          <LangButton $active={lang === 'en'} onClick={() => setLang('en')}>
            EN
          </LangButton>
        </LangSwitch>

        <IconButton onClick={toggleTheme} aria-label='Toggle theme'>
          {isDark ? (
            <svg
              width='17'
              height='17'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <circle cx='12' cy='12' r='4' />
              <path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
            </svg>
          ) : (
            <svg
              width='17'
              height='17'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z' />
            </svg>
          )}
        </IconButton>

        <ContactButton onClick={() => scrollToSection('sec-contact')}>
          {t.ui.contact}
        </ContactButton>
      </Right>
    </StyledHeader>
  );
}

export default Header;
