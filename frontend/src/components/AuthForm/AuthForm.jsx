import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

/* ICONS */
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const AuthForm = () => {
  /* SHOW & HIDE PASSWORD */
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  /* SWITCH LOGIN & SIGNUP SCREEN */
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    console.log("login");
  };

  const handleSignup = () => {
    console.log("signup");
  };

  return (
    <VStack gap={4}>
      <Box
        border={"1px solid gray"}
        borderRadius={4}
        padding={5}
        w={{ base: "90%", md: "100%" }}
      >
        <VStack spacing={4} w={"100%"}>
          <Image src="/logo.png" h={20} my={0} alt="Instagram" />

          {/* INPUTS NOT VISIBLE DURING LOGIN  ->  SIGNUP ONLY */}
          {!isLogin && (
            <Flex gap={4} w={"full"}>
              <Input placeholder="Full Name" />
              <Input placeholder="Username" />
            </Flex>
          )}

          {/* EMAIL INPUT */}
          <Input placeholder="Email" type="email" />

          {/* PASSWORD INPUT */}
          <InputGroup>
            <Input placeholder="Password" type={show ? "text" : "password"} />
            <InputRightAddon
              p={0}
              pl={0.25}
              overflow={"hidden"}
              /* ADD LATER */
              /* isInvalid errorBorderColor="crimson" */
            >
              <Button
                h="100%"
                borderRadius={0}
                p={0}
                w={"fit-content"}
                onClick={handleClick}
              >
                {show ? (
                  <IoEyeOffOutline size={22} />
                ) : (
                  <IoEyeOutline size={22} />
                )}
              </Button>
            </InputRightAddon>
          </InputGroup>

          {/* SUBMIT BUTTON */}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            my={2}
            py={4.5}
            onClick={() => (isLogin ? handleLogin() : handleSignup())}
          >
            {isLogin ? "Log in" : "Sign up"}
          </Button>

          {/* ----------------  OR  ------------------- */}
          <Flex w={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Box h={"1px"} w={"100%"} bg={"gray"} />
            <Text mx={2}>OR</Text>
            <Box h={"1px"} w={"100%"} bg={"gray"} />
          </Flex>

          {/* LOGIN WITH GOOGLE */}
          <Button leftIcon={<FcGoogle size={22} />} w={"full"}>
            Log in with Google
          </Button>
        </VStack>
      </Box>
      {/* SWITCH LOGIN / SIGNUP */}
      <Box
        border={"1px solid gray"}
        borderRadius={4}
        padding={5}
        w={{ base: "90%", md: "100%" }}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <Text>
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <Text
            ml={2}
            color={"blue.600"}
            as={"span"}
            display={"inline"}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup" : "Login"}
          </Text>
        </Text>
      </Box>
    </VStack>
  );
};

export default AuthForm;
