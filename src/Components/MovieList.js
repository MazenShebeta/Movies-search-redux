import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../redux/MovieSlice";


const MovieList = () => {
    const movies = useSelector((state) => state.movie.filteredMovies);
    const dispatch = useDispatch();
    return (
        <div className="movie-list">
            <input type="text" placeholder="Search Movies" onChange={(e) => dispatch(searchMovie(e.target.value))} />
            {movies.map((movie) => (
                <MovieCard title={movie.title} description={movie.description} url={movie.url}/>
            ))}
        </div>
    );
}

export default MovieList;