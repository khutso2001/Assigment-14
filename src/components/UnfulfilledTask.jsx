import React from "react";

const UnfulfilledTasks = ({ state, completeTasks }) => {
  return (
    <div className="unfulfilled">
      <h3>unfulfilled Task</h3>
      <div>
        {state.unfulfilledTasks.map((task) => (
          <div className="unfulfilled-task" key={task.id}>
            <p>
              ID: {task.id} TASK: {task.task}
            </p>

            <button onClick={() => completeTasks(task.id)}>Finish</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(UnfulfilledTasks);
