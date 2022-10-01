import React from "react";
import { ChatHeaderContainer } from "./CustomStyle";
function ChatHeader(props) {
    return <ChatHeaderContainer>{props.sendName}</ChatHeaderContainer>;
}

export default ChatHeader;
