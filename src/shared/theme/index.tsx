import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark", 
    useSystemColorMode: false,
  },
  styles: {
    global: {
      code: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Roboto, Arial, Helvetica, sans-serif"
      },
    },
  },
});

export default theme;
