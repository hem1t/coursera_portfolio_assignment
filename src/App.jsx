import "./App.css";
import Intro from "./pages/Intro";
import HireMe from "./pages/HireMe";
import SizeMe from "react-sizeme";


function App() {
    return <SizeMe>{({ size }) => <div>My width is {size.width}px</div>}</SizeMe>
}

export default App;
