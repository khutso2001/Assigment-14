import React from "react";

const TaskInput = ({ addTask, onChange, inputValue }) => {
  return (
    <form className="add-task">
      <input
        type="text"
        placeholder="enret task..."
        onChange={onChange}
        value={inputValue}
      />
      <button type="submit" onClick={addTask}>
        Add Task
      </button>
    </form>
  );
};
export default React.memo(TaskInput);
