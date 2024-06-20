import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div``;

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
