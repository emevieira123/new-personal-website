import { styled } from "styled-components";
import { ContainerSkills } from "../Frontend";
import { BackendImg } from "../../../../shared/components/imgs/BackendImg";
import { CardSkill } from "../CardSkill";
import { IconCsharp } from "../../../../shared/components/imgs/IconCsharp";
import { IconNode } from "../../../../shared/components/imgs/IconNode";

export function Backend() {
  return (
    <ContainerBackend>
      <ContainerImg>
        <BackendImg width="25rem" height="25rem" />
      </ContainerImg>
      <ContainerSkills>
      <CardSkill icon={<IconCsharp width="7rem" />} text="Básico" />
      <CardSkill icon={<IconNode width="7rem" />} text="Básico" />
      </ContainerSkills>
    </ContainerBackend>
  );
}

const ContainerBackend = styled.div`
  width: 74rem;
  min-height: 35rem;
  border: 2px solid #08adff;
  border-radius: 1rem;

  display: flex;
`;

const ContainerImg = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
