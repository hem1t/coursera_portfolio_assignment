import "./App.css";
import Intro from "./pages/Intro";
import HireMe from "./pages/HireMe";
import JokesPage from "./projects/project01/JokesPage";

function App() {
  return (
    <main className="main-window">
      <div className="main-first-page page">
        <Intro />
        <HireMe />
      </div>
      <div className="page">
        <JokesPage />
      </div>
    </main>
  );
}

export default App;
