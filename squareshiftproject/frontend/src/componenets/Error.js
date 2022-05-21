import React from 'react';
import './error.css'
import { useState } from 'react';
function Error({ error }) {
    
    let [stateclass,setstateclass]=useState("alert")
    return (
        <div>
            {
                stateclass==="alert" && <div className={stateclass}>
                <span className="closebtn" onClick={()=>setstateclass("none")}>X</span>
                <strong>Alert!</strong> {error}.
                </div>
            }
            
       </div>
    );
}

export default Error;