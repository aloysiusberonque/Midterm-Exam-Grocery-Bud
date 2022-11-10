import React from "react";

const List = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="article-container" key={id}>
            <p>{title}</p>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
