/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  let sumOfRating = arr.reduce((sum, curr) => {
    let ratingAsFloat = parseFloat(curr.rate);
    return sum + ratingAsFloat;
  }, 0)

  let averageRating = sumOfRating/arr.length;
  let avgRounded = parseFloat(averageRating.toFixed(2));

  return avgRounded;
}

// iteration 1: fancy function
function ratesAverageFancy(arr) {
  return parseFloat((arr.reduce((sum, curr) => sum + parseFloat(curr.rate), 0)/arr.length).toFixed(2));;
}

let movies2 = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '5'
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
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

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  // if Drama is found in the genre array then return elements into array
  let dramaOnly = arr.filter(curr => {
    return curr.genre.indexOf("Drama") >= 0;
  })

  let dramaAvgRating = ratesAverage(dramaOnly)

  if(dramaAvgRating >= 0)
  return dramaAvgRating;
  else
  return 0/arr.length;
}



console.log(dramaMoviesRate(movies2));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
