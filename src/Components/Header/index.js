import { Component } from "react";

import { AiOutlineSearch } from "react-icons/ai";

import "./index.css";

class Header extends Component {
  state = { searchMovieValue: "" };

  getSerachMovie = (event) => {
    this.setState({ searchMovieValue: event.target.value });
  };

  onSearchMovie = () => {
    const { searchMovie } = this.props;
    const { searchMovieValue } = this.state;
    searchMovie(searchMovieValue.toLowerCase());
  };

  render() {
    const { searchMovieValue } = this.state;

    return (
      <nav className="nav-bar">
        <div className="logo-container">
          <h1 className="logo-name">Book</h1>
          <img
            className="website-logo"
            alt="logo"
            src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1664585123/Bookmyticket%20app/pngegg_o0qfha.png"
          />
          <h1 className="logo-name">Seat</h1>
        </div>
        <div className="search-movies-container">
          <input
            value={searchMovieValue}
            onChange={this.getSerachMovie}
            type="search"
            placeholder="Serach for movies"
            className="search-movies-input"
          />
          <button
            onClick={this.onSearchMovie}
            className="search-button"
            type="button"
          >
            <AiOutlineSearch fontSize={25} />
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
