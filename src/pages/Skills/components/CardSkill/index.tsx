import { styled } from "styled-components";

interface CardSkillProps {
  text?: string;
  icon?: React.ReactElement;
}

export function CardSkill({ icon, text }: CardSkillProps) {
  return (
    <Container>
      <i>
        {icon}
      </i>
      <ContainerText>
        <span>{text}</span>
      </ContainerText>
    </Container>
  );
}

const Container = styled.div`
  height: 10rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  main {
    color: #fff;
    font-size: 1.5rem;
  }

  span {
    font-size: 3rem;
    background-image: linear-gradient(to right, #08fbff, #08adff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;
