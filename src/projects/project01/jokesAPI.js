export class JokesAPI {
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
        id: res.id,
      });
    }
    return this.jokes[n];
  }
}

function fix_breaks(string) {}
