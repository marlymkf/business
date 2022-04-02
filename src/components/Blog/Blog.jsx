import Container from "../Container/Container";
import {
  Content,
  Titulo,
  Coluna,
  Coluna1,
  Text,
  Texto,
  Texto1,
  Linkes,
  Img,
} from "./styles";
const Blog = () => {
  return (
    <Container>
      <Content>
        <Titulo>Our blog</Titulo>
        <Coluna>
          <Coluna1>
            <img src="img/homem-notebook.png" alt="" />
            <Text>19 Jan 2022</Text>
            <Texto>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </Texto>
            <Texto1>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </Texto1>
            <Linkes href="/">
              Read More
              <Img src="img/Arrow 1 (4).png" alt="" width={25} height={12} />
            </Linkes>
          </Coluna1>
          <Coluna1>
            <img src="img/mulher-computador.png" alt="" />
            <Text>19 Jan 2022</Text>
            <Texto>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </Texto>
            <Texto1>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </Texto1>
            <Linkes href="/">
              Read More
              <Img src="img/Arrow 1 (4).png" alt="" width={25} height={12} />
            </Linkes>
          </Coluna1>
          <Coluna1>
            <img src="img/computador.png" alt="" />
            <Text>19 Jan 2022</Text>
            <Texto>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </Texto>
            <Texto1>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </Texto1>
            <Linkes href="/">
              Read More
              <Img src="img/Arrow 1 (4).png" alt="" width={25} height={12} />
            </Linkes>
          </Coluna1>
        </Coluna>
      </Content>
    </Container>
  );
};

export default Blog;
