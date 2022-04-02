import styled from "styled-components";

export const Flex = styled.div`
  justify-content: space-between;
  display: flex;
  padding-top: 130px;
  padding-bottom: 131px;
  
  @media (max-width:1200px) {
    flex-wrap:wrap;
    padding-bottom: 0px;
  }
  @media (max-width: 991px) {
    padding-top: 80px;
    padding-bottom: 30px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  max-width: 327px;

  @media (max-width: 991px) {
    max-width: 270px;
  }
`;

export const Text = styled.p`
  color: #282938;
  font-weight: 600;
  font-size: 38px;
  line-height: 56px;

  @media (max-width: 991px) {
    font-size: 32px;
    line-height: 46px;
  }
`;
export const Texto = styled.p`
  color: #282938;
  opacity: 0.7;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  margin-top: 16px;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;
export const Texto1 = styled.p`
  color: #282938;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.5;
  max-width: 820px;

  @media (max-width: 991px) {
    margin-top:40px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
export const Right = styled.div``;
export const Img = styled.img`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
`;
export const Texto2 = styled.p`
  color: #282938;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  margin-left: 14px;
`;
export const Texto3 = styled.p`
  color: #282938;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  margin-left: 14px;
`;

export const Foto = styled.div`
  display: flex;
  align-items: center;
  margin-top: 51px;
`;
