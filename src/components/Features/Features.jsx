import Container from "../Container/Container";
import {
  Content,
  Flex,
  Texto,
  Titulo,
  Caixa,
  Box,
  Text,
  Texto1,
} from "./styles";
const Features = () => {
  return (
    <Content>
      <Container>
        <Flex>
          <Texto>Features</Texto>
          <Titulo>Design that solves problems, one product at a time</Titulo>
        </Flex>
        <Caixa>
          <Box>
            <img src="img/icon (7).png" alt="" width={32} height={28} />
            <Text>Uses Client First</Text>
            <Texto1>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Texto1>
          </Box>
          <Box>
            <img src="img/icon (8).png" alt="" width={32} height={32} />
            <Text>Two Free Revision Round</Text>
            <Texto1>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Texto1>
          </Box>
          <Box>
            <img src="img/icon (9).png" alt="" width={35} height={35} />
            <Text>Template Customization</Text>
            <Texto1>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Texto1>
          </Box>
          <Box>
            <img src="img/icon (10).png" alt="" width={35} height={35} />
            <Text>24/7 Support</Text>
            <Texto1>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Texto1>
          </Box>
          <Box>
            <img src="img/Vector (41).png" alt="" width={31} height={35} />
            <Text>Quick Delivery</Text>
            <Texto1>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Texto1>
          </Box>
          <Box>
            <img src="img/Icon (11).png" alt="" width={34} height={34} />
            <Text>Hands-on approach</Text>
            <Texto1>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Texto1>
          </Box>
        </Caixa>
      </Container>
    </Content>
  );
};

export default Features;
