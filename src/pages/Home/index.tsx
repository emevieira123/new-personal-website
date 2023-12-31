import {
  ContainerHome,
  ContainerText,
  ContentContainer,
  Divider,
  Text,
  TextGradient
} from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <ContentContainer>
        <ContainerText>
          <div>
            <Text fontWeight="bold" fontSize="2rem">Olá, eu sou o</Text>
            <TextGradient>Emerson Vieira</TextGradient>
            <Text fontSize="1.25rem">Desenvolvedor Front-End | React.</Text>

            <Divider />

            <Text fontSize="1rem" margin="0.5rem 0 0 0">Gosto de codificar e dar vida às ideias no navegador.</Text>
            <Text fontSize="1rem">Desenvolvo soluções atraentes e intuitivas, eu amo programar.</Text>
          </div>
        </ContainerText>
      </ContentContainer>
    </ContainerHome>
  );
}
