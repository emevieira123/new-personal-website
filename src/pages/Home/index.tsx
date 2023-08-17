import { HomeImgDeveloper } from "../../shared/components/imgs/HomeImgDeveloper"
import { CardHome } from "./components/Card";
import {
  Button,
  ContainerCards,
  ContainerHome,
  ContainerImg,
  ContainerText,
  Text,
  TextGradient,
  Title
} from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <ContainerImg>
        <HomeImgDeveloper width="1200px" height="500px" />
        <ContainerText>
          <Title>
            Olá, sou Emerson, um entusiasta apaixonado por {' '}
            <TextGradient>desenvolvimento web</TextGradient>
          </Title>
          <Text>
            Com uma formação em <strong>Análise e Desenvolvimento de Sistemas</strong>,
            tenho direcionado minha jornada profissional em direção à criação
            de soluções web inovadoras e funcionais. Atualmente, desfruto da
            empolgante posição de <strong>Desenvolvedor Web</strong>.
          </Text>
          <Button>Acessar Github</Button>
        </ContainerText>

      </ContainerImg>
      <ContainerCards>
        <CardHome title="Anos de experiência" content="3+" color="#08adff" textColor="#FFFFFF" />
        <CardHome title="Participação em Projetos" content="5+" color="#08fbff" />
        <CardHome title="Suporte" content="2+" color="#FFFFFF" />
      </ContainerCards>
    </ContainerHome>
  )
}

