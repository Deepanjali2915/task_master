import React, { useState } from 'react';

const TodoList = () => {
  const [work, setWork] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showOnlyPriority, setShowOnlyPriority] = useState('');

  const addTask = () => {
    if (work && time && priority) {
      setTasks([...tasks, { work, time, priority, done: false }]);
      setWork('');
      setTime('');
      setPriority('');
    }
  };

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = showOnlyPriority
    ? tasks.filter((task) => task.priority === showOnlyPriority)
    : tasks;

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Work"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        <label>
          Filter by Priority:
          <select
            value={showOnlyPriority}
            onChange={(e) => setShowOnlyPriority(e.target.value)}
          >
            <option value="">All</option>
            <option value="1">Priority 1</option>
            <option value="2">Priority 2</option>
            <option value="3">Priority 3</option>
          </select>
        </label>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className={task.done ? 'strikethrough' : ''}
          >
            {task.work} - {task.time} - Priority {task.priority}
            <button onClick={() => toggleDone(index)}>
              {task.done ? 'Undone' : 'Done'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

