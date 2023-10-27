
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { NoteList } from './components/NoteList';




function App() {
  const [names, setNames] = useState([{ id: 1, name: "Eat" }, { id: 2, name: "Sleep" }]);
  const [addname,setAddname]=useState("");
  const [editMode,setEditMode]=useState(false);
  const [update,setUpdate] = useState(null);
  

  return (
    <div className="App">
      <Form
      names={names}
      setNames={setNames}
      addname={addname}
      setAddname={setAddname}
      editMode={editMode}
      setEditMode={setEditMode}
      update={update}
      setUpdate={setUpdate}
      />
      <NoteList
        names={names}
        setNames={setNames}
        addname={addname}
        setAddname={setAddname}
        editMode={editMode}
        setEditMode={setEditMode}
        update={update}
        setUpdate={setUpdate}
      />
      
    </div>
  );
}

export default App;
