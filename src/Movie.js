import { useState } from 'react';
import { Counter } from './counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export function Movie({ movie, id }) {
    const ratingStyle = {
        color: movie.rating >= 8.5 ? "green" : "blue"
    };
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    return (
        <div className='movie-container'>
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <div className='movie-specs'>
                <h2 className='movie-name'>{movie.name}
                    <IconButton aria-label="Toggle summary" color="primary" onClick={() => setShow(!show)}>
                        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                    <IconButton aria-label="Toggle summary" color="primary" onClick={() => navigate('/movies/' + id)}>
                        <InfoIcon />
                    </IconButton>
                </h2>
                <p style={ratingStyle} className='movie-rating'>⭐{movie.rating}</p>
            </div>

            {/*<button onClick={() => setShow(!show)}>🔼</button>*/}
            {show ? <p className='movie-summary'>{movie.summary}</p> : null};
            <Counter />
        </div>


    );
}
