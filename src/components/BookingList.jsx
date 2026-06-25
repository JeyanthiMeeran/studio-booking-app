import BookingCard from "./BookingCard";

function BookingList({ bookings }) {
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
