import AppName from "./Components/AppName/AppName";
import AddTodo from "./Components/AddTodo";
import { TodoItems } from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todoItemStore";

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
    <TodoItemsContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleDeleteTodo,
      }}
    >
      <div>
        <AppName />
        <AddTodo />
        <TodoItems />
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
