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
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import { GoPaperAirplane } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";

const PostFooter = ({ title, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(234);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return (
    <Box>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <PiShareFat size={28} />
        </Box>
      </Flex>
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
      <Text fontSize={"sm"} fontWeight={500} mt={2}>
        {title}
      </Text>

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
