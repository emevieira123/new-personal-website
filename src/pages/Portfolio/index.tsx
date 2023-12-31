/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "styled-components";
import { TextGradient } from "../About/styles";
import { CardProject } from "./components/CardProject";
import { ModalImagePreview } from "./components/Modal/ModalImagePreview";
import projetos from "./__mocks__/projetos";

export function Portfolio() {
  return (
    <ContainerPortfolio>
      <ContainerTitle>
        <strong>
          Projetos {' '}
          <TextGradient>Pessoais</TextGradient>
        </strong>
      </ContainerTitle>
      <ContainerContent>
        {
          projetos.map((item: any) => (
            <CardProject
              key={item.key}
              name={item.name}
              image={item.img}
              skill={item.skills}
              github={item.github}
              link={item.linkProject}
              description={item.description}
            />
          ))
        }
      </ContainerContent>

      <ModalImagePreview />
    </ContainerPortfolio>
  );
}

const ContainerPortfolio = styled.div`
  background: linear-gradient(180deg, #FFF 0%, #FFF 93.74%, #111 97.05%, #111 100%);
  height: 100vh;
`;

const ContainerTitle = styled.div`
  min-height: 8rem;
  font-size: 3rem;
  padding: 0 10rem;

  display: flex;
  align-items: center;
`;

const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 0  0 8rem 0;
`;
