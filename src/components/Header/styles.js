import styled from "styled-components";
export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  margin-bottom: 126px;

  @media (max-width: 991px) {
    margin-bottom: 20px;
  }

  @media (max-width: 1003px) {
    margin-bottom: 10px;
    padding: 30px 0px;

    &.active #hamburger {
      border-top-color: transparent;
    }
    &.active #hamburger::before {
      transform: rotate(135deg);
    }
    &.active #hamburger::after {
      transform: rotate(-135deg);
      top: -7px;
    }
    &.active .nav {
      height: calc(100% - 93px);
      visibility: visible;
      overflow-y: auto;
      padding: 0 2.7%;
    }
  }
`;

export const Hamburger = styled.span`
  @media (max-width: 1003px) {
    border-top: 2px solid;
    width: 20px;
  }

  &::after,
  &::before {
    content: "";
    width: 20px;
    display: block;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
`;
export const BtnMobile = styled.menu`
  display: none;

  @media (max-width: 1003px){
    display:flex;
    color:#fff;
    cursor:pointer;
    text-indent: -10000px;
    gap: 0.5rem;
    border: none;
    padding: 0.5rem 8px;
   }
 
`;
export const Lista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-left: 0px;

  @media (max-width: 1003px) {
    display: block;
    position: absolute;
    width: 100%;
    top: 93px;
    right: 0;
    padding-left: 0;
    height: 0;
    transition: 0.6s;
    z-index: 1000;
    visibility: hidden;
    overflow-y: hidden;
    background: #1C1E53;;
  }

  li:first-child a {
    color: #fff;
  }
`;
export const ListaLink = styled.a`
  text-decoration: none;
  margin: 0 16px;
  font-size: 16px;
  line-height: 28px;
  color: #bbbbcb;

  @media (max-width: 1003px) {
    font-size: 22px;
    line-height: 32px;
    padding-top: 30px;
    display: block;
    border-bottom: 2px solid rgba(218, 216, 115, 0.25);
    margin: 0;
  }
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
