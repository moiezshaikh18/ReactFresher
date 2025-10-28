import AppName from "./Components/AppName/AppName";
import AddTodo from "./Components/AddTodo";
import { TodoItems } from "./Components/TodoItems";
import "./App.css";
import { TodoItemsContextProvider } from "./store/todoItemStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <AppName />
      <AddTodo />
      <TodoItems />
    </TodoItemsContextProvider>
  );
}

export default App;
