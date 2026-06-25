import { useState } from "react";
import bookingsData from "./data/bookings.json";
import BookingList from "./components/BookingList";
import FilterBar from "./components/FilterBar";

function App() {
  const [filter, setFilter] = useState("all");

  const filteredBookings =
    filter === "all"
      ? bookingsData
      : bookingsData.filter(
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
    </div>
  );
}

export default App;
