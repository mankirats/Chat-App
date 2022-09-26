import React from "react";
import UserWindow from "./UserWindow";
import { SidebarBackground } from "./CustomStyle";
function Sidebar() {
    return (
        <SidebarBackground>
            <UserWindow
                datetime={"Wed Sep 26, 2022"}
                userName={"Steve Madden"}
                message={"Hello"}
            ></UserWindow>
        </SidebarBackground>
    );
}

export default Sidebar;
