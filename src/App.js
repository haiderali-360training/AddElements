import React from 'react';
import EmployList from './EmployList';
import AddMore from './Addmore';
import Applayout from './Applayout';


const App = () => {  
  return (
    <Applayout> 
       <AddMore />
       <EmployList />
    </Applayout>
  );
}




export default App;
