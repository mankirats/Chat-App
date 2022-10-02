import React from "react";
import {
    MessageSideViewContainer,
    TitleContainer,
    Container,
} from "./CustomStyle";
function MessageSideView(props) {
    return (
        <MessageSideViewContainer>
            <Container row>
                <TitleContainer fontSize="0.95rem" fontWeight="500">
                    {props.senderName || "senderName"}
                </TitleContainer>
                <TitleContainer fontSize="0.85rem" fontWeight="400">
                    {props.datetime || "datetime"}
                </TitleContainer>
            </Container>

            <TitleContainer fontSize="0.9rem" textAlign="justify">
                {props.message.slice(0, 70) + "..." || "Message Display"}
            </TitleContainer>
        </MessageSideViewContainer>
    );
}

export default MessageSideView;
