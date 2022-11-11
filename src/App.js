import "./reset.css";
import { Box, Center, Text } from "@chakra-ui/react";
import { Market, People } from "./components/index";
import Fetched from "./components/Fetched";

function App() {
  return (
    <Box
      w="100%"
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
      {/* Fetched data */}
      <Fetched />
    </Box>
  );
}

export default App;
