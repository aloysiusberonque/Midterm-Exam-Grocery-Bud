import { useEffect, useState } from "react";
import List from "./List";
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

  useEffect(() => {
    // Local Storage format = (keyname, value)
    // We would set the item value in the local storage to the values in our list every time we run the app
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    // To prevent the default state after submitting
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), title: name };

    setList([...list, newItem]);
    setName("");

    // localStorage.clear();
  };

  const removeItem = (id) => {
    // Filter: Anything that is not equal to item.id remains
    setList(list.filter((item) => item.id != id));
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
        <div>
          <input
            type="text"
            placeholder="e.g. apples"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button>Submit</button>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <List items={list} removeItem={removeItem} />
          <button>Clear Items</button>
        </div>
      )}
    </section>
  );
}

export default App;
