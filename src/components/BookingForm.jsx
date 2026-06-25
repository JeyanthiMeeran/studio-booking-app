import { useState } from "react";

function BookingForm({ addBooking }) {
  const [clientName, setClientName] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("confirmed");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clientName || !sessionType || !date) {
      setError("Please fill all fields");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    if (date < today) {
      setError("Date cannot be in the past");
      return;
    }

    const newBooking = {
      id: Date.now(),
      clientName,
      sessionType,
      date,
      status,
    };

    addBooking(newBooking);

    setClientName("");
    setSessionType("");
    setDate("");
    setStatus("confirmed");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Booking</h2>

      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Session Type"
        value={sessionType}
        onChange={(e) => setSessionType(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="confirmed">Confirmed</option>
        <option value="pending">Pending</option>
        <option value="cancelled">Cancelled</option>
      </select>

      <button type="submit">
        Add Booking
      </button>
    </form>
  );
}

export default BookingForm;
