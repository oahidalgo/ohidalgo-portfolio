import styled from 'styled-components';

import { useUI } from '../../hooks/useUI';
import { useTypingEffect } from '../../hooks/useTypingEffect';

const Section = styled.section`
  max-width: 112rem;
  margin: 0 auto;
  padding: 8.4rem 4rem 9.6rem;
  display: grid;
  grid-template-columns: 1fr 32rem;
  gap: 5.6rem;
  align-items: center;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    gap: 4.8rem;
    padding: 5.6rem 1.8rem 6.4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Kicker = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.9rem;
  color: var(--brand);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  min-height: 2.4rem;

  span.line {
    width: 32px;
    height: 1px;
    background: var(--brand);
    flex: none;
  }

  span.caret {
    border-right: 2px solid var(--accent);
    height: 14px;
    animation: caret 0.8s step-end infinite;
  }
`;

const Name = styled.h1`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 7.2rem;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: var(--ink);
  min-height: 7.4rem;

  span.dot {
    color: var(--accent);
  }

  span.caret {
    display: inline-block;
    border-right: 3px solid var(--accent);
    height: 56px;
    vertical-align: -6px;
    animation: caret 0.8s step-end infinite;
  }

  @media (max-width: 44em) {
    font-size: 4.8rem;
    min-height: 5rem;
  }
`;

const Desc = styled.p`
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1.55rem;
  line-height: 1.65;
  color: var(--text);
  max-width: 46rem;
`;

const Stats = styled.div`
  display: flex;
  gap: 3.2rem;
  padding: 1.8rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
`;

const Stat = styled.div`
  .num {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 2.6rem;
    color: var(--ink);
  }
  .label {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 1.15rem;
    color: var(--muted);
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1.4rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1.35rem;
  background: var(--btnbg);
  color: var(--btnink);
  border-radius: 8px;
  padding: 12px 22px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
`;

const GhostLink = styled.a`
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.35rem;
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px 22px;
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const Photo = styled.div`
  position: relative;
  justify-self: end;

  @media (max-width: 59em) {
    order: -1;
    justify-self: center;
    margin-bottom: 1.6rem;
  }

  .card {
    position: absolute;
    inset: 0;
    background: var(--panel2);
    border-radius: 16px;
    transform: rotate(3deg);
  }

  img {
    position: relative;
    width: 32rem;
    height: 38rem;
    object-fit: cover;
    border-radius: 16px;
    filter: grayscale(0.25) contrast(1.03);
  }

  @media (max-width: 44em) {
    justify-self: center;
    img {
      width: 26rem;
      height: 31rem;
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 8px 15px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--ink);
  white-space: nowrap;
  box-shadow: var(--shadow);

  span.dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4ade80;
    flex: none;
  }
`;

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 72,
      behavior: 'smooth',
    });
  }
}

function HeroSection() {
  const { t } = useUI();
  const { typedKicker, typedName, kickerDone, typingDone } = useTypingEffect(
    t.ui.kicker,
    t.meta.name
  );

  return (
    <Section id='sec-hero'>
      <Content>
        <Kicker>
          <span className='line' />
          <span>{typedKicker}</span>
          {!kickerDone && <span className='caret' />}
        </Kicker>

        <Name>
          {typedName}
          {typingDone && <span className='dot'>.</span>}
          {kickerDone && !typingDone && <span className='caret' />}
        </Name>

        <Desc>{t.ui.heroDesc}</Desc>

        <Stats>
          <Stat>
            <div className='num'>9+</div>
            <div className='label'>{t.ui.statYears}</div>
          </Stat>
          <Stat>
            <div className='num'>3</div>
            <div className='label'>{t.ui.statInd}</div>
          </Stat>
          <Stat>
            <div className='num'>3</div>
            <div className='label'>{t.ui.statCerts}</div>
          </Stat>
        </Stats>

        <Actions>
          <PrimaryButton onClick={() => scrollToSection('sec-road')}>
            {t.ui.btnAscent}
          </PrimaryButton>
          <GhostLink href='/Oliver-Hidalgo-CV.pdf' download>
            {t.ui.btnCV} ↓
          </GhostLink>
          <GhostLink href={t.meta.github} target='_blank' rel='noreferrer'>
            GitHub ↗
          </GhostLink>
        </Actions>
      </Content>

      <Photo>
        <div className='card' />
        <img src='/img/oliver.jpg' alt={t.meta.name} />
        <Badge>
          <span className='dot' />
          {t.ui.badge}
        </Badge>
      </Photo>
    </Section>
  );
}

export default HeroSection;
