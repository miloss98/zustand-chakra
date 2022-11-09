import { Flex, HStack, Button, Text } from "@chakra-ui/react";
import { useMarketStore } from "../marketStore";
import shallow from "zustand/shallow";

const Market = () => {
  const { value, increment, decrement, reset } = useMarketStore((state) => ({
    value: state.value,
    increment: state.increment,
    decrement: state.decrement,
    reset: state.reset,
    shallow,
  }));

  return (
    <Flex
      bgColor="gray.100"
      direction="column"
      justify="space-evenly"
      align="center"
      h="200px"
      w="400px"
      my="20px"
    >
      <Text fontSize="xl" color="gray.800">
        Current value:
      </Text>
      <Text py="5px" fontSize="xl" color="red">
        {value}
      </Text>
      <HStack>
        <Button
          size="sm"
          colorScheme="pink"
          variant="solid"
          w="120px"
          onClick={increment}
        >
          Increment
        </Button>
        <Button
          size="sm"
          w="120px"
          colorScheme="cyan"
          variant="solid"
          onClick={decrement}
        >
          Decrement
        </Button>
        <Button size="sm" colorScheme="yellow" onClick={reset}>
          Reset
        </Button>
      </HStack>
    </Flex>
  );
};

export default Market;
