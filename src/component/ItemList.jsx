import Item from "./Item";

export default function ItemList({
  Items,
  onDeleteItem,
  onUpdateItem,
  filterButton,
  onChangeName,
  click,
  setClick,
}) {
  return (
    <ul className="shopping-list list-unstyled">
      {Items.toReversed().map((urun, index) => (
        <Item
          Item={urun}
          key={urun.id}
          onDeleteItem={onDeleteItem}
          onUpdateItem={onUpdateItem}
          filterButton={filterButton}
          onChangeName={onChangeName}
          click={click}
          setClick={setClick}
        />
      ))}
    </ul>
  );
}
