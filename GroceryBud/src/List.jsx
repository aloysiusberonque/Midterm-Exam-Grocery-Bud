import React from "react";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="article-container" key={id}>
            <p>{title}</p>
            <div>
              <button type="button" onClick={() => editItem(id)}>Edit</button>
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
