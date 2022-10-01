import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Components/HomePage";
import SeatBookingPage from "./Components/SeatBookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/buytickets/:id/:movieName"
          element={<SeatBookingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
