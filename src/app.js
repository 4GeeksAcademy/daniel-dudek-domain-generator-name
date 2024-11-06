/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];

  pronouns.map(pronoun =>
    adjectives.map(adjective =>
      nouns.map(noun => console.log(pronoun + adjective + noun + ".com"))
    )
  );
};
