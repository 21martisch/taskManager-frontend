import { createContext, useContext, useState, useEffect } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/taskApi";

const TaskContext = createContext();

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext debe usarse dentro de un TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    } else {
      const loadTasks = async () => {
        const data = await fetchTasks();
        setTasks(data);
      };
      loadTasks();
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = async (task) => {
    try {
      const newTask = await createTask(task);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
    }
  };
  
  const toggleTaskStatus = async (id) => {
    try {
      const taskToUpdate = tasks.find((task) => task._id === id);
      const updatedTask = await updateTask(id, {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      });
      setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error);
    }
  };
  
  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };
  
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskStatus,
        removeTask,
        filter,
        setFilter,
        updateTask,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};