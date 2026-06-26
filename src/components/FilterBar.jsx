function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Status</option>
        <option value="confirmed">Confirmed</option>
        <option value="pending">Pending</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
}
export default FilterBar;



