import AppName from "./Components/AppName/AppName";
import AddTodo from "./Components/AddTodo";
import { TodoItems } from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  console.log(todos);

  return (
    <div>
      <AppName />
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoItems todoList={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
