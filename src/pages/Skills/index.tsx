import { useState } from "react";
import { styled } from "styled-components";
import { Frontend } from "./components/Frontend";
import { Backend } from "./components/Backend";

export function Skills() {
  const [active, setActive] = useState(true);
  return (
    <ContainerSkill>
      <TitlePage>Minhas Habilidades</TitlePage>

      <ContainerButton>
        <Button
          className={active ? "active" : ""}
          onClick={() => setActive(true)}
          style={{ paddingRight: "3rem" }}
        >
          Frontend
        </Button>
        <Button
          className={!active ? "active" : ""}
          style={{ position: "absolute", marginLeft: "15rem", minWidth: "21rem" }}
          onClick={() => setActive(false)}
        >
          Backend
        </Button>
        <div style={{ minWidth: "16rem" }} />
      </ContainerButton>

      <Content>
        {
          active ? <Frontend /> : <Backend />
        }
      </Content>
    </ContainerSkill>
  );
}

const ContainerSkill = styled.div`
  background: #111111;
  padding-bottom: 3rem;
`;

const TitlePage = styled.h1`
  color: #FFF;

  padding-left: 10rem;
  font-size: 3rem;
  background-image: linear-gradient(to right, #08adff, #08fbff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const ContainerButton = styled.div`
  margin: 1.5rem 0 2.5rem 0;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  min-width: 20rem;
  height: 4rem;
  font-size: 2rem;
  border: 0;
  background: #FFFFFF;
  cursor: pointer;

  &.active {
    background: linear-gradient(to right, #08adff, #08fbff);
    color: #111111;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;
