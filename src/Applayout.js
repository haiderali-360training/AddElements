
import {empData} from './jsondata'
import { useState, createContext } from 'react';
export const EmployeContext = createContext();


const Applayout = ({children})=> {

    const [data, setData] = useState(empData)

    return(
        <EmployeContext.Provider  value = { {data, setData} }>
           {children}
        </EmployeContext.Provider>
    );
}

export default Applayout