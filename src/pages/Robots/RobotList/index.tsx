import { FC, useMemo } from "react";
import './style.css'

export const RobotList: FC<{robots?:any[], onStop?:(id:number)=>void}> = ({robots, onStop})=>{

    
    return useMemo(()=>{
        
        return (
        <div className="robot-list__container">
            <h2>ROBOT LIST</h2>
            {(robots?.length ?? 0) > 0 ?
            
                <ul className="robot-list">
                    {robots?.map((r : any)=>(
                        <li className="robot-list__item">
                            <p><b>ID:</b> {' '} {r.id} - <b>Status:</b> {r.status} </p>
                            <p><b>Exchange:</b> {' '} {r.data.exchange}</p>
                            <p><b>Pair:</b> {' '} {r.data.pair.toUpperCase()}</p>
                            <button onClick={()=>{
                                onStop?.(r.id)
                                console.log(onStop)
                                }}>Stop and remove</button>
                        </li>)
                    )}
                </ul>
            :
                <h3>No robot is runnig</h3>
            }
        </div>
)}, [robots, onStop])
}