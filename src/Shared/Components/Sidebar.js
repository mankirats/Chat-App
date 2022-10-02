import React from "react";
import { Wrapper, SidebarWrapper } from "./CustomStyle";
import UserSidebar from "./UserSidebar";
function Sidebar() {
    return (
        <SidebarWrapper padding="1rem">
            <UserSidebar></UserSidebar>
        </SidebarWrapper>
    );
}

export default Sidebar;
