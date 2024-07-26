import { useEffect, useRef, useState } from "react";

class JokesAPI {
  base_url = "https://v2.jokeapi.dev/joke/";
  categories = ["Programming", "Misc", "Pun"];
  params = ["safe-mode", "type=single"];
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
        type: res.type,
        joke: res.joke,
        setup: res.setup,
        delivery: res.delivery,
      });
    }
    return this.jokes[n];
  }
}

const JokesPage = () => {
  let jokes = useRef(new JokesAPI());
  let [jokeN, setJokeN] = useState(0);
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    setJoke(null);
    let loader = async () => {
      setJoke(await jokes.current.get_joke(jokeN));
    };
    loader();
  }, [jokeN]);

  // TODO: seperate out by joke.type
  // TODO: do not allow next if current is loading... (joke === null)
  // TODO: handle joke.error, in some general manner. (not verbose)

  return (
    <div className="joke-page-root">
      <div className="joke-box">
        <div className="joke-head"></div>
        <div className="joke-body">{joke?.joke || "loading..."}</div>
      </div>
      <button
        className="joke-nav-button"
        onClick={() => {
          setJokeN(Math.max(0, jokeN - 1));
        }}
      >
        {"<"}
      </button>
      <button
        className="joke-nav-button"
        onClick={() => {
          setJokeN(jokeN + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default JokesPage;
