import styled from 'styled-components';

const Card = styled.a`
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  text-align: center;
  transition: all 0.25s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
    border-color: var(--accent);
  }
`;

const Badge = styled.div`
  width: 110px;
  height: 110px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(16, 50, 74, 0.1);

  img {
    max-width: 86px;
    max-height: 86px;
    object-fit: contain;
  }
`;

const Name = styled.div`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--ink);
`;

const Issuer = styled.div`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--muted);
`;

const Cta = styled.span`
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--brand);
`;

function Certification({ cert, cta }) {
  return (
    <Card href={cert.link} target='_blank' rel='noreferrer'>
      <Badge>
        <img src={`/img/${cert.img}`} alt={cert.name} />
      </Badge>
      <Name>{cert.name}</Name>
      <Issuer>{cert.issuer}</Issuer>
      <Cta>{cta}</Cta>
    </Card>
  );
}

export default Certification;
