import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todos: [],
  handleAddTodo: () => {},
  handleDeleteTodo: () => {},
});

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

export const TodoItemsContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducerHandler, []);

  const handleAddTodo = (todo) => {
    dispatch({ type: "AddItem", payload: { todo } });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DeleteItem", payload: { id } });
  };

  console.log(todos);
  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todos,
          handleAddTodo,
          handleDeleteTodo,
        }}
      >
        {children}
      </TodoItemsContext.Provider>
    </>
  );
};
