import { HomeImgDeveloper } from "../../shared/components/imgs/HomeImgDeveloper"
import { CardHome } from "./components/Card";
import {
  Button,
  ContainerCards,
  ContainerAbout,
  ContainerImg,
  ContainerText,
  Text,
  TextGradient,
  Title
} from "./styles";

export function About() {
  return (
    <ContainerAbout>
      <ContainerImg>
        <HomeImgDeveloper width="1200px" height="500px" />
        <ContainerText>
          <Title>
          Minha expertise hoje está centrada no
          desenvolvimento web com {' '}
            <TextGradient>React</TextGradient>
          </Title>
          <Text>
            Com uma formação em <strong>Análise e Desenvolvimento de Sistemas</strong>,
            atualmente, desfruto da empolgante posição de <strong>Desenvolvedor Web</strong>.
          </Text>
          <Text>
            Minha abordagem é orientada a desafios, onde cada novo projeto é uma
            oportunidade de aprendizado e superação. Se você desejar explorar alguns
            de meus projetos pessoais, sinta-se à vontade para clicar no botão abaixo e
            acessar o meu perfil no GitHub.
          </Text>
          <Button href="https://github.com/emevieira123" target="_blank" rel="noreferrer">Acessar Github</Button>
        </ContainerText>

      </ContainerImg>
      <ContainerCards>
        <CardHome title="Anos de experiência" content="3+" color="#08adff" textColor="#FFFFFF" />
        <CardHome title="Participação em Projetos" content="5+" color="#08fbff" />
        <CardHome title="Suporte" content="2+" color="#FFFFFF" />
      </ContainerCards>
    </ContainerAbout>
  )
}

