import { useEffect } from "react";
import useApi from "../hooks/useApi";

const TaskTable = () => {
  const {
    loading,
    data: tasks,
    error,
    fetchData,
  } = useApi("http://localhost:3000/api/tasks", "get");

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Tasks:", tasks);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg m-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 border-b">ID</th>
            <th className="py-3 px-6 border-b">Title</th>
            <th className="py-3 px-6 border-b">Description</th>
            <th className="py-3 px-6 border-b">Completed</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-medium">
          {Array.isArray(tasks) &&
            tasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 border-b">{task.id}</td>
                <td className="py-3 px-6 border-b">{task.title}</td>
                <td className="py-3 px-6 border-b">{task.description}</td>
                <td className="py-3 px-6 border-b">
                  {task.isComplete ? "Yes" : "No"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
