import React, {useEffect, useState, useRef} from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// 66f37742

const URL = `http://www.omdbapi.com?apikey=66f37742`;

export default function App(){
	const ref = useRef(true);
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const movie1 = {
    "Title": "Zombie 3",
    "Year": "1988",
    "imdbID": "tt0096511",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGY3MTBiYjQtNzM1MC00ZTVkLWE3MzYtZTk0YzdkMGFkYWUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
};

	const searchMovies = async(title) => {
		const response = await fetch(`${URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		if(ref.current){
			ref.current = false;
			searchMovies('undefined');
		}
	},[]);

	console.log(movies)

	return(
			<div className="app">
				<h1>MovieLand</h1>

				<div className="search">
					<input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
					<img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
				</div>

				<div className="container">
						{movies.map((movie)=>{
							return(
									<MovieCard key={movie.Title} movie1={movie} />
								)
						})}
					</div>

				{/*{
					movies.length > 0 ?
					<div className="container">
						{movies.map((movie)=>{
							return(
									<MovieCard key={movie.Title} movie={movie} />
								)
						})}
					</div>
					:
					<div className="empty">
						<h2>No movies found</h2>
					</div>
				}*/}

			</div>
		);
}