import { styled } from "styled-components";
import { ImgForm } from "../../shared/components/imgs/ImgForm";
import { Button } from "../About/styles";
import { IconLinkedin } from "../../shared/components/imgs/IconLinkedin";
import { IconGithub } from "../../shared/components/imgs/IconGithub";
import { IconInstagram } from "../../shared/components/imgs/IconInstagram";
import { IconGmail } from "../../shared/components/imgs/IconGmail";

const socialData = [
  { id: 1, name: "@emevieira", icon: <IconLinkedin width={45} /> },
  { id: 2, name: "@emevieira123", icon: <IconGithub width={45} /> },
  { id: 3, name: "@emerson_vchaves", icon: <IconInstagram width={45} /> },
  { id: 4, name: "emevieira.dev@gmail.com", icon: <IconGmail width={45} /> },
];

export function Contact() {
  return (
    <ContainerContact>
      <ContentContainer>
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
      </ContentContainer>

      <ContentContainer>
        <ContainerForm>
          <ImgForm width="150px" />
          <Form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
            <textarea
              style={{ height: "5rem", paddingTop: "0.5rem" }}
              placeholder="Digite sua mensagem aqui..."
            />
          </Form>
          <Button>ENVIAR</Button>
        </ContainerForm>
      </ContentContainer>
    </ContainerContact>
  );
}

const ContainerContact = styled.div`
  min-height: 100vh;
  background: #111111;

  display: flex;
`;

const ContentContainer = styled.div`
  min-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerInfoContact = styled.div`
  width: 35rem;
  height: 40rem;
  padding-left: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerTitleContact = styled.div`
  strong {
    font-size: 3rem;
    background-image: linear-gradient(to right, #08adff, #08fbff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  span {
    color: white;
    font-size: 1.25rem;
  }

  display: flex;
  flex-direction: column;
`;

const ContainerSocial = styled.div`
div {
    height: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    i {
      color: white;
    }

    span {
      color: white;
      font-size: 1.25rem;
    }
    border-bottom: 1px solid #333333;
  }
`;

const ContainerForm = styled.div`
  width: 30rem;
  height: 40rem;
  border-radius: 3.5rem;
  background: #fff;
  box-shadow: 0px 4px 50px 0px #0AAEFF;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Form = styled.form`
  width: 80%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input, textarea {
    height: 2.5rem;
    background: rgba(217, 217, 217, 0.50);
    border: 1px solid transparent;
    border-image: linear-gradient(to right, #51ACF9, #6DE7FD);
    border-image-slice: 1;
    outline: none;
    padding: 0 0.5rem;
  }
`;
