const form = document.querySelector("form");
const recommendation = document.querySelector("#recommendation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emotions = document.querySelector("#emotions").value;
  const genres = document.querySelector("#genres").value;

  let movie = "";

  if (emotions === "happy" && genres === "comedy") {
    movie = "The Hangover";
  } else if (emotions === "happy" && genres === "action") {
    movie = "Indiana Jones";
  } else if (emotions === "happy" && genres === "drama") {
    movie = "The Pursuit of Happyness";
  } else if (emotions === "happy" && genres === "horror") {
    movie = "Zombieland";
  } else if (emotions === "sad" && genres === "comedy") {
    movie = "Mean Girls";
  } else if (emotions === "sad" && genres === "action") {
    movie = "Gladiator";
  } else if (emotions === "sad" && genres === "drama") {
    movie = "The Notebook";
  } else if (emotions === "sad" && genres === "horror") {
    movie = "A Nightmare on Elm Street";
  } else if (emotions === "excited" && genres === "comedy") {
    movie = "Airplane!";
  } else if (emotions === "excited" && genres === "action") {
    movie = "The Matrix";
  } else if (emotions === "excited" && genres === "drama") {
    movie = "The Shawshank Redemption";
  } else if (emotions === "excited" && genres === "horror") {
    movie = "Halloween";
  } else if (emotions === "relaxed" && genres === "comedy") {
    movie = "Forgetting Sarah Marshall";
  } else if (emotions === "relaxed" && genres === "action") {
    movie = "John Wick";
  } else if (emotions === "relaxed" && genres === "drama") {
    movie = "The Green Mile";
  } else if (emotions === "relaxed" && genres === "horror") {
    movie = "The Others";
  } else {
    movie = "Not Found";
  }

  recommendation.innerHTML = `<h2>${movie}</h2>`;
});
