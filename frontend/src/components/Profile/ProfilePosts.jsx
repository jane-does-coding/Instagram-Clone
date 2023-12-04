import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

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
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img2.png" />
          <ProfilePost img="/img3.png" />
          <ProfilePost img="/img4.png" />
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img3.png" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
