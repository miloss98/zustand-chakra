import { Box, Flex, Text, HStack, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { usePeopleStore } from "../peopleStore";

const People = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const clear = () => {
    setInputValue("");
  };
  const handleAddNewPerson = () => {
    if (inputValue.length >= 5) addNewPerson({ name: inputValue });
    clear();
  };
  //   const handleRemovePerson = (id) => {
  //     console.log(id);
  //     removePerson({ id: id });
  //   };

  const people = usePeopleStore((state) => state.people);
  const addNewPerson = usePeopleStore((state) => state.addNewPerson);
  const removePerson = usePeopleStore((state) => state.removePerson);

  return (
    <Flex
      bgColor="gray.100"
      direction="column"
      justify="flex-start"
      align="center"
      w="400px"
      my="20px"
    >
      <Text py="5px" fontSize="xl">
        People:
      </Text>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <HStack
            key={id}
            justify="center"
            w="80%"
            bgColor="gray.400"
            mb="10px"
            h="30px"
            rounded="sm"
          >
            <Text>{name}</Text>
            <Button
              bgColor="red"
              color="white"
              onClick={(e) => removePerson(id)}
            >
              X
            </Button>
          </HStack>
        );
      })}
      <Box
        my="20px"
        w="100%"
        direction="column"
        justifyContent="center"
        align="center"
      >
        <Input
          mb="10px"
          size="sm"
          w="80%"
          borderColor="gray.500"
          rounded="sm"
          _hover={{
            borderColor: "gray.400",
          }}
          focusBorderColor="blue.200"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        <Button size="sm" colorScheme="purple" onClick={handleAddNewPerson}>
          Add new person
        </Button>
      </Box>
    </Flex>
  );
};

export default People;
