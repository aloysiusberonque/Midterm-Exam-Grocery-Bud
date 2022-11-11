import React from "react";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                onClick={() => editItem(id)}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => removeItem(id)}
                className="delete-btn"
              >
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
