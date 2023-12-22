import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Comment = ({ reply }) => {
  return (
    <Flex gap={4} alignItems={"center"} w={"full"}>
      <Avatar
        src={reply.userProfilePic}
        alt={"pofile image"}
        size={"sm"}
        name={reply.username}
      />

      <Flex direction={"column"} w={"full"}>
        <Flex
          w={"full"}
          gap={2}
          flexDir={"row"}
          justifyContent={"space-between"}
        >
          <Text fontSize={12} color={"whiteAlpha.500"}>
            {reply.username}
          </Text>

          <Text fontSize={12} color={"whiteAlpha.500"}>
            {reply.createdAt}
          </Text>
        </Flex>

        <Text fontSize={14} color={"whiteAlpha.800"}>
          {reply.text}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
