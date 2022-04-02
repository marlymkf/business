import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;

  @media (max-width: 991px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;
export const Titulo = styled.h1`
  color: #282938;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;

  @media (max-width: 991px) {
    font-size: 36px;
    margin-top:60px;
  }
`;
export const Link = styled.a`
  color: #282938;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-decoration: none;
`;

export const Img = styled.img`
  margin-left: 16px;
`;
export const Text = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  padding: 312px 35px 16px 48px;

  @media (max-width: 1200px) {
    padding: 240px 30px 20px 20px;
  }
  @media (max-width: 767px) {
    padding: 120px 10px 10px 20px;
    font-size: 10px;
    line-height: 15px;
  }
`;
export const Texto = styled.p`
  color: #ffffff;
  opacity: 0.8;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  max-width: 293px;
  margin-left: 48px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    margin-left: 20px;
  }
  @media (max-width: 767px) {
    margin-left: 20px;
    font-size: 8px;
    line-height: 15px;
    margin-bottom: 15px;
  }
`;

export const Linke = styled.a`
  color: #fcd980;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-decoration: none;
  margin-left: 48px;

  @media (max-width: 1200px) {
    margin-left: 20px;
  }
  @media (max-width: 767px) {
    margin-left: 20px;
    font-size: 10px;
    line-height: 22px;
  }
`;
export const Linkes = styled.a`
  color: #fcd980;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-decoration: none;
  margin-left: 56px;
  @media (max-width: 1200px) {
    margin-left: 20px;
  }
  @media (max-width: 767px) {
    margin-left: 20px;
  }
`;

export const Image = styled.img`
  margin-left: 16px;

  @media (max-width: 767px) {
    margin-left: 8px;
  }
`;
export const Azul = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 45%;
  height: 100%;
  background: linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  );
`;

export const AzulLargo = styled(Azul)`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  );
`;

export const Bloco = styled.a`
  position: relative;
  display: block;
  @media (max-width: 1200px) {
  }
  @media (max-width: 991px) {
    margin-bottom: 50px;
  }
`;
export const Texto2 = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #fff;
  padding: 129px 36px 10px 56px;
  width: 313px;

  @media (max-width: 767px) {
    padding: 115px 36px 10px 20px;
    line-height: 25px;
  }
  @media (max-width: 1200px) {
    padding: 120px 36px 10px 20px;
    line-height: 28px;
  }
`;
export const Bloco1 = styled.div`
  margin-top: 32px;

  @media (max-width: 991px) {
    margin-top: 60px;
  }
`;

export const Right = styled.div`
  @media (max-width: 991px) {
    display: flex;
  }
  @media (max-width: 767px) {
    display: block;
  }
`;
