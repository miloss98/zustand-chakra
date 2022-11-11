import { Flex, HStack, Text, VStack, Button } from "@chakra-ui/react";
import { useApiStore } from "../apiStore";
import { useEffect, useState } from "react";

const Fetched = () => {
  const { data, fetchData } = useApiStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
  }));
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const handleFetch = () => {
    setUsers(data);
  };
  return (
    <Flex
      bgColor="gray.100"
      direction="column"
      justify="space-evenly"
      align="center"
      w="400px"
      my="20px"
      pb="20px"
    >
      <Text fontSize="xl" color="gray.800">
        Api data:
      </Text>
      <VStack w="100%">
        {users.map((user) => {
          const { id, name } = user;
          return (
            <HStack key={id} w="80%">
              <Text py="5px" fontSize="xl" color="green">
                {name}
              </Text>
            </HStack>
          );
        })}

        <Button
          colorScheme="blue"
          variant="solid"
          onClick={() => handleFetch()}
        >
          fetch
        </Button>
      </VStack>
    </Flex>
  );
};

export default Fetched;
