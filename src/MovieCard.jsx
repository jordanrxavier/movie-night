import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

export default function MovieCard({ movie, onToggle }) {
    let watchedText;
    if (movie.watched) {
        watchedText = "Watched";
    } else {
        watchedText = "Not watched yet";
    }

    let buttonLabel;
    if (movie.watched) {
        buttonLabel = "Mark as Unwatched";
    } else {
        buttonLabel = "Mark as Watched";
    }

    return (
        <div>
            {movie.title}, {movie.genre}, {movie.year}
            <p>{watchedText}</p>
            <button onClick={() => onToggle(movie.id)}>{buttonLabel}</button>
        </div>
    )
}

