import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import { useReveal } from '../hooks/useReveal';

const Shell = styled.div`
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
  transition: background 0.3s, color 0.3s;
`;

function AppLayout() {
  const { pathname } = useLocation();

  // Reset scroll and re-run reveal animations on navigation between pages.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useReveal(pathname);

  return (
    <Shell>
      <Header />
      <Outlet />
      <Footer />
    </Shell>
  );
}

export default AppLayout;
