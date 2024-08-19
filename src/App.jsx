import TaskerPage from "./pages/Tasker";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-red-500">Tasker!</span>
        </h1>
        <hr className="border-gray-300 my-4" />
        <p className="text-lg text-gray-700 mb-6">TLP II - FM.</p>
        <hr className="border-gray-300 my-4" />
        <div className="flex flex-col md:flex-row gap-4">
          <TaskerPage />
        </div>
      </div>
    </div>
  );
}
