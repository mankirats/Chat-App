import React from "react";
import {
    UserWindowBackground,
    UserWindowDate,
    MessageSideView,
} from "./CustomStyle";
function UserWindow(props) {
    return (
        <UserWindowBackground>
            <div>
                {props.userName}
                <br />
                <MessageSideView>{props.message}</MessageSideView>
            </div>
            <UserWindowDate className>{props.datetime}</UserWindowDate>
        </UserWindowBackground>
    );
}

export default UserWindow;
