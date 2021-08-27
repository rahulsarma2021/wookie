import React, { useEffect, useState } from "react";

const MovieList = ({ data, genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  
    setMovies(data);
  }, [data]);

  return (
    <React.Fragment>
      <h1>{genre}</h1>
      <div className="row mb-3">
        {}
        {Object.keys(movies).map((key) => (
          <div className="image-container d-flex justify-content-start m-3 w-auto slide-in-down">
            <img src={movies[key].poster} alt="movie" height="200px" />
            <div className="overlay d-flex align-items-center justify-content-center"></div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MovieList;

