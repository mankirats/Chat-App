import React from "react";
import ChatOptions from "./ChatOptions";
import { HeaderBackground } from "./CustomStyle";
function Header() {
    return (
        <HeaderBackground>
            Chat App
            <ChatOptions></ChatOptions>
        </HeaderBackground>
    );
}

export default Header;
