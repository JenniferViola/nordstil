import { useEffect, useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/tasks")
      .then((resp) => resp.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);
  return (
    <div className="grid gap-4">
      <h2 className="text-lg font-bold">Your tasks:</h2>
      <ul>
        {tasks.map((task) => (
          <li className="text-sm" key={task.id}>
            {task.name}
          </li>
        ))}
      </ul>
      <h3 className="text-neutral-500 text-sm">
        You have {tasks.length} tasks left.
      </h3>
    </div>
  );
}
