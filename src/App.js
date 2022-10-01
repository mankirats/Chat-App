import "./App.css";
import MessageSideBar from "./Shared/Components/MessageSideBar";
import Sidebar from "./Shared/Components/Sidebar";
import Header from "./Shared/Components/Header";
import { AppWrapper } from "./Shared/Components/CustomStyle";
function App() {
    return (
        <AppWrapper>
            <Header></Header>
            <Sidebar></Sidebar>
            <MessageSideBar></MessageSideBar>
        </AppWrapper>
    );
}

export default App;
