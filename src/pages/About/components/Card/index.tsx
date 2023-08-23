import { styled } from "styled-components";

interface CardProps {
  color?: string;
  textcolor?: string;
  title?: string;
  content?: string;
}

export function CardHome(props: CardProps) {
  return (
    <CardContainer color={props.color}>
      <Title textcolor={props.textcolor}>{props.title}</Title>
      <Content textcolor={props.textcolor}>{props.content}</Content>
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

const Title = styled.span<{textcolor?: string}>`
  color: ${(props) => props.textcolor};
  font-size: 1.5rem;
`;

const Content = styled.span<{textcolor?: string}>`
  color: ${(props) => props.textcolor};
  font-size: 3rem;
`;
