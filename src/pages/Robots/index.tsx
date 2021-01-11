import { FC, useCallback } from 'react';
import { RobotList } from './RobotList';
import { useRobots } from './useRobots';
import './style.css'
import { AddRobot } from './AddRobot';

export const RobotsPage : FC = ()=> {

    const {robots, startRobot, stopRobot, isConnected} = useRobots()
    

    const createRobot = useCallback((data: string)=>{
        window.localStorage.setItem("options", data);
        startRobot(data);
    }, [startRobot]);

    return (
        <div className="main-container">
            <h4 className={`status ${isConnected ? "connected" :"disconnected"}`}>{isConnected ? "Connected":"Disconnected"}</h4>
            <div className="robots-controller">
                <RobotList robots={robots} onStop={stopRobot}/>
                <AddRobot onAdd={createRobot}/>
            </div>
        </div>
    )
}