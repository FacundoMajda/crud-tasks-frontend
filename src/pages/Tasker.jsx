import TaskForm from "../components/tasks/TaskForm";
import TaskTable from "../components/tasks/TaskTable";
const Tasker = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <TaskTable />
      </div>
      <div>
        <TaskForm />
      </div>
    </div>
  );
};

export default Tasker;
