import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useState } from "react";

const FeedPosts = () => {
  const { isLoading, setIsLoading } = useState(true);
  const posts = [];

  return (
    <>
      {/* LOADING */}
      {[0, 1, 2].map((_, idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap="2">
            <SkeletonCircle size="10" />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height="10px" w={"200px"} />
              <Skeleton height="10px" w={"200px"} />
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"400px"}>contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
      {/* POSTS */}
      <FeedPost
        img="/img1.png"
        title="First post"
        avatar="/img1.png"
        username="janedoe_846"
      />
      <FeedPost
        img="/img2.png"
        title="Second post"
        avatar="/img2.png"
        username="johndoe_103"
      />
      <FeedPost
        img="/img3.png"
        title="Third post"
        avatar="/img3.png"
        username="burak_935"
      />
      <FeedPost
        img="/img4.png"
        title="Fourth post"
        avatar="/img4.png"
        username="anotheruser_026"
      />
    </>
  );
};

export default FeedPosts;
