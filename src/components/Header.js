import React from "react";
import ChatOptions from "./ChatOptions";
import { HeaderBackground } from "./CustomStyle";
function Header() {
    return (
        <HeaderBackground>
            <div>Chat App</div>
            <ChatOptions></ChatOptions>
        </HeaderBackground>
    );
}

export default Header;
