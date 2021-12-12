function createMovie(movie) {
  return {
    id: _getMovieId(),
    isSelected: movie.isSelected,
    movieName: movie.movieName,
    moviePublishYear: movie.moviePublishYear,
    movieRank: movie.movieRank,
    movieDuration: movie.movieDuration,
    movieTrailerUrl: movie.movieTrailerUrl,
    moviePoster: movie.moviePoster,
    movieCategory: movie.movieCategory,
    movieDescription: movie.movieDescription,
  };

  function _getMovieId() {
    const mName = movie.movieName || "";
    return `movie_${mName}_${Math.ceil(Math.random() * 999)}`;
  }
}
