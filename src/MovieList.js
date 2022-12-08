import { Movie } from './Movie';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export function MovieList() {
    const [movieList, setmovieList] = useState([]);
    const getMovies = () => {
        fetch("https://63899fdec5356b25a203ee32.mockapi.io/movies", { method: "GET" })
            .then(data => data.json())
            .then((movies) => {
                console.log(movies);
                setmovieList(movies)
            })
    };
    useEffect(() => getMovies(), []);


    const deleteMovie = (id) => {
        console.log("Deleted Movie", id);
        fetch(`https://63899fdec5356b25a203ee32.mockapi.io/movies/${id}`,
            { method: "DELETE" })
            .then(data => getMovies())
    }
    return (
        <div>

            <div className='movie-list'>

                {movieList.map((mv, index) => (
                    <div key={mv.id}>
                        <Movie id={mv.id} movie={mv} deleteButton={
                            <IconButton
                                sx={{ marginLeft: "auto" }}
                                aria-label="delete" color="error" onClick={() => deleteMovie(mv.id)}>
                                <DeleteIcon />
                            </IconButton>
                        } />
                        {/* <Movie id={mv.id} movie={mv} deleteButton={<button onClick={() => deleteMovie(mv.id)}>
                            <IconButton aria-label="delete">
                                <DeleteIcon onClick={() => deleteMovie(mv.id)}/>
                            </IconButton>

                        </button>} /> */}
                    </div>))}

            </div>
        </div>
    );
}

