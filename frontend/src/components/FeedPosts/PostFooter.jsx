import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GoPaperAirplane } from "react-icons/go";
import Actions from "../Actions";

const PostFooter = ({ title }) => {
  const [likes, setLikes] = useState(234);

  return (
    <Box>
      <Text fontSize={"sm"} fontWeight={500} my={2} mb={4}>
        {title}
      </Text>
      <Actions />
      <Flex
        fontWeight={600}
        fontSize={"sm"}
        display={"flex"}
        alignItems={"center"}
        gap={2}
        color={"gray"}
      >
        {likes} likes{" "}
        <Box borderRadius={"5px"} bg={"gray.500"} h={"3px"} w={"3px"} />
        636 comments
      </Flex>

      {/* Input */}

      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            placeholder="Add a comment"
            variant={"flushed"}
            fontSize={14}
          />
          <InputRightElement w={"fit-content"}>
            <Button
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
            >
              <GoPaperAirplane size={18} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
