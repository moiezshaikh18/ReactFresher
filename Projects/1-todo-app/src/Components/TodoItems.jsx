import TodoItem from "./todoItem/TodoItem";

export const TodoItems = ({ todoList }) => {
  return (
    <div>
      {todoList.map(({ idx, todoName, todoDate }) => (
        <TodoItem key={idx} todoName={todoName} todoDate={todoDate} />
      ))}
    </div>
  );
};
