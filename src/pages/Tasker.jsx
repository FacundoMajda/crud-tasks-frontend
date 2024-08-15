import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";
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
