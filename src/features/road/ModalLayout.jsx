import { Outlet } from 'react-router-dom';
import ExpandingDiv from '../../ui/ExpandingDiv';

function ModalLayout() {
  return (
    <ExpandingDiv backgroundColor='var(--color-brand-500)'>
      <ExpandingDiv.Container>
        <Outlet />
      </ExpandingDiv.Container>
    </ExpandingDiv>
  );
}

export default ModalLayout;
