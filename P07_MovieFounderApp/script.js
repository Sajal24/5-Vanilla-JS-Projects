let movieTitle = "";
const searchedMovieValue = document.getElementById("searchbar");
const searchedMovie = document.querySelector(".searchform");
searchedMovie.addEventListener("submit", (e) => {
  e.preventDefault();
  movieTitle = searchedMovieValue.value;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=def244ec690d52f1e47d6f67aac8e1fd&query=${movieTitle}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].title);
      }
    });
});
