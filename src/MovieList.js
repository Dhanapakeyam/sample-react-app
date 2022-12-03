import { Movie } from './Movie';

export function MovieList({ movieList }) {


    return (
        <div>

            <div className='movie-list'>

                {movieList.map((mv, index) => (
                    <div key={index}>
                        <Movie id={index} movie={mv} />
                    </div>))}

            </div>
        </div>
    );
}

