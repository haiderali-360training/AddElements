import { useState, useContext } from "react";
import { EmployeContext } from "./Applayout";



const AddMore = () => {

    const {data, setData} = useContext(EmployeContext)
    const [TextValue, setTextValue] = useState("");
    const newRecord = {id: "1", first: TextValue, last: TextValue, company: "Microsoft"};
        
    return(
      <div> 
        <input onChange={ ( event ) => setTextValue(event.target.value)} ></input>
        <button onClick={ () => { 
            setData( prevState => { return  [...prevState, newRecord]  } ); } 
          } >Add</button>
      </div>
    );



      
  }
  
 
  

  export default AddMore;

  