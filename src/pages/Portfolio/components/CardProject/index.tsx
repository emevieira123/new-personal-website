import { styled } from "styled-components";

interface CardProjectProps {
  image: string;
  name: string;
  skill: string;
  github: string;
  link: string;
}

export function CardProject(props: CardProjectProps) {
  return (
    <ContainerProject>
      <div style={{ minHeight: "90%" }}>
        <ImgProject image={props.image} />
        <ContainerTitleProject>
          <Title>{props.name}</Title>
          <Text>{props.skill}</Text>
        </ContainerTitleProject>
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
  min-width: 27%;
  height: 32rem;
  padding: 1rem;
  border: 2px solid transparent;
  border-image: linear-gradient(to right, #51ACF9, #6DE7FD);
  border-image-slice: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImgProject = styled.div<{ image: string }>`
  width: 100%;
  height: 60%;
  background-image: url(${(props) => props.image});
  /* background-size: cover; */
  /* background-position: center; */
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
