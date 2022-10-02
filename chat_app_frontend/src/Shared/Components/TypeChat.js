import React, { useState } from "react";
import { TypeChatInput } from "./CustomStyle";
function TypeChat(props) {
    const [message, updateMessage] = useState({ value: "", datetime: "" });
    const handleMessageUpdate = (event) => {
        updateMessage(event.target.value);
    };
    return (
        <>
            <TypeChatInput
                type="text"
                name="message"
                placeholder="Type a message"
                onChange={handleMessageUpdate}
                value={message.value}
            ></TypeChatInput>
        </>
    );
}

export default TypeChat;
