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
import { useRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
import usePreviewImage from "../../hooks/usePreviewImage";
import { useNavigate } from "react-router-dom";

const UpdateProfilePage = () => {
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

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/users/update/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...inputs, profilePic: imgUrl }),
      });
      const data = await res.json(); // updated user object

      if (data.error) {
        alert(data.error);
        return;
      }

      alert("Profile updated successfully");
      navigate("/");
      setUser(data.user);
      localStorage.removeItem("user-insta");
      localStorage.setItem("user-insta", JSON.stringify(data.user));
    } catch (err) {
      alert(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUserUpdate}>
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
          w={{ base: "100%", sm: "95%", md: "full" }}
          mx={"auto"}
          p={4}
          px={2}
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
                src={imgUrl || user.profilePic || ""}
                w={"10rem"}
                h={"10rem"}
                m={"auto"}
                mt={2}
                mb={4}
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
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
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

export default UpdateProfilePage;
