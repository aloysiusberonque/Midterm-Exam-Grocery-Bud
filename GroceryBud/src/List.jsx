import React from "react";

const List = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="article-container" key={id}>
            <p>{title}</p>
            <div>
              <button>Edit</button>
              <button type="button" onClick={() => removeItem(id)}>
                Delete
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
