import React, { useState } from "react";
import { Box, Heading, Input, Button, VStack, HStack, Text, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "You can't add an empty todo!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <Box p={8}>
      <VStack spacing={8}>
        <Heading>Todo App</Heading>
        <HStack>
          <Input value={inputValue} onChange={handleInputChange} placeholder="Add your new todo" />
          <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme="teal" aria-label="Add todo" />
        </HStack>
        <VStack spacing={4} align="stretch">
          {todos.map((todo, index) => (
            <HStack key={index} justify="space-between">
              <Text>{todo}</Text>
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
