import styled from "styled-components";

export const Botao = styled.button`
  padding: 14px 48px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  border: 2px solid rgba(244, 246, 252, 0.2);
  cursor: pointer;
  border-radius: 41px;
  background: #1c1e53;
  margin-left: 48px;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 24px;
    padding: 8px 14px;
    margin-right: 14px;
  }

  &.but {
    padding: 14px 56px;
    color: #1b1c2b;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    background: #fcd980;
    border-radius: 41px;
    margin: 0;

    @media (max-width: 767px) {
      padding: 14px 22px;
      font-size: 14px;
      border-radius: 30px;
    }
  }

  &.w100 {
    width: 100%;
    margin-top: 16px;
    margin-bottom: 33px;
  }
`;
export const Butao2 = styled.button`
  color: #1b1c2b;
  font-weight: 600;
  font-size: 18px;
  line-height: 178%;
  margin: 0px 10px;
  background: #fcd980;
  border-radius: 41px;
  padding: 16px 150px;
`;
