import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import "./index.css";

const SeatBookingHeader = (props) => {
  const { movieName } = useParams();
  const navigate = useNavigate();

  const {
    activeTypeOfTicket,
    activeNoOfTicketsValue,
    ticketTypeChange,
    noOfTicketsChange,
  } = props;

  const onTicketTypeChange = (event) => {
    ticketTypeChange(event.target.value);
  };
  const onNoOfTicketsChange = (event) => {
    noOfTicketsChange(event.target.value);
  };

  const goToHome = () => {
    navigate("/");
  };
  return (
    <nav className="Seat-booking-nav-bar">
      <div className="movie-details-container">
        <button onClick={goToHome} className="back-btn">
          <IoIosArrowBack fontSize={25} color="#e1e8f0" />
        </button>
        <h1 className="movie-title">{movieName}</h1>
      </div>
      <div className="select-ticket-options">
        <div className="options">
          <label htmlFor="typeOfSeats" className="option-label">
            Tickey Type
          </label>
          <select
            onChange={onTicketTypeChange}
            value={activeTypeOfTicket}
            id="typeOfSeats"
            className="select-options"
          >
            <option value="STANDARD">Standard</option>
            <option value="PREMIUM">Premium</option>
          </select>
        </div>
        <div className="options">
          <label htmlFor="noOfSeats" className="option-label">
            Number of Seats
          </label>
          <select
            onChange={onNoOfTicketsChange}
            value={activeNoOfTicketsValue}
            id="noOfSeats"
            className="select-options"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default SeatBookingHeader;
