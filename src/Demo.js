import React from "react";
var counter = 0;
function Click(){
 

        counter++;
        alert(counter);
  
}

function Demo(){

    return(
        <div>
            <button onClick={ ()=> alert('Clicked') }>Click</button>
            <button onClick={ Click }>Count</button>
        </div>
    )
}

export default Demo;