"use client"
import React, { useState } from 'react';
import Add_button from './add_button.js'
import Priority from './priority.js'

const Input_box=function(){
     const options = [
   { label: '1', value: '1' },
   { label: '2', value: '2' },
   { label: '3', value: '3' },
 ];



    const [work, setWork] = useState('');
    const [time, setTime]= useState('');
    const [imp,setImp] =useState('');	
    const [listData,setlistData] =useState([]);
    function workTime(){ 
      
        setlistData([...listData,{"work":work,"time":time,"imp":imp}])
            setWork("");
            setTime("");
            setImp("");
    }
    
    console.log(listData,"data")
    
    function deleteActivity(index){
        const updatedlistData=listData.filter((elem,id) => {
            return index!=id;
        })
        setlistData(updatedlistData);
    }
    function doneActivity(index){
        const donelistData=listData.filter((elem,id) => {
            return index!=id;
        })
        setlistData(donelistData);
    
    
    
    
    return(
      
        <div className="container">
            <div className="header">Task Master</div>
                <input type="text" placeholder="Work" value={work} onChange={(e)=>setWork(e.target.value)} /> 
                
                <input type="text" placeholder="Take time" value={time} onChange={(e)=>setTime(e.target.value)} />
                
                < Priority options={options} value={imp} onChange={(selectedValue) => setImp(selectedValue)} />
                
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
                </tr>
              </thead>
              <tbody>
                {listData.map((task, index) => (
                  <tr key={index}>
                    <td>{task.work}</td>
                    <td>{task.time}</td>
                    <td>{task.imp}</td>
                    <button className="button" onClick={()=>doneActivity(index)} >Done</button>
                    <button className="button" onClick={()=>deleteActivity(index)} >Delete</button>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
                
    );
};
export default Input_box;
