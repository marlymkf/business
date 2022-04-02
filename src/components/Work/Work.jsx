import Container from "../Container/Container";
import {
  Flex,
  Left,
  Titulo,
  Texto,
  Link,
  Triangulo,
  Right,
  Box,
  Texto1,
  Img, Content
} from "./styles";
const Work = () => {
  return (
    <Content>
      <Container>
        <Flex>
          <Left>
            <Titulo>How we work</Titulo>
            <Texto>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Texto>
            <Triangulo>
              <Link a href="/">
                Get in touch with us
                <Img src="img/Arrow 2.png" alt="" width={25} height={12} />
              </Link>
            </Triangulo>
          </Left>
          <Right>
            <Box>
              <img src="img/pointer 1.png" alt="" width={50} height={50} />
              <Texto1>Strategy</Texto1>
              <Texto>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </Texto>
            </Box>
            <Box>
              <img src="img/calendario.png" alt="" width={50} height={50} />
              <Texto1>Wireframing</Texto1>
              <Texto>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </Texto>
            </Box>
            <Box>
              <img src="img/pointer 3 (1).png" alt="" width={50} height={50} />
              <Texto1>Design</Texto1>
              <Texto>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </Texto>
            </Box>
            <Box>
              <img src="img/pointer 1 (4).png" alt="" width={50} height={50} />
              <Texto1>Development</Texto1>
              <Texto>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </Texto>
            </Box>
          </Right>
        </Flex>
      </Container>
    </Content>
  );
};

export default Work;
