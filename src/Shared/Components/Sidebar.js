import React from "react";
import { Wrapper, SidebarWrapper } from "./CustomStyle";
import UserSidebar from "./UserSidebar";
function Sidebar() {
    return (
        <SidebarWrapper>
            <UserSidebar></UserSidebar>
        </SidebarWrapper>
    );
}

export default Sidebar;
