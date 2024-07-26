class JokesAPI {
  base_url = "https://v2.jokeapi.dev/joke/";
  categories = ["Programming", "Misc", "Pun"];
  params = ["safe-mode", "type=single"];

  gen_link() {
    this.full_link =
      this.base_url +
      this.categories.concat(",") +
      "?" +
      this.params.concat("&");
  }

  gen_joke() {
    fetch(this.full_link)
      .then((res) => res.json())
      .then((res) => {
        this.joke = res.joke;
      });
  }
}
