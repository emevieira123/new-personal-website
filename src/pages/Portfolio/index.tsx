/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "styled-components";
import { TextGradient } from "../About/styles";

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
            <ContainerProject key={item.id}>
              <div style={{ minHeight: "90%" }}>
                <ImgProject image={item.img} />
                <ContainerTitleProject>
                  <Title>{item.name}</Title>
                  <Text>{item.skills}</Text>
                </ContainerTitleProject>
              </div>

              <div style={{ display: 'flex', gap: "1rem" }}>
                <Button
                  color="#51ACF9"
                  border="1px solid #51ACF9"
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </Button>
                <Button
                  color="#111111"
                  bgColor="linear-gradient(to right, #51ACF9, #6DE7FD)"
                  href={item.linkProject}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demonstração
                </Button>
              </div>

            </ContainerProject>
          ))
        }
      </ContainerContent>
    </ContainerPortfolio>
  );
}

const ContainerPortfolio = styled.div`
  min-height: 100vh;
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
  min-height: 43rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

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

const Button = styled.a<{ border?: string, bgColor?: string, color?: string }>`
  border: ${(props) => props.border};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-weight: bold;
  border-radius: 5px;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  outline: none;
`;
