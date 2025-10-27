import TodoItem from "./todoItem/TodoItem";

export const TodoItems = ({ todoList, onDelete }) => {
  return (
    <div>
      {todoList.length > 0 ? (
        todoList.map(({ idx, todoName, todoDate, id }) => (
          <TodoItem
            key={idx}
            todoName={todoName}
            todoDate={todoDate}
            id={id}
            onDelete={onDelete}
          />
        ))
      ) : (
        <h4 style={{ textAlign: "center" }}>"Please Plan Your Day Guys!!!"</h4>
      )}
    </div>
  );
};
