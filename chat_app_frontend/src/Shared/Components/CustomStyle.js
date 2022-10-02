import styled from "styled-components";
const AppWrapper = styled.section`
    width: 100%;
    height: 100vh;
    scrollbar-width: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border: 1px solid black;
    }
`;
const Wrapper = styled.section`
    height: 10vh;
    width: 100%;
    padding: ${(props) => props.padding || "0"};
    @media (max-width: 756px) {
        padding: 0.5rem;
    }
`;
const Container = styled.div`
    width: 100%;
    padding: 0.2rem;
    display: flex;
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    justify-content: space-between;
    align-items: center;
`;

const TitleContainer = styled.div`
    text-align: ${(props) => props.textAlign || "left"};
    font-size: ${(props) => props.fontSize || "1rem"};
    color: #161d6f;
    font-weight: ${(props) => props.fontWeight || "400"};
    @media (max-width: 556px) {
        font-size: ${(props) => props.fontSize || "0.9rem"};
    }
`;
const SidebarWrapper = styled(Wrapper)`
    margin-top: 3rem;
    flex-basis: 35%;
    height: 100%;
    box-shadow: 0 2px 3px #c7ffd8;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: 3px;
`;
const MessageSideBarWrapper = styled(Wrapper)`
    /* padding: 0 0.5rem; */
    margin-top: 6rem;
    /* overflow-y: scroll; */
    background: #f6f6f6;
    flex-basis: 65%;
    min-height: 100vh;
    overflow-y: auto;
`;
const HeaderWrapper = styled(Wrapper)`
    background: #f6f6f6;
    flex-basis: 100%;
    display: flex;
    align-items: center;
    height: 3rem;
    color: #161d6f;
    position: fixed;
    font-weight: 700;
    padding: 0 3rem;
    box-shadow: 0 1px 4px #98ded9;
    z-index: 1;
    @media (max-width: 756px) {
        padding: 0 1rem;
    }
`;

const MessageSideViewContainer = styled.div`
    padding: 0.6rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    border-bottom: 0.3px solid #161d6f;
    background-color: rgba(199, 255, 216, 0.5);
    margin-top: 0.3rem;
    border-radius: 8px;
`;

const SearchContactInput = styled.input`
    width: 90%;
    border-radius: 12px;
    padding: 0.3rem 0;
    opacity: 0.8;
    text-align: center;
`;

const MessageViewContainer = styled.div`
    position: relative;

    margin: 0.5rem 0.5rem 0 0.5rem;
    display: flex;
    flex-direction: column;
    margin-left: ${(props) => props.send && "auto"};
    width: fit-content;
    background-color: ${(props) =>
        props.send ? "rgba(152, 222, 217, 0.4)" : "rgb(146, 180, 236,0.7)"};
    background-color: ${(props) =>
        props.send ? "rgba(152, 222, 217, 0.4)" : "rgb(146, 180, 236,0.7)"};
    padding: 0.4rem;
    border-radius: 5px;
    font-size: 0.9rem;
`;

const ChatHeaderContainer = styled.div`
    position: fixed;
    top: calc(3.2rem);
    font-weight: 500;
    width: 100%;
    height: 2.2rem;
    background: rgba(152, 222, 217, 0.9);
    z-index: 5;
    color: #161d6f;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
`;

const TypeChatInput = styled.input`
    position: fixed;
    bottom: 8px;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1.5px solid black;
    outline: 0;
    width: calc(60%);
    height: 1.5rem;
    color: black;
`;

export {
    TypeChatInput,
    ChatHeaderContainer,
    MessageViewContainer,
    SearchContactInput,
    TitleContainer,
    MessageSideViewContainer,
    AppWrapper,
    Wrapper,
    Container,
    MessageSideBarWrapper,
    SidebarWrapper,
    HeaderWrapper,
};
