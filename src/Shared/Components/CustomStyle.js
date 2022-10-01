import styled from "styled-components";
const AppWrapper = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const Wrapper = styled.section`
    height: 10vh;
    width: 100%;
    padding: 1rem;
`;
const Container = styled.div`
    text-align: center;
    font-size: 1rem;
    color: #161d6f;
    font-weight: 600;
`;
const SidebarWrapper = styled(Wrapper)`
    flex: 1 0 25%;
    background: #e7e7de;
    height: calc(100vh - 3rem);
`;
const MessageSideBarWrapper = styled(Wrapper)`
    flex: 1 0 75%;
    height: calc(100vh - 3rem);
`;
const HeaderWrapper = styled(Wrapper)`
    flex: 1 0 100%;
    display: flex;
    align-items: center;
    height: 3rem;
    color: #98ded9;
    position: relative;
    font-weight: 700;
    padding: 0 3rem;
    box-shadow: 0 1px 4px #98ded9;
    z-index: 1;
    @media (max-width: 756px) {
        padding: 0 1rem;
    }
`;

export {
    AppWrapper,
    Wrapper,
    Container,
    MessageSideBarWrapper,
    SidebarWrapper,
    HeaderWrapper,
};
