/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ImgForm } from "../../../../shared/components/imgs/ImgForm";
import { Button, ContainerForm, Form } from "../../styles";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

export function FormContact() {
  const [isLoading, setIsLoading] = useState(false);

  function enviarEmail(e: any) {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('gmailMessage', 'template_uedvzor', e.target, 'user_HLkLcMfeD8IPCtYjyIBUU')
      .then((result: any) => {
        console.log(result);
        toast.success('Mensagem enviada com sucesso!)');
        e.target.reset();
        setIsLoading(false);
      }, (error: any) => {
        toast.error(error.message);
      });
  }

  return (
    <ContainerForm>
      <ImgForm width="150px" />
      <Form onSubmit={enviarEmail}>
        <div>
          <input type="text" name="name" placeholder="Nome" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            style={{ height: "5rem", paddingTop: "0.5rem" }}
            placeholder="Digite sua mensagem aqui..."
            required
          />
        </div>
        <Button disabled={isLoading} type="submit">{isLoading ? "ENVIANDO" : "ENVIAR"}</Button>
      </Form>
    </ContainerForm>
  );
}


