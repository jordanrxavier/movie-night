import { useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'

const initialMovies = [
  { id: 1, title: "The Matrix", genre: "Sci-Fi", year: 1999, watched: false },
  { id: 2, title: "Parasite", genre: "Thriller", year: 2019, watched: false },
  { id: 3, title: "Everything Everywhere All at Once", genre: "Sci-Fi", year: 2022, watched: true },
  { id: 4, title: "Knives Out", genre: "Mystery", year: 2019, watched: false },
  { id: 5, title: "Coco", genre: "Animation", year: 2017, watched: true },
  { id: 6, title: "Get Out", genre: "Horror", year: 2017, watched: false },
]

export default function App() {
  const [movies, setMovies] = useState(initialMovies);

  function toggleWatched(id) {
    const updated = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, watched: !movie.watched }
      }
      return movie
    })
    setMovies(updated)
  }
  let numOfMovies = movies.length;
  const numOfWatched = movies.filter(movies => movies.watched === true).length;
  let numOfUnwatched = numOfMovies - numOfWatched;

  return (
    <>
      <h1>Movie Night</h1>
      <p>Total Movies: {numOfMovies}</p>
      <p>Total Movies Watched: {numOfWatched} </p>
      <p>Total Movies Unwatched: {numOfUnwatched} </p>

      {
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onToggle={toggleWatched} />
        ))
      }
    </>
  )

}