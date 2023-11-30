import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction="column" gap={10} w={"full"} h={"full"}>
        <Link
          as={RouterLink}
          to={"/"}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
          pl={2}
        >
          <InstagramLogo />
        </Link>
        {/* MOBILE LOGO */}
        <Link
          as={RouterLink}
          to={"/"}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          pl={2}
          p={2}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.300" }}
          w={"fit-content"}
        >
          <InstagramMobileLogo />
        </Link>
        {/* ICONS */}
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
