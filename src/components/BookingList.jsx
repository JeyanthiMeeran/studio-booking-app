import BookingCard from "./BookingCard";

function BookingList({ bookings }) {
  if (bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <div>
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking}
        />
      ))}
    </div>
  );
}

export default BookingList;