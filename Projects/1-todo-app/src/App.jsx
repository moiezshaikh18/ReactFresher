import AppName from "./Components/AppName/AppName";
import AddTodo from "./Components/AddTodo";
import { TodoItems } from "./Components/TodoItems";
import "./App.css";

const todoList = [
  { todoName: "Buy Milk", todoDate: "10 / 12 / 2025" },
  { todoName: "Study React", todoDate: "11 / 12 / 2025" },
  { todoName: "Go to Gym", todoDate: "12 / 12 / 2025" },
  { todoName: "Pay Bills", todoDate: "13 / 12 / 2025" },
];

function App() {
  return (
    <div>
      <AppName />
      <AddTodo />
      <TodoItems todoList={todoList} />
    </div>
  );
}

export default App;
