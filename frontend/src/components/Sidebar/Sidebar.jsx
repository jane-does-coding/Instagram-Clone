import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import SidebarItems from "./SidebarItems";
import { BiLogOut } from "react-icons/bi";

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
      <Flex
        direction="column"
        gap={10}
        w={"full"}
        h={"full"}
        alignItems={{ base: "center", md: "start" }}
      >
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
        {/* ITEMS */}
        <Flex
          direction={"column"}
          gap={5}
          cursor={"pointer"}
          mb={"auto"}
          w={"full"}
          alignItems={{ base: "center", md: "start" }}
        >
          <SidebarItems />
        </Flex>
        <Tooltip
          mt={"auto"}
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            pr={{ base: 2, md: 4 }}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Logout</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
