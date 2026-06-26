import { useState } from "react";
import bookingsData from "./data/bookings.json";
import BookingList from "./components/BookingList";
import FilterBar from "./components/FilterBar";
import BookingForm from "./components/BookingForm";
import "./styles/app.css";
import Modal from "./components/Modal";

function App() {
  const [bookings, setBookings] = useState(bookingsData);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="container">
      <h1>Studio Bookings</h1>

      <div className="toolbar">
        <FilterBar
          filter={filter}
          setFilter={setFilter}
        />

        <button
          className="add-btn"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Event
        </button>
      </div>

      <BookingList bookings={filteredBookings} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <BookingForm
          addBooking={addBooking}
          onClose={() => setIsModalOpen(false)}
        />
        </Modal>

    </div>
  );
}

export default App;