import { Box, Flex, Text, HStack, Button, Input } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
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

  const people = usePeopleStore((state) => state.people);
  const addNewPerson = usePeopleStore((state) => state.addNewPerson);
  const removePerson = usePeopleStore((state) => state.removePerson);
  const removeAll = usePeopleStore((state) => state.removeAll);

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
            justify="space-between"
            w="80%"
            background="white"
            mb="10px"
            h="30px"
            rounded="sm"
          >
            <Text pl="10px">{name}</Text>
            <Button
              w="30px"
              h="30px"
              bg="none"
              rounded="none"
              _hover={{
                background: "none",
              }}
              onClick={() => removePerson(id)}
            >
              <DeleteIcon
                color="red"
                _hover={{
                  color: "red.400",
                }}
              />
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
          mb="15px"
          size="sm"
          w="80%"
          rounded="md"
          bgColor="white"
          _hover={{
            borderColor: "gray.400",
          }}
          focusBorderColor="blue.200"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        <HStack justify="space-between" w="80%">
          <Button
            w="45%"
            size="sm"
            colorScheme="purple"
            onClick={handleAddNewPerson}
          >
            Add new person
          </Button>
          <Button w="45%" size="sm" colorScheme="red" onClick={removeAll}>
            Clear all
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default People;
