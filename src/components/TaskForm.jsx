import { useState } from "react";
import useApi from "../hooks/useApi";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { loading, error, fetchData } = useApi(
    "http://127.0.0.1:3000/api/tasks",
    "post"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData({ title, description });
      setTitle("");
      setDescription("");
      window.location.reload();
    } catch (err) {
      console.error("Error en form:", err);
    }
  };

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Body:", { title, description });

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-7 bg-gray-100 shadow-lg rounded-lg m-6"
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
          className="shadow-sm appearance-none border border-gray-400 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          required
        />
      </div>
      <div className="mb-6">
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
          className="shadow-sm appearance-none border border-gray-400 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          disabled={loading}
        >
          {loading ? "Creando..." : "Crear Tarea"}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-4">{error.message}</p>}
    </form>
  );
};

export default TaskForm;
