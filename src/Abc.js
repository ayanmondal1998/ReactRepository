import React from "react";
import './Abc.css';

function Applet()
{
    return(
        <div>
            <div class="wrapper">
 <input type="radio" name="select" id="option-1" checked />
 <input type="radio" name="select" id="option-2"/>
   <label for="option-1" class="option option-1">
     <div class="dot"></div>
      <span>Student</span>
      </label>
   <label for="option-2" class="option option-2">
     <div class="dot"></div>
      <span>Teacher</span>
   </label>
</div>
        </div>
    )

}  
export default Applet  
