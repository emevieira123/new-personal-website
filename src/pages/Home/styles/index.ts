import styled from "styled-components";

export const ContainerHome = styled.div`
  height: 100vh;
  background: #111111;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerText = styled.div`
  width: 53.3rem;
  height: 21.9rem;
  margin: 4rem 21rem 0 0;
  position: absolute;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.strong`
  color: #fff;
  font-size: 2.5rem;
`;

export const Text = styled.span`
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

export const TextGradient = styled.span`
  background-image: linear-gradient(to right, #08adff, #08fbff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Button = styled.button`
  width: 20rem;
  height: 4rem;
  border: 0;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(to right, #08adff, #08fbff);
`;

export const ContainerCards = styled.div`
  width: 70rem;

  display: flex;
  gap: 1rem;
`;
