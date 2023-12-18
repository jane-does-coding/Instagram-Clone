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
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container px={{ base: 2, xl: 4 }}>
      {/* LOADING */}
      {loading ? (
        <>
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
        </>
      ) : (
        <>
          {/* POSTS */}
          <FeedPost
            img="https://placehold.co/800@2x.png"
            title="First post"
            avatar="https://placehold.co/800@2x.png"
            username="janedoe_846"
          />
          <FeedPost
            img="https://placehold.co/800@2x.png"
            title="Second post"
            avatar="https://placehold.co/800@2x.png"
            username="johndoe_103"
          />
          <FeedPost
            img="https://placehold.co/800@2x.png"
            title="My awesome drawing of the Tower Bridge!"
            avatar="https://placehold.co/800@2x.png"
            username="burak_935"
          />
          <FeedPost
            img="https://placehold.co/800@2x.png"
            title="Fourth post"
            avatar="https://placehold.co/800@2x.png"
            username="anotheruser_026"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
