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
        //setlistData([...listData,work,time,imp])
        //console.log(listData)
        setlistData((listData)=>{
            const updatedList =[...listData,work,time,imp]
            console.log(updatedList)
            setWork('')
            setTime('')
            setImp('')
            return updatedList
        })
    }
    return(
        <>
            <div className="container">
                <div className="header">Task Master</div>
                    <input type="text" placeholder="Work" value={work} onChange={(e)=>setWork(e.target.value)} /> 
                    
                    <input type="text" placeholder="Take time" value={time} onChange={(e)=>setTime(e.target.value)} />
                    
                    < Priority options={options} value={imp} onChange={(selectedValue) => setImp(selectedValue)} />
                    
                <div className="header"> 
                    <button onClick={workTime}>Add</button>
                </div>
                    <p className="List-heading">Here is your list : {")"}</p>
                    {listData !=[] && listData.map((data,i)=>{
                        return(  
                            <div key={i}
                                className="listData" >{data.work} - {data.time} - {data.imp}
                            </div>
                           
                          
                        )
                    })}
            </div>
 
        </>
        
    );
};
export default Input_box;
