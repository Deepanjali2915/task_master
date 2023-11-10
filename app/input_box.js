import React, { useState } from 'react';
import Priority from "./priority.js";

const Input_box = function () {
  const options = [
    { label: '0', value: '0' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];

  const [work, setWork] = useState('');
  const [time, setTime] = useState('');
  const [imp, setImp] = useState('0');
  const [buttonText, setButtonText] = useState('Done');
  const [listData, setListData] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState('0');

  function workTime() {
    setListData([...listData, { work, time, imp, done: false }]);
    setWork('');
    setTime('');
    setImp('0');
  }

  function deleteActivity(index) {
    const updatedListData = listData.filter((_, id) => index !== id);
    setListData(updatedListData);
  }

  function doneActivity(index) {
    const updatedListData = [...listData];
    updatedListData[index].done = !updatedListData[index].done;
    setListData(updatedListData);
    setButtonText(updatedListData[index].done ? 'Undo' : 'Done');
  }

  const filteredListData = selectedPriority === '0' ? listData : listData.filter((task) => task.imp === selectedPriority);

  return (
    <div className="container">
      <div className="header">Task Master</div>
      <input type="text" placeholder="Work" value={work} onChange={(e) => setWork(e.target.value)} />
      <input type="text" placeholder="Take time" value={time} onChange={(e) => setTime(e.target.value)} />
      <Priority options={options} value={imp} onChange={(selectedValue) => setImp(selectedValue)} />
      <div className="header">
        <button onClick={workTime}>Add</button>
      </div>
      <p className="List-heading">Here is your list:</p>
      <div>
        <label>
          Filter by Priority:
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <table className="listData">
        <thead>
          <tr>
            <th>Work</th>
            <th>Time</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredListData.map((task, index) => (
            <tr key={index}>
              <td className={task.done ? 'strikethrough' : ''}>{task.work}</td>
              <td className={task.done ? 'strikethrough' : ''}>{task.time}</td>
              <td className={task.done ? 'strikethrough' : ''}>{task.imp}</td>
              <button className="button" onClick={() => doneActivity(index)}>
                {buttonText}
              </button>
              <button className="button" onClick={() => deleteActivity(index)}>
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Input_box;

