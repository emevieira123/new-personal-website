import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Box } from "@chakra-ui/react";

export function DefaultLayout() {
  return (
    <Box minH="100vh">
      <Menu />
      <Outlet />
      <Footer />
    </Box>
  )
}