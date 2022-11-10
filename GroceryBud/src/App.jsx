import { useEffect, useState } from "react";
import List from "./List";
import Modal from "./Modal";
import "./App.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    // We convert the localStorage format to JSON format
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalMode, setModalMode] = useState(0);

  useEffect(() => {
    // Local Storage format = (keyname, value)
    // We would set the item value in the local storage to the values in our list every time we run the app
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    // To prevent the default state after submitting
    e.preventDefault();
    if (!name) {
      setModalMode(3);
      setOpenModal(true);
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            setModalMode(5);
            setOpenModal(true);
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setModalMode(1);
      setOpenModal(true);
      setName("");
    }
    // Backup Function: localStorage.clear();
  };

  const removeItem = (id) => {
    // Filter: Anything that is not equal to item.id remains
    setList(list.filter((item) => item.id != id));
    setModalMode(2);
    setOpenModal(true);
  };

  const clearList = () => {
    setList([]);
    setModalMode(4);
    setOpenModal(true);
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  return (
    <section>
      <Modal
        open={openModal}
        mode={modalMode}
        onClose={() => setOpenModal(false)}
      />
      <form onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
        <div>
          <input
            type="text"
            placeholder="e.g. apples"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button onClick={clearList}>Clear Items</button>
        </div>
      )}
    </section>
  );
}

export default App;
