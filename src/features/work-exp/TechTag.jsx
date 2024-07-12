import styled from 'styled-components';

const Tag = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  border-radius: 100px;
  font-weight: 600;
  color: ${(props) => (props.$tech === 'ExpressJS' ? '#fff' : 'black')};
  background-color: ${(props) => {
    switch (props.$tech) {
      case 'NodeJS':
        return '#8cc84b';
      case 'React':
        return '#61dafb';
      case 'Angular':
        return '#e40f3d';
      case 'C#':
        return '#a179dc';
      case 'SQL Server':
        return '#ffd43b';
      case 'Integration Services':
        return '#ff9f43';
      case 'Docker':
        return '#0db7ed';
      case 'Power Automate':
        return '#f36565';
      case 'GraphQL':
        return '#e535ab';
      case 'Javascript':
        return '#f0db4f';
      case 'ExpressJS':
        return '#000000';
      case 'HTML':
        return '#f06529';
      case 'CSS':
        return '#2965f1';
      case 'Bootstrap':
        return '#8c68c2';
      default:
        return 'transparent';
    }
  }};
`;

function TechTag({ tech }) {
  return <Tag $tech={tech}>{tech}</Tag>;
}

export default TechTag;
