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
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getFeedPosts = async () => {
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();

        if (data.error) {
          alert(data.error);
          console.log(data.error);
        }

        console.log(data);
        setPosts(data);
      } catch (err) {
        console.log(err);
        alert(err);
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
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
          {posts.map((post) => (
            <FeedPost key={post._id} post={post} postedBy={post.postedBy} />
          ))}
          {posts.length == 0 && (
            <Text width={"full"} textAlign={"center"}>
              Follow people to see the feed
            </Text>
          )}
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
