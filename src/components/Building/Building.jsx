import Container from "../Container/Container";
import {
  Flex,
  Bloco,
  Text,
  Azul,
  Texto,
  AzulMarinho,
  Texto1,
  Texto2,
  Formulario,
  Input,
  Linkes,
  Img,
  Get,
  ImgLeft,
} from "./styles";
import Button from "../Button/Button";
const Building = () => {
  return (
    <Container>
      <Flex>
        <Bloco>
          <ImgLeft
            src="img/woman-writing-on-paper-3228878.png"
            alt=""
            width={656}
            height={691}
          />
          <Azul>
            <Text>Building stellar websites for early startups</Text>
            <Texto>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </Texto>
          </Azul>
        </Bloco>
        <AzulMarinho>
          <Texto1>Send inquiry</Texto1>
          <Texto2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Texto2>
          <Formulario>
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Email" />
            <Input type="url" placeholder="Paste your Figma design URL" />
          </Formulario>

          <Button className="but w100">Send an Inquiry</Button>
          <Get>
            <Linkes href="/">
              Get in touch with us
              <Img src="img/Arrow 2 (2).png" alt="" width={25} height={12} />
            </Linkes>
          </Get>
        </AzulMarinho>
      </Flex>
    </Container>
  );
};

export default Building;
