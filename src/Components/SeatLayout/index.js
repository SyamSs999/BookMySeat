import { TbArmchair } from "react-icons/tb";

import "./index.css";

const SeatLayout = (props) => {
  const { eachItem, selectingSeats, isActive, activeTypeOfTicket } = props;
  const { id, availability } = eachItem;

  const onSeatSelect = () => {
    selectingSeats(id);
  };

  return availability ? (
    activeTypeOfTicket === "STANDARD" ? (
      <button
        onClick={onSeatSelect}
        type="button"
        className={isActive ? "seat-btn active-seat-btn" : "seat-btn"}
      >
        <TbArmchair className="seat-icon" />
      </button>
    ) : (
      <button type="button" className="disable-btn">
        <TbArmchair className="seat-icon" />
      </button>
    )
  ) : (
    <button type="button" className="sold-seat-btn">
      <TbArmchair className="seat-icon" />
    </button>
  );
};

export default SeatLayout;
