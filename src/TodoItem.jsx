import { useTodos, removeTodo, completeTodo } from "./redux/todos";

export default function TodoItem() {
  const { todoData } = useTodos();
  return (
    <ul>
      {todoData.map((task) => (
        <li className="flex flex-row items-center justify-between space-x-6 bg-white py-2 px-12">
          <h1 style={{ color: task.completed ? "green" : "" }}>
            {task.taskName}
          </h1>

          <button
            className="rounded-xl w-32 font-bold text-cyan-800 border-cyan-800 border-4 py-2 px-4"
            onClick={() => completeTodo(task.objectID)}
          >
            {task.completed ? "Uncomplete" : "Complete"}
          </button>
          <button
            className="rounded-xl font-bold border bg-cyan-600 text-white border-cyan-800 py-2 px-4"
            onClick={() => removeTodo(task.objectID)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
