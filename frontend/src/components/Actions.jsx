import { Box, Flex } from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../assets/constants";
import { PiShareFat } from "react-icons/pi";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";

const Actions = ({ post }) => {
  const user = useRecoilValue(userAtom);
  const [liked, setLiked] = useState(post.likes.includes(user._id));
  const [likes, setLikes] = useState(post.likes.length);

  const handleLike = async () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    try {
      const res = await fetch(`/api/posts/like/${post._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
      alert(err);
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
