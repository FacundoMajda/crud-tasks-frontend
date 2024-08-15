import TaskerPage from "./pages/Tasker";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Hello React - Tailwind!
        </h1>
        <hr />
        <p className="text-lg text-gray-700 mb-6">CRUD - TASKER.</p>
        <hr />
        <TaskerPage></TaskerPage>
      </div>
    </div>
  );
}
