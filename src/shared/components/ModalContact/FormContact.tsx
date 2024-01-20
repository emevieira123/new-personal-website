import {
    Box,
    Divider,
    Flex,
    FormLabel,
    Heading,
    Input,
    Textarea,
    useColorMode,
} from "@chakra-ui/react";
import { useSendEmail } from "../../hooks/useSendEmail";

export function FormContact() {
  const { sendEmail } = useSendEmail();
  const { colorMode } = useColorMode();

  return (
    <form onSubmit={sendEmail} id="form-contact">
      <Flex flexDirection="column">
        <Heading>Vamos construir algo novo?</Heading>
        <Flex flexDirection="column" gap={3} mt="1rem">
          <Input
            name="name"
            placeholder="Nome"
            _placeholder={{ color: colorMode === "dark" ? "gray.600" : "gray.300" }}
          />
          <Input
            name="email"
            placeholder="E-mail"
            _placeholder={{ color: colorMode === "dark" ? "gray.600" : "gray.300" }}
          />
        </Flex>

        <Divider my="1rem" />

        <Box>
          <FormLabel fontWeight="bold">Explique sua ideia</FormLabel>
          <Textarea
            name="message"
            placeholder="Descreva com detalhes sobre sua ideia de projeto."
            _placeholder={{ color: colorMode === "dark" ? "gray.600" : "gray.300" }}
          />
        </Box>
      </Flex>
    </form>
  );
}
