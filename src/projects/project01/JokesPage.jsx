import { useEffect, useRef, useState } from "react";
import { JokesAPI } from "./jokesAPI";
import "./JokesPage.css";

const SetupJokeBody = ({ setup, delivery }) => {
  return (
    <div className="setup-joke-body">
      <div className="joke-setup">{setup}</div>
      <div>{delivery}</div>
    </div>
  );
};

const JokeBody = ({ joke }) => {
  return <div className="normal-joke-body">{joke}</div>;
};

const JokeLoadingMark = () => {
  return <>{"Loading..."}</>;
};

const JokeErrorBody = ({ msg }) => {
  return <>{msg}</>;
};

const JokesPage = () => {
  let jokes = useRef(new JokesAPI());
  let [jokeN, setJokeN] = useState(0);
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    setJoke(null);
    let loader = async () => {
      let joke = await jokes.current.get_joke(jokeN);
      console.log(jokeN, joke.id, joke.joke);
      setJoke(joke);
    };
    loader();
  }, [jokeN]);

  // TODO: Show error with toast

  return (
    <div className="joke-page-root">
      <div className="joke-box">
        {joke === null ? (
          <JokeLoadingMark />
        ) : joke.error ? (
          <JokeErrorBody msg={joke.message} />
        ) : joke.type === "single" ? (
          <JokeBody joke={joke.joke} />
        ) : (
          <SetupJokeBody setup={joke.setup} delivery={joke.delivery} />
        )}
      </div>
      <div className="joke-page-buttons">
        <button
          className="joke-nav-button"
          onClick={() => {
            setJokeN(Math.max(0, jokeN - 1));
          }}
          disabled={joke === null}
        >
          {"←"} <br /> {"prev"}
        </button>
        <button
          className="joke-nav-button"
          onClick={() => {
            setJokeN(jokeN + 1);
          }}
          disabled={joke === null}
        >
          {"→"} <br /> {"next"}
        </button>
      </div>
    </div>
  );
};

export default JokesPage;
