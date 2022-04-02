import styled from "styled-components";
export const Content = styled.div`
  background: #1c1e53;
  margin-top: 112px;

  @media (max-width: 767px) {
    margin-top: 60px;
  }
`;

export const Flex = styled.div`
  padding-top: 96px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    padding-top:50px;
   
  }
`;
export const Left = styled.div`
  @media (max-width: 1200px) {
    width: 53%;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding-bottom:20px;
  }
`;
export const Right = styled.div`
  margin-right: 23.88%;

  @media (max-width: 1200px) {
    margin-right: 0;
    width: 40%;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding-top:20px;
  }
`;
export const Text = styled.p`
  color: #ffffff;
  opacity: 0.8;
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  margin-top: 22px;
  max-width: 399px;
  margin-bottom: 86px;

  @media (max-width: 767px) {
    margin-bottom:50px;
  }
`;
export const Titulo = styled.h1`
  color: #ffffff;
  font-weight: 600;
  font-size: 48px;
  line-height: 133%;
`;
export const Texto = styled.p`
  color: #f4f6fc;
  opacity: 0.8;
  max-width: 399px;
  margin-top: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
`;
export const Retangulo = styled.div`
  background: #fcd980;
  padding: 17px 137px 16px 37px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 17px 26px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 10px;
    
  }
`;
export const Texto1 = styled.p`
  color: #282938;
  font-weight: 500;
  font-size: 18px;
  line-height: 178%;

  @media (max-width: 767px) {
    line-height: 150%;
  }
`;
export const Texto2 = styled.p`
  margin-right: 29px;
  color: #282938;
  opacity: 0.8;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
`;
export const Coluna = styled.div`
  display: Flex;
  flex-direction: column;
`;
export const Sociais = styled.div`
  margin-top: 28px;
  max-width: 144px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;
export const Rodape = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const Lista = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
`;
export const Texto3 = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  color: #282938;
`;
export const ListaLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  color: #282938;
  text-decoration: none;
  margin: 0 16px;

  @media (max-width: 767px) {
    margin: 0 5px;
    font-size: 14px;
  }
`;
