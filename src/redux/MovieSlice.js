import {createSlice} from "@reduxjs/toolkit";
import MovieData from '../Components/data';

const initialState = {
    movies: MovieData,
    //create filtereMovies array
    filteredMovies: MovieData

}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        // addMovie: (state, action) => {
        //     state.movies.push(action.payload);
        // },
        // removeMovie: (state, action) => {
        //     state.movies = state.movies.filter((movie) => movie.id !== action.payload);
        // },
        searchMovie: (state, action) => {
            state.filterMovies = state.movies.filter((item) => {
                return item.name.toLowerCase().includes(action.payload.toLowerCase());
              });
        }
    }
})

export const {searchMovie} = movieSlice.actions;
export default movieSlice.reducer;