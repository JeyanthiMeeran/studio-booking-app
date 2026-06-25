import { useState } from "react";
import bookingsData from "./data/bookings.json";
import BookingList from "./components/BookingList";
import FilterBar from "./components/FilterBar";
import BookingForm from "./components/BookingForm";

function App() {
  const [bookings, setBookings] = useState(bookingsData);
  const [filter, setFilter] = useState("all");

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const filteredBookings =
    filter === "all"
      ? bookings
      : bookings.filter(
          (booking) => booking.status === filter
        );

  return (
    <div>
      <h1>Studio Bookings</h1>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <BookingList bookings={filteredBookings} />

      <BookingForm addBooking={addBooking} />
    </div>
  );
}

export default App;