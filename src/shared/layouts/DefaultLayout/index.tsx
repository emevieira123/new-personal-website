import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";

export default function DefaultLayout() {
  return (
    <Box minH="100vh">
      <Menu />
      <Outlet />
      <Footer />
    </Box>
  )
}