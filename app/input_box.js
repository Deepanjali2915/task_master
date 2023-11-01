import Add_button from './add_button.js'
import Priority from './priority.js'

const Input_box=function(){
  const [work, setWork] = useState('');
  const [time, setTime] = useState('');




    return(
        <>
            <div className="container">
                <div className="header">Task Master</div>
                    <input type="text" placeholder="Work" />
                    <input type="text" placeholder="Take time"/>
                    < Priority />
                <div className="header"> 
                    <button >Add</button>
                </div>
                    <p className="List-heading">Here is your list : {")"}</p>
            </div>
 
        </>
        
    );
};
export default Input_box;
