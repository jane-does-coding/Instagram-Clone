import { Avatar, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SuggestedUser = ({ followers, avatar, name }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack alignItems={"left"} gap={1}>
          <Text fontSize={14}>{name}</Text>
          <Text fontSize={12} color={"whiteAlpha.400"}>
            {followers} followers
          </Text>
        </VStack>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ bg: "gray.800" }}
          transition={"0.2s ease-in-out"}
          padding={"0.25rem 0.75rem"}
          borderRadius={2}
          bg={"gray.900"}
        >
          Follow
        </Text>
      </Box>
    </Flex>
  );
};

export default SuggestedUser;
