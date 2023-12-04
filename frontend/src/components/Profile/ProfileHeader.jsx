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
import { useParams } from "react-router-dom";

const ProfileHeader = () => {
  /* UI USE ONLY !!!!!!!!!!!!!!! */
  const [isUser, setIsUser] = useState(true);
  const [isFollowing, setIsFollowing] = useState(true);
  /* UI USE ONLY !!!!!!!!!!!!!!! */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imageRef = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    profilePic: "",
  });
  const { userId } = useParams();

  const handleUserUpdate = async () => {
    try {
      /* FETCH */
      const res = await fetch(`/api/users/update/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();

      if (data.error) {
        alert(data.error);
      } else {
        alert("all good");
      }

      /* CONSOLE INPUTS */
      console.log(data);
    } catch (err) {
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
          <Avatar src="/profilepic.png" alt={"Profile image"} />
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
            <Text fontSize={{ base: "sm", md: "lg" }}>asaprogrammer_</Text>
            {isUser ? (
              <Button
                colorScheme="gray"
                size={{ base: "xs", md: "sm" }}
                bg={"whiteAlpha.900"}
                color={"blackAlpha.800"}
                _hover={{ bg: "whiteAlpha.700" }}
                /* UI USE ONLY !!!!!!!!!!!!!!! */
                onClick={onOpen}
                /* UI USE ONLY !!!!!!!!!!!!!!! */
              >
                {/* UI USE ONLY !!!!!!!!!!!!!!! */}
                Edit Profile
                {/*  UI USE ONLY !!!!!!!!!!!!!!!  */}
              </Button>
            ) : (
              <Button
                colorScheme="gray"
                size={{ base: "xs", md: "sm" }}
                bg={"whiteAlpha.900"}
                color={"blackAlpha.800"}
                _hover={{ bg: "whiteAlpha.700" }}
                /* UI USE ONLY !!!!!!!!!!!!!!! */
                onClick={() => setIsFollowing(!isFollowing)}
                /* UI USE ONLY !!!!!!!!!!!!!!! */
              >
                {/* UI USE ONLY !!!!!!!!!!!!!!! */}
                {isFollowing ? "Unfollow" : "Follow"}
                {/*  UI USE ONLY !!!!!!!!!!!!!!!  */}
              </Button>
            )}
          </Flex>

          {/* User profile info */}
          <Flex direction={"row"} gap={4} alignSelf={"start"}>
            <Text color={"whiteAlpha.700"}>4 Posts</Text>
            <Text color={"whiteAlpha.700"}>149 Followers</Text>
            <Text color={"whiteAlpha.700"}>168 Following</Text>
          </Flex>

          {/* Name of the user */}
          <Text fontSize={"sm"} fontWeight={"bold"}>
            As a Programmer
          </Text>
          {/* Description / Bio */}
          <Text>
            Tutorials that are meant to level up your skills as a programmer
          </Text>
        </VStack>
      </Flex>

      {/* MODAL */}

      <Modal
        isCentered={true}
        size={{ base: "3xl", md: "2xl", lg: "3xl", xl: "3xl" }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader
            bg={"gray.900"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            Edit Profile
          </ModalHeader>
          <ModalBody bg={"black"} pb={5}>
            {/* MODAL BODY */}
            <Flex
              direction={"row"}
              gap={2}
              w={{ base: "90%", sm: "90%", md: "full" }}
              mx={"auto"}
            >
              {/* LEFT CONTENT */}
              <Flex
                flex={1}
                flexDir={"column"}
                px={2}
                display={"flex"}
                justifyContent={"center"}
                py={2}
              >
                <Flex
                  direction={"column"}
                  gap={{ base: 2 }}
                  maxH={"fit-content"}
                >
                  <Avatar
                    src="/img3.png"
                    size={"2xl"}
                    m={"auto"}
                    my={2}
                    mb={4}
                  />

                  <Input type="file" hidden ref={imageRef} />
                  <Button
                    onClick={() => {
                      imageRef.current.click();
                    }}
                    mb={2}
                  >
                    + Add Image
                  </Button>

                  <Input
                    placeholder="Full name"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Username"
                    value={inputs.username}
                    onChange={(e) =>
                      setInputs({ ...inputs, username: e.target.value })
                    }
                  />
                </Flex>
              </Flex>

              {/* RIGHT CONTENT */}
              <Flex
                flex={1}
                flexDir={"column"}
                px={2}
                display={"flex"}
                justifyContent={"center"}
                py={2}
              >
                <Flex
                  direction={"column"}
                  gap={{ base: 2 }}
                  maxH={"fit-content"}
                >
                  <Input
                    placeholder="Password"
                    value={inputs.password}
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Email"
                    value={inputs.email}
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
                    }
                  />

                  <Textarea
                    placeholder="Add a bio to your account..."
                    h={"200px"}
                    resize={"none"}
                    value={inputs.bio}
                    onChange={(e) =>
                      setInputs({ ...inputs, bio: e.target.value })
                    }
                  />
                </Flex>
              </Flex>
            </Flex>
            <Button mt={4} w={"full"} onClick={handleUserUpdate}>
              Update
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileHeader;
