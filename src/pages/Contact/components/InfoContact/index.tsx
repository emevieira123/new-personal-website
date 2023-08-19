import { IconGithub } from "../../../../shared/components/imgs/IconGithub";
import { IconGmail } from "../../../../shared/components/imgs/IconGmail";
import { IconInstagram } from "../../../../shared/components/imgs/IconInstagram";
import { IconLinkedin } from "../../../../shared/components/imgs/IconLinkedin";
import {
  ContainerInfoContact,
  ContainerSocial,
  ContainerTitleContact
} from "../../styles";

export function InfoContact() {
  return (
    <ContainerInfoContact>

      <ContainerTitleContact>
        <strong>Contato</strong>
        <span>Sinta-se livre para entrar em contato a qualquer hora.</span>
      </ContainerTitleContact>

      <ContainerSocial>
        {
          socialData.map((social) => (
            <div key={social.id}>
              <i>{social.icon}</i>
              <span>{social.name}</span>
            </div>
          ))
        }
      </ContainerSocial>

    </ContainerInfoContact>
  );
}

const socialData = [
  { id: 1, name: "@emevieira", icon: <IconLinkedin width={45} /> },
  { id: 2, name: "@emevieira123", icon: <IconGithub width={45} /> },
  { id: 3, name: "@emerson_vchaves", icon: <IconInstagram width={45} /> },
  { id: 4, name: "emevieira.dev@gmail.com", icon: <IconGmail width={45} /> },
];
