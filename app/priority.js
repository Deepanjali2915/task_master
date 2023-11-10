import React from 'react';

const Priority = ({ imp, onChange, options }) => {
  return (
    <select name="Priority" value={imp} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Priority;

