function BookingCard({ booking }) {
  return (
   <div className="booking-card">
      <h3>{booking.sessionType}</h3>

      <p><strong>Client:</strong> {booking.clientName}</p>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(booking.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>

      <p className={booking.status}>
        {booking.status.toUpperCase()}
      </p>
    </div>

  );
}

export default BookingCard;
