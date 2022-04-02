import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const Bloco = styled.div`
  position: relative;
  display: block;
`;
export const Azul = styled.div`
  width: 100%;
  display: block;
  position: absolute;
  left: 14.6%;
  top: 14.6%;
  max-width: 430px;

  @media (max-width: 1200px) {
    max-width: 300px;
    left: 40px;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 54px;
  line-height: 137%;
  max-width: 427px;

  @media (max-width: 1200px) {
    font-size: 40px;
    max-width: 300px;
  }
`;
export const Texto = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  max-width: 430px;
  margin-top: 24px;

  @media (max-width: 1200px) {
    max-width: 300px;
  }
`;
export const AzulMarinho = styled.div`
  background: #1c1e53;
  width: 100%;
  display: block;
  max-width: 624px;
  padding: 96px 96px 48px;

  @media (max-width: 1200px) {
    padding: 96px 40px 48px;
  }

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
export const Texto1 = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  color: #fff;
  margin-bottom: 16px;
`;
export const Texto2 = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  max-width: 432px;
  margin-bottom: 40px;
  color: #fff;
`;
export const Formulario = styled.form``;
export const Input = styled.input`
  font-weight: normal;
  font-size: 16px;
  line-height: 175%;
  color: rgb(244, 246, 252, 0.5);
  padding: 17px 32px;
  border: 1.5px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 100%;
  background: transparent;
`;
export const Linkes = styled.a`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 178%;
  text-decoration: none;
  text-align: center;
  margin-top: 50px;
  align-items: center;
  max-width: 244px;
  margin: auto;
`;
export const Img = styled.img`
  margin-left: 16px;
`;
export const ImgLeft = styled.img`
  height: 100%;

  @media (max-width: 991px) {
    width: 100%;
   
  }
`;
export const Get = styled.div`
  max-width: 244px;
  margin: auto;
  text-align: center;
`;
