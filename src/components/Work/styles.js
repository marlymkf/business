import styled from "styled-components";
export const Content = styled.div`
  background: #F4F6FC;
  margin-top: 128px;

  @media (max-width: 991px) {
   margin-top:60px;
  }
`;
export const Flex = styled.div`
  padding-top: 128px;
  justify-content: space-between;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    padding-top: 60px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    padding-top: 30px;
  }
`;
export const Left = styled.div`
  max-width: 405px;
`;
export const Titulo = styled.h1`
  color: #282938;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
  margin-bottom: 16px;
`;
export const Texto = styled.p`
  font-size: 16px;
  line-height: 175%;
  color: #282938;
  opacity: 0.7;
  max-width: 350px;
  margin-bottom: 16px;
`;
export const Link = styled.a`
  color: #2405f2;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
 text-decoration:none;
`;
export const Triangulo = styled.div`
  max-width: 244px;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;
export const Right = styled.div`
  max-width: 656px;
  display: flex;
  flex-wrap: wrap;
  max-width: 580px;;
  @media (max-width:1200px) {
    
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const Box = styled.div`
  margin-bottom: 39px;
  width: 50%;
  @media (max-width:1200px) {
    
  } 
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Texto1 = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: #282938;
  margin-bottom: 8px;
  margin-top: 16px;
`;
export const Coluna = styled.div``;
export const Img = styled.img`
  margin-left: 16px;
`;

