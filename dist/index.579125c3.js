/*let $form = document.querySelector("#form");
let $input = document.querySelector(".input");
let $button = document.querySelector("search-btn3");
let $count = document.querySelector("#count");
let $movie = document.querySelector("#movie");

function getSearch(query) {
  console.log(query);
}

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  getSearch($input.value);
  search($input.value);
});

let search = function () {
  fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=a4880995fbb07d40249df7d0c03c8383&query=" +
      $input.value
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (film) {
      console.log(film);
    });
};*/ const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "a4880995fbb07d40249df7d0c03c8383";
const $form = document.querySelector("#form");
const $input = document.querySelector("#search");
const $count = document.querySelector("#count");
const $results = document.querySelector("#results");
const $movie = document.querySelector("#movie");
// Make an API request to get movies for the given query
function getMovies(query) {
    fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`).then((response)=>response.json()
    ).then((response)=>showMovies(response)
    );
}
function getMoviesDEtails(movie) {
    fetch();
}
// Add the movies buttons to the DOM
function showMovies(movies) {
    $results.innerHTML = "";
    if (movies.total_results === 0) {
        $count.innerText = "Aucun résultat, désolé !";
        return;
    }
    $count.innerText = `${movies.total_results} résultats`;
    $list = document.createElement("div");
    movies.results.forEach(function(movie) {
        const $movieButton = document.createElement("button");
        $movieButton.innerText = movie.title;
        if (movie.release_date) {
            const year = movie.release_date.split("-")[0];
            // alternative : const year = new Date(movie.release_date).getFullYear();
            $movieButton.innerText += ` (${year})`;
        }
        $movieButton.addEventListener("click", function() {
            console.log(movie);
        });
        $list.appendChild($movieButton);
    });
    $results.appendChild($list);
}
// Listen to form submit to trigger search
$form.addEventListener("submit", function(event) {
    event.preventDefault();
    getMovies($input.value);
});

//# sourceMappingURL=index.579125c3.js.map
