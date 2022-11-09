import "./reset.css";
import { Box, Center, Text } from "@chakra-ui/react";
//import { useState } from "react";
import { Market, People } from "./components/index";

function App() {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      {/* Nav */}
      <Center h="80px" w="100%" bgColor="gray.700">
        <Text color="white" fontSize="2xl">
          Zustand
        </Text>
      </Center>
      {/* Market  */}
      <Market />
      {/* People */}
      <People />
    </Box>
  );
}

export default App;
