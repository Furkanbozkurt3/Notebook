export default function NoItem() {
  return (
    <div className="no-item-container">
      <span className="no-item-icon" role="img" aria-label="coffee">
        ☕
      </span>
      <h3 className="no-item-title">Listen Tamamen Boş!</h3>
      <p className="no-item-text">Bugünlük yapılacak hiçbir şey kalmadı.</p>
    </div>
  );
}