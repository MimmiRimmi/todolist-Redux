import { useReducer, useState } from "react";

const ACTION = {
  SET_TODO: "SET_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
};
function todoReducer(state, action) {
  switch (action.type) {
    case ACTION.SET_TODO:
      return [...state, action.payload];
    case ACTION.DELETE_TODO:
      return state.filter((task) => action.payload !== task.objectID);
    case ACTION.COMPLETE_TODO:
      return state.map((todo) => {
        if (action.payload === todo.objectID) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      throw new Error();
  }
}

export default function TodoReducer() {
  const [todo, dispatchTodo] = useReducer(todoReducer, []);

  const [taskName, setTaskName] = useState("");
  //const { todoData } = useTodos();

  const printTask = (e) => {
    setTaskName(e.target.value);
  };

  function createTask() {
    const task = {
      objectID: todo.length + 1,
      taskName: taskName,
      completed: false,
    };
    dispatchTodo({ type: ACTION.SET_TODO, payload: task });
  }

  return (
    <div className="bg-bg-reduce bg-cover h-screen w-screen">
      <div className="flex flex-col items-center font-mono pt-12 text-cyan-800">
        <h1 className="text-2xl font-bold"> My To Do List</h1>
        <h3>With UseReducer</h3>
        <input
          className="rounded-xl p-2 mt-4 border border-cyan-800"
          onChange={printTask}
          type="text"
        />
        <button
          className="rounded-xl font-bold border bg-cyan-800 text-white border-cyan-800 py-2 px-4 mt-4 mb-4"
          onClick={createTask}
        >
          save task
        </button>
        <ul>
          {todo.map((task) => (
            <li className="flex flex-row items-center justify-between space-x-6 bg-white py-2 px-12">
              <h1 style={{ color: task.completed ? "green" : "" }}>
                {task.taskName}
              </h1>

              <button
                className="rounded-xl w-32 font-bold text-cyan-800 border-cyan-800 border-4 py-2 px-4"
                onClick={() =>
                  dispatchTodo({
                    type: ACTION.COMPLETE_TODO,
                    payload: task.objectID,
                  })
                }
              >
                {task.completed ? "Uncomplete" : "Complete"}
              </button>
              <button
                className="rounded-xl font-bold border bg-cyan-600 text-white border-cyan-800 py-2 px-4"
                onClick={() =>
                  dispatchTodo({
                    type: ACTION.DELETE_TODO,
                    payload: task.objectID,
                  })
                }
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
