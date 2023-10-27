import React from "react";

export const NoteList = (props) => {
  const deleteHandler = (id) => {
    props.setNames(props.names.filter((name) => name.id !== id));
  };

  const editHandler = (name) => {
    props.setAddname(name.name);
    props.setEditMode(true);
    props.setUpdate(name);
  };

  return (
    <div>
      <ul>
        {props.names.map((name) => (
          <li key={name.id}>
            <span>
              {name.id} {name.name}
            </span>
            <button onClick={() => deleteHandler(name.id)}>Delete</button>
            <button onClick={() => editHandler(name)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
