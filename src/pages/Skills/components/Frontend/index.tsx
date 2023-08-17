import { styled } from "styled-components";
import { CardSkill } from "../CardSkill";
import { IconJavascript } from "../../../../shared/components/imgs/IconJavascript";
import { IconTypescript } from "../../../../shared/components/imgs/IconTypescript";
import { IconReact } from "../../../../shared/components/imgs/IconReact";

export function Frontend() {
  return (
    <ContainerFrontend>
      <ContainerImg>
        <img src="/assets/laptop_front.png" alt="" />
      </ContainerImg>
      <ContainerSkills>
        <CardSkill icon={<IconJavascript width="7rem" />} text="Intermediário" />
        <CardSkill icon={<IconTypescript width="7rem" />} text="Intermediário" />
        <CardSkill icon={<IconReact width="7rem" />} text="Intermediário" />
      </ContainerSkills>
    </ContainerFrontend>
  );
}

const ContainerFrontend = styled.div`
  width: 74rem;
  min-height: 35rem;
  border: 2px solid #08fbff;
  border-radius: 1rem;
  padding: 1rem;

  display: flex;
`;

const ContainerImg = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 26.9rem;
  }
`;

export const ContainerSkills = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
