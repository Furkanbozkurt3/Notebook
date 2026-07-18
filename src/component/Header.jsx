export default function Header() {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const today = new Date().toLocaleDateString('tr-TR', options);

  return (
    <div className="header-container text-center my-3">
      <h1 className="main-title">Not Defteri</h1>
      <div className="sub-title-container">
        <span className="sub-title-text">bugün yapılacaklar...</span>
        <span className="sub-title-date">{today}</span>
      </div>
    </div>
  );
}