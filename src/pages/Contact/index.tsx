import { FormContact } from "./components/FormContact";
import { ContainerContact, ContentContainer } from "./styles";
import { InfoContact } from "./components/InfoContact";

export function Contact() {
  return (
    <ContainerContact>
      <ContentContainer>
        <InfoContact />
      </ContentContainer>

      <ContentContainer>
        <FormContact />
      </ContentContainer>
    </ContainerContact>
  );
}
