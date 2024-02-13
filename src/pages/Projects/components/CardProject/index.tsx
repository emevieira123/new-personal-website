import {
  Button,
  Card,
  CardBody,
  Heading,
  Icon,
  Img,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsBoxArrowUpRight } from "react-icons/bs";

interface ProjectType {
  name: string;
  stacks: string;
  imgURL: string;
  projectLink: string;
}

interface CardProjectProps {
  data: ProjectType;
}

export function CardProject({ data }: CardProjectProps) {
  return (
    <Card border="1px" borderRadius="5px 2rem 5px 2rem">
      <CardBody>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          style={{ transition: "all 0.3s" }}
        >
          <Img
            src={data.imgURL}
            w="100%"
            h="17rem"
            borderRadius="0 10px 0 10px"
            cursor="pointer"
          />
        </motion.div>

        <Heading fontSize={18} textAlign="center" my="1rem">
          {data.name}
        </Heading>

        <Text textAlign="center">{data.stacks}</Text>

        <Button
          as="a"
          w="100%"
          mt="1rem"
          colorScheme="green"
          href={data.projectLink}
          target="_blank"
        >
          Visitar Aplicacao <Icon as={BsBoxArrowUpRight} ml="0.5rem" />
        </Button>
      </CardBody>
    </Card>
  );
}
