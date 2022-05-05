let $input = document.querySelector(".input");
let $form = document.querySelector(".form");
let $button = document.querySelector(".search-btn3");
let api_key = "a4880995fbb07d40249df7d0c03c8383";
let api_url = "https://api.themoviedb.org/3";
let $article = document.querySelector(".article");
let $movie = document.querySelector(".form-select");
let $secarticle = document.querySelector(".second_article");
let $secform = document.querySelector(".formulaire");
let $searchbar = document.querySelector(".searchbar");
let $buton = document.querySelector(".search-btn2");

let page = 1;

let firstfunction = function () {
  fetch(api_url + "/search/movie?api_key=" + api_key + "&query=" + $input.value)
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
      console.log(response);

      let film = response.results[0];

      let $h2 = document.createElement("h2");
      $h2.textContent = film.title;

      let $text = document.createElement("div");
      $text.textContent = film.overview;

      let $image = document.createElement("img");
      $image.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + film.poster_path
      );

      let $img = document.createElement("img");
      $img.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + film.backdrop_path
      );

      let $images = document.createElement("div");
      $images.appendChild($img);
      $images.appendChild($image);

      $images.style.display = "flex";
      $images.style.justifyContent = "space-around";

      $article.textContent = "";
      $article.appendChild($h2);
      $article.appendChild($text);
      $article.appendChild($images);

      $article.style.color = "white";
      /*  $article.style.display = "flex";
      $article.style.justify - content, "space-betwen";*/
    });
};

$button.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  firstfunction();
});

let secondfunction = function () {
  fetch(
    api_url + "/search/person?query=" + $searchbar.value + "&api_key=" + api_key
  )
    .then((respone) => respone.json())
    .then((respone) => {
      console.log(respone);

      for (let i = 0; i < respone.results.length; i++) {
        console.log(i);
      }
      let actor = respone.results[0];

      let $h2bis = document.createElement("h2");
      $h2bis.textContent = actor.name;

      let $addtext = document.createElement("p");
      $addtext.textContent = actor.known_for_department;

      let $textbis = document.createElement("div");
      $textbis.textContent = actor.known_for[1].overview;

      /* let $imagebis = document.createElement("img");
      $imagebis.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + actor.poster_path
      );*/

      let $imgbis = document.createElement("img");
      $imgbis.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + actor.profile_path
      );

      let $imagesbis = document.createElement("div");
      // $imagesbis.appendChild($imagebis);
      $imagesbis.appendChild($imgbis);

      $imagesbis.style.display = "flex";
      $imagesbis.style.justifyContent = "space-around";

      $secarticle.textContent = "";
      $secarticle.appendChild($h2bis);
      $secarticle.appendChild($textbis);
      $secarticle.appendChild($addtext);
      $secarticle.appendChild($imagesbis);

      $secarticle.style.color = "white";
    });
};

$buton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  secondfunction();
});

let thirdfunction = function () {
  fetch(api_url + "/genre/tv/list" + "craig" + "&api_key=" + api_key)
    .then((anwser) => anwser.json())
    .then((anwser) => {
      console.log(anwser);
    });
};
