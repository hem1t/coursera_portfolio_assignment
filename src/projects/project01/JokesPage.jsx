import { useEffect, useRef, useState } from "react";

class JokesAPI {
  base_url = "https://v2.jokeapi.dev/joke/";
  categories = ["Programming", "Misc", "Pun"];
  params = ["safe-mode"];
  jokes = [];

  constructor() {
    this.gen_link();
    this.get_joke(0);
  }

  gen_link() {
    this.full_link =
      this.base_url + this.categories.join(",") + "?" + this.params.join("&");
  }

  async get_joke(n) {
    if (n === this.jokes.length) {
      let res = await fetch(this.full_link);
      res = await res.json();
      this.jokes.push({
        error: res.error,
        message: res.message,
        type: res.type,
        joke: res.joke,
        setup: res.setup,
        delivery: res.delivery,
      });
    }
    return this.jokes[n];
  }
}

const SetupJokeBody = ({ setup, delivery }) => {
  useEffect(() => {
    console.log("twopart joke");
  }, []);

  return (
    <>
      <div>Setup: {setup}</div>
      <div>{delivery}</div>
    </>
  );
};

const JokeBody = ({ joke }) => {
  useEffect(() => {
    console.log("single joke");
  }, []);
  return <>{joke}</>;
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
      console.log(joke.joke);
      setJoke(joke);
    };
    loader();
  }, [jokeN]);

  // TODO: design all give css
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
      <button
        className="joke-nav-button"
        onClick={() => {
          setJokeN(Math.max(0, jokeN - 1));
        }}
        disabled={joke === null}
      >
        {"<"}
      </button>
      <button
        className="joke-nav-button"
        onClick={() => {
          setJokeN(jokeN + 1);
        }}
        disabled={joke === null}
      >
        {">"}
      </button>
    </div>
  );
};

export default JokesPage;
