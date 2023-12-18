import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";

const SuggestedHeader = () => {
  const [user, setUser] = useRecoilState(userAtom);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar
          name={user ? user.name : ""}
          src={user.profilePic}
          size={"lg"}
        />
        <Text fontSize={12} fontWeight={"bold"}>
          {user ? user.username : ""}
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
