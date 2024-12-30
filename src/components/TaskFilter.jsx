import { useTaskContext } from "../context/TaskProvider";

const TaskFilter = () => {
  const { filter, setFilter } = useTaskContext();

  return (
    <div className="flex justify-center space-x-4 my-4">
      {["all", "pending", "completed"].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-2 rounded ${
            filter === type ? "bg-slate-800 text-white" : "bg-gray-200"
          }`}
        >
          {type === "all" ? "Todas" : type === "pending" ? "Pendientes" : "Completadas"}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;