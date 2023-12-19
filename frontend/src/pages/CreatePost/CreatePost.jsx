import {
  Avatar,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
import usePreviewImage from "../../hooks/usePreviewImage";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [inputs, setInputs] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    bio: user.bio,
    password: "",
  });
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const { handleImageChange, imgUrl } = usePreviewImage();
  const [loading, setLoading] = useState(false);

  return (
    <form onSubmit={() => {}}>
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
          Create Post
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={4}
          w={{ base: "100%", sm: "95%", md: "80%" }}
          mx={"auto"}
          p={4}
          px={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* LEFT CONTENT */}
          <Flex
            flex={1}
            flexDir={"column"}
            px={2}
            display={"flex"}
            justifyContent={"center"}
            py={{ base: 0, md: 2 }}
            w={"100%"}
          >
            <Flex
              w={"100%"}
              direction={"column"}
              gap={{ base: 2 }}
              maxH={"fit-content"}
            >
              <Image
                src={"https://placehold.co/600x400"}
                w={"100%"}
                m={"auto"}
                mb={4}
                borderRadius={4}
                mt={0}
              />

              <Input
                type="file"
                hidden
                ref={imageRef}
                onChange={handleImageChange}
              />
              <Button
                onClick={() => {
                  imageRef.current.click();
                }}
                mb={2}
              >
                + Add Image
              </Button>
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
              <Textarea
                placeholder="Add the post text..."
                h={"250px"}
                resize={"none"}
                value={inputs.bio}
                onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
              />
              <Button
                mt={4}
                alignSelf={"center"}
                w={"full"}
                type="submit"
                mb={6}
                opacity={loading ? "0.75" : "1"}
                cursor={loading ? "not-allowed" : null}
              >
                Update
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </form>
  );
};

export default CreatePost;
