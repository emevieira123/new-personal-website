import { styled } from "styled-components";
import { useModal } from "../../hooks/useModal";

interface CardProjectProps {
  image: string;
  name: string;
  skill: string;
  github: string;
  link: string;
  description: string;
}

export function CardProject(props: CardProjectProps) {
  const { onOpen } = useModal();

  return (
    <ContainerProject>
      <div style={{ minHeight: "90%" }}>
        <ImgProject onClick={() => onOpen(props.image)}>
          <img src={props.image} />
        </ImgProject>
        <ContainerTitleProject>
          <Title>{props.name}</Title>
          <Text>{props.skill}</Text>
        </ContainerTitleProject>
        <DescriptionContainer>
          <span>{props.description}</span>
        </DescriptionContainer>
      </div>

      <div style={{ display: 'flex', gap: "1rem" }}>
        <Button
          color="#51ACF9"
          border="1px solid #51ACF9"
          href={props.github}
          target="_blank"
          rel="noreferrer"
        >
          Github
        </Button>
        <Button
          color="#111111"
          bgcolor="linear-gradient(to right, #51ACF9, #6DE7FD)"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          Demonstração
        </Button>
      </div>

    </ContainerProject>
  );
}

const ContainerProject = styled.div`
  width: 27%;
  height: 32rem;
  padding: 1rem;
  border: 2px solid transparent;
  border-image: linear-gradient(to right, #51ACF9, #6DE7FD);
  border-image-slice: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImgProject = styled.div`
  height: 18rem;
  cursor: pointer;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

const ContainerTitleProject = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const Title = styled.strong`
  font-size: 1.5rem;
`;

const Text = styled.span`
  color: #888888;
`;

const DescriptionContainer = styled.div`
  padding: 0.5rem 0;

  span {
    color: #333333;
  }
`;

const Button = styled.a<{ border?: string, bgcolor?: string, color?: string }>`
  border: ${(props) => props.border};
  background: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  font-weight: bold;
  border-radius: 5px;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  outline: none;
`;
