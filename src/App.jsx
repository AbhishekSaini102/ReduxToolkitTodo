import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  // const [count, setCount] = useState(0)
  const[input, setInput] = useState("");
   const [editingTodoId, setEditingTodoId] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEditClick = (id, text) => {
    // Update this function
    setInput(text);
    setEditingTodoId(id);
  };

  return (
    <>
      <h1 className="bg-red-600 px-2 py-2 text-white font-bold text-2xl">
        Redux ToolKit Todo
      </h1>
      <AddTodo
        input={input}
        onInputChange={handleInputChange}
        editingTodoId={editingTodoId}
        setEditingTodoId={setEditingTodoId}
      />
      <Todos onEditClick={handleEditClick} />
    </>
  );
}

export default App
