const iconsConfig = {
  star: "https://toppng.com/uploads/preview/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png",
};

const DOM = {
  moviePaylod: {
    movieNameRef: null,
    moviePublishYearRef: null,
    movieRankRef: null,
    movieDurationRef: null,
    movieTrailerUrlRef: null,
    moviePosterRef: null,
    movieCategoryRef: null,
    movieDescriptionRef: null,
  },
  totalResultRef: null,
  tableBodyRef: null,
};

const state = { movies: [], selectedMovie: null, prevSelectedItem: null };

function init() {
  DOM.moviePaylod.movieNameRef = document.getElementById("movieName");
  DOM.moviePaylod.moviePublishYearRef =
    document.getElementById("moviePublishYear");
  DOM.moviePaylod.movieRankRef = document.getElementById("movieRank");
  DOM.moviePaylod.movieDurationRef = document.getElementById("movieDuration");
  DOM.moviePaylod.movieTrailerUrlRef =
    document.getElementById("movieTrailerUrl");
  DOM.moviePaylod.moviePosterRef = document.getElementById("moviePoster");
  DOM.moviePaylod.movieCategoryRef = document.getElementById("movieCategory");
  DOM.moviePaylod.movieDescriptionRef =
    document.getElementById("movieDescription");

  DOM.tableBodyRef = document.getElementById("tableBody");
  DOM.totalResultRef = document.getElementById("totalResult");
}

function addMovie() {
  const { movieNameRef } = DOM.moviePaylod;
  const movieName = movieNameRef.value;
  const movie = {
    id: _getMovieId(),
    isSelected: false,
    movieName: movieName,
    moviePublishYear: DOM.moviePaylod.moviePublishYearRef.value,
    movieRank: DOM.moviePaylod.movieRankRef.value,
    movieDuration: DOM.moviePaylod.movieDurationRef.value,
    movieTrailerUrl: DOM.moviePaylod.movieTrailerUrlRef.value,
    moviePoster: DOM.moviePaylod.moviePosterRef.value,
    movieCategory: DOM.moviePaylod.movieCategoryRef.value,
    movieDescription: DOM.moviePaylod.movieDescriptionRef.value,
  };

  state.movies.push(movie);
  draw(state.movies);
  function _getMovieId() {
    const mName = movieName || "";
    return `movie_${mName}_${Math.ceil(Math.random() * 999)}`;
  }
}

function draw(movies) {
  _drawTotalResult();
  _drawTable();

  function _drawTable() {
    DOM.tableBodyRef.innerHTML = "";
    for (let index = 0; index < movies.length; index++) {
      const currentMovie = movies[index];
      const currentMovieRow = getMovieRow(currentMovie);
      if (currentMovieRow) DOM.tableBodyRef.append(currentMovieRow);
    }
  }
  function _drawTotalResult() {
    DOM.totalResultRef.innerText = movies.length;
  }
}

function getMovieById(id, movies) {
  if (typeof id !== "string") return;
  if (!Array.isArray(movies)) return;
  for (let index = 0; index < movies.length; index++) {
    const currentMovie = movies[index];
    if (currentMovie.id === id) {
      return currentMovie;
    }
  }
}

function getMovieIndexById(id, movies) {
  if (typeof id !== "string") return;
  if (!Array.isArray(movies)) return;
  for (let index = 0; index < movies.length; index++) {
    const currentMovie = movies[index];
    if (currentMovie.id === id) {
      return index;
    }
  }
}

function getMovieRow(movie) {
  if (typeof movie !== "object") return;
  const tr = document.createElement("tr");
  tr.classList.add("clickable", "row-hover");
  if (movie.isSelected) {
    tr.classList.add("selected-row");
  }
  tr.id = movie.id;
  const tdName = document.createElement("td");
  tdName.innerText = movie.movieName;
  tdName.onclick = function () {
    const currentMovieState = getMovieById(movie.id, state.movies);
    currentMovieState.isSelected = !currentMovieState.isSelected;
    draw(state.movies);
  };

  const tdPublishYear = document.createElement("td");
  tdPublishYear.innerText = movie.moviePublishYear;

  const tdDuration = document.createElement("td");
  tdDuration.innerText = movie.movieDuration;

  const tdRank = _getRankTd(Number(movie.movieRank));

  const tdDescription = document.createElement("td");
  tdDescription.innerText = movie.movieDescription;

  const tdPoster = _getPosterTd(movie.moviePoster);
  const tdTrailer = _getTrailerTd(movie.movieTrailerUrl);

  const tdCategory = document.createElement("td");
  tdCategory.innerText = movie.movieCategory;

  const tdAction = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.onclick = function () {
    const movieIndex = getMovieIndexById(movie.id, state.movies);
    if (movieIndex === undefined) return;
    state.movies.splice(movieIndex, 1);
    draw(state.movies);
  };

  tdAction.append(deleteButton);

  tr.append(
    tdName,
    tdPublishYear,
    tdRank,
    tdDuration,
    tdTrailer,
    tdPoster,
    tdCategory,
    tdDescription,
    tdAction
  );

  return tr;
  function _getTrailerTd(link) {
    const text = "Click here to watch!";
    const anchorLink = document.createElement("a");
    anchorLink.href = link;
    anchorLink.innerText = text;
    const tdLink = document.createElement("td");
    tdLink.append(anchorLink);
    return tdLink;
  }
  function _getPosterTd(poster) {
    const tdPoster = document.createElement("td");
    const posterImage = document.createElement("img");
    posterImage.src = poster;
    posterImage.classList.add("defaultImageSize");
    _setSize(posterImage);
    posterImage.addEventListener("mouseenter", function () {
      _setSize(this, "150px", "150px");
    });
    posterImage.addEventListener("mouseleave", function () {
      _setSize(this);
    });
    function _setSize(obj, height = "100px", width = "100px") {
      obj.style.height = height;
      obj.style.width = width;
    }

    tdPoster.append(posterImage);
    return tdPoster;
  }
  function _getRankTd(rank) {
    const tdRankLocal = document.createElement("td");
    if (typeof rank !== "number") return tdRankLocal;
    if (isNaN(rank)) return tdRankLocal;
    for (let index = 0; index < rank; index++) {
      const currentIcon = getStarIcon();
      tdRankLocal.append(currentIcon);
    }
    return tdRankLocal;
  }
}

function getStarIcon() {
  const starIcon = document.createElement("img");
  starIcon.src = iconsConfig.star;
  starIcon.style.height = "20px";
  starIcon.style.width = "20px";
  return starIcon;
}

init();
