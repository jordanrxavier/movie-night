import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

export default function MovieCard({ movie }) {
    let watchedText;
    if (movie.watched) {
        watchedText = "Watched";
    } else {
        watchedText = "Not watched yet";
    }

    return (
        <div>
            {movie.title},{movie.genre},{movie.year}
            <p>{watchedText}</p>
        </div>
    )
}

