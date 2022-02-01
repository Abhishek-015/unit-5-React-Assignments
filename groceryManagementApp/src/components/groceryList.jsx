import React from "react";

const List = ({ handleDelete, id, title }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {title}
      <span>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default List;
