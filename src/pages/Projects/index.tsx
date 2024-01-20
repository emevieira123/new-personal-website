import { Flex, Grid, GridItem, Heading, useMediaQuery } from "@chakra-ui/react";
import { PageAnimate } from "../../shared/components/PageAnimate";
import { CardProject } from "./components/CardProject";
import projects from "../../shared/utils/projects";

export default function Projects() {
  const [isLargerThanLG] = useMediaQuery("(max-width: 67.5rem)");
  const [isLargerThanMD] = useMediaQuery("(max-width: 33.75rem)");

  return (
    <PageAnimate>
      <Flex justify="center">
        <Flex h="100%" w="80%" flexDirection="column" padding="1rem 2rem">
          <Heading>Projetos</Heading>

          <Grid
            templateColumns={
              isLargerThanLG && !isLargerThanMD
                ? "repeat(2, 1fr)"
                : isLargerThanMD
                ? "repeat(1, 1fr)"
                : "repeat(3, 1fr)"
            }
            gap={6}
            mt="1rem"
          >
            {projects.map((p) => (
              <GridItem key={p.projectId}>
                <CardProject data={p} />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </PageAnimate>
  );
}
