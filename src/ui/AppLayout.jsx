import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const PageBody = styled.div``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <PageBody>
        <Outlet />
      </PageBody>
    </StyledAppLayout>
  );
}

export default AppLayout;
