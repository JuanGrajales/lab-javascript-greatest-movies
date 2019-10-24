/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  let sumOfRating = arr.reduce((sum, curr) => {
    let ratingAsFloat = Number(curr.rate);
    return sum + ratingAsFloat;
  }, 0);

  let averageRating = sumOfRating/arr.length;
  let avgRounded = Number(averageRating.toFixed(2));

  return avgRounded || 0;
}

// iteration 1: fancy function
function ratesAverageFancy(arr) {
  return Number((arr.reduce((sum, curr) => sum + Number(curr.rate), 0)/arr.length).toFixed(2)) || 0;
}



// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  // if Drama is found in the genre array then return elements into array
  let dramaOnly = arr.filter(curr => {
    return curr.genre.indexOf("Drama") >= 0;
  });

  let dramaAvgRating = ratesAverage(dramaOnly);

  return dramaAvgRating;
}

// iteration 2: fancy function
function dramaMoviesRateFancy(arr) {
  return ratesAverageFancy(arr.filter(curr => curr.genre.indexOf("Drama") >= 0)) || 0;
}

let movies2 = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Steven Spielberg',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '5'
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Steven Spielberg',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    director: 'Peter Jackson',
    duration: '3h 21min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    rate: ''
  },
  {
    title: 'Il buono, il brutto, il cattivo',
    year: '1966',
    director: 'Sergio Leone',
    duration: '3h 2min',
    genre: ['Western'],
    rate: '8.9'
  },
]

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(arr) {
  let ascendingByYear = arr.sort(function(a, b) {
    // first sort by movie year
    if (a.year > b.year) 
    return 1;
    else if (a.year < b.year) 
    return -1;
    else {
      // if the year is the same then sort by title
      if (a.title > b.title) 
      return 1;
      else if (a.title < b.title) 
      return -1;
      else
      return 0;
    } 
  });

  return ascendingByYear;
}

// iteration 3: fancy function
function orderByYearFancy(arr) {
  return arr.sort(function(a, b) {
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    } 
  });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  let dramaOnly = arr.filter(curr => {
    return curr.genre.indexOf("Drama") >= 0;
  });
  
  let spielbergDramasOnly = dramaOnly.filter(curr => {
    return curr.director === "Steven Spielberg";
  });

  return spielbergDramasOnly.length;
}



console.log(howManyMovies(movies2));

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
