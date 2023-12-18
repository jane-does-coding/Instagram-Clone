import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Text,
  VStack,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import userAtom from "../../atoms/userAtom";
import { useRecoilValue } from "recoil";

const ProfileHeader = ({ user }) => {
  const currentUser = useRecoilValue(userAtom);

  const [isFollowing, setIsFollowing] = useState(
    user.followers.includes(currentUser._id)
  );

  const handleFollowUnfollow = async () => {
    try {
      if (user.id === currentUser._id) {
        alert("You cannot follow or unfollow yourself");
        return;
      }

      const res = await fetch(`/api/users/follow/${user._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        alert(data.error);
        console.log(data.error);
        return;
      }

      // Simulate adding or unadding followers in UI
      if (isFollowing) {
        user.followers.pop();
      } else {
        user.followers.push(currentUser._id);
      }

      setIsFollowing(!isFollowing);

      console.log(data);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <>
      <Flex direction={{ base: "column", md: "row" }} w={"full"} gap={10}>
        {/* Profile Pic */}
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignSelf={"flex-start"}
          mx={"auto"}
        >
          <Avatar
            name={user ? user.name : ""}
            src={user.profilePic || ""}
            alt={"Profile image"}
          />
        </AvatarGroup>

        {/* Info */}
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            gap={4}
            direction={"row"}
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={{ base: "sm", md: "lg" }}>{user.username}</Text>
            {currentUser._id == user._id ? (
              <Button
                colorScheme="gray"
                size={{ base: "xs", md: "sm" }}
                bg={"whiteAlpha.900"}
                color={"blackAlpha.800"}
                _hover={{ bg: "whiteAlpha.700" }}
              >
                <Link to={"/update"}>Edit Profile</Link>
              </Button>
            ) : (
              <Button
                colorScheme="gray"
                size={{ base: "xs", md: "sm" }}
                bg={"whiteAlpha.900"}
                color={"blackAlpha.800"}
                _hover={{ bg: "whiteAlpha.700" }}
                onClick={handleFollowUnfollow}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            )}
          </Flex>

          {/* User profile info */}
          <Flex direction={"row"} gap={4} alignSelf={"start"}>
            <Text color={"whiteAlpha.700"}>4 Posts</Text>
            <Text color={"whiteAlpha.700"}>
              {user.followers.length} Followers
            </Text>
            <Text color={"whiteAlpha.700"}>
              {user.following.length} Following
            </Text>
          </Flex>

          {/* Name of the user */}
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {user.name}
          </Text>
          {/* Description / Bio */}
          <Text
            fontWeight={"semibold"}
            color={user.bio ? "white" : "whiteAlpha.600"}
          >
            {user.bio || "This user doesn't has a biography"}
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileHeader;
