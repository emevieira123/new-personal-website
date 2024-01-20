import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Text,
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
  return (
    <Card>
      <CardHeader fontWeight="bold" pb="0" pt="0.5rem">
        {data.cargo.toLocaleUpperCase()}
      </CardHeader>
      <Divider borderColor="blackAlpha.300" />
      <CardBody pb="0.5rem" pt="0.5rem">
        <Flex gap={2}>
          <Text>Local:</Text>
          <Text color="blackAlpha.600">{data.local}</Text>
        </Flex>
        <Flex gap={2}>
          <Text>Descricao:</Text>
          <Text color="blackAlpha.600">{data.descricao}</Text>
        </Flex>
        <Flex gap={2}>
          <Text>Stacks:</Text>
          <Text color="blackAlpha.600">{data.stack}</Text>
        </Flex>
      </CardBody>
      <Divider borderColor="blackAlpha.300" />
      <CardFooter pt="0.2rem" pb="0.5rem">
        <Flex gap={2}>
          <Text>Periodo:</Text>
          <Text color="blackAlpha.600">{data.periodo}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}
