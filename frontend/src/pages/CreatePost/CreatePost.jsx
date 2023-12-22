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
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom";
import usePreviewImage from "../../hooks/usePreviewImage";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const user = useRecoilValue(userAtom);
  const [text, setText] = useState("");
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const { handleImageChange, imgUrl } = usePreviewImage();
  const [loading, setLoading] = useState(false);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postedBy: user._id,
          text: text,
          img: imgUrl,
        }),
      });

      const data = await res.json();

      if (data.error) {
        alert(data.error);
        console.log(data);
        return;
      }

      alert(data.message);
      console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err);
    } finally {
      setLoading(false);
    }
  };

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
        Create Post
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={4}
        w={{ base: "100%", sm: "90%", lg: "80%" }}
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
              src={imgUrl || "https://placehold.co/600x400"}
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
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              mt={4}
              alignSelf={"center"}
              w={"full"}
              type="submit"
              mb={6}
              opacity={loading ? "0.75" : "1"}
              cursor={loading ? "not-allowed" : null}
              onClick={handleCreatePost}
            >
              {loading ? "Loading..." : "Create"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default CreatePost;
