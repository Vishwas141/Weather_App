import React from "react";
import Home from "../src/Components/Home"

import {Routes,Route} from "react-router-dom";

const App = () => 
{
 
  return (
    <div>
        <Routes>

          <Route path='/' element={<Home/>}></Route>
       
           
        </Routes>
    </div>
  )
  
};

export default App;
