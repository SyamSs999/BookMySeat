import { Link } from "react-router-dom";
import "./index.css";

const BookingMoviesListItems = (props) => {
  const { eachMovie } = props;
  const { thumbnail, movieName, movieCertificate, id } = eachMovie;

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/buytickets/${id}/${movieName}`}
    >
      <li className="booking-movies-list-item">
        <img className="movie-thumnail" src={thumbnail} alt={movieName} />
        <h1 className="movie-name">{movieName}</h1>
        <p className="movie-certificate">{movieCertificate}</p>
      </li>
    </Link>
  );
};

export default BookingMoviesListItems;
