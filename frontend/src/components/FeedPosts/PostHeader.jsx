import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar src={avatar} size={"sm"} />
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Text fontSize={12} fontWeight={"bold"} gap={2}>
            {username}
          </Text>
          <Box
            bg={"whiteAlpha.600"}
            w={"3px"}
            h={"3px"}
            borderRadius={"full"}
            mx={2}
          />
          <Text color={"whiteAlpha.600"} fontSize={12}>
            1w
          </Text>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          color={"blue.500"}
          padding={"4px 10px"}
          bg={"gray.900"}
          _hover={{ bg: "gray.800" }}
          transition={"0.25s"}
          borderRadius={"2px"}
          fontWeight={"semibold"}
          fontSize={12}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
