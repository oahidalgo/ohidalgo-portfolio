import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

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
