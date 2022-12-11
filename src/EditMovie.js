import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from 'yup';
import { MovieDetails } from './MovieDetails';


const addMovieFormValidationSchema = yup.object({
    // name: yup.string().required("Movie name is needed"),
    // poster: yup.string().min(4, "Poster asks atleat 4 chars").required("Poster image is needed"),
    // rating: yup.number().matches(/[0-9]/).required("Enter your valid rating"),
    // summary: yup.string().min(20, "write summary").required("Give summary of movie"),
    // trailer: yup.string().required("enter trailer link"),
    name: yup.string().required(),
    poster: yup.string().required("A cool poster is in need").min(4, "Need a bigger poster"),
    rating: yup.number().required("A cool rating is in need").min(0).max(10),
    summary: yup.string().required("A cool summary is in need").min(20),
    trailer: yup.string().required("A cool trailer is in need").min(5).url(),
});

export function EditMovie() {
    const { id } = useParams();
    const [movie, setmovie] = useState(null);

    useEffect(() => {
        fetch(`https://63899fdec5356b25a203ee32.mockapi.io/movies/${id}`, { method: 'GET' })
            .then(data => data.json())
            .then((mve) => {
                console.log(mve);
                setmovie(mve)
            });
    }, []);
    return (
        <div>
            {movie ? <EditMovieForm movie={movie} /> : "Loading..."}
        </div>
    )
}
function EditMovieForm({ movie }) {

    const formik = useFormik({
        initialValues: {
            name: movie.name,
            poster: movie.poster,
            rating: movie.rating,
            summary: movie.summary,
            trailer: movie.trailer,
        },
        validationSchema: addMovieFormValidationSchema,
        onSubmit: (updatedMovie) => {
            console.log("Form Values: ", updatedMovie);
            editMovie(updatedMovie);

        }
    });

    const navigate = useNavigate();

    const editMovie = (updatedMovie) => {
        // const newMovieObj = {
        //     name: formik.values.name,
        //     poster: formik.values.poster,
        //     rating: formik.values.rating,
        //     summary: formik.values.summary,
        //     trailer: formik.values.trailer,
        // };
        // setmovieList([...movieList, newMovieObj]);
        // console.log(newMovieObj);

        fetch(`https://63899fdec5356b25a203ee32.mockapi.io/movies/${movie.id}`,
            {
                method: "PUT",
                body: JSON.stringify(updatedMovie),
                headers: { "Content-type": "application/json" },
            }).then(() => navigate("/movies"));

    };
    return (
        <form className='add-movie-form' onSubmit={formik.handleSubmit}>
            <TextField label="Name" variant="outlined"
                // onChange={(event) => setName(event.target.value)}
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.name && formik.touched.name}
                helperText={formik.errors.name && formik.touched.name ? "incorrect entry" : null}
            />

            <TextField label="Poster" variant="outlined"
                //onChange={(event) => setPoster(event.target.value)}
                name='poster'
                value={formik.values.poster}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.poster && formik.touched.poster}
                helperText={formik.errors.poster && formik.touched.poster ? formik.errors.poster : null}
            />


            <TextField label="Rating" variant="outlined"
                //onChange={(event) => setRating(event.target.value)}
                name='rating'
                value={formik.values.rating}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.rating && formik.touched.rating}
                helperText={formik.errors.rating && formik.touched.rating ? formik.errors.rating : null}
            />



            <TextField label="Summary" variant="outlined"
                //onChange={(event) => setSummary(event.target.value)}
                name='summary'
                value={formik.values.summary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.summary && formik.touched.summary}
                helperText={formik.errors.summary && formik.touched.summary ? formik.errors.summary : null}
            />



            <TextField label="Trailer" variant="outlined"
                //onChange={(event) => setTrailer(event.target.value)}
                name='trailer'
                value={formik.values.trailer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.trailer && formik.touched.trailer}
                helperText={formik.errors.trailer && formik.touched.trailer ? formik.errors.trailer : null}
            />



            {/* <input type="text" placeholder="Movie Name"
                    onChange={(event) => setName(event.target.value)} />
                <input type="text" placeholder="Movie Poster"
                    onChange={(event) => setPoster(event.target.value)} />
                <input type="text" placeholder="Movie Rating"
                    onChange={(event) => setRating(event.target.value)} />
                <input type="text" placeholder="Movie Summary"
                    onChange={(event) => setSummary(event.target.value)} />
                <button onClick={addMovie}>Add Movie</button>
            <Button variant="contained" onClick={addMovie}>Add Movie</Button>*/}
            <Button variant="contained" color="success" type='submit'>Save</Button>
        </form>
    );
}
