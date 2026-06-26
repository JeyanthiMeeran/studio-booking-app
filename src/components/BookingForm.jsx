import { useState } from "react";

function BookingForm({ addBooking, onClose }) {
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

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Event</h2>

      {error && <p className="error">{error}</p>}

      <label>Event Name</label>
      <input
        type="text"
        placeholder="Enter event name"
        value={sessionType}
        onChange={(e) => setSessionType(e.target.value)}
      />

      <label>Client Name</label>
      <input
        type="text"
        placeholder="Enter client name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />

      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label>Status</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="confirmed">Confirmed</option>
        <option value="pending">Pending</option>
        <option value="cancelled">Cancelled</option>
      </select>

      <div className="form-buttons">
        <button type="submit" className="submit-btn">
          Add Event
        </button>
      </div>
    </form>
  );
}

export default BookingForm;