import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Comment = ({ createdAt, username, profilePic, text }) => {
  return (
    <Flex gap={4} alignItems={"center"} w={"full"}>
      <Avatar
        src={profilePic}
        alt={"pofile image"}
        size={"sm"}
        name={username}
      />

      <Flex direction={"column"} w={"full"}>
        <Flex
          w={"full"}
          gap={2}
          flexDir={"row"}
          justifyContent={"space-between"}
        >
          <Text fontSize={12} color={"whiteAlpha.500"}>
            {username}
          </Text>

          <Text fontSize={12} color={"whiteAlpha.500"}>
            {createdAt}
          </Text>
        </Flex>

        <Text fontSize={14} color={"whiteAlpha.800"}>
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
