import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex px={4} minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Container maxW={"container.md"} p={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* LEFT SIDE */}
          <Box flex={1} display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={550} alt="Phone img" />
          </Box>

          {/* RIGHT SIDE */}
          <VStack flex={1}>
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
