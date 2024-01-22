import { Flex, Grid, GridItem, Heading, useMediaQuery } from "@chakra-ui/react";
import { PageAnimate } from "../../shared/components/PageAnimate";
import { CardSkill } from "./components/CardSkill";
import skills from "../../shared/utils/skills";

export default function Skills() {
  const [isLargerThanLG] = useMediaQuery("(max-width: 67.5rem)");
  const [isLargerThanMD] = useMediaQuery("(max-width: 33.75rem)");

  console.log("isLargerThanLG", isLargerThanLG)
  
  return (
    <PageAnimate>
      <Flex justify="center">
        <Flex h="100%" w="80%" flexDirection="column" padding="1rem 0">
          <Heading mb="1rem">Habilidades</Heading>

          <Grid templateColumns={
            isLargerThanLG && !isLargerThanMD
            ? "repeat(5, 1fr)"
            : isLargerThanMD
            ? "repeat(2, 1fr)"
            : "repeat(7, 1fr)"
            } gap={3}>
            {skills.map((s) => (
              <GridItem key={s.id}>
                <CardSkill data={s} />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </PageAnimate>
  );
}
