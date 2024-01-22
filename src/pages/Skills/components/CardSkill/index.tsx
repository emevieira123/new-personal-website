import { Card, CardBody, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillType {
  name: string;
  icon: IconType;
  docLink: string;
}

interface CardSkillProps {
  data: SkillType;
}

export function CardSkill({ data }: CardSkillProps) {
    const { colorMode } = useColorMode();
  return (
    <Card>
      <CardBody>
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          style={{ transition: "all 0.2s" }}
        >
          <Flex
            align="center"
            justify="center"
            flexDirection="column"
            cursor="pointer"
            as="a"
            href={data.docLink}
            target="_blank"
          >
            <Icon as={data.icon} fontSize={50} color={colorMode === "dark" ? "green.200" : "green.500"} />
            <Text>{data.name}</Text>
          </Flex>
        </motion.div>
      </CardBody>
    </Card>
  );
}
