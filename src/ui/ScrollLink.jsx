import styled from 'styled-components';

const StyledScrollLink = styled.a`
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

function ScrollLink({ to, children }) {
  function handleClick(e) {
    console.log(to);
    e.preventDefault();
    const target = document.getElementById(to);
    console.log(target);
    target.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <StyledScrollLink href={`#${to}`} onClick={handleClick}>
      {children}
    </StyledScrollLink>
  );
}

export default ScrollLink;
