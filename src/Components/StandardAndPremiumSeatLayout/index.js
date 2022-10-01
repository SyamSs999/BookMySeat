import { Component } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import PremiumSeatLayout from "../PremiuSeatLayout";
import SeatBookingHeader from "../SeatBookingHeader";
import SeatLayout from "../SeatLayout";

import "./index.css";

class StandardAndPremiumSeatLayout extends Component {
  state = {
    selectedSeats: [],
    isLoading: true,
    activeNoOfTicketsValue: 1,
    activeTypeOfTicket: "STANDARD",
  };

  onTicketBooking = () => {
    const { movieName } = this.props;
    const { selectedSeats } = this.state;

    const seatsLayout = JSON.parse(
      localStorage.getItem(`standardLayout${movieName}`)
    );

    const premiumSeatLayout = JSON.parse(
      localStorage.getItem(`premiumLayout${movieName}`)
    );

    const { premiumSeatLayoutList } = premiumSeatLayout;

    const { leftSideSeatLayout, centerSeatLayoutList, rightSideSeatLayout } =
      seatsLayout;

    const modifiedLeftSeatsList = leftSideSeatLayout.map((eachItem) => {
      if (selectedSeats.includes(eachItem.id)) {
        return { ...eachItem, availability: false };
      }
      return eachItem;
    });
    const modifiedPremiumSeatsList = premiumSeatLayoutList.map((eachItem) => {
      if (selectedSeats.includes(eachItem.id)) {
        return { ...eachItem, availability: false };
      }
      return eachItem;
    });
    const modifiedCenterSeatsList = centerSeatLayoutList.map((eachItem) => {
      if (selectedSeats.includes(eachItem.id)) {
        return { ...eachItem, availability: false };
      }
      return eachItem;
    });
    const modifiedRightSeatsList = rightSideSeatLayout.map((eachItem) => {
      if (selectedSeats.includes(eachItem.id)) {
        return { ...eachItem, availability: false };
      }
      return eachItem;
    });
    localStorage.setItem(
      `standardLayout${movieName}`,
      JSON.stringify({
        leftSideSeatLayout: modifiedLeftSeatsList,
        centerSeatLayoutList: modifiedCenterSeatsList,
        rightSideSeatLayout: modifiedRightSeatsList,
      })
    );
    localStorage.setItem(
      `premiumLayout${movieName}`,
      JSON.stringify({ premiumSeatLayoutList: modifiedPremiumSeatsList })
    );
  };

  selectingSeats = (id) => {
    const { selectedSeats, activeNoOfTicketsValue } = this.state;
    if (selectedSeats.length >= activeNoOfTicketsValue) {
      this.setState({ selectedSeats: [id] });
    } else {
      if (!selectedSeats.includes(id)) {
        this.setState((prevState) => ({
          selectedSeats: [...prevState.selectedSeats, id],
        }));
      } else {
        const filteredLeftSideSeatsList = selectedSeats.filter(
          (eachItem) => eachItem !== id
        );
        this.setState({ selectedSeats: filteredLeftSideSeatsList });
      }
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }

  ticketTypeChange = (value) => {
    this.setState({ activeTypeOfTicket: value, selectedSeats: [] });
  };

  noOfTicketsChange = (value) => {
    this.setState({ activeNoOfTicketsValue: value, selectedSeats: [] });
  };

  render() {
    const { movieName } = this.props;
    const {
      selectedSeats,
      isLoading,
      activeNoOfTicketsValue,
      activeTypeOfTicket,
    } = this.state;

    const seatsLayout = JSON.parse(
      localStorage.getItem(`standardLayout${movieName}`)
    );
    const { leftSideSeatLayout, centerSeatLayoutList, rightSideSeatLayout } =
      seatsLayout;

    const premiumSeatLayout = JSON.parse(
      localStorage.getItem(`premiumLayout${movieName}`)
    );

    const { premiumSeatLayoutList } = premiumSeatLayout;

    return (
      <>
        <SeatBookingHeader
          noOfTicketsChange={this.noOfTicketsChange}
          ticketTypeChange={this.ticketTypeChange}
          activeTypeOfTicket={activeTypeOfTicket}
          activeNoOfTicketsValue={activeNoOfTicketsValue}
        />
        {isLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="seats-layout-page">
            <ul className="premium-seat-layout-page">
              <li className="premium-side-seats">
                {premiumSeatLayoutList.map((eachItem) => (
                  <PremiumSeatLayout
                    activeTypeOfTicket={activeTypeOfTicket}
                    isActive={selectedSeats.includes(eachItem.id)}
                    selectingSeats={this.selectingSeats}
                    movieName={movieName}
                    eachItem={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </li>
            </ul>
            <ul className="standard-seat-layout-page">
              <li className="side-seats">
                {leftSideSeatLayout.map((eachItem) => (
                  <SeatLayout
                    activeTypeOfTicket={activeTypeOfTicket}
                    isActive={selectedSeats.includes(eachItem.id)}
                    selectingSeats={this.selectingSeats}
                    movieName={movieName}
                    eachItem={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </li>
              <li className="center-seats">
                {centerSeatLayoutList.map((eachItem) => (
                  <SeatLayout
                    activeTypeOfTicket={activeTypeOfTicket}
                    isActive={selectedSeats.includes(eachItem.id)}
                    selectingSeats={this.selectingSeats}
                    movieName={movieName}
                    eachItem={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </li>
              <li className="side-seats">
                {rightSideSeatLayout.map((eachItem) => (
                  <SeatLayout
                    activeTypeOfTicket={activeTypeOfTicket}
                    isActive={selectedSeats.includes(eachItem.id)}
                    selectingSeats={this.selectingSeats}
                    movieName={movieName}
                    eachItem={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </li>
            </ul>
            <img
              className="screen-logo"
              alt="screen logo"
              src="https://assetscdn1.paytm.com/movies_new/_next/static/media/screen-icon.8dd7f126.svg"
            />
            {parseInt(activeNoOfTicketsValue) === selectedSeats.length && (
              <div className="booking-footer">
                <Link to="/">
                  <button
                    onClick={this.onTicketBooking}
                    className="booking-btn"
                  >
                    Book {selectedSeats.length > 1 ? "Tickets" : "Ticket"}
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default StandardAndPremiumSeatLayout;
