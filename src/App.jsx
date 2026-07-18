import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./component/Header";
import AddItemsForm from "./component/AddItemsForm";
import FilterButtons from "./component/FilterButtons";
import ItemList from "./component/ItemList";
import NoItem from "./component/NoItem";
import { useState, useEffect } from "react";

//FilteButonlara basınca pat pat sayfa geçişi olmasın. Biraz yavaş olsun
// container devasa olmasın. Biraz yanlardan daralt
//responsive yap

function App() {
  const urunler = [
    { id: 1, name: "Yumurta", completed: true },
    { id: 2, name: "Peynir", completed: true },
    { id: 3, name: "Zeytin", completed: false },
    { id: 4, name: "Et", completed: false },
    { id: 5, name: "Tavuk", completed: true },
  ];

  const [items, setItem] = useState(() => {
    const localData = localStorage.getItem("alisverisListesi");

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("alisverisListesi", JSON.stringify(items));
  }, [items]);

  const [filterButton, setFilterButton] = useState("all");
  const [click, setClick] = useState(false);

  function handleChangeName(id, e) {
    const newName = e.target.innerText;

    const updatedName = items.map((item) =>
      item.id == id ? { ...item, name: newName } : item,
    );

    setItem(updatedName);

    console.log(items);
  }

  function handleAddItem(urun) {
    setItem((items) => [...items, urun]);
  }

  function handleDeleteItem(id) {
    setItem(items.filter((item) => item.id != id));
  }
  function handleUpdateItem(id) {
    const updatedItem = items.map((item) =>
      item.id == id ? { ...item, completed: !item.completed } : item,
    );

    setItem(updatedItem);
  }

  function handleClearAll() {
    setItem([]);
  }

  return (
    <>
      <div className="container">
        <Header />
        <AddItemsForm onAddItem={handleAddItem} />
        {items.length > 0 ? (
          <>
            <FilterButtons
              onClearAll={handleClearAll}
              filterButton={filterButton}
              setFilterButton={setFilterButton}
            />
            <ItemList
              Items={items}
              onDeleteItem={handleDeleteItem}
              onUpdateItem={handleUpdateItem}
              filterButton={filterButton}
              onChangeName={handleChangeName}
              click={click}
              setClick={setClick}
            />
          </>
        ) : (
          <NoItem />
        )}
      </div>
    </>
  );
}

export default App;
