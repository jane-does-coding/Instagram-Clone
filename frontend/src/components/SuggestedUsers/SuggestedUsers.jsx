import React from "react";
import SuggestedUser from "./SuggestedUser";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from ".//SuggestedHeader";
import { Link } from "react-router-dom";

const SuggestedUsers = () => {
  return (
    <VStack py={8} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"whiteAlpha.600"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"whiteAlpha.800"}
          _hover={{ color: "whiteAlpha.700" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        followers={1625}
        avatar={"https://picsum.photos/200/300"}
        name={"Emily Rodriguez"}
      />
      <SuggestedUser
        followers={53}
        avatar={"https://picsum.photos/200/300"}
        name={"Benjamin Taylor"}
      />
      <SuggestedUser
        followers={173}
        avatar={"https://picsum.photos/200/300"}
        name={"Mia Johnson"}
      />
      <SuggestedUser
        followers={938}
        avatar={"https://picsum.photos/200/300"}
        name={"Sophia Martinez"}
      />
      <SuggestedUser
        followers={532}
        avatar={"https://picsum.photos/200/300"}
        name={"Liam Anderson"}
      />
    </VStack>
  );
};

export default SuggestedUsers;
