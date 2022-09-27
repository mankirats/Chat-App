import React from "react";
import { MessageViewContainer, MessageGroupContainer } from "./CustomStyle";
import { UserWindowDate } from "./CustomStyle";
function Chat() {
    return (
        <MessageGroupContainer>
            <MessageViewContainer>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis eius veritatis veniam iusto minima labore? Illum
                voluptatibus repudiandae ea fugiat laboriosam fuga soluta
                quibusdam! Soluta totam architecto enim reiciendis illo.
                <UserWindowDate chat>"Wed, Sep 16, 2022"</UserWindowDate>
            </MessageViewContainer>
            <MessageViewContainer send>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                cumque incidunt expedita maxime, corrupti eos perferendis in
                deleniti tempora vel exercitationem ea dolores nihil id odit
                libero non rerum dicta.
                <UserWindowDate chat>"Wed, Sep 16, 2022"</UserWindowDate>
            </MessageViewContainer>
        </MessageGroupContainer>
    );
}

export default Chat;
