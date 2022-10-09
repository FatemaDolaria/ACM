// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState}  from 'react';
/*{ useState }*/
function App() {

  const [movie, setMovie] = useState("")

  const getmovie = () => {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=c35157095c4dd77020b3d15a30430348').then(
      (response) => {
        console.log(response);
        
        setMovie(response.data.genres[0].id + response.data.genres[0].name + " ... " + response.data.homepage);
      });
    };
    
  return (
    <div>
      <p>Movie Database</p>
      <button onClick={getmovie}>Movies</button>
      {movie}
    </div>
  );
  }

export default App;
