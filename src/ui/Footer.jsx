import styled from 'styled-components';

import { useUI } from '../hooks/useUI';

const StyledFooter = styled.footer`
  background: var(--footerbg);
`;

const Inner = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 7.2rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  @media (max-width: 44em) {
    padding: 5.6rem 1.8rem 3.2rem;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 3.2rem;
  flex-wrap: wrap;
`;

const Heading = styled.div`
  max-width: 56rem;
`;

const Title = styled.div`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: -0.02em;
  color: #eef4f9;

  @media (max-width: 44em) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  margin: 1.2rem 0 0;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.6;
  color: #a9c2d4;
`;

const CtaLink = styled.a`
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1.35rem;
  background: #53c8f5;
  color: #0a1420;
  border-radius: 8px;
  padding: 13px 24px;
  transition: transform 0.2s;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    color: #0a1420;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  border-top: 1px solid rgba(141, 169, 190, 0.2);
  padding-top: 2.4rem;
  flex-wrap: wrap;
`;

const Copy = styled.span`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.2rem;
  color: #8da9be;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem 2.4rem;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.3rem;

  a {
    color: #a9c2d4;
    &:hover {
      color: #53c8f5;
    }
  }

  span.sep {
    color: #53c8f5;
  }
`;

function Footer() {
  const { t } = useUI();
  const { github, githubHandle, linkedin, linkedinHandle, email } = t.meta;

  return (
    <StyledFooter id='sec-contact'>
      <Inner>
        <Top>
          <Heading>
            <Title>{t.ui.footTitle}</Title>
            <Desc>{t.ui.footDesc}</Desc>
          </Heading>
          <CtaLink href={`mailto:${email}`}>{t.ui.footCta}</CtaLink>
        </Top>
        <Bottom>
          <Copy>{t.ui.logo} © 2026</Copy>
          <Links>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={github} target='_blank' rel='noreferrer'>
              GitHub <span className='sep'>/</span> {githubHandle}
            </a>
            <a href={linkedin} target='_blank' rel='noreferrer'>
              LinkedIn <span className='sep'>/</span> {linkedinHandle}
            </a>
          </Links>
        </Bottom>
      </Inner>
    </StyledFooter>
  );
}

export default Footer;
