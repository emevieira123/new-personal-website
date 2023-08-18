import { styled } from "styled-components";

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

const ContainerHome = styled.div`
  min-height: 100vh;
  background-image: url("/assets/home_background.png");
  background-size: cover;
  background-position: center;

  display: flex;

  &::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* Gradiente de transparente a escuro */
  background: linear-gradient(360deg, #111 0%, rgba(17, 17, 17, 0.00) 16.87%);
}

  &::after {
    content: " ";
    display: block;
    clear: both;
  }
`;

interface ContentProps {
  align?: string;
  justify?: string;
  padding?: string;
}

const ContentContainer = styled.div<ContentProps>`
  min-width: 50%;

  img {
    width: 15%;
  }

  display: flex;
  align-items: ${(props) => props.align ?? "center"};
  justify-content: ${(props) => props.justify ?? "center"};
  padding: ${(props) => props.padding};
`;

const ContainerText = styled.div`
  width: 90%;
  min-height: 250px;
  padding: 8rem 0 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }
`;

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
}

const Text = styled.span<TextProps>`
  color: #FFFFFF;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  margin-bottom: 0.5rem;
`;

const TextGradient = styled.span`
  font-weight: bold;
  font-size: 3rem;
  background-image: linear-gradient(to right, #08adff, #08fbff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
