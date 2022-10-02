import React from "react";
import { MessageViewContainer, TitleContainer } from "./CustomStyle";
function MessageView(props) {
    return (
        <>
            <MessageViewContainer send>
                {props.message}
                <TitleContainer textAlign="right" fontSize="0.8rem">
                    {props.datetime}
                </TitleContainer>
            </MessageViewContainer>
            <MessageViewContainer>
                {props.message}
                <TitleContainer textAlign="right" fontSize="0.8rem">
                    {props.datetime}
                </TitleContainer>
            </MessageViewContainer>
            <MessageViewContainer send>
                {props.message}
                <TitleContainer textAlign="right" fontSize="0.8rem">
                    {props.datetime}
                </TitleContainer>
            </MessageViewContainer>
        </>
    );
}

export default MessageView;
