import { Container, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import ProfileLiked from "../../components/Profile/ProfileLiked";
import ProfileSaved from "../../components/Profile/ProfileSaved";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const [tab, setTab] = useState("posts");
  const { username } = useParams();
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();

        if (data.error) {
          alert(data.error);
          return;
        }
        /* 
        console.log(data); */
        setUser(data);
        setLoading(false);
      } catch (err) {
        alert(err);
        console.log(err);
      }
    };

    getUser();
  }, []);

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
        {loading ? "loading..." : <ProfileHeader user={user} />}
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
