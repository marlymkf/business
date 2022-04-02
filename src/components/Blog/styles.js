import styled from "styled-components";
export const Content = styled.div`

`;
export const Titulo = styled.h2`
color: #282938;
font-weight: 600;
font-size: 48px;
line-height: 133%;
margin-top: 128px;
margin-bottom: 64px;

@media (max-width: 767px){
    margin-top: 60px;
    margin-bottom: 20px;
}
`;
export const Coluna = styled.div`
display: flex;
margin-left: -16px;

@media (max-width: 767px){
    flex-direction: column;
  
}
`;
export const Coluna1 = styled.div`
padding:16px;

@media (max-width: 767px) {
   width: 100%;
   padding: 16px 0 16px 16px;
}
`;
export const Text = styled.p`
margin-top: 40px;
color: #282938;
opacity: 0.7;
font-weight: 500;
font-size: 16px;
line-height: 175%;
`;
export const Texto = styled.p`
color: #282938;
font-weight: 500;
font-size: 24px;
line-height: 150%;
margin-top:16px;
max-width: 405px;
`;
export const Texto1 = styled.p`
color: #282938;
opacity: 0.7;
font-weight: 400;
font-size: 16px;
line-height: 175%;
margin-top: 16px;
max-width: 405px;
margin-bottom: 32px;
`;
export const Linkes = styled.a`
text-decoration:none;
color: #282938;
font-weight: 500;
font-size: 16px;
line-height: 175%;

`;
export const Img = styled.img`
margin-left: 12px;
`;

