import { BrowserRouter } from "react-router-dom";
import {
    About,
    Hero,
    LoadingScreen,
    Navbar,
    Works,
    Conclusion,
} from "./Components";

const App = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <div className=" relative z-0 bg-gradient-to-b from-[#052222] to-black overflow-x-clip ">
                <div className=" bg-gradient-to-b from-[#2c4c82]">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Works />
                <Conclusion />
            </div>
            <LoadingScreen />
        </BrowserRouter>
    );
};

export default App;
