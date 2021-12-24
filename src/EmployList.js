
import react from "react";
import { useState, useContext } from "react";

import { EmployeContext } from "./Applayout";

const EmployList = (props) => {

    const {data, setData} = useContext(EmployeContext)

    return(
          data.map( (d) => (<div key={Math.floor(Math.random() * 10000)} > {d.first} </div>) )
    );
  }

  export default EmployList;