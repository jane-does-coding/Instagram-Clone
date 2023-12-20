import { Box, Flex } from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../assets/constants";
import { PiShareFat } from "react-icons/pi";
import { useState } from "react";

const Actions = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes.length);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return (
    <>
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
        {post.replies.length} comments
      </Flex>
    </>
  );
};

export default Actions;
