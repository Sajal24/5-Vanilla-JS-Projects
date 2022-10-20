let movieTitle = "";
const searchedMovieValue = document.getElementById("searchbar");
const searchedMovie = document.querySelector(".searchform");
const movieList = document.querySelector(".child");
const imagePath = "https://image.tmdb.org/t/p/w1280";
const initialUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=def244ec690d52f1e47d6f67aac8e1fd&language=en-US&sort_by=popularity.desc";

async function getMovies(url) {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => displayMovies(data.results));
}

getMovies(initialUrl);

function displayMovies(movies) {
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("greater-child");
    div.innerHTML = `
  <img src="${imagePath + movie.poster_path}">
  <div class="details">
  <h3 class='title'>${movie.title}</h3>
  <p class="rate">Rating: <span class="rating">${movie.vote_average}</span></p>
  <p class="release">Released: <span class="released">${
    movie.release_date
  }</span></p>
          <p class="overview">${movie.overview}</p>
  </div> 
  `;

    movieList.appendChild(div);
  });
}

searchedMovie.addEventListener("submit", (e) => {
  e.preventDefault();
  movieTitle = searchedMovieValue.value;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=def244ec690d52f1e47d6f67aac8e1fd&query=${movieTitle}`;

  getMovies(url);
});
