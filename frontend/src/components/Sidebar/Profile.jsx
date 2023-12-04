import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Profile = () => {
  return (
    <Tooltip
      hasArrow
      label={"Home"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display={"flex"}
        to={"/janedoe"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Avatar src="profilepic.png" size={"sm"} />
        <Box display={{ base: "none", md: "block" }}>Profile</Box>
      </Link>
    </Tooltip>
  );
};

export default Profile;
