/**
 * TODO: DONE** Change sortMoviesByRank() function to sort movies list by rank
 * TODO: DONE** Sort movies by id, rank, and title through dynamic function, a flexible function that can do many different things
 * TODO: DONE** Create helper function called getMaxMovieObject() for finding max movie
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

// when the user clicks on the button, toggle between hiding and show the dropDown content
function toggleDropDown() {
  document.getElementById("myDropDown").classList.toggle("show");
}

// when the ai compares letters its looks at z being the greatest value like on a number from 0 ----> 26
// z is greater than a because it furthest from left to right

let sortByRank = document.getElementById("sort-rank");
sortByRank.addEventListener("click", () => {
    let sortedMoviesRank = sortMoviesByAttr(movies, "rank");
    displayMovies(sortedMoviesRank)
});

let sortByTitle = document.getElementById("sort-title");
sortByTitle.addEventListener("click", () =>{
    let sortedMoviesTitle = sortMoviesByAttr(movies, "title");
    displayMovies(sortedMoviesTitle);
});

let sortById = document.getElementById("sort-id");
sortById.addEventListener("click", () =>{
    let sortedMoviesId = sortMoviesByAttr(movies, "id");
    displayMovies(sortedMoviesId);
})
// addEventListener("click", sortMoviesByAttr(movies, "rank"));
window.onload = function () {

  //   let sortedMovies = sortMoviesByRank(movies);
  // if want to sort movies by attribute by title put in "title" or put in "rank"
  //   let sortedMovies = sortMoviesByAttr(movies, "rank");
  //  Display Movies list
  //   displayMovies(movies);
  displayMovies(movies);
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
// let sortHighestBtn = document.getElementById("sort-highest");

// sortHighestBtn.addEventListener("click", sortMoviesByRank(movies) )

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

/*
    Sort Movies by an attribuite
    @param sortAttr pass in 'id', 'title', or 'rank' to sort by
    an attribute sortAttr is a name for a certain title. title: is an attribute rank: is an attribute
*/

function sortMoviesByAttr(movies, sortAttr) {
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
    let max = getMaxMovieObject(movies, i, sortAttr);
    max_object = max.max_object;
    // this is referenced from the object in the return of getMaxMovieObject
    max_location = max.max_index;
    // for (let j = i; j < movies.length; j++) {
    //   // so lets say movies[j] is equal to i and i in the outer loop starts at 0 so i is currently zero
    //   // it makes sense to compare .rank than comparing the entire object
    //   //  if using movies[j][sortAttr] then whats going on is its using sortAttribute as a variable as a string to look for in its object
    //   // for example if sortAttr is "title" its going to say give me movies at a certain index with the setAttr set attribute title
    //   if (movies[j][sortAttr] > max_object[sortAttr]) {
    //     //   Know max And its index (location)
    //     // if we found object with higher rank, then replace max_object with the new object
    //     max_object = movies[j];
    //     // replacing the index of max location
    //     max_location = j;
    //   }
    // }
    movies[max_location] = movies[i];
    movies[i] = max_object;
  }
  return movies;
}

/*
    Retrieve the max movie object based on attribute 
    Hint: make sure you are comparing the right attribute
*/

function getMaxMovieObject(movies, start, sortAttr) {
  // the sortAttr is the attribute want to check like did in if(movies[i][sortAttr]> max_object[sortAttr])
  // changing the variable maxium to max_object to be relevant with the situation
  let max_object = movies[start];
  let max_location = start;
  for (let j = start; j < movies.length; j++) {
    if (movies[j][sortAttr] > max_object[sortAttr]) {
      max_object = movies[j];
      max_location = j;
    }
  }
  return { max_object: max_object, max_index: max_location };
}
