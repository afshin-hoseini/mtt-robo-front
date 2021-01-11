import { FC, useEffect, useState } from "react";
import './style.css'

export const AddRobot : FC<{onAdd : (data: string)=>void}> = ({onAdd})=>{

    const [robotOptions, setRobotOptions] = useState<string>("");

    useEffect(()=>{
        const savedOptions = window.localStorage.getItem("options");
        setRobotOptions(savedOptions || defaultRoboOptions);
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


const defaultRoboOptions = `{
    "exchange":"p2pb2b",
    "seller": {
        "apiKey":"2a66028b2b9fb826d12a9e33de6c2c3c",
        "secret": "9d4283d6158201da783ec4c7d6a39cb9"
    },
    "buyer": {
        "apiKey":"2a66028b2b9fb826d12a9e33de6c2c3c",
        "secret": "9d4283d6158201da783ec4c7d6a39cb9"
    },
    "amount": [0.001,1],
    "pair": "USDT",
    "priceFunction":{

       "name":"mtabdil",
       "pair":"usdt"
    },
    "interval": 20000
}`