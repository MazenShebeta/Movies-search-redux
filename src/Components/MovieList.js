import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../redux/MovieSlice";


const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movie.filteredMovies);

    return (
        <div>
            <input type="text" placeholder="Search Movies" onChange={(e) => dispatch(searchMovie(e.target.value))} />
            <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard title={movie.title} description={movie.description} url={movie.url}/>
            ))}
            </div>
        </div>
    );
}

export default MovieList;