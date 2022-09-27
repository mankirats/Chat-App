import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Header from "./Header";
import { MainComponentContainer, Container } from "./CustomStyle";
function MainComponent() {
    return (
        <MainComponentContainer>
            <Header></Header>
            <Container></Container>
            <Sidebar></Sidebar>
            <Chat></Chat>
        </MainComponentContainer>
    );
}

export default MainComponent;
