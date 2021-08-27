import React, { useState, useEffect } from "react";
import { Header, MovieList } from "./Components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [groupedMovies, setGroupedMovies] = useState([]);


  const getMovieRequest = async () => {
    const url = `https://wookie.codesubmit.io/movies`;

    const response = await fetch(url, {
      headers: new Headers({
        Authorization: "Bearer Wookie2019",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    });
    const responseJson = await response.json();

    if (responseJson.movies) {
 

      let group = responseJson.movies.reduce((r, a) => {
        a.genres.map((genre, idx) => {
          r[genre] = [...(r[a.genres[idx]] || []), a];
        });
        return r;
      }, {});
      setGroupedMovies(group);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

   console.log(groupedMovies);

  return (
    <div className="container-fluid movieApp">
      <Header />
    
      {Object.keys(groupedMovies).map((key) => (
        <MovieList data={groupedMovies[key]} genre={key} />
      ))}
    </div>
  );
}
