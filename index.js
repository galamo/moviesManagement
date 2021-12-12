const iconsConfig = {
  star: "https://toppng.com/uploads/preview/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png",
};

const DEFAULT_THEME = "whiteTheme";
const themeConfig = {
  white: DEFAULT_THEME,
  black: "blackTheme",
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
  searchInputRef: null,
  deleteAllMoviesContainerRef: null,
  totalResultRef: null,
  tableBodyRef: null,
  blackTheme: null,
  whiteTheme: null,
  clearTheme: null,
};

const state = { movies: [], selectedMovie: null, prevSelectedItem: null };

function init() {
  _setTheme(localStorage.getItem("theme"));
  try {
    const lsUser = localStorage.getItem("userPref");
    if (lsUser) {
      _setUserContainer(JSON.parse(lsUser));
    }
  } catch (ex) {
    alert("Something went wrong - please clear on clear ");
  }
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
  DOM.deleteAllMoviesContainerRef = document.getElementById(
    "deleteAllMoviesContainer"
  );
  DOM.searchInputRef = document.getElementById("search");
  DOM.tableBodyRef = document.getElementById("tableBody");
  DOM.totalResultRef = document.getElementById("totalResult");

  DOM.whiteTheme = document.getElementById("whiteTheme");
  DOM.blackTheme = document.getElementById("blackTheme");
  DOM.clearTheme = document.getElementById("clearTheme");
  DOM.whiteTheme.addEventListener("click", function () {
    _setTheme(themeConfig.white);
  });
  DOM.blackTheme.addEventListener("click", function () {
    _setTheme(themeConfig.black);
  });

  DOM.clearTheme.addEventListener("click", function () {
    localStorage.clear();
  });

  function _setTheme(theme = DEFAULT_THEME) {
    document.getElementById("body").className = theme;
    localStorage.setItem("theme", theme);
  }

  document.getElementById("saveMe").addEventListener("click", function () {
    const textArea = document.getElementById("userTextarea").value;
    const userEmail = document.getElementById("userEmail").value;
    const myUser = { email: userEmail, desc: textArea };
    localStorage.setItem("userPref", JSON.stringify(myUser));
    _setUserContainer(myUser);
  });

  function _setUserContainer(user) {
    document.getElementById(
      "myUserContainer"
    ).innerText = `${user.email} => ${user.desc}`;
  }

  _pullAndDrawMoviesOnLoad();

  function _pullAndDrawMoviesOnLoad() {
    let movies = [];
    try {
      const moviesString = localStorage.getItem("movies");
      if (!moviesString) return;
      movies = JSON.parse(moviesString);
    } catch{}
    // try to parse
    state.movies = movies;
    draw(state.movies);
  }
}

function addMovie() {
  const { movieNameRef } = DOM.moviePaylod;
  const movieName = movieNameRef.value;
  const movie = createMovie({
    isSelected: false,
    movieName: movieName,
    moviePublishYear: DOM.moviePaylod.moviePublishYearRef.value,
    movieRank: DOM.moviePaylod.movieRankRef.value,
    movieDuration: DOM.moviePaylod.movieDurationRef.value,
    movieTrailerUrl: DOM.moviePaylod.movieTrailerUrlRef.value,
    moviePoster: DOM.moviePaylod.moviePosterRef.value,
    movieCategory: DOM.moviePaylod.movieCategoryRef.value,
    movieDescription: DOM.moviePaylod.movieDescriptionRef.value,
  });
  state.movies.push(movie);
  setMovies(state.movies);
}

function draw(movies) {
  const selectedMovies = getSelectedMovies(movies);
  _drawTotalResult(movies.length, selectedMovies.length);
  _drawTable();
  _drawDeleteAllButton();

  function _drawTable() {
    DOM.tableBodyRef.innerHTML = "";
    for (let index = 0; index < movies.length; index++) {
      const currentMovie = movies[index];
      const currentMovieRow = getMovieRow(currentMovie);
      if (currentMovieRow) DOM.tableBodyRef.append(currentMovieRow);
    }
  }
  function _drawTotalResult(total, selected = 0) {
    DOM.totalResultRef.innerText = `${selected}/${total}`;
  }
  function _drawDeleteAllButton() {
    DOM.deleteAllMoviesContainerRef.innerHTML = "";
    if (selectedMovies.length) {
      const deleteAllButton = getDeleteAllButton();
      DOM.deleteAllMoviesContainerRef.append(deleteAllButton);
    }
  }
}

function removeAllSelected() {
  const selectedMovies = getSelectedMovies(state.movies);
  if (!selectedMovies.length) return;
  for (let i = 0; i < selectedMovies.length; i++) {
    for (let j = 0; j < state.movies.length; j++) {
      if (selectedMovies[i].id === state.movies[j].id) {
        state.movies.splice(j, 1);
      }
    }
  }
  setMovies(state.movies);
}

function getSelectedMovies(movies) {
  if (!Array.isArray(movies)) return;
  //   const selectedMovies = [];
  //   for (let index = 0; index < movies.length; index++) {
  //     const currentMovie = movies[index];
  //     if (currentMovie.isSelected === true) {
  //       selectedMovies.push(currentMovie);
  //     }
  //   }

  const selectedMoviesNew = movies.filter(function (currentMovie) {
    return currentMovie.isSelected === true;
  });

  return selectedMoviesNew;
}

function getMovieById(id, movies) {
  if (typeof id !== "string") return;
  if (!Array.isArray(movies)) return;
  //   for (let index = 0; index < movies.length; index++) {
  //     const currentMovie = movies[index];
  //     if (currentMovie.id === id) {
  //       return currentMovie;
  //     }
  //   }
  const theMovie = movies.find(function (currentMovie) {
    return currentMovie.id === id;
  });
  return theMovie;
}

function getMovieIndexById(id, movies) {
  if (typeof id !== "string") return;
  if (!Array.isArray(movies)) return;
  //   for (let index = 0; index < movies.length; index++) {
  //     const currentMovie = movies[index];
  //     if (currentMovie.id === id) {
  //       return index;
  //     }
  //   }

  const index = movies.findIndex(function (currentMovie) {
    return currentMovie.id === id;
  });
  return index;
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
    setMovies(state.movies);
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
    posterImage.addEventListener("click", function () {
      this.classList.add("increasedImageSize");
    });
    posterImage.addEventListener("dblclick", function () {
      this.classList.remove("increasedImageSize");
    });
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

function setMovies(movies) {
  localStorage.setItem("movies", JSON.stringify(movies));
  draw(state.movies);
}

init();
