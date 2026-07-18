export default function FilterButtons({
  onClearAll,
  filterButton,
  setFilterButton,
}) {
  return (
    <div className="filter-buttons p-3 mb-3 d-flex justify-content-between align-items-center">
      <div>
        <button
          item-filter="all"
          className={`btn me-1 ${filterButton === "all" ? "active" : ""}`}
          onClick={() => setFilterButton("all")}
        >
          Hepsi
        </button>
        <button
          item-filter="incompleted"
          className={`btn me-1 ${filterButton === "incompleted" ? "active" : ""}`}
          onClick={() => setFilterButton("incompleted")}
        >
          Bekliyor
        </button>
        <button
          item-filter="completed"
          className={`btn me-1 ${filterButton === "completed" ? "active" : ""}`}
          onClick={() => setFilterButton("completed")}
        >
          Tamamlandı
        </button>
      </div>
      <button
        className="btn btn-danger"
        onClick={onClearAll}
      >
        Temizle
      </button>
    </div>
  );
}