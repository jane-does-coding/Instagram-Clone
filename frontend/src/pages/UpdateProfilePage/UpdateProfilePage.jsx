import {
  Avatar,
  Button,
  Container,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const UpdateProfilePage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    profilePic: "",
  });
  const imageRef = useRef(null);

  const handleUserUpdate = () => {};

  return (
    <Container
      minH={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      minW={"100%"}
    >
      <Text
        my={4}
        mx={"auto"}
        fontSize={"2rem"}
        fontWeight={"semibold"}
        w={"full"}
        textAlign={"center"}
        mt={8}
      >
        Update Profile
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={2}
        w={{ base: "90%", sm: "90%", md: "full" }}
        mx={"auto"}
        p={4}
        px={{ base: "5%", lg: "10%" }}
      >
        {/* LEFT CONTENT */}
        <Flex
          flex={1}
          flexDir={"column"}
          px={2}
          display={"flex"}
          justifyContent={"center"}
          py={{ base: 0, md: 2 }}
        >
          <Flex direction={"column"} gap={{ base: 2 }} maxH={"fit-content"}>
            <Avatar
              src="/img3.png"
              w={"10rem"}
              h={"10rem"}
              m={"auto"}
              mt={2}
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
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
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
          py={{ base: 0, md: 2 }}
        >
          <Flex direction={"column"} gap={{ base: 2 }} maxH={"fit-content"}>
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
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />

            <Textarea
              placeholder="Add a bio to your account..."
              h={"200px"}
              resize={"none"}
              value={inputs.bio}
              onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
            />
            <Button
              mt={4}
              alignSelf={"center"}
              w={"full"}
              onClick={handleUserUpdate}
              mb={6}
            >
              Update
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default UpdateProfilePage;
