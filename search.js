function search() {
  const search = DOM.searchInputRef.value.toLowerCase();
  if (!search) {
    return draw(state.movies);
  }
  const results = state.movies.filter(function (currnetMovie) {
    return currnetMovie.movieName === search;
  });
  draw(results);
}
