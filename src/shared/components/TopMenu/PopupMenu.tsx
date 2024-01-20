import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface MenuProps {
  id: number;
  nome: string;
  link?: string;
}

interface PopupMenuProps {
  title: string;
  menuData: MenuProps[];
}

export function PopupMenu({ menuData, title }: PopupMenuProps) {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
            transition="all 0.2s"
            _hover={{ bg: colorMode === "dark" ? "gray.800" : "gray.300" }}
            _expanded={{
              bg: colorMode === "dark" ? "gray.800" : "gray.300",
              color: colorMode === "dark" ? "white" : "",
            }}
            bg="transparent"
          >
            {title}
          </MenuButton>
          <MenuList 
          bg={colorMode === "dark" ? "blackAlpha.800" : "white"} 
          borderColor={colorMode === "dark" ? "gray.800" : "gray.300"}
          >
            {menuData.map((item) => (
              <MenuItem
                key={item.id}
                bg={colorMode === "dark" ? "blackAlpha.800" : "white"}
                color={colorMode === "dark" ? "gray.400" : "gray.600"}
                _hover={{ 
                    bg: colorMode === "dark" ? "gray.900" : "gray.300", 
                    color: colorMode === "dark" ? "white" : ""
                }}
                transition="all 0.2s"
                onClick={() => navigate(String(item.link))}
              >
                {item.nome}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}
