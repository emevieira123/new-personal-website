import {
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { PageAnimate } from "../../shared/components/PageAnimate";
import { ProfileImage } from "./components/Svg/ProfileImage";
import { motion } from "framer-motion";

export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <PageAnimate>
      <Flex h="90vh" justify="space-between" align="center" px="10%">
        <Flex flexDirection="column">
          <Flex flexDirection="column" padding="1rem 2rem">
            <Text fontWeight="bold">Ola, eu sou</Text>
            <Heading color={colorMode === "dark" ? "green.300" : "green.500"}>
              Emerson Vieira
            </Heading>
            <Text>Desenvolvedor Front-End</Text>
          </Flex>

          <Divider w="23.5rem" marginLeft="2rem" />

          <Flex flexDirection="column" padding="1rem 2rem">
            <Text>Gosto de codificar e dar vida as ideias no navegador</Text>
            <Text>desenvolvendo soluções atraentes e intuitivas.</Text>
          </Flex>
        </Flex>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Icon
            as={ProfileImage}
            fontSize={400}
            color={colorMode === "dark" ? "green.300" : "green.500"}
          />
        </motion.div>
      </Flex>
    </PageAnimate>
  );
}
