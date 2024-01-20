import { FormEvent } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useModalContact } from "./useModalContact";

export function useSendEmail() {
    const { setIsLoading, onClose } = useModalContact();

  function sendEmail(e: FormEvent) {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    setIsLoading(true);

    emailjs
      .sendForm(
        "gmailMessage",
        "template_uedvzor",
        formElement,
        "user_HLkLcMfeD8IPCtYjyIBUU"
      )
      .then(
        () => {
          toast.success("Mensagem enviada com sucesso!)");
          formElement.reset();
          setIsLoading(false);
          onClose();
        },
        (error) => {
          toast.error(error.message);
          setIsLoading(false);
        }
      );
  }

  return {
    sendEmail
  }
}
