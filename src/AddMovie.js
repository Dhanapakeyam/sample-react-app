import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export function AddMovie() {
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");

    const navigate = useNavigate();

    const addMovie = () => {
        const newMovieObj = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
        };
        // setmovieList([...movieList, newMovieObj]);
        // console.log(newMovieObj);

        fetch("https://63899fdec5356b25a203ee32.mockapi.io/movies",
            {
                method: "POST",
                body: JSON.stringify(newMovieObj),
                headers: { "Content-type": "application/json" },
            }).then(() => navigate("/movies"));

    };
    return (
        <div className='add-movie-form'>
            <TextField label="Name" variant="outlined"
                onChange={(event) => setName(event.target.value)}
            />

            <TextField label="Poster" variant="outlined"
                onChange={(event) => setPoster(event.target.value)}
            />

            <TextField label="Rating" variant="outlined"
                onChange={(event) => setRating(event.target.value)}
            />

            <TextField label="Summary" variant="outlined"
                onChange={(event) => setSummary(event.target.value)}
            />

            <TextField label="Trailer" variant="outlined"
                onChange={(event) => setTrailer(event.target.value)}
            />
            {/* <input type="text" placeholder="Movie Name"
                    onChange={(event) => setName(event.target.value)} />
                <input type="text" placeholder="Movie Poster"
                    onChange={(event) => setPoster(event.target.value)} />
                <input type="text" placeholder="Movie Rating"
                    onChange={(event) => setRating(event.target.value)} />
                <input type="text" placeholder="Movie Summary"
                    onChange={(event) => setSummary(event.target.value)} />
                <button onClick={addMovie}>Add Movie</button>*/}
            <Button variant="contained" onClick={addMovie}>Add Movie</Button>
        </div>
    );
}
