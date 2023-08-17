import { styled } from "styled-components";

interface CardProps {
  color?: string;
  textColor?: string;
  title?: string;
  content?: string;
}

export function CardHome(props: CardProps) {
  return (
    <CardContainer color={props.color}>
      <Title textColor={props.textColor}>{props.title}</Title>
      <Content textColor={props.textColor}>{props.content}</Content>
    </CardContainer>
  );
}

const CardContainer = styled.div<{color?: string}>`
  width: 14rem;
  height: 10rem;
  background: ${(props) => props.color};
  border-radius: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const Title = styled.span<{textColor?: string}>`
  color: ${(props) => props.textColor};
  font-size: 1.5rem;
`;

const Content = styled.span<{textColor?: string}>`
  color: ${(props) => props.textColor};
  font-size: 3rem;
`;
