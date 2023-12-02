import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = () => {
  return (
    <Box mb={12}>
      <PostHeader />
      <Box>
        <Image
          my={2}
          mb={4}
          src="/img1.png"
          alt="post image"
          borderRadius={"sm"}
        />
      </Box>
      <PostFooter />
    </Box>
  );
};

export default FeedPost;
