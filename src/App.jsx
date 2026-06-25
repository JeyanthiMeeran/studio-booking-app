import bookingsData from "./data/bookings.json";
import BookingList from "./components/BookingList";

function App() {
  return (
    <div>
      <h1>Studio Bookings</h1>

      <BookingList bookings={bookingsData} />
    </div>
  );
}

export default App;