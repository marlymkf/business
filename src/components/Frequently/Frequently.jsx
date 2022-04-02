import Container from "../Container/Container";
import {
  Flex,
  Left,
  Text,
  Texto,
  Right,
  Faq,
  Texto1,
  Center,
  Titulo,
  Texto2,
  Img,
  Border,
} from "./styles";
const Frequently = () => {
  return (
    <Container>
      <Flex>
        <Left>
          <Text>Frequently asked questions</Text>
          <Texto>Contact us for more info</Texto>
        </Left>
        <Right>
          <Faq>
            <Texto1>01</Texto1>
            <Center>
              <Titulo>How much time does it take?</Titulo>
              <Texto2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Texto2>
              <Border>

              </Border>
            </Center>
            <Img src="img/+.png" alt="" width={16} height={16} />
          </Faq>
          <Faq>
            <Texto1>02</Texto1>
            <Center>
              <Titulo>What is your class naming convention?</Titulo>
              <Border>

              </Border>
            </Center>
            <Img src="img/+ (1).png" alt="" width={16} height={16} />
          </Faq>
          <Faq>
            <Texto1>03</Texto1>
            <Center>
              <Titulo>How do you communicate?</Titulo>
              <Border>

              </Border>
            </Center>
            <Img src="img/+ (1).png" alt="" width={16} height={16} />
          </Faq>
          <Faq>
              
            <Texto1>04</Texto1>
            <Center>
              <Titulo>I have a bigger project. Can you handle it?</Titulo>
              <Border></Border>
            </Center>
            <Img src="img/+ (1).png" alt="" width={16} height={16} />
          </Faq>
          <Faq>
            <Texto1>05</Texto1>
            <Center>
              <Titulo>What is your class naming convention?</Titulo>
              <Border></Border>
            </Center>
            <Img src="img/+ (1).png" alt="" width={16} height={16} />
          </Faq>
        </Right>
      </Flex>
    </Container>
  );
};

export default Frequently;
