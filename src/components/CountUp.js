import React, { useState } from "react";

function CountUp(){

    const [ count, setCount ] = useState(0)  

    setInterval(() => {
        setCount(count)
    }, 1000)
    
    return (
            <div>
                <center>
                    <h4 className="time-text">{count}</h4>
                </center>
            </div>
    )
}


export default CountUp