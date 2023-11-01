import React from "react";

const Delete =({onDelete}) =>{
    return(
        <div className="delete">
            <img src="Vector.svg" onClick={onDelete} />
        </div> 
    );
 };
  export default Delete;
