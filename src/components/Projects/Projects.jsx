import Container from "../Container/Container";
import {
  Flex,
  Titulo,
  Link,
  Img,
  Text,
  Texto,
  Linke,
  Image,
  Azul,
  Bloco,
  AzulLargo,
  Texto2,
  Linkes,
  Bloco1,
  Right,
} from "./styles";

const Projects = () => {
  return (
    <Container>
      <Flex>
        <Titulo>View our projects</Titulo>
        <Link href="/">
          View More
          <Img src="img/Arrow 1 (3).png" alt="" width={25} height={12} />
        </Link>
      </Flex>
      <Flex>
        <Bloco href="/">
          <img src="img/Card.png" alt="" />
          <Azul>
            <Text>Workhub office Webflow Webflow Design</Text>
            <Texto>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam{" "}
            </Texto>
            <Linke href="/">
              View project
              <Image src="img/Arrow 1 (2).png" alt="" width={24} height={12} />
            </Linke>
          </Azul>
        </Bloco>
        <Right>
          <Bloco href="/">
            <img src="img/Rectangle 1313.png" alt="" width={405} height={284} />
            <AzulLargo>
              <Texto2>Unisaas Website Design</Texto2>
              <Linkes href="/">
                View portifolio
                <Img src="img/Arrow 2 (1).png" alt="" width={25} height={12} />
              </Linkes>
            </AzulLargo>
          </Bloco>
          <Bloco href="/">
            <Bloco1>
              <img src="img/Card (2).png" alt="" />
            </Bloco1>
          </Bloco>
        </Right>
      </Flex>
    </Container>
  );
};

export default Projects;
