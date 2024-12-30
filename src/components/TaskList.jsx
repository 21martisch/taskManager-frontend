import { useTaskContext } from "../context/TaskProvider";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, filter } = useTaskContext();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
  });

  const sortedTasks = [...filteredTasks].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="mt-6">
      {sortedTasks.length === 0 ? (
        <p className="text-gray-700 text-center">
          {filter === "completed"
            ? "No hay tareas completadas."
            : filter === "pending"
            ? "No hay tareas pendientes."
            : "No hay tareas disponibles."}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedTasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;