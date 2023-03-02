import { createReduxModule } from "hooks-for-redux";

const initialState = {
  todoData: [],
};

export const [useTodos, { addTodo, removeTodo, completeTodo }] =
  createReduxModule("todos", initialState, {
    addTodo: (state, todo) => {
      const oldTodos = state.todoData;
      const newTodos = [...oldTodos, todo];
      return { ...state, todoData: newTodos };
    },
    removeTodo: (state, objectID) => {
      return {
        ...state,
        todoData: state.todoData.filter((todo) => todo.objectID !== objectID),
      };
    },
    completeTodo: (state, objectID) => {
      return {
        ...state,
        todoData: state.todoData.map((todo) => {
          if (todo.objectID === objectID) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    },
  });
