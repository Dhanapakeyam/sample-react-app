import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from 'react';

export function MovieDetails() {
    const [movie, setmovie] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    // const movie = movieList[id];
    const ratingStyle = {
        color: movie.rating >= 8.5 ? "green" : "blue"
    };

    useEffect(() => {
        fetch(`https://63899fdec5356b25a203ee32.mockapi.io/movies/${id}`, { method: 'GET' })
            .then(data => data.json())
            .then((mve) => {
                console.log(mve);
                setmovie(mve)
            });
    }, [])
    return (
        <div>
            <iframe width="100%"
                height="608"
                src={movie.trailer}
                title="Avatar: The Way of Water | Official Teaser Trailer"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <Button variant="contained" startIcon={<KeyboardBackspace />} style={{ width: 150 }} onClick={() => navigate(-1)}>Back</Button>
            <div className='movie-details-container'>
                <h1>Movie details page...{movie.name}</h1>
                <div className='movie-specs'>
                    <h2 className='movie-name'>{movie.name}</h2>
                    <p style={ratingStyle} className='movie-rating'>⭐{movie.rating}</p>
                </div>
                <p className='movie-summary'>{movie.summary}</p>
            </div>
        </div>
    );
}
