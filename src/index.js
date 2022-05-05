let $firstform = document.querySelector(".form");
let $secondform = document.querySelector(".formulaire");
let $firstinput = document.querySelector(".input");
let $secondinput = document.querySelector(".searchbar");
let $firstbutton = document.querySelector(".search-btn3");
let $secondbutton = document.querySelector(".search-btn2");
let $films = document.querySelector(".films");
let api_key = "a4880995fbb07d40249df7d0c03c8383";
let api_url = "https://api.themoviedb.org/3";

let carte = function (film) {
  let $carte = document.createElement("div");
  $carte.classList.add(".card");
  $carte.classList.add("dimensions");

  $carte.innerHTML =
    '<div class="card-image"><img src="' +
    "https://image.tmdb.org/t/p/w500" +
    film.poster_path +
    '" alt="Orange" />' +
    "</div>" +
    '<div class="card-body">' +
    '<div class="card-date">' +
    "<time>" +
    film.release_date +
    "</time>" +
    "</div>" +
    '<div class="card-title">' +
    "<h3>" +
    film.title +
    "</h3>" +
    "</div>" +
    '<div class="card-excerpt">' +
    "<p>" +
    film.overview +
    "</p>" +
    "</div>" +
    "</div>";

  return $carte;
};

let searchfilms = function () {
  $films.textContent = "";
  fetch(
    api_url + "/search/movie?api_key=" + api_key + "&query=" + $firstinput.value
  )
    .then(function (response) {
      console.log("fetch finished");

      if (response.status === 404) {
        alert("pas de film");
        return;
      }
      return response.json();
    })
    .then(function (response) {
      if (response == undefined) {
        return;
      }
      if (response.results.length === 0) {
        alert("il n'y a pas de film pour cette recherche");
        return;
      }

      lastPage = response.page;

      console.log(response);

      let film = response.results;

      if (film.length < 0) {
        alert("il n'y a pas de page");
      }

      for (let i = 0; i < film.length; i++) {
        let animeCreated = carte(film[i]);
        $films.appendChild(animeCreated);
        $firstinput.value = "";

        if (($firstinput.value = "")) {
          return;
        }
      }
    });
};

let showfilms = function () {
  fetch(api_url + "/discover/movie?" + "api_key=" + api_key)
    .then(function (anwser) {
      console.log("fetch finished");
      return anwser.json();
    })
    .then(function (show) {
      console.log(show);

      let movies = show.results;

      if (movies.length < 0) {
        alert("pas de réponse");
      }

      for (let a = 0; a < movies.length; a++) {
        console.log(a);
        let showcreated = carte(movies[a]);
        // $films.textContent = "";
        $films.appendChild(showcreated);
      }
    });
};
showfilms();
$firstbutton.addEventListener("click", function (event) {
  event.preventDefault();
  searchfilms();
});
