import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BaseLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;

  color: var(--color-grey-500);
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.3s;

  &:hover {
    color: var(--color-brand-500);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg {
    color: var(--color-brand-600);
  }
`;

const StyledNavLink = styled(BaseLink).attrs({ as: NavLink })``;

const StyledExternalLink = styled(BaseLink).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``;

export { StyledNavLink, StyledExternalLink };
