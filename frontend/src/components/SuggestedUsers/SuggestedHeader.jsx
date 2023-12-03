import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a programmer" src="/profilepic.png" size={"lg"} />
        <Text fontSize={12} fontWeight={"bold"}>
          asaprogrammer_
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        fontSize={14}
        color={"blue.500"}
        fontWeight={600}
        _hover={{ bg: "gray.800" }}
        transition={"0.2s ease-in-out"}
        borderRadius={2}
        bg={"gray.900"}
        top={0}
        maxH={"calc(100% - 2px)"}
        cursor={"pointer"}
        padding={"0.25rem 0.75rem"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
