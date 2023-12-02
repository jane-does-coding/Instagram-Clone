import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={{ lg: 10, xl: 20 }}>
        {/* FEED POSTS */}
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        {/* SUGGESTED USERS */}
        <Box
          flex={3}
          mr={{ lg: 10, xl: 20 }}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
