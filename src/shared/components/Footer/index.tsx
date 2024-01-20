import { Button, Divider, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaRegPaperPlane } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { ModalContact } from "../ModalContact";
import { useModalContact } from "../../hooks/useModalContact";

export function Footer() {
  const { onOpen } = useModalContact();

  return (
    <Flex 
    justify="center" 
    bottom="0" 
    w="100%" 
    p="1rem 0"
    >
      <Flex
        w="80%"
        flexDirection="column"
        padding="1rem 0"
        margin="0 2rem"
        border="1px"
        borderColor="gray.300"
        borderRadius={10}
      >
        <Flex flexDirection="column" gap={3} padding="0 2rem">
          <Heading>Vamos tirar aquele projeto do papel?</Heading>
          <Text>
            Se você tem algum projeto em mente e deseja tirar ele do papel,
            sinta-se à vontade para me enviar uma mensagem.
          </Text>
          <Button w="10rem" colorScheme="green" onClick={onOpen}>
            Fale Comigo <Icon as={FaRegPaperPlane} fontSize={18} ml="0.5rem" />
          </Button>
        </Flex>

        <Divider margin="1rem 0" />

        <Flex align="center" justify="center" gap={3}>
          <a
            href="https://github.com/emevieira123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaGithub} fontSize={25} cursor="pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/emevieira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={CiLinkedin} fontSize={25} cursor="pointer" />
          </a>
          <a
            href="https://www.instagram.com/emerson_vchaves/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaInstagram} fontSize={25} cursor="pointer" />
          </a>
          <a
            href="https://www.facebook.com/emersonvie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={CiFacebook} fontSize={25} cursor="pointer" />
          </a>
        </Flex>
      </Flex>

      <ModalContact />
    </Flex>
  );
}
