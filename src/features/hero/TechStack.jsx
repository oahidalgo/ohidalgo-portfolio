import {
  DiAngularSimple,
  DiJsBadge,
  DiMsqlServer,
  DiNodejsSmall,
  DiReact,
} from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';
import styled from 'styled-components';

const StyledTechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  list-style: none;
`;

const TechStackItem = styled.li`
  /* To not configure the icon size in each icon*/
  & svg {
    height: 4.8rem;
    width: 4.8rem;
  }
`;

function TechStack() {
  return (
    <StyledTechStack>
      <TechStackItem>
        <DiMsqlServer fill='#dd0031' />
      </TechStackItem>
      <TechStackItem>
        <DiNodejsSmall fill='#339933' />
      </TechStackItem>
      <TechStackItem>
        <DiJsBadge fill='#f7df1e' />
      </TechStackItem>
      <TechStackItem>
        <TbBrandCSharp stroke='#fff' />
      </TechStackItem>
      <TechStackItem>
        <DiReact fill='#61dafb' />
      </TechStackItem>
      <TechStackItem>
        <DiAngularSimple fill='#dd0031' />
      </TechStackItem>
    </StyledTechStack>
  );
}

export default TechStack;
