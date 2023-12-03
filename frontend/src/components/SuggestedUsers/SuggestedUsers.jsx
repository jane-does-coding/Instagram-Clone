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
        avatar={"/img1.png"}
        name={"Emily Rodriguez"}
      />
      <SuggestedUser
        followers={53}
        avatar={"/img2.png"}
        name={"Benjamin Taylor"}
      />
      <SuggestedUser
        followers={173}
        avatar={"/img3.png"}
        name={"Mia Johnson"}
      />
      <SuggestedUser
        followers={938}
        avatar={"/img4.png"}
        name={"Sophia Martinez"}
      />
      <SuggestedUser
        followers={532}
        avatar={"/img3.png"}
        name={"Liam Anderson"}
      />

      <Box fontSize={12} color={"whiteAlpha.400"} mt={5} mr={"auto"}>
        &copy; 2023 Built by{" "}
        <Text color="blue.600" cursor={"pointer"} as={"span"}>
          As a programmer
        </Text>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
