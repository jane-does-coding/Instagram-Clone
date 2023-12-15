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
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";

const AuthForm = () => {
  /* SHOW & HIDE PASSWORD */
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  /* SWITCH LOGIN & SIGNUP SCREEN */
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  /* FUNCTIONS */

  /* LOGIN */
  const handleLogin = async () => {
    try {
      if (!inputs.email || !inputs.password) {
        alert("Please enter all the fields");
        return;
      }

      const res = console.log("login");
      navigate("/");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  /* SIGNUP */
  const handleSignup = async () => {
    try {
      if (
        !inputs.name ||
        !inputs.username ||
        !inputs.email ||
        !inputs.password
      ) {
        alert("Please enter all the fields");
        return;
      }

      if (inputs.password.length < 6) {
        alert("Password should be at least 6 characters long");
        return;
      }

      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();

      if (data.error) {
        alert(data.error);
        return;
      }

      localStorage.setItem("user-insta", JSON.stringify(data));
      setUser(data);
      console.log(data);
      navigate("/");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <VStack gap={4} w={"100%"}>
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
            <Flex gap={{ base: 2, md: 4 }} w={"full"}>
              <Input
                placeholder="Full Name"
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
          )}

          {/* EMAIL INPUT */}
          <Input
            placeholder="Email"
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

          {/* PASSWORD INPUT */}
          <InputGroup>
            <Input
              placeholder="Password"
              type={show ? "text" : "password"}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <InputRightAddon p={0} pl={0.25} overflow={"hidden"}>
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

          {/* LOGIN / SIGNUP WITH GOOGLE */}
          <Button leftIcon={<FcGoogle size={22} />} w={"full"}>
            {isLogin ? "Log in" : "Sign up"} with Google
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
            cursor={"pointer"}
          >
            {isLogin ? "Signup" : "Login"}
          </Text>
        </Text>
      </Box>
    </VStack>
  );
};

export default AuthForm;
