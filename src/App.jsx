import "./App.css";
import Intro from "./pages/Intro";
import HireMe from "./pages/HireMe";
import JokesPage from "./projects/project01/JokesPage";

function App() {
  return (
    <main>
      <div className="main-first-page">
        <Intro />
        <HireMe />
      </div>
      <div>
        <JokesPage />
      </div>
    </main>
  );
}

export default App;
