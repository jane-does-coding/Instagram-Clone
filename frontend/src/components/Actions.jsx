import { Box, Flex } from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../assets/constants";
import { PiShareFat } from "react-icons/pi";
import { useState } from "react";

const Actions = () => {
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
    </>
  );
};

export default Actions;
