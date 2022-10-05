import { Component } from "react";
import Slider from "react-slick";
import Header from "../Header";
import { v4 as uuidv4 } from "uuid";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookingMoviesListItems from "../BookingMoviesListItems";
import LanguageFIlter from "../LanguageFilter";
import Loader from "react-loader-spinner";

const initialBookingMovieslist = [
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350251/Bookmyticket%20app/download_1_oi5kmc.jpg",
    movieName: "Karthikeya 2",
    movieCertificate: "UA",
    availbleLanguages: ["Telugu", "Tamil", "Malayalam", "Hindi", "Kannada"],
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350251/Bookmyticket%20app/et00323897-zvgjhaqnxq-portrait_qttpnq.jpg",
    movieName: "Ponniyin Selvan - Part 1",
    movieCertificate: "UA",
    availbleLanguages: ["Tamil", "Kannada", "Hindi", "Malayalam", "Telugu"],
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350251/Bookmyticket%20app/download_3_oztp5l.jpg",
    movieName: "Vikram Vedha",
    movieCertificate: "UA",
    availbleLanguages: ["Hindi"],
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350252/Bookmyticket%20app/et00004000-qhqeymhugt-portrait_hxosuo.jpg",
    movieName: "Avatar",
    movieCertificate: "UA",
    availbleLanguages: ["English", "Hindi", "Telugu", "Tamil"],
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350251/Bookmyticket%20app/download_5_fegjnv.jpg",
    movieName: "Krishna Vrinda Vihari",
    movieCertificate: "UA",
    availbleLanguages: ["Telugu"],
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350251/Bookmyticket%20app/download_2_tcffdc.jpg",
    movieName: "Oke Oka Jeevitham",
    movieCertificate: "U",
    availbleLanguages: ["Telugu"],
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350251/Bookmyticket%20app/download_epafdd.jpg",
    movieName: "Brahmastra",
    movieCertificate: "UA",
    availbleLanguages: ["Tamil", "Kannada", "Hindi", "Malayalam", "Telugu"],
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350252/Bookmyticket%20app/download_7_uyhxfi.jpg",
    movieName: "Chup",
    movieCertificate: "A",
    availbleLanguages: ["Hindi"],
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350251/Bookmyticket%20app/download_6_apw8ss.jpg",
    movieName: "Nene Vasthunna",
    movieCertificate: "UA",
    availbleLanguages: ["Telugu"],
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dkbxi5qts/image/upload/v1664350251/Bookmyticket%20app/download_4_eazjm7.jpg",
    movieName: "Life of Muthu",
    movieCertificate: "UA",
    availbleLanguages: ["Telugu"],
  },
];

const availbleLanguagesList = [
  "Telugu",
  "Hindi",
  "Tamil",
  "Malayalam",
  "Kannada",
  "English",
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
};

class Home extends Component {
  state = {
    laungageFilterList: [],
    bookingMovieslist: initialBookingMovieslist,
    isLoading: true,
  };

  activeLanguageFilter = async (selectedLanguage) => {
    this.setState({ isLoading: true });
    const { laungageFilterList } = this.state;
    if (!laungageFilterList.includes(selectedLanguage)) {
      this.setState((prevState) => ({
        laungageFilterList: [...prevState.laungageFilterList, selectedLanguage],
      }));
    } else {
      const filteredList = laungageFilterList.filter(
        (eachLanguage) => eachLanguage !== selectedLanguage
      );
      this.setState({ laungageFilterList: filteredList });
    }
    await setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  };

  checkAvailbleLanguageMovies = (eachMovie) => {
    const { laungageFilterList } = this.state;
    if (laungageFilterList.length > 0) {
      for (let eachLaungage of laungageFilterList) {
        if (eachMovie.availbleLanguages.includes(eachLaungage)) {
          return eachMovie;
        }
      }
    } else {
      return eachMovie;
    }
  };

  searchMovie = async (movie) => {
    this.setState({ isLoading: true });
    const searchMovieFilteredList = initialBookingMovieslist.filter(
      (eachMovie) => eachMovie.movieName.toLowerCase().includes(movie)
    );
    this.setState({ bookingMovieslist: searchMovieFilteredList });
    await setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }

  render() {
    const { laungageFilterList, bookingMovieslist, isLoading } = this.state;
    const laungageFilteredMoviesList = bookingMovieslist.filter((eachMovie) =>
      this.checkAvailbleLanguageMovies(eachMovie)
    );
    return (
      <>
        <Header searchMovie={this.searchMovie} />
        <div className="home-page">
          <div className="slider">
            <Slider {...settings}>
              <div>
                <img
                  className="carousel-image"
                  alt="imag"
                  src="https://cdn.123telugu.com/content/wp-content/uploads/2022/08/Karthikeya2-7.jpg"
                />
              </div>
              <div>
                <img
                  className="carousel-image"
                  alt="imag"
                  src="https://static.toiimg.com/photo/msid-93813587/93813587.jpg?162054"
                />
              </div>
              <div>
                <img
                  className="carousel-image"
                  alt="imag"
                  src="https://images.indianexpress.com/2022/09/vikram-vedha-2.jpg"
                />
              </div>
            </Slider>
          </div>
          <div className="booking-availble-movies-page">
            <div className="filter-container">
              <h1 className="filter-text">Filters</h1>
              <ul className="availble-languages-list">
                <li className="languages-filter">Languages</li>
                {availbleLanguagesList.map((eachLanguage) => (
                  <LanguageFIlter
                    activeLanguage={laungageFilterList.includes(eachLanguage)}
                    activeLanguageFilter={this.activeLanguageFilter}
                    key={eachLanguage}
                    eachLanguage={eachLanguage}
                  />
                ))}
              </ul>
            </div>
            {isLoading ? (
              <div className="loader-container1">
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={50}
                  width={50}
                />
              </div>
            ) : (
              <ul className="booking-movies-list">
                {laungageFilteredMoviesList.map((eachMovie) => (
                  <BookingMoviesListItems
                    key={eachMovie.id}
                    eachMovie={eachMovie}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
