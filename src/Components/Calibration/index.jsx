import { useState, useEffect} from "react"
import { shuffle } from "./script"
import CalibrationEnd from "../CalibrationEnd"
import CalibrationStart from "../CalibrationStart"
import PingBox from "../PingBox"

const positions = shuffle(['row-start-1 col-start-1','row-start-1 col-start-3','row-start-1 col-start-5',
                           'row-start-3 col-start-1','row-start-3 col-start-3','row-start-3 col-start-5',
                           'row-start-5 col-start-1','row-start-5 col-start-3','row-start-5 col-start-5'])

const Calibration = ({switchFunc, dep}) => {
    const [pos,SetPos] = useState(-2)

    useEffect(() => {
        const intervalId = setInterval(() => {
            SetPos(pos+1);
        }, 10000); //Delay 10 segundos
        return () => clearInterval(intervalId);
        }, [pos]); 
        
    return(
        <div className="bg-black w-screen h-screen">
            <div className="grid grid-cols-5 grid-rows-5 gap-10 h-full w-full items-center">
                { pos<0 && <CalibrationStart/>}
                { pos<positions.length && pos>=0 && <PingBox css={positions[pos]}/> }
                { pos>=positions.length && <CalibrationEnd end={switchFunc} dep={dep}/> }
            </div>
        </div>
    )

}
export default Calibration