import React from 'react'

export const Form = (props) => {

    const addHandler = (e) => {
      e.preventDefault();
      if (!props.addname) {
        return alert("Please enter a name");
      }
      const newName = {
        id: props.names.length + 1,
        name: props.addname,
      };
      props.setNames([...props.names, newName]);
      props.setAddname("");
    };

    const updateHandler = (e) => {
      e.preventDefault();
      if (!props.addname) {
        return alert("Please enter a name");
      }
      const updatedName = props.names.map((name) => {
        if (name.id === props.update.id) {
          return { ...name, name: props.addname };
        }
        return name;
      });
      props.setNames(updatedName);
      props.setEditMode(false);
      props.setUpdate(null);
      props.setAddname("");
    };

  return (
    <div>
      <form className="input-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={props.addname}
          onChange={(e) => props.setAddname(e.target.value)}
        />
        <button
          type="submit"
          onClick={props.editMode ? updateHandler : addHandler}
        >
          {props.editMode ? "Update" : "Add Name"}
        </button>
      </form>
    </div>
  );
}
