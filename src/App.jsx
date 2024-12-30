import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-500 to-slate-700 p-4">
      {/* Header */}
      <div className="relative bg-white shadow-lg rounded-lg p-6 mb-8">
        <button
          onClick={openModal}
          className="absolute top-6 right-4 bg-orange-700 text-white font-bold px-4 py-2 rounded shadow hover:bg-orange-900 sm:px-6 sm:py-2 sm:text-base"
        >
          <span className="hidden sm:inline">+ Nueva Tarea</span>
          <span className="sm:hidden text-lg">+</span>
        </button>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-700">
            Gestión de Tareas
          </h1>
        </div>
      </div>
      <TaskFilter />

      <TaskList />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96 max-w-sm relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
              Nueva Tarea
            </h2>
            <TaskForm closeModal={closeModal} />
          </div>
        </div>
      )}


      <ToastContainer />
    </div>
  );
};

export default App;