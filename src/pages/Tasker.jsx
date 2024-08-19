import TaskForm from "../components/tasks/TaskForm";
import TaskTable from "../components/tasks/TaskTable";

const Tasker = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="w-full md:w-1/2">
        <TaskForm />
      </div>
      <div className="w-full md:w-1/2">
        <TaskTable />
      </div>
    </div>
  );
};

export default Tasker;
