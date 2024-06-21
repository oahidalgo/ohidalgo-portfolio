import styled from 'styled-components';

const RoadContainer = styled.div`
  background-image: url('/img/mountainRoad.webp');
  /* fixed width, auto height */
  background-size: 1920px auto;
  width: 100vw;
  height: 1050px;
  position: relative;

  @media (max-width: 944px) {
    background-position: -55rem center;
  }
`;

const Road = ({ children }) => (
  <RoadContainer id='road'>{children}</RoadContainer>
);

export default Road;
