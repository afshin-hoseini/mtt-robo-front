import { FC, useEffect, useState } from "react";
import './style.css'

export const AddRobot : FC<{onAdd : (data: string)=>void}> = ({onAdd})=>{

    const [robotOptions, setRobotOptions] = useState<string>("");

    useEffect(()=>{
        const savedOptions = window.localStorage.getItem("options");
        setRobotOptions(savedOptions || "")
    }, []);

    return (
        <div className="add-robot__container">
            <h2>Enter Robot Options</h2>
            <textarea 
                className="add-robot__options"
                onChange={(e)=>setRobotOptions(e.currentTarget.value)} 
                value={robotOptions}/>
            <button className="add-robot__btn" onClick={()=>onAdd(robotOptions)}>Create new robot</button>
        </div>
    )
}