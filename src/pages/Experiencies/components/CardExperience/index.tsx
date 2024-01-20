import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";

interface ExperienceType {
  cargo: string;
  local: string;
  descricao: string;
  periodo: string;
  stack: string;
}

interface CardExperienceProps {
  data: ExperienceType;
}

export function CardExperience({ data }: CardExperienceProps) {
  const { colorMode } = useColorMode();

  return (
    <Card>
      <CardHeader fontWeight="bold" pb="0" pt="0.5rem">
        {data.cargo.toLocaleUpperCase()}
      </CardHeader>
      <Divider borderColor={colorMode === "dark" ? "gray.500" : "blackAlpha.300"} />
      <CardBody pb="0.5rem" pt="0.5rem">
        <Flex gap={2}>
          <Text>Local:</Text>
          <Text color={colorMode === "dark" ? "gray.500" : "blackAlpha.600"}>
          {data.local}
          </Text>
        </Flex>
        <Flex gap={2}>
          <Text>Descricao:</Text>
          <Text color={colorMode === "dark" ? "gray.500" : "blackAlpha.600"}>
          {data.descricao}
          </Text>
        </Flex>
        <Flex gap={2}>
          <Text>Stacks:</Text>
          <Text color={colorMode === "dark" ? "gray.500" : "blackAlpha.600"}>
          {data.stack}
          </Text>
        </Flex>
      </CardBody>
      <Divider borderColor={colorMode === "dark" ? "gray.500" : "blackAlpha.300"} />
      <CardFooter pt="0.2rem" pb="0.5rem">
        <Flex gap={2}>
          <Text>Periodo:</Text>
          <Text color={colorMode === "dark" ? "gray.500" : "blackAlpha.600"}>
          {data.periodo}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}
