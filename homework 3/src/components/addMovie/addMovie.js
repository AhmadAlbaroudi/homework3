import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = (props) => {
  const navigate = useNavigate();
  const [movieitem, setMovie] = useState({
    movieName: "",
    movieDescription: "",
    subTitle: "",
  });
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
    } else {
      navigate("/login"); 
    }
  }, [navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    const movies = localStorage.getItem("movies")
    ? JSON.parse(localStorage.getItem("movies")): [];
    movies.push(movieitem)
    localStorage.setItem("movies", JSON.stringify(movies))
 
    navigate("/movie", { state: { addMovie: movieitem } });
  };
  
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="wrapper">
          <input
            className="movie-name"
            required
            type="text"
            placeholder="Movie Name"
            onChange={(e) =>
              setMovie({ ...movieitem, movieName: e.target.value })
            }
          />
          <input
            required
            type="text"
            className="movie-subTitle"
            placeholder="subtitle"
            onChange={(e) =>
              setMovie({ ...movieitem, subTitle: e.target.value })
            }
          />
          <input
            required
            type="text"
            className="movie-desc"
            placeholder="Movie Description"
            onChange={(e) =>
              setMovie({ ...movieitem, movieDescription: e.target.value })
            }
          />
          
          <input className="submitt-button" value='Add Movie' type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
