import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = ({ img, username, avatar, title }) => {
  return (
    <Box mb={12}>
      <PostHeader username={username} avatar={avatar} />
      <Box>
        <Image my={2} mb={4} src={img} alt="post image" borderRadius={"sm"} />
      </Box>
      <PostFooter title={title} />
    </Box>
  );
};

export default FeedPost;
