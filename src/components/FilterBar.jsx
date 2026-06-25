function FilterBar({ filter, setFilter }) {
  return (
    <div>
      <label>Status Filter: </label>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="confirmed">Confirmed</option>
        <option value="pending">Pending</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
}
export default FilterBar;