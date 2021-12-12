function getAvarage() {
  let sum = 0;
  let avg = 0;
  for (let index = 0; index < state.movies.length; index++) {
    const currentMovie = state.movies[index];
    sum += Number(currentMovie.movieRank);
  }
  avg = sum / state.movies.length;
  if (avg) drawAvarage(avg.toFixed(1));
}

function drawAvarage(value) {
  document.getElementById("avgResult").innerText = value;
}

console.log(1111);

console.log(1111);

console.log(1111);

console.log(1111);

console.log(1111);
