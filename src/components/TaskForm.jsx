import { useState } from "react";
import { useTaskContext } from "../context/TaskProvider";

const TaskForm = ({ closeModal }) => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setTitle("");
    setDescription("");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow">
      <div className="mb-2">
        <label className="block font-bold mb-1">Título <span className="text-red-800">*</span></label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-bold mb-1">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded flex justify-center items-center">
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;