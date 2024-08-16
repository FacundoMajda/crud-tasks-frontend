import TaskerPage from "./pages/Tasker";
import { useState } from "react";

export default function App() {
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center ">
        <h1
          className={`text-4xl font-extrabold text-gray-900 mb-4 transform transition-transform duration-500 ${
            isTitleHovered ? "scale-105" : "scale-100"
          }`}
          onMouseEnter={() => setIsTitleHovered(true)}
          onMouseLeave={() => setIsTitleHovered(false)}
        >
          Welcome to <span className="text-red-500">Tasker!</span>
        </h1>
        <hr className="border-gray-300 my-4" />
        <p className="text-lg text-gray-700 mb-6">TLP II - FM.</p>
        <hr className="border-gray-300 my-4" />
        <TaskerPage />
      </div>
    </div>
  );
}
