/**
 * TODO: Change sortMoviesByRank() function to sort movies list by rank
 * TODO: Sort movies by id, rank, and title through dynamic function
 * TODO: Create helper function called getMaxMovieObject() for finding max movie
 */

const movies = [
  {
    title: "Fight Club",
    rank: 10,
    id: "tt0137523",
  },
  {
    title: "The Shawshank Redemption",
    rank: 1,
    id: "tt0111161",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    rank: 9,
    id: "tt0167260",
  },
  {
    title: "The Godfather",
    rank: 2,
    id: "tt0068646",
  },
  {
    title: "The Good, the Bad and the Ugly",
    rank: 5,
    id: "tt0060196",
  },
  {
    title: "The Godfather: Part II",
    rank: 3,
    id: "tt0071562",
  },
  {
    title: "The Dark Knight",
    rank: 6,
    id: "tt0468569",
  },
  {
    title: "Pulp Fiction",
    rank: 4,
    id: "tt0110912",
  },
  {
    title: "Schindler's List",
    rank: 8,
    id: "tt0108052",
  },
  {
    title: "12 Angry Men",
    rank: 7,
    id: "tt0050083",
  },
];

window.onload = function () {
  let sortedMovies = sortMoviesByRank(movies);
  //  Display Movies list
  //   displayMovies(movies);
  displayMovies(sortedMovies);
};

/*
Display list of movies in a table
You don't have to worry so much about this
*/

function displayMovies(movies) {
  let table = "<table border='1' style='width: 100%'>";
  table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
  for (let i = 0; i < movies.length; i++) {
    table += "<tr>";
    table += "<td>" + movies[i].id + "</td>";
    table += "<td>" + movies[i].title + "</td>";
    table += "<td>" + movies[i].rank + "</td>";
    table += "</tr>";
  }
  // Close the table
  table += "</table>";
  document.getElementById("movies-list").innerHTML = table;
}

/*
Sort movies by rank from greatest to smallest
*Hint: make sure you are comparing the right values in if(...)
*Hint: replace numbers with movies.
*/

function sortMoviesByRank(movies) {
  for (let i = 0; i < movies.length - 1; i++) {
    //   max_object at its first index is going to have fight club value
    let max_object = movies[i];
    // {
    //     title: "Fight Club",
    //     rank: 10,
    //     id: "tt0137523",
    //   },
    // max_location at i is still zero index zero
    let max_location = i;
    console.log(max_object);
    for (let j = i; j < movies.length; j++) {
      // so lets say movies[j] is equal to i and i in the outer loop starts at 0 so i is currently zero
      // it makes sense to compare .rank than comparing the entire object
      if (movies[j].rank > max_object.rank) {
        //   Know max And its index (location)
        // if we found object with higher rank, then replace max_object with the new object
        max_object = movies[j];
        // replacing the index of max location
        max_location = j;
      }
    }
    movies[max_location] = movies[i];
    movies[i] = max_object;
  }
  return movies;
}
