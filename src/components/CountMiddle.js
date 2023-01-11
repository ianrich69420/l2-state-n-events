import React, { useState } from "react";

function CountMiddle(){

    const [ count, setCount ] = useState(0)

    function clicked(){
        setCount(count+1)
    }

    return(
            <div>
                <center>
                    <h4 className="btn-text">{count}</h4>
                    <button className="timeButton" onClick={clicked}>CLICK ME</button>
                </center>
            </div>
    )
}


export default CountMiddle