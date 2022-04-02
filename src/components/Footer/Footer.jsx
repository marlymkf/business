import Container from "../Container/Container";
import {
  Content,
  Flex,
  Left,
  Text,
  Right,
  Titulo,
  Texto,
  Retangulo,
  Texto1,
  Texto2,
  Coluna,
  Sociais,
  Lista,
  Rodape,
  Texto3,
  ListaLink,
} from "./styles";
const Footer = () => {
  return (
    <>
      <Content>
        <Container>
          <Flex>
            <Left>
              <img
                src="img/Vector (39).png"
                alt="finsweet"
                width="122"
                height="28"
              />
              <Text>
                We are always open to discuss your project and improve your
                online presence.
              </Text>
              <Retangulo>
                <Coluna>
                  <Texto1>Email me at</Texto1>
                  <Texto2>contact@website.com</Texto2>
                </Coluna>
                <Coluna>
                  <Texto1>Call us</Texto1>
                  <Texto2>0927 6277 28525</Texto2>
                </Coluna>
              </Retangulo>
            </Left>
            <Right>
              <Titulo>Lets Talk!</Titulo>
              <Texto>
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </Texto>
              <Sociais>
                <a href="/">
                  <img
                    src="img/facebook.png"
                    alt="face"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="/">
                  <img
                    src="img/twitter.png"
                    alt="twiter"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="/">
                  <img
                    src="img/instragram.png"
                    alt="inst"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="/">
                  <img
                    src="img/linkedin.png"
                    alt="link"
                    width={16}
                    height={16}
                  />
                </a>
              </Sociais>
            </Right>
          </Flex>
        </Container>
      </Content>
      <Container>
        <Rodape>
          <Texto3>Copyright 2022, Finsweet.com</Texto3>
          <Lista>
            <li>
              <ListaLink href="Home">Home</ListaLink>
            </li>
            <li>
              <ListaLink href="About us">About us</ListaLink>
            </li>
            <li>
              <ListaLink href="Features">Features</ListaLink>
            </li>
            <li>
              <ListaLink href="Pricing">Pricing</ListaLink>
            </li>
            <li>
              <ListaLink href="FAQ">FAQ</ListaLink>
            </li>
            <li>
              <ListaLink href="Blog">Blog</ListaLink>
            </li>
          </Lista>
        </Rodape>
      </Container>
    </>
  );
};

export default Footer;
