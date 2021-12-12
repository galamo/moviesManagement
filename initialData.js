function getInitialData() {
  const movie1 = createMovie({
    movieName: "Scream",
    isSelected: false,

    moviePublishYear: 1999,
    movieRank: 2,
    movieDuration: 90,
    movieTrailerUrl: "https://youtu.be/beToTslH17s",
    moviePoster:
      "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/10/Scream-2022-Poster.-Credit-Spyglass.jpeg",
    movieCategory: "Horror",
    movieDescription: "The best movie ever",
  });
  const movie2 = createMovie({
    movieName: "Scream 2",
    isSelected: false,

    moviePublishYear: 2005,
    movieRank: 5,
    movieDuration: 90,
    movieTrailerUrl: "https://youtu.be/beToTslH17s",
    moviePoster:
      "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/10/Scream-2022-Poster.-Credit-Spyglass.jpeg",
    movieCategory: "Horror",
    movieDescription: "The best movie ever",
  });
  const movie3 = createMovie({
    movieName: "The Mask",
    isSelected: false,

    moviePublishYear: 2006,
    movieRank: 5,
    movieDuration: 90,
    movieTrailerUrl: "https://youtu.be/beToTslH17s",
    moviePoster:
      "https://www.nme.com/wp-content/uploads/2019/07/Webp.net-resizeimage-2-2.jpg",
    movieCategory: "Comedy",
    movieDescription: "Suck!",
  });
  state.movies.push(movie1, movie2, movie3);
  localStorage.setItem("movies", JSON.stringify(state.movies));
  //   draw (state.movies);
}

// getInitialData();
