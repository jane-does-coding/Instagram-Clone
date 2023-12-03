import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"}>
      <FeedPost
        img="/img1.png"
        username="newuser_237"
        avatar="/img1.png"
        title="Wonderful image"
      />
      <FeedPost
        img="/img2.png"
        username="newuser_7477"
        avatar="/img2.png"
        title="This is my first post"
      />
      <FeedPost
        img="/img3.png"
        username="newuser_103"
        avatar="/img3.png"
        title="Hello World"
      />
      <FeedPost
        img="/img4.png"
        username="newuser_037"
        avatar="/img4.png"
        title="This is a great post"
      />
    </Container>
  );
};

export default FeedPosts;
