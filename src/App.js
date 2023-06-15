import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './SearchIcon.svg';
import MovieCard from './MovieCard';
// f1534825

// Multilpe Use State hooks can be used for different components


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f1534825'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // For fetching movies 
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // Movie Data from entire json is present under Search so taking that
        setMovies(data.Search); //movies is set to data.Search
    }
    useEffect(() => {
        searchMovies('Spider-Man');

    }, []
    );
    return (
        <div className='app'>
            <h1>Movie Land</h1>
            {/*  Search Box  */}
            <div className='search'>
                <input placeholder='Search for Movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt="Search Icon" onClick={() => searchMovies(searchTerm)} />
            </div>

            {/* Display of movies */}

            {
                movies.length > 0 ?
                    (
                        <div className='container'>
                            {
                                // For displaying One movie
                                // <MovieCard movie={movies[0]}/>

                                // For Displaying all the movies recieved from Search Query
                                movies.map((movie) => (
                                    <MovieCard movie={movie} />
                                ))
                            }
                        </div>

                    ) : (
                        <div className='empty'>
                            <h1>No Movies Found</h1>
                        </div>
                    )
            }
        </div>
    );
}

export default App;