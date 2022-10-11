import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies } from "../redux/MovieSlice";
import './MovieList.css';


const MovieList = () => {
    const movies = useSelector((state) => state.movie.filteredMovies);
    const dispatch = useDispatch();


    return (
        <div>
            <input
          type="text"
          onChange={(e) => dispatch(searchMovies(e.target.value))}
        />
            <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard title={movie.title} url={movie.url} description={movie.description} />
            ))}
            </div>
        </div>
    );
}

export default MovieList;