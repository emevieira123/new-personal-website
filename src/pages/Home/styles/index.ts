import styled from "styled-components";

export const ContainerHome = styled.div`
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
    background: linear-gradient(360deg, #111 0%, rgba(17, 17, 17, 0) 16.87%);
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

export const ContentContainer = styled.div<ContentProps>`
  min-width: 50%;

  img {
    width: 15%;
  }

  display: flex;
  align-items: ${(props) => props.align ?? "center"};
  justify-content: ${(props) => props.justify ?? "center"};
  padding: ${(props) => props.padding};
`;

export const ContainerText = styled.div`
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

export const Text = styled.span<TextProps>`
  color: #ffffff;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  margin-bottom: 0.5rem;
`;

export const TextGradient = styled.span`
  font-weight: bold;
  font-size: 3rem;
  background-image: linear-gradient(to right, #08adff, #08fbff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
