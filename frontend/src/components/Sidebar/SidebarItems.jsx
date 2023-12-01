import React from "react";
import Home from "./Home";
import Search from "./Search";
import Notifications from "./Notifications";
import Create from "./Create";
import Profile from "./Profile";

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <Create />
      <Profile />
    </>
  );
};

export default SidebarItems;
