import React from "react";
import { ChatOptionBackground } from "./CustomStyle";
import { BiMessageDetail } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

function ChatOptions() {
    return (
        <ChatOptionBackground>
            <BiMessageDetail size={23} />
            <BsPersonCircle size={26} />
        </ChatOptionBackground>
    );
}

export default ChatOptions;
