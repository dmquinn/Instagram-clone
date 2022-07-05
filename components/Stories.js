import React, { useEffect, useState } from "react";
const Stories = () => {
  const baseUrl = "https://ghibliapi.herokuapp.com/";
  const [hasError, setErrors] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/user")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovies(res);
      })
      .catch((err) => setErrors(true));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <li key={i}>{suggestion.user.firstName}</li>
        ))}
    </div>
  );
};

export default Stories;
