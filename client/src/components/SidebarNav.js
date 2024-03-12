import React from "react";
import MainTab from "./MainTab";
import MessageTab from "./MessageTab";

const SidebarNav = (props) => {
  return (
    <div className="flex">
      <MainTab />
      <MessageTab />
    </div>
  );
};

export default SidebarNav;
