import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { username } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const profilePosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/user/${username}`);
        const data = await res.json();

        console.log(data);
        setPosts(data);
      } catch (err) {
        console.log(err);
        alert(err);
      } finally {
        setIsLoading(false);
      }
    };

    profilePosts();
  }, []);

  return (
    <Grid
      templateColumns={{
        base: "repeat(auto-fill, minmax(200px, 1fr))",
        xl: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
      my={4}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5, 6].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"}>
            <Skeleton w={"full"}>
              <Box h={"300px"} />
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} postedBy={""} key={post._id} />
          ))}
          {posts == 0 && "No posts yet"}
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
