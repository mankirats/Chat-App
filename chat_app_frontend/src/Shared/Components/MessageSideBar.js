import React from "react";
import { MessageSideBarWrapper } from "./CustomStyle";
import MessageView from "./MessageView";
import ChatHeader from "./ChatHeader";
import TypeChat from "./TypeChat";
function MessageSideBar() {
    return (
        <MessageSideBarWrapper>
            <ChatHeader sendName="Jan Levinson"></ChatHeader>
            <MessageView
                message="Lorem ipsum "
                datetime="Sun Jan 18, 2022"
            ></MessageView>
            <TypeChat></TypeChat>
        </MessageSideBarWrapper>
    );
}

export default MessageSideBar;
