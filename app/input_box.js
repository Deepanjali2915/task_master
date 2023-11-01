import Add_button from './add_button.js'
const Input_box=function(){
    return(
        <>
            <div className='contant_box'>
                 <input type="text" className="userInput" placeholder="task:-"/>
                 <input type="text" className="userInput" placeholder="time:-"/>
                 <input type="text" className="userInput" placeholder="priority:-"/>        
            </div>
 
        </>
    );
};
export default Input_box;
