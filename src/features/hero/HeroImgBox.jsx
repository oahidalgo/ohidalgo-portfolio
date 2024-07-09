import styled from 'styled-components';

const StyledHeroImgBox = styled.div`
  text-align: center;
`;

const HeroImg = styled.img`
  width: 60%;
  border-radius: 50%;
  box-shadow: var(--shadow-lg);

  @media (max-width: 59em) {
    width: 75%;
  }

  @media (max-width: 44em) {
    width: 60%;
  }

  @media (max-width: 34em) {
    width: 75%;
  }
`;

function HeroImgBox() {
  return (
    <StyledHeroImgBox>
      <picture>
        <source srcSet='img/oliver.jpg' type='image/jpg' />
        <HeroImg
          src='img/oliver.jpg'
          alt='Oliver Hidalgo, a software engineer specialized in systems integration'
        />
      </picture>
    </StyledHeroImgBox>
  );
}

export default HeroImgBox;
