import styled from "styled-components";

export const Content = styled.div`
  background: #1c1e53;
`;
export const Left = styled.div`
  max-width: 582px;
`;
export const Titulo = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 54px;
  line-height: 74px;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    font-size: 48px;
    line-height: 60px;
  }
`;
export const Texto = styled.p`
  color: #ffffff;
  opacity: 0.7;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 48px;
  max-width: 562px;
`;
export const Retangulo = styled.div`
  display: flex;
  align-items: center;
  max-width: 408px;
`;
export const Link = styled.a`
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  margin-left: 40px;
  text-decoration: none;
`;
export const Right = styled.div``;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 128px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const Img = styled.img`
  @media (max-width: 767px) {
    margin-top: 40px;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;
export const Image = styled.img`
margin-left: 16px;
`;
