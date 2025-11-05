const redux = require("redux");

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  console.log("Reducer called", action);

  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };

    case "DECREMENT":
      return { counter: state.counter - 1 };

    default:
      return state; // return the current state for unknown actions
  }
};

const store = redux.createStore(reducer);

const subscriber = () => {
  console.log("sub_state", store.getState());
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
