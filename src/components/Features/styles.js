import styled from "styled-components";
export const Content = styled.div`
  background: #f4f6fc;
  padding-top: 128px;
  padding-bottom: 127px;


  @media (max-width: 991px){
    padding-top: 85px;
  }

  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
export const Flex = styled.div`
  text-align: center;
`;
export const Texto = styled.p`
  color: #282938;
  font-weight: 500;
  font-size: 16px;
  line-height: 133%;
  margin-bottom: 12px;
`;
export const Titulo = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
  color: #282938;
  max-width: 590px;
  margin: auto;
  margin-bottom: 47px;

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 34px;
  }
`;
export const Caixa = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
  margin-left:-16px;
`;
export const Box = styled.div`
  max-width: 404px;
  width: 31.6%;
  background: #ffffff;
  padding: 58px 32px 48px 48px;
  margin:16px; 
  margin-right:0;
  
  @media (max-width: 991px) {
   padding: 38px 20px 24px 24px;
   width:47.8%;
  
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    margin: 8px;
    margin-top: 18px;
  }
`;
export const Text = styled.p`
  color: #282938;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 12px;
  margin-top: 22px;
`;
export const Texto1 = styled.p`
  color: #282938;
  opacity: 0.7;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  max-width: 324px;

  @media (max-width: 991px) {
    font-size: 12px;
  line-height: 22px;
  max-width: 224px;
  }
`;
