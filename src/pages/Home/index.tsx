import {
  ContainerHome,
  ContainerText,
  ContentContainer,
  Text,
  TextGradient
} from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <ContentContainer>
        <ContainerText>
          <div>
            <Text fontWeight="bold" fontSize="2rem">Olá eu sou o</Text>
            <TextGradient>Emerson Vieira</TextGradient>
            <Text fontSize="1.25rem">Desenvolvedor Web</Text>
          </div>
        </ContainerText>
      </ContentContainer>
      <ContentContainer justify="end" align="start" padding="5rem 2rem 0 0">
        <img src="/assets/favicon.svg" alt="" />
      </ContentContainer>
    </ContainerHome>
  );
}
