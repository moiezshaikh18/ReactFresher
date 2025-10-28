import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemStore";
import TodoItem from "./todoItem/TodoItem";

export const TodoItems = () => {
  const { todos } = useContext(TodoItemsContext);

  return (
    <div>
      {todos.length > 0 ? (
        todos.map(({ idx, todoName, todoDate, id }) => (
          <TodoItem id={id} key={idx} todoName={todoName} todoDate={todoDate} />
        ))
      ) : (
        <h4 style={{ textAlign: "center" }}>"Please Plan Your Day Guys!!!"</h4>
      )}
    </div>
  );
};
