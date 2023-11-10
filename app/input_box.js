"use client"
import React, { useState } from 'react';
import Add_button from './add_button.js';
import Priority from './priority.js';

const Input_box = function () {
  const options = [
    { label: '0', value: '0' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];

  const [work, setWork] = useState('');
  const [time, setTime] = useState('');
  const [imp, setImp] = useState('');
  const [buttonText, setButtonText] = useState('Done');
  const [listData, setlistData] = useState([]);

  function workTime() {
    setlistData([...listData, { "work": work, "time": time, "imp": imp }])
    setWork("");
    setTime("");
    setImp("");
  }

  function deleteActivity(index) {
    const updatedlistData = listData.filter((_, id) => index !== id);
    setlistData(updatedlistData);
  }

  function doneActivity(index) {
    const updatedListData = [...listData];
    updatedListData[index].done = !updatedListData[index].done;
    setlistData(updatedListData);

    // Toggle button text based on the 'done' property
    setButtonText(updatedListData[index].done ? 'Undo' : 'Done');
  }

  return (
    <div className="container">
      <div className="header">Task Master</div>
      <input type="text" placeholder="Work" value={work} onChange={(e) => setWork(e.target.value)} />
      <input type="text" placeholder="Take time" value={time} onChange={(e) => setTime(e.target.value)} />
      <Priority options={options} value={imp} onChange={(selectedValue) => setImp(selectedValue)} />
      <div className="header">
        <button onClick={workTime}>Add</button>
      </div>
      <p className="List-heading">Here is your list : {")"}</p>
      <table className="listData">
        <thead>
          <tr>
            <th>Work</th>
            <th>Time</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {listData.map((task, index) => (
            <tr key={index}>
              <td className={task.done ? 'strikethrough' : ''}>{task.work}</td>
              <td className={task.done ? 'strikethrough' : ''}>{task.time}</td>
              <td className={task.done ? 'strikethrough' : ''}>{task.imp}</td>
              <button className="button" onClick={() => doneActivity(index)}>{buttonText}</button>
              <button className="button" onClick={() => deleteActivity(index)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Input_box;

