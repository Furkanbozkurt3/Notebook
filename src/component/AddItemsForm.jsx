import { useState } from "react";

export default function AddItemsForm({ onAddItem }) {
  const [name, setName] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return; // Boş not eklenmesini engellemek için

    const item = {
      id: Date.now(),
      name: name,
      completed: false,
    };

    onAddItem(item);
    setName("");
  }

  return (
    <form
      className="shopping-form p-3 mb-3"
      onSubmit={handleFormSubmit}
    >
      <div className="input-group">
        <input
          type="text"
          id="item_name"
          className="form-control"
          placeholder="Not Ekle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-plus fs-4"></i>
        </button>
      </div>
    </form>
  );
}