import React from "react";
import styled from "styled-components";
const SidebarBackground = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.25;
    min-width: calc(10rem + 10vw);
    height: 91vh;
    background: #e8f1f5;
`;
const MainComponentContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    background: #fafafa;
`;
const HeaderBackground = styled.div`
    display: flex;
    align-items: center;
    background: black;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 4rem;
    background-color: #60bfc1;
`;
const UserWindowBackground = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 1.2rem;
    width: 100%;
    border-bottom: 0.1px solid #60bfc1;
`;
const UserWindowDate = styled.span`
    display: flex;
    flex-direction: column;
    flex: 0.35;
    /* margin-left: auto; */
    font-size: 0.8rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const MessageSideView = styled.span`
    font-size: 0.85rem;
    color: grey;
`;
const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-right: auto; */
    flex: 0.65;
`;
const ChatOptionBackground = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    width: 4rem;
    justify-content: space-between;
`;

export {
    MessageContainer,
    SidebarBackground,
    MainComponentContainer,
    HeaderBackground,
    UserWindowBackground,
    UserWindowDate,
    MessageSideView,
    ChatOptionBackground,
};
