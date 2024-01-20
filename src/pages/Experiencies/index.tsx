import { Flex, Heading } from "@chakra-ui/react";
import { PageAnimate } from "../../shared/components/PageAnimate";
import { CardExperience } from "./components/CardExperience";
import experiencies from "../../shared/utils/experiencies";

export default function Experiencies() {
  return (
    <PageAnimate>
      <Flex justify="center">
        <Flex 
        h="100%" 
        w="80%" 
        flexDirection="column" 
        padding="1rem 2rem"
        gap={4}
        >
          <Heading>Experiências</Heading>

          {experiencies.map((exp) => (
            <CardExperience key={exp.experienceId} data={exp} />
          ))}
        </Flex>
      </Flex>
    </PageAnimate>
  );
}
