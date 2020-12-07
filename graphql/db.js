export let Movies = [
  {
    name: "movie1",
    score: 21,
    id: 1,
  },
  {
    name: "movie2",
    score: 22,
    id: 2,
  },
  {
    name: "movie3",
    score: 23,
    id: 3,
  },
];
export const getMovies = () => Movies;

export const getById = (id) => {
  const filterdMovies = Movies.filter((movie) => id === movie.id);
  return filterdMovies[0];
};

export const deleteMovie = (id) => {
  const cleaneddMovies = Movies.filter((movie) => id !== movie.id);
  if (Movies.length > cleaneddMovies.length) {
    Movies = cleaneddMovies;
    return true;
  } else {
    return false;
  }
};
export const addMovie = (name, score) => {
  const newMovie = {
    name,
    score,
    id: `${Movies.length + 1}`,
  };
  Movies.push(newMovie);
  return newMovie;
};
