/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "styled-components";
import { TextGradient } from "../About/styles";
import { CardProject } from "./components/CardProject";

const dataProject = [
  { id: 1, name: "Debt Pay", skills: "Front-end & Back-end", img: "/assets/debtpay.png", github: "https://github.com/emevieira123/DebtPay", linkProject: "https://debt-pay.vercel.app/" },
  { id: 2, name: "Tech Filmes HD", skills: "Front-end", img: "/assets/tech-filmes.png", github: "https://github.com/emevieira123/TechFilmes", linkProject: "https://tech-filmes.vercel.app/" },
  { id: 3, name: "Sleep Pomodoro", skills: "Front-end", img: "/assets/sleep.png", github: "https://github.com/emevieira123/NLW-04-ReactJS", linkProject: "https://sleep-eight.vercel.app/" },
]

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
          dataProject.map((item: any) => (
            <CardProject
              key={item.key}
              name={item.name}
              image={item.img}
              skill={item.skills}
              github={item.github}
              link={item.linkProject}
            />
          ))
        }
      </ContainerContent>
    </ContainerPortfolio>
  );
}

const ContainerPortfolio = styled.div`
  background: linear-gradient(180deg, #FFF 0%, #FFF 93.74%, #111 97.05%, #111 100%);
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
