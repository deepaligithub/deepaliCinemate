import { useState, useEffect } from "react";

// queryTerm will be true when we search for a movie, otherwise it will be an empty string.
// apiPath is the path to the API endpoint, e.g. "movie/popular" or "search/movie"
export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    //when u set new env variable, you need to restart the server.
    //REACT_APP_ is a prefix that allows you to use environment variables in your React app. dont forget to add it.
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}