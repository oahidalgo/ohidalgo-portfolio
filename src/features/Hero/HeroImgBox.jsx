import styled from 'styled-components';

const StyledHeroImgBox = styled.div`
  text-align: center;
`;

const HeroImg = styled.img`
  width: 60%;
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
`;

function HeroImgBox() {
  return (
    <StyledHeroImgBox>
      <picture>
        <source srcSet='img/oliver.jpg' type='image/jpg' />
        <source srcSet='img/hero-min.png' type='image/png' />

        <HeroImg
          src='img/oliver.jpg'
          alt='Oliver Hidalgo, a software engineer specialized in systems integration'
        />
      </picture>
    </StyledHeroImgBox>
  );
}

export default HeroImgBox;
