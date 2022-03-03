import React from 'react';
import './Front.css';


function FrontPageComponent(){
        return( 
        <div id='p4'>
            <div id='p0'><h1 id='h0'>WELL PREPARED RETREAT,FUTURE ASSURES!</h1></div>
            <div id='p1'>
              <h2 id='h1'>You are not yet a member of the ICMR.</h2>
              
              <form id='f1'>
                <input type="checkbox" id="yes1" name="yes[1][]" value="1"></input>
                <label for="yes1"><strong>Yes</strong></label><br></br>
                <input type="checkbox" id="No1" name="No[1][]" value="1"></input>
                <label for="No1"><strong>No</strong></label><br></br>

                </form>
             
               <h2 id='h2'>Are you a natural or legal person?</h2> 
                <form id='f2'>
                <input type="checkbox" id="LegalPerson" name="LegalPerson" value="legalPerson"></input>
                <label id='l1' for="LegalPerson"><strong>Legal Person</strong></label><br></br>
                <input type="checkbox" id="naturalPerson" name="naturalPerson" value="naturalPerson"></input>
                <label for="naturalPerson"><strong>Natural Person</strong></label><br></br> 
                </form>
            </div>
            <div id='p3'>
                   <button class='btn success'>Simulate</button>
                   <button class='btn info'>Join</button>
                </div>
                <div id='p5'>
                    @copyright

                </div>
            
        </div>
        )
        }
  
export default FrontPageComponent