import { useState } from "react";
import { useTaskContext } from "../context/TaskProvider";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { IoTrash } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

const TaskItem = ({ task }) => {
  const { toggleTaskStatus, removeTask, updateTask, setTasks } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const showResponsiveToast = () => {
    const isMobile = window.innerWidth < 640;
  
    toast.success("Tarea actualizada", {
      autoClose: 1000,
      theme: "dark",
      position: isMobile ? "top-center" : "bottom-right",
      style: {
        fontSize: isMobile ? "14px" : "16px", 
      },
    });
  };

  const handleEdit = async () => {
    try {
      const updatedTask = await updateTask(task._id, { ...task, title: newTitle });
  
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t._id === task._id ? updatedTask : t))
      );
      showResponsiveToast();
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
    
  };
  const handleEliminarTask = () => {
    Swal.fire({
      title: "¿Seguro que quieres eliminar esta tarea?",
      icon: "warning",
      iconColor: "#ff646e",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      iconHtml: '<span style="color: #ff646e;">!</span>',
    }).then((result) => {
      if (result.isConfirmed) {
        removeTask(task._id);
        Swal.fire(
          "¡Tarea Eliminada!",
        );
      }
    });
  };
  const handleCheckboxChange = () => {
    toggleTaskStatus(task._id);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col justify-between">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleEdit}
              className="px-2 py-1 bg-green-500 text-white rounded"
            >
              Guardar
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-2 py-1 bg-gray-500 text-white rounded"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <>
            <h3 className={`text-lg font-semibold ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                {task.title}
            </h3>
            <p className="text-sm text-gray-500">
              {task.completed ? "Completada" : "Pendiente"}
            </p>
            <p className="text-sm text-gray-400">
              Creada el: {new Date(task.createdAt).toLocaleDateString()}
            </p>
          <div className="flex items-center justify-between mt-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleCheckboxChange}
              className="w-5 h-5"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="text-yellow-500 hover:text-yellow-600"
              >
                <FiEdit />
              </button>
              <button
                onClick={handleEliminarTask}
                className="text-red-500 hover:text-red-600 "
              >
                <IoTrash />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;