function BookingCard({ booking }) {
  return (
    <div className="booking-card">
      <h3>{booking.clientName}</h3>

      <p>
        <strong>Session:</strong> {booking.sessionType}
      </p>

      <p>
        <strong>Date:</strong> {booking.date}
      </p>

      <p>
        <strong>Status:</strong> {booking.status}
      </p>
    </div>
  );
}

export default BookingCard;
