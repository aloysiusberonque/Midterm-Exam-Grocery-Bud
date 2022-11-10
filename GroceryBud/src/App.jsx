import { useState } from "react";
import List from "./List";
import "./App.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), title: name };

    setList([...list, newItem]);
    setName("");

    // localStorage.clear();
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
          <List items={list} />
          <button>Clear Items</button>
        </div>
      )}
    </section>
  );
}

export default App;
