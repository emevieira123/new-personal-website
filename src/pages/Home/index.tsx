import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { PageAnimate } from "../../shared/components/PageAnimate";

export default function Home() {
  return (
    <PageAnimate>
      <Flex justify="center">
        <Flex h="100%" w="80%" flexDirection="column">
          <Flex flexDirection="column" padding="1rem 2rem">
            <Text fontWeight="bold">Ola, eu sou</Text>
            <Heading>Emerson Vieira</Heading>
            <Text color="gray.500">Desenvolvedor Front-End</Text>
          </Flex>

          <Divider w="25rem" marginLeft="2rem" />

          <Flex flexDirection="column" padding="1rem 2rem">
            <Text>Gosto de codificar e dar vida as ideias no navegador</Text>
            <Text>desenvolvendo soluções atraentes e intuitivas.</Text>
          </Flex>
        </Flex>
      </Flex>
    </PageAnimate>
  );
}
