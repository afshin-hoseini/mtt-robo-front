import { useCallback, useEffect, useRef, useState } from "react"
import { io, Socket } from 'socket.io-client';

export const useRobots = () => {

    const [isConnected, setIsConnected] = useState(false);
    const [robots, setRobots] = useState([]);
    const socketRef = useRef<Socket>();

    const startRobot = useCallback((options: string)=>{
        socketRef.current?.emit("startRobot", options);
    }, []);

    const stopRobot = useCallback((id: number)=>{
       
        socketRef.current?.emit("stopRobot", id);
    }, []);
    useEffect(() => {
        const socket = io(process.env.REACT_APP_SERVER!, {transports:['websocket']});
        socketRef.current = socket;

        socket.on("connect", ()=>setIsConnected(true));
        socket.on("disconnect", ()=>setIsConnected(false));
        socket.on("robots", (robotList: any) => {
            setRobots(robotList);
            console.log("Robots =>", robotList)
        })
        return () => { socketRef.current?.disconnect() };
    }, []);

    return {
        robots,
        startRobot, stopRobot,isConnected
    }

}