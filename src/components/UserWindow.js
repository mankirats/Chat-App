import React from "react";
import {
    UserWindowBackground,
    UserWindowDate,
    MessageSideView,
    MessageContainer,
} from "./CustomStyle";
function UserWindow(props) {
    return (
        <UserWindowBackground>
            <MessageContainer>
                {props.userName}

                <MessageSideView>{props.message}</MessageSideView>
            </MessageContainer>
            <UserWindowDate className>{props.datetime}</UserWindowDate>
        </UserWindowBackground>
    );
}

export default UserWindow;
