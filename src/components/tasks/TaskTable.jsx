import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTasks();
    console.log("🎣 Empezando a pescar tareas...");
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks");
      if (!response.ok) {
        throw new Error("🚫 ¡Algo salió mal al buscar tareas!");
      }
      const data = await response.json();
      setTasks(data);
      console.log("🎉 Tareas pescadas con éxito!");
    } catch (error) {
      console.error("😱 ¡Error al buscar tareas:", error);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/tasks/${editingTask.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingTask),
        }
      );

      if (!response.ok) {
        throw new Error("😭 ¡No se pudo actualizar la tarea!");
      }

      fetchTasks();
      setIsEditing(false);
      console.log("😎 Tarea actualizada con éxito!");
      window.location.reload();
    } catch (error) {
      console.error("😱 ¡Error al actualizar la tarea:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/tasks/${taskId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("😭 ¡No se pudo eliminar la tarea!");
      }

      fetchTasks();
      console.log("😎 Tarea eliminada con éxito!");
      window.location.reload();
    } catch (error) {
      console.error("😱 ¡Error al eliminar la tarea:", error);
    }
  };

  const getStatusColor = (isComplete) => {
    return isComplete ? "bg-green-500 text-white" : "bg-amber-400 text-white";
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-md border border-gray-300 bg-white">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-y border-gray-200 bg-gray-50 px-4 py-2">
                <p className="text-sm font-normal leading-none text-gray-700">
                  Tarea
                </p>
              </th>
              <th className="border-y border-gray-200 bg-gray-50 px-4 py-2">
                <p className="text-sm font-normal leading-none text-gray-700">
                  Descripción
                </p>
              </th>
              <th className="border-y border-gray-200 bg-gray-50 px-4 py-2">
                <p className="text-sm font-normal leading-none text-gray-700">
                  Estado
                </p>
              </th>
              <th className="border-y border-gray-200 bg-gray-50 px-4 py-2">
                <p className="text-sm font-normal leading-none text-gray-700">
                  Acciones
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-normal text-gray-700">
                    {task.title}
                  </p>
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-normal text-gray-700">
                    {task.description}
                  </p>
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <div
                    className={`px-2 py-1 text-xs rounded-md ${getStatusColor(
                      task.isComplete
                    )}`}
                  >
                    <span>{task.isComplete ? "Completada" : "Pendiente"}</span>
                  </div>
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(task)}
                      className="align-middle select-none text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 rounded-md text-xs px-2 py-1"
                      type="button"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="align-middle select-none text-red-500 hover:bg-red-500/10 active:bg-red-500/30 rounded-md text-xs px-2 py-1"
                      type="button"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Editar Tarea</h2>
            <input
              type="text"
              value={editingTask.title}
              onChange={(e) =>
                setEditingTask({ ...editingTask, title: e.target.value })
              }
              placeholder="Título de la Tarea"
              className="mb-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <textarea
              value={editingTask.description}
              onChange={(e) =>
                setEditingTask({ ...editingTask, description: e.target.value })
              }
              placeholder="Descripción de la Tarea"
              className="mb-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={editingTask.isComplete}
                onChange={(e) =>
                  setEditingTask({
                    ...editingTask,
                    isComplete: e.target.checked,
                  })
                }
                className="h-4 w-4 text-blue-500 rounded focus:ring-0"
              />
              <label className="text-sm text-gray-700">Completada</label>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-md text-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Guardar
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-md text-sm text-blue-500 hover:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskTable;
