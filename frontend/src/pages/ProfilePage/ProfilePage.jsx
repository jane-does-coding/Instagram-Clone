import { Container, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import ProfileLiked from "../../components/Profile/ProfileLiked";
import ProfileSaved from "../../components/Profile/ProfileSaved";

const ProfilePage = () => {
  const [tab, setTab] = useState("posts");

  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        <ProfileHeader />
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}
      >
        <ProfileTabs tab={tab} setTab={setTab} />

        {(() => {
          switch (tab) {
            case "posts":
              return <ProfilePosts />;
            case "likes":
              return (
                <>
                  LIKES <ProfileLiked />
                </>
              );
            case "saved":
              return (
                <>
                  SAVED <ProfileSaved />
                </>
              );
            default:
              return <p>Error</p>;
          }
        })()}
      </Flex>
    </Container>
  );
};

export default ProfilePage;
