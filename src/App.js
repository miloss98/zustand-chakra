import "./reset.css";
import { Box, Center, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { useMarketStore } from "./store";

function App() {
  const value = useMarketStore((state) => state.value);
  const increment = useMarketStore((state) => state.incrementValue);
  const decrement = useMarketStore((state) => state.decrementValue);
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Center h="80px" w="100%" bgColor="gray.700">
        <Text color="white" fontSize="2xl">
          Zustand practice
        </Text>
      </Center>
      <Flex
        bgColor="gray.100"
        direction="column"
        justify="center"
        align="center"
        h="200px"
        w="400px"
        my="40px"
      >
        <Text fontSize="xl" color="gray.800" as="i">
          Current market value:
        </Text>
        <Text py="5px" fontSize="xl" color="red">
          {value}
        </Text>
        <HStack>
          <Button
            size="md"
            colorScheme="pink"
            variant="solid"
            w="120px"
            onClick={increment}
          >
            Increment
          </Button>
          <Button
            size="md"
            w="120px"
            colorScheme="cyan"
            variant="solid"
            onClick={decrement}
          >
            Decrement
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default App;
