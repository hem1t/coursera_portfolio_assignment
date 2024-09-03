import "./App.css";
import Intro from "./pages/Intro";
import HireMe from "./pages/HireMe";
import JokesPage from "./projects/project01/JokesPage";
import TodoApp from "./projects/project02/TodoApp";
import Calculator from "./projects/project03/Calculator";
import RapidXO from "./projects/project04/RapidXO";

function App() {
  return (
    <main className="main-window">
      <div className="main-first-page page">
        <Intro />
        <HireMe />
      </div>
      <div className="page">
        {
          // /*projects page*/
        }
      </div>
      {/* <div className="page"> */}
      {/*   <JokesPage /> */}
      {/* </div> */}
      {/* <div className="page"> */}
      {/*   <TodoApp /> */}
      {/* </div> */}
      {/* <div className="page"> */}
      {/*   <Calculator /> */}
      {/* </div> */}
      <div className="page">
        <RapidXO />
      </div>
    </main>
  );
}

export default App;
