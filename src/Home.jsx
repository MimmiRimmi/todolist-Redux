import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useTodos, addTodo } from "./redux/todos";

export default function Home() {
  const [taskName, setTaskName] = useState("");
  const { todoData } = useTodos();

  const printTask = (e) => {
    setTaskName(e.target.value);
  };

  function createTask() {
    const task = {
      objectID: todoData.length + 1,
      taskName: taskName,
      completed: false,
    };
    addTodo(task);
  }

  return (
    <div className="bg-bg-redux bg-cover h-screen w-screen">
      <div className="flex flex-col items-center font-mono pt-12">
        <h1 className="text-2xl font-bold"> My To Do List</h1>
        <h3>With Redux</h3>
        <input
          className="rounded-xl p-2 mt-4"
          onChange={printTask}
          type="text"
        />
        <button
          className="rounded-xl font-bold border bg-white border-black py-2 px-4 mt-4 mb-4"
          onClick={createTask}
        >
          save task
        </button>
        <TodoItem />
      </div>
    </div>
  );
}
