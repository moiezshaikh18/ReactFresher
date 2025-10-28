import AppName from "./Components/AppName/AppName";
import AddTodo from "./Components/AddTodo";
import { TodoItems } from "./Components/TodoItems";
import "./App.css";
import { useReducer } from "react";
import { TodoItemsContext } from "./store/todoItemStore";

const reducerHandler = (state, action) => {
  switch (action.type) {
    case "AddItem":
      return [...state, action.payload.todo];

    case "DeleteItem":
      return state.filter((item) => item.id !== action.payload.id); // Delete todo

    default:
      return state; // always return current state as fallback
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducerHandler, []);

  const handleAddTodo = (todo) => {
    dispatch({ type: "AddItem", payload: { todo } });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DeleteItem", payload: { id } });
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
