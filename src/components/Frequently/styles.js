import styled from "styled-components";
export const Flex = styled.div`
  justify-content: space-between;
  display: flex;
  padding-top:128px;
  padding-bottom:128px;

  @media (max-width:1200px) {
    flex-wrap:wrap;
  }
  @media (max-width:767px){
    padding-bottom: 50px;
    padding-top: 50px;
  }
`;
export const Left = styled.div``;
export const Text = styled.p`
  color: #282938;
  font-weight: 600;
  font-size: 38px;
  line-height: 147%;
  max-width: 291px;
  margin-bottom: 16px;
`;

export const Texto = styled.p`
  color: #2405f2;
  opacity: 0.87;
  font-weight: 500;
  font-size: 18px;
  line-height: 174%;
`;
export const Right = styled.div`
  max-width: 820px;
  width: 100%;
`;
export const Faq = styled.div`
  justify-content: space-between;
  display: flex;
  max-width: 820px;
  width: 95%;
  border-bottom: 2px solid #ececf1;
  margin-top: 32px;
`;

export const Texto1 = styled.p`
  color: #2405f2;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  margin-right: 59px;
`;
export const Titulo = styled.h2`
  color: #282938;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  margin-bottom: 32px;
`;
export const Texto2 = styled.p`
  max-width: 624px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.78;
  color: #282938;
  opacity: 0.87;
  margin-bottom: 32px;
`;
export const Center = styled.div`
  max-width: 843px;
  width: 100%;
`;
export const Img = styled.img`
  width: 16px;
  height: 16px;
`;
export const Border = styled.div``;
