export default function Item({
  Item,
  onDeleteItem,
  onUpdateItem,
  filterButton,
  onChangeName,
  click,
  setClick,
}) {

  if (filterButton === "incompleted" && Item.completed) {
    return null;
  }
  if (filterButton === "completed" && !Item.completed) {
    return null;
  }

  const handleBlur = (e) => {
    onChangeName(Item.id, e);
    setClick(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onChangeName(Item.id, e);
      setClick(false);
    }
  };

  return (
    <li 
      className={`shopping-list-item ${Item.completed ? "completed" : ""}`}
    >
      <input
        type="checkbox"
        className="item-checkbox"
        checked={Item.completed}
        onChange={() => onUpdateItem(Item.id)}
      />
      <div
        contentEditable={click}
        onClick={() => setClick(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
        className={`item-name ${click ? "editable" : "clickable"}`}
      >
        {Item.name}
      </div>
      <i
        className="fs-3 bi bi-x text-danger delete-icon"
        onClick={() => onDeleteItem(Item.id)}
      ></i>
    </li>
  );
}