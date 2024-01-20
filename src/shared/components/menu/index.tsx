import { Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { PopupMenu } from "./PopupMenu";
import { GoSun, GoMoon } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../../utils/menuItems";

export function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Flex
      justify="center"
      borderBottom="1px"
      borderColor={colorMode === "dark" ? "gray.700" : "gray.300"}
    >
      <Flex
        w="80%"
        h="4.5rem"
        align="center"
        justify="space-between"
        padding="0 2rem"
      >
        <Flex align="center" gap={4}>
          <IconButton
            icon={
              colorMode === "dark" ? <GoMoon size={22} /> : <GoSun size={22} />
            }
            aria-label="button theme"
            onClick={() => toggleColorMode()}
          />
          <Text
            fontWeight="bold"
            cursor="pointer"
            onClick={() => navigate("/")}
          >
            {"<VieiraDevCode />"}
          </Text>
        </Flex>
        <Flex>
          <PopupMenu title="Sobre" menuData={menuItems} />
        </Flex>
      </Flex>
    </Flex>
  );
}
