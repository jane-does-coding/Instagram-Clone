import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { useEffect, useState } from "react";

const FeedPost = ({ post, postedBy }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${postedBy}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    };

    getUser();
  }, []);

  return (
    <Box mb={12}>
      {user ? (
        <PostHeader
          username={user.username || ""}
          avatar={user.profilePic || ""}
          date={post.createdAt}
        />
      ) : null}

      <Box>
        {post.img && (
          <Image
            my={2}
            mb={4}
            src={post.img}
            alt="post image"
            borderRadius={"sm"}
          />
        )}
      </Box>
      <PostFooter post={post} />
    </Box>
  );
};

export default FeedPost;
