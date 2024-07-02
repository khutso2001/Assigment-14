import DoneTasks from "./DoneTask";
import UnfulfilledTasks from "./UnfulfilledTask";
import TaskInput from "./TaskInput";
import { useCallback, useState } from "react";

const Mian = () => {
  const [inputValue, setInputValue] = useState("");
  const [unfulfilledTasks, setUnfulfilledTasks] = useState([
    { task: "create React project", id: 1 },
    { task: "create Other project", id: 2 },
  ]);
  const [completeTasks, setCompleteTasks] = useState([]);

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const addTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: unfulfilledTasks.length + 1,
      task: inputValue,
    };
    setUnfulfilledTasks((prev) => [...prev, newTask]);
    setInputValue("");
  };

  const completeTask = (id) => {
    const taskToComplete = unfulfilledTasks.find((task) => task.id === id);
    if (taskToComplete) {
      const newCompleteTask = {
        id: completeTasks.length + 1,
        task: taskToComplete.task,
      };
      setCompleteTasks((prev) => [...prev, newCompleteTask]);
      const updatedUnfulfilledTasks = unfulfilledTasks.filter(
        (task) => task.id !== id
      );
      setUnfulfilledTasks(updatedUnfulfilledTasks);
    }
  };
  const deleteTask = useCallback((id) => {
    const updatedCompleteTasks = completeTasks.filter((task) => task.id !== id);
    setCompleteTasks(updatedCompleteTasks);
  });
  const undo = (id) => {
    const taskToUndo = completeTasks.find((task) => task.id === id);
    if (taskToUndo) {
      const newUnfulfilledTask = {
        id: unfulfilledTasks.length + 1,
        task: taskToUndo.task,
      };
      setUnfulfilledTasks((prev) => [...prev, newUnfulfilledTask]);
      const updatedCompleteTasks = completeTasks.filter(
        (task) => task.id !== id
      );
      setCompleteTasks(updatedCompleteTasks);
    }
  };

  return (
    <div className="Main">
      <TaskInput
        addTask={addTask}
        inputValue={inputValue}
        onChange={onChange}
      />
      <div className="tasks">
        <UnfulfilledTasks
          state={{ unfulfilledTasks }}
          completeTasks={completeTask}
        />
        <DoneTasks
          state={{ completeTasks }}
          deleteTask={deleteTask}
          undo={undo}
        />
      </div>
    </div>
  );
};

export default Mian;
