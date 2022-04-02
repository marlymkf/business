import Container from "../Container/Container";
import {
  Flex,
  Left,
  Text,
  Texto,
  Texto1,
  Img,
  Texto2,
  Texto3,
  Right,
  Foto,
} from "./styles";
const What = () => {
  return (
    <Container>
      <Flex>
        <Left>
          <Text>What our clients say about us</Text>
          <Texto>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </Texto>
        </Left>
        <Right>
          <Texto1>
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </Texto1>
          <Foto>
            <Img src="img/woman-in-collared-shirt-774909.png" alt="" />
            <div>
              <Texto2>Jenny Wilson</Texto2>
              <Texto3>Vice President</Texto3>
            </div>
          </Foto>
        </Right>
      </Flex>
    </Container>
  );
};

export default What;
