import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

export default function MovieCard({ movie }) {
    return (
        <div>
            {movie.title},{movie.genre},{movie.year}
        </div>
    )
}

