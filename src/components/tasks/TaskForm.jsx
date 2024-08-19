import { useState } from "react";
import { createTask } from "../../services/api";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask({ title, description });
      setTitle("");
      setDescription("");
      window.location.reload();
    } catch (err) {
      console.error("Error en form:", err);
    }
  };

  console.log("Body:", { title, description });

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-7 bg-white shadow-lg rounded-md border border-gray-300 m-6"
    >
      <div className="mb-6 p-6">
        <label
          className="block text-gray-800 text-sm font-medium mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Introduce el titulo de la Tarea"
          className="shadow-sm appearance-none border border-gray-400 rounded-md w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          required
        />
      </div>
      <div className="mb-6 p-6">
        <label
          className="block text-gray-800 text-sm font-medium mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Introduce descripción de la Tarea."
          className="shadow-sm appearance-none border border-gray-400 rounded-md w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Crear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
