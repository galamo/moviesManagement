function getHottestMovies(movies) {
  let highestRank = 0;
  for (let index = 0; index < movies.length; index++) {
    if (movies[index].movieRank > highestRank) {
      highestRank = movies[index].movieRank;
    }
  }

  const hottestMovies = movies.filter(function (movie) {
    return movie.movieRank === highestRank;
  });

  return hottestMovies;
}

// for loop can help us to get the following capabilities
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// get the highest rank
// get all selected movies - filter
// get the index of the desired movie - findIndex
// get the desired movie - find
// get all movies names - map
// get statistics - duration avarages - reduce
