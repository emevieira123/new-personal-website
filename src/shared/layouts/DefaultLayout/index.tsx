import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { TopMenu } from "../../components/TopMenu";

export function DefaultLayout() {
  return (
    <Box minH="100vh">
      <TopMenu />
      <Outlet />
      <Footer />
    </Box>
  )
}