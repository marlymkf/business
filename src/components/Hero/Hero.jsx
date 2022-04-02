import Header from "../Header/Header";
import Container from "../Container/Container";
import {
  Content,
  Left,
  Titulo,
  Texto,
  Retangulo,
  Link,
  Flex,
  Img,
  Right, Image
} from "./styles";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <Content>
      <Container>
        <Header />
        <Flex>
          <Left>
            <Titulo>Building stellar websites for early startups</Titulo>
            <Texto>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Texto>
            <Retangulo>
              <Button className="but">View our work</Button>
              <Link a href="/">
                View Pricing
                <Image src="img/Arrow 1 (2).png" alt="" width={24} height={12} />
              </Link>
            </Retangulo>
          </Left>
          <Right>
            <Img
              src="img/illustration (1).png"
              alt=""
              width={638}
              height={361}
            />
          </Right>
        </Flex>
      </Container>
    </Content>
  );
};

export default Hero;
